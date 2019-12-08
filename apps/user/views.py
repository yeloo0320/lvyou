import re

from django.contrib.auth import authenticate, logout, login
from django.http import HttpResponse, response
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse
from django.views.generic.base import View


from user.models import User, Personal

from  itsdangerous import TimedJSONWebSignatureSerializer as Serializer

from celery_tasks.tasks import send_register_active_email
from lvyou.settings import SECRET_KEY

#进行异常捕获
from  itsdangerous import SignatureExpired

from django_redis import get_redis_connection

# from apps.goods.models import GoodsSPU



class RegisterView(View):
    def get(self,request):
        return render(request, 'register.html')
    def post(self,request):
        #获取账号密码
        username=request.POST.get('user')
        email=request.POST.get('email')
        password=request.POST.get('password')

        #检查是否有空文本
        if not all([username,email,password]):
            return render(request,'register.html',{'errmsg':'数据不完整'})

        # 校验邮箱
        if not re.match(r'^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$', email):
            return render(request, 'register.html', {'errmsg': '邮箱不合法'})

        #校验账号
        if not re.match(r'^[0-9a-zA-Z_]{6,12}$', username):

            return render(request, 'register.html', {'errmsg': '请输入数字或字母的账号'})
        elif  (len(username) < 8) or (len(username) > 12):
                return render(request, 'register.html', {'errmsg': '请输入8-12位的账号id'})

        #判断数据库是否存在此账号
        try:
            user=User.objects.get(username)
        except Exception as e:
            user=None
        #如果不为None返回已注册
        if user:
            return render(request, 'register.html', {'errmsg': '用户已经注册'})
        # 创建一个账号
        user=User.objects.create_user(username,email,password)
        # 并且用户激活状态为0
        user.is_active=0
        # 保存数据
        user.save()

        # 发送激活邮件，包含激活链接：http://127.0.0.1:8....
        # 激活信息中需要包含用户的身份信息，并且要把身份信息加密
        # 加密用户身份信息，生成激活token

        # 设置加密的key,还有密匙的过期时间，使用Serializer方式加密
        serializer = Serializer(SECRET_KEY, 3600)
        # 创建一个字典,登入时候通过字典key获取用户id
        info={'confirm':user.id}
        # 使用刚才设置的serializer对字典进行加密
        token = serializer.dumps(info)
        # 更改token的编码方式
        token = token.decode()

        #调用celery方式异步发送邮件验证

        send_register_active_email(email,username,token)


        return redirect(reverse('user:login'))


class LoginView(View):
    def get(self,request):
        return render(request, 'login.html')
    def post(self,request):
        username=request.POST.get('user')

        password=request.POST.get('password')
        # 检查是否有空文本
        if not all([username,  password]):
            return render(request, 'login.html', {'errmsg': '数据不完整'})
        #使用django自带的校验工具检查数据库中是否有此用户，如果没有则返回None

        user = authenticate(username=username, password=password)

        if user is not None:
            #检查is_active的激活状态是否为True
            if user.is_active:
                # 记住登入状态
                login(request, user)
                #获取登入后需要跳转的页面

                next_url = request.GET.get('next', reverse('user:userdata'))
                # 跳转到nex_url
                response = redirect(next_url)
                return response
            else:
                return render(request,'login.html',{'errmsg':'账号未激活'})
        else:
            #用户名密码错误
            return render(request,'login.html',{'errmsg':'用户名或密码错误'})

class LogoutView(View):
    """退出登录"""
    def get(self, request):
        """退出登录"""
        # 清除用户的session信息

        logout(request)

        # 跳回首页
        return redirect(reverse('index'))

# 用户激活模块
class ActiveView(View):
    """用户激活设置"""
    def get(self,request,token):
        """进行解密，获取要激活用户信息"""
        # 拿到之前的解密匙，过期时间
        serializer = Serializer(SECRET_KEY, 3600)
        try:
            # 把拿到的数据进行解密
            info=serializer.loads(token)
            #去除字典里面的key,拿到用户id
            user_id=info['confirm']
            #查找是否有这个用户id
            user=User.objects.get(id=user_id)
            #查询到用户id，如果有此用户，那么把激活状态变成1
            user.is_active=1
            #保存用户的激活状态
            user.save()
        #跳转到登入页面
            return redirect(reverse('user:login'))
        except SignatureExpired as e:
            #如果没有此用户，或者激活时间已过，则显示激活链接过期，禁止用户注册
            #激活链接已经过期
            return HttpResponse('激活链接已经过期')

#用户信息设置
class Userdata(View):
    def get(self,request):
        user = request.user




        try:
            pers = Personal.objects.get(user_id=user.id)
            nickname = pers.nickname

            autograph = pers.autograph
            phone = pers.phone
            portrait = pers.portrait

            request.session['nickname'] = nickname
            request.session['portrait'] = portrait.url





        except Personal.DoesNotExist:



            nickname = '未填写昵称'
            autograph = '未填写简介'
            phone ='未填写手机'
            portrait = '未上传头像'
        context={
            'nickname':nickname,
            'autograph':autograph,
            'phone':phone,
            "portrait":portrait

        }


        return render(request, 'person/information.html',context)

    def post(self,request):
        '''检查用户是否登入'''
        #查看是否有这个用户
        user = request.user
        #如果用户没有登入，让他跳转到登入页
        if not user.is_authenticated:
            return redirect(reverse('user:login'))
        #获取用户的昵称，签名，手机，头像
        nickname =request.POST.get('nickname')
        autograph=request.POST.get('autograph')
        phone=request.POST.get('phone')


        #检查数据的完整性,是否数据没有填写
        if not all([nickname,autograph,phone]):
            return render(request, 'person/information.html', {'errmsg': '数据不完整'})

        #检查手机号是否是有效手机号
        if not re.match(r'^1[3456789]\d{9}$', phone):
            return render(request, 'person/information.html', {'errmsg': '请输入正确的手机号'})
        #检查昵称是否过长或者存在特殊符号
        if len(nickname) > 20:
            return render(request, 'person/information.html', {'errmsg': '您的昵称太长'})

        # 检查简介是否过长或者存在特殊符号
        if len(autograph) >128:
            return render(request, 'person/information.html', {'errmsg': '您的简介太长'})


        Personal.objects.create(user_id=user.id, nickname=nickname, autograph=autograph, phone=phone,
                               )
        #组织上下文

        return render(request, 'person/information.html')




        #用户信息展示
class Userdatas(View):
    def get(self,request):
        user = request.user

        try:
            pers = Personal.objects.get(user_id=user.id)
            nickname = pers.nickname
            autograph = pers.autograph
            phone = pers.phone
            portrait = pers.portrait.url



        except Personal.DoesNotExist:



            nickname = '未填写昵称'
            autograph = '未填写简介'
            phone ='未填写手机'
            portrait = 1
        context={
            'nickname':nickname,
            'autograph':autograph,
            'phone':phone,
            "portrait":portrait

        }

        return render(request, 'person/user.html',context)



