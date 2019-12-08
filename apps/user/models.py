
from django.contrib.auth.models import AbstractUser

from db.base_model import BaseModel
from django.db import models




# Create your models here.

class AddressManager(models.Manager):
    """地址模型管理类"""
    def get_default_address(self, user):
        """获取用户的默认地址"""

        # 获取用户默认收货地址
        try:
            address = self.get(user=user, is_default=True)
        except self.model.DoesNotExist as e:
            address = None
        return address

class User(AbstractUser, BaseModel):
    '''用户模型类'''



    class Meta:
        db_table = 'df_user'
        verbose_name = '账号'
        verbose_name_plural = verbose_name

class Address(BaseModel):
    """个人信息常用模块"""
    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='所属用户')
    is_default = models.BooleanField(default=False, verbose_name='是否默认')

    # 自定义一个模型管理器对象
    objects = AddressManager()

    class Meta:
        db_table = 'df_address'
        verbose_name = '常用信息'
        verbose_name_plural = verbose_name

class Personal(BaseModel):
    '''个人中心信息'''
    user = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='账号')
    nickname = models.CharField(max_length=20, verbose_name='用户名')

    portrait = models.ImageField(upload_to='goods', verbose_name='用户头像')
    autograph = models.CharField(max_length=128, null=True, verbose_name='个性签名')
    phone = models.CharField(max_length=11, verbose_name='联系电话')
    is_default = models.BooleanField(default=False, verbose_name='是否默认')


    class Meta:
        db_table = 'df_Personal'
        verbose_name = '用户名'
        verbose_name_plural = verbose_name
    def __str__(self):
        return self.nickname



