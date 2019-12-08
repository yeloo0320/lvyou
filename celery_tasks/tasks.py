#使用celery
import time

from celery import Celery
#使用django中的邮箱发送工具
from django.core.mail import send_mail
#导入django中的邮箱设置
from django.conf import settings

"""
在任务处理者一端加入初始化
在服务器去加
import os
import django
os.environ["DJANGO_SETTINGS_MODULE"] = "lvyou.settings"
django.setup()
"""
#start  在虚拟机中需要加入以上信息

import os
import django
os.environ["DJANGO_SETTINGS_MODULE"] = "lvyou.settings"
django.setup()

#end

#创建一个celery类的实例对象
#使用redis中的4，号数据库，和5号数据库。
app=Celery('celery_tasks.tasks',broker='redis://192.168.132.128:6379/4',backend='redis://192.168.132.128:6379/5')


#定义发邮件函数
@app.task
def send_register_active_email(to_email,username,token):
    subject = '爱旅行欢迎您'
    message = ''
    sender = settings.EMAIL_FROM
    receiver = [to_email]
    html_message = '<h1>%s，欢迎您注册爱旅行<h1>，请点击下面链接激活您的账户<br/><a href="http://127.0.0.1:8000/user/active/%s">http://127.0.0.1:8000/user/active/%s</a>' % (
    username, token, token)
    send_mail(subject, message, sender, receiver, html_message=html_message)
    time.sleep(5)
