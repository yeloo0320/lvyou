import xadmin

from .models import GoodsSPU,GoodsSKU,GoodsProvinces,goodsphoto,GoodsCountry






class NewsAdmin:

    """
    新闻管理后台
    """
    # 需要显示的字段
    list_display=['city']
    # 用时间格式做过滤条件的字段
    list_filter=['create_time']
    # 可以用来做搜索条件的字段
    search_fields=['city']
    fields=['city']
    # 设置可以直接在列表中更改的字段
    list_editable = ['city']




class SKuAdmin:

    """
    新闻管理后台
    """
    # 需要显示的字段
    list_display=['type','name','price','sales','status']
    # 用时间格式做过滤条件的字段
    list_filter=['create_time']
    # 可以用来做搜索条件的字段
    search_fields=['type','name','price','sales','status']

    # 设置可以直接在列表中更改的字段
    list_editable = ['name','price','sales','status']

class goodsphotoAdmin:

    """
    新闻管理后台
    """
    # 需要显示的字段
    list_display=['name']
    # 用时间格式做过滤条件的字段
    list_filter=['create_time']
    # 可以用来做搜索条件的字段
    search_fields=['name']





#在内容框中加载富文本设置
class GoodsAdmin(object):
    style_fields = {'content':'ueditor'}


xadmin.site.register(GoodsCountry)
xadmin.site.register(GoodsProvinces)
xadmin.site.register(GoodsSKU,SKuAdmin)
xadmin.site.register(goodsphoto,goodsphotoAdmin)
xadmin.site.register(GoodsSPU,GoodsAdmin)






# xadmin.site.register(NewsAdmin)