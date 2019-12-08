#登入跳转函数，跳转路径可以在settings中设置
from  django.contrib.auth.decorators import  login_required

class LoginRequiredMixin(object):
    @classmethod
    def as_view(cls, **initkwargs):
        #调用父类的as_view
        view=super(LoginRequiredMixin,cls).as_view(**initkwargs)
        return login_required(view)
