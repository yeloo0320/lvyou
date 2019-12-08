
#导入settings设置  Django必须能以无参数实例化你的存储系统。意味着所有设置都应从dango.conf.settings中获取:
from django.conf import settings
# 自定义的存储系统必须为 django.core.files.storage.Storage的一个子类
from django.core.files.storage import Storage

# 您的存储类必须是deconstructible，以便在迁移中的字段上使用它时可以序列化。
# 只要你的字段有自己的参数可以自动序列化，你可以使用django.utils.deconstruct.deconstructible类装饰器
# （这是Django在FileSystemStorage上使用的
from django.utils.deconstruct import deconstructible

#导入fdfs_client 的设置
from fdfs_client.client import Fdfs_client, get_tracker_conf

#使用装饰器
@deconstructible
class FastDFSStorage(Storage):
    """自定义的fastdfs文件存储系统类"""

    def __init__(self, client_conf=None, base_url=None):
        """初始化"""
        #如果没有传递路径
        if not client_conf:
            client_conf = settings.FDFS_CLIENT_CONF
            #就是用默认路径
        self.client_conf = client_conf
        #如果没有传递域名
        if not base_url:
            base_url = settings.FDFS_URL
            #使用默认域名
        self.base_url = base_url

    def _open(self):
        """打开文件"""
        pass

    def _save(self, name, content):
        """保存文件"""
        client = Fdfs_client(get_tracker_conf(self.client_conf))

        res = client.upload_by_buffer(content.read())

        if res.get('Status') != 'Upload successed.':
            # 上传失败
            raise Exception('上传文件到fast dfs失败')

        # 获取返回的文件ID
        filename = res.get('Remote file_id')

        return filename.decode()
    # 查找这个文件是否是已经上传过的文件，如果是则使用原有的文件路径
    #如果不是则建立一个新的地址
    def exists(self, name):
        '''在save()函数之前执行，Django判断文件名是否可用
        返回True如果给定的名称引用的文件在存储系统中已经存在，或者False如果名称是适用于一个新的文件。
        本项目文件并非存放在django中，即返回一定为False'''
        return False

    def url(self, name):
        '''返回访问文件的url路径'''
        return self.base_url + name
