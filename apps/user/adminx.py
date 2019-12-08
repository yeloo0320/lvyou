import xadmin


from .models import Address,Personal

from xadmin import views



class NewsAdmin:
    """
    新闻管理后台
    """
    # 需要显示的字段
    list_display=['user','nickname','phone','portrait']
    # 用时间格式做过滤条件的字段
    list_filter=['create_time']
    # 可以用来做搜索条件的字段
    search_fields=['user','nickname','phone','portrait']
    fields=['user','nickname','autograph','phone','portrait','is_default']
    # 设置可以直接在列表中更改的字段
    list_editable = ['nickname','phone']





class GlobalSetting(object):
    site_title='管理系统'#创建后台公司标题
    site_footer='Hello-Yeloo'#创建页脚
    menu_style='accordion'#菜单栏样式折叠

class BaseSetting:
    enable_themes=True  #开启主题功能
    use_bootswatch=True #开启主题图表
#html模板时候可以直接继承该函数功能
#文章注册到xadmin模块里面

#设置后台文字介绍等待参数
xadmin.site.register(views.CommAdminView,GlobalSetting)

#设置主题图标，样式参数
xadmin.site.register(views.BaseAdminView,BaseSetting)


xadmin.site.register(Address)
xadmin.site.register(Personal,NewsAdmin)

