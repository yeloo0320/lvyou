from django.conf.urls import url
from django.urls import path, re_path

from .views import Listview,Detailview,indexView

app_name = 'goods'
urlpatterns = [
path('',indexView.as_view(),name='index'),
re_path(r'^list/(?P<type_id>\d+)/(?P<page>\d+)$', Listview.as_view(), name='list'),
path('detail/<int:goods_id>',Detailview.as_view(),name='detail'),






]
