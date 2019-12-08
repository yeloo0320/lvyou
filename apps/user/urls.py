from django.conf.urls import url
from django.urls import path
from .views import RegisterView, LoginView, ActiveView,Userdata,Userdatas,LogoutView

app_name = 'user'
urlpatterns = [

    path('register',RegisterView.as_view(),name='register'),
    path('login',LoginView.as_view(),name='login'),
    url('^active/(.*)$',ActiveView.as_view(),name='active'),#用户激活
    path('userdata',Userdata.as_view(),name='userdata'),
    path('userdatas',Userdatas.as_view(),name='userdatas'),
    path('loginout',LogoutView.as_view(),name='loginout'),







]
