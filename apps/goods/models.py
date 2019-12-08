from django.db import models


from db.base_model import BaseModel
from DjangoUeditor.models import UEditorField


class GoodsCountry(BaseModel):
    '''个人中心信息'''

    Country = models.CharField(max_length=20, verbose_name='区域')


    class Meta:
        db_table = 'df_Country'
        verbose_name = '区域'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.Country

class GoodsProvinces(BaseModel):
    '''个人中心信息'''

    city = models.CharField(max_length=20, verbose_name='城市')
    type = models.ForeignKey('GoodsCountry', on_delete=models.CASCADE, verbose_name='区域')


    class Meta:
        db_table = 'df_Provinces'
        verbose_name = '省份'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.city


class GoodsSKU(BaseModel):
    """商品SKU模型类"""
    status_choices = (
        (0, '下线'),
        (1, '上线'),
    )
    #获取关联对象的数据可以使用  类名+关联的表名+表中的字段名

    type = models.ForeignKey('GoodsProvinces', on_delete=models.CASCADE, verbose_name='城市名')
    name = models.CharField(max_length=20, verbose_name='景区名称')
    desc = models.CharField(max_length=256, verbose_name='景区介绍')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='最低价格')
    hightprice = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='最高价格')
    num = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='浏览人数')
    #上传位置指定
    image = models.ImageField(upload_to='goods', verbose_name='商品缩略图')
    stock = models.IntegerField(default=1, verbose_name='商品库存')
    sales = models.IntegerField(default=0, verbose_name='景点销量')
    ranking = models.SmallIntegerField(default=0, verbose_name='展示顺序')
    css_stays=models.CharField(max_length=20, verbose_name='图片样式')
    status = models.SmallIntegerField(default=1, choices=status_choices, verbose_name='景点状态')




    class Meta:
        db_table = 'df_goods_sku'
        verbose_name = '景点名称'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

class GoodsSPU(BaseModel):
    """商品SPU模型类"""

    name =  models.ForeignKey('GoodsSKU', on_delete=models.CASCADE, verbose_name='景点名称')
    title = models.CharField(max_length=20, verbose_name='景点标题')
    author = models.CharField(max_length=20, verbose_name='作者')
    content = UEditorField(verbose_name='内容',
                           width=600,
                           height=300,
                           imagePath="news/ueditor/",
                           filePath="news/ueditor/", default='')


    class Meta:
        db_table = 'df_goods_spu'
        verbose_name = '景点内容'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title

class goodsphoto(BaseModel):
    """商品SPU模型类"""

    name =  models.ForeignKey('GoodsSKU', on_delete=models.CASCADE, verbose_name='景点名称')
    content = models.ImageField(upload_to='goods', verbose_name='景点组图')



    class Meta:
        db_table = 'df_goods_spu_photo'
        verbose_name = '景点图片'
        verbose_name_plural = verbose_name


