from django.conf.global_settings import MEDIA_ROOT
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve

import xadmin
from goods.views import indexView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('xadmin/',xadmin.site.urls),
    path('user/', include('user.urls', namespace='user')),
    path('', include('goods.urls', namespace='goods')),

    path('ueditor/', include('DjangoUeditor.urls')),
    #上传路径注册
    re_path(r'media/(?P<path>.*)$',serve,{"document_root": MEDIA_ROOT}),
]

