from django.contrib import admin

# Register your models here.
from .models import GoodsSPU,GoodsSKU,GoodsProvinces

admin.site.register(GoodsSKU)
admin.site.register(GoodsProvinces)