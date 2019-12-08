from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View

from .models import GoodsSKU,GoodsProvinces,goodsphoto,GoodsCountry



class indexView(View):
    def get(self,request):
        # 获取用户信息
        user = request.user
        # 获取商品种类信息
        countrys = GoodsCountry.objects.all()



        # 获取热门产品并做推荐
        # promotion_banners = IndexPromotionBanner.objects.all().order_by('index')

        # 获取城市所有的景点
        for country in countrys:
            #遍历所有的国家

            #查询国家里面的所有城市
            image_goods_banners = GoodsProvinces.objects.filter(type=country)


            #遍历所有的城市id
            for image in image_goods_banners:


                #查找所有城市的景点
                # goodsskuss=GoodsSKU.objects.filter(type=image)
                # if not Goodsskus.exists():
                #     continue
                # for sku in Goodsskus:
                #     print(sku)
                #     goods=goodsphoto.objects.filter(name=sku)
                image.goodsskuss=GoodsSKU.objects.filter(type=image)[:5]

            country.image_goods_banners=image_goods_banners





            # python可以动态增加属性，如果一个类里面没有这个属性，我们可以使用
            # class.a=10 来动态增加一个class.a
            # 动态给type增加属性，分别保存首页分类商品的图片展示信息和文字展示信息
        #     type.image_goods_banners = image_goods_banners
        #
        #     type.font_goods_banners = font_goods_banners
        #
        # 组织上下文
        context = {
            'countrys': countrys,

        }


        return render(request, 'index.html',context)

class Listview(View):

    def get(self, request,type_id,page):
        """显示列表页"""
        # 获取种类信息

        try:
            Country = GoodsCountry.objects.get(id=type_id)


        except GoodsCountry.DoesNotExist:
            # 如果商品不存在，返回主页。
            return redirect('goods:index')
        city=request.GET.get('city')
        try:
            city=int(city)
        except ValueError:
            pass

        #查询用户的查询方式
        num=[]
        if city=='index':
            skus=GoodsProvinces.objects.filter(type=Country)

            for sku in skus:
                skuns=GoodsSKU.objects.filter(type=sku)
                if not skuns.exists():
                    continue

                num+=skuns
            skus=GoodsCountry.objects.get(id=type_id)
            for sku in num:
                print('66666',sku.name)
        elif type(city) == int:
            try:

                skus = GoodsProvinces.objects.get(id=city)
                num = GoodsSKU.objects.filter(type=skus)

                # for sku in skuns:
                #     # print(sku)
                #     #
                #     # if not sku.exists():
                #     #     continue
                #
                #     num += sku
                # print(num)



            except GoodsProvinces.DoesNotExist:

                # 如果商品不存在，返回主页。
                return redirect('goods:index' )
        else:
            return redirect('goods:index' )
        # new_skus = GoodsSKU.objects.filter(type=type).order_by('-create_time')[:3]
        context = {
                   'types': num,
                   'skus': skus,
                    'country':Country
                   # 'new_skus': new_skus,
                   # 'cart_count': cart_count,
                   # 'sort': sort,
                   # 'pages': pages

                   }
        return render(request, 'list.html', context)




class Detailview(View):
    def get(self,request,goods_id):
        #查询商品是否存在于SKU数据库中
        try:
            sku = GoodsSKU.objects.get(id=goods_id)

        except GoodsSKU.DoesNotExist:
            #没有就跳转回首页
            return redirect(reverse('index'))
        goods_photo=goodsphoto.objects.filter(name_id=goods_id).all()


        context={'sku':sku,'ings':goods_photo}

        return render(request, 'detail.html',context)







