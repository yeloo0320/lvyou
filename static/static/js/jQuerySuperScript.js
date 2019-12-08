function init2(id,index,title){
	//加载第二楼层数据
	
	//检测是否3位数数字
	if(/^\d{1,3}$/.test(index)){
		var navA = document.getElementById(id).getElementsByTagName('a');
		if( index <= navA.length-1 ){//navA.length 因为 第一个标签是第一层级 所以减一
			if( navA[index].getElementsByClassName("lv_nav_sub_label").length == 0 ){//如果标签已经添加，则不再重复添加 或者修改
				var tag = document.createElement("span");
				tag.className = 'lv_nav_sub_label';
				tag.innerHTML = '<em>'+title+'</em><i></i></span>';
				navA[index].appendChild(tag);
			}
		}
	}
}


function init1(index,title){
	//加载第一楼层数据
	//检测是否3位数数字
	if(/^\d{1,3}$/.test(index)){
		var navLi = document.getElementById('2017_lv_nav_li').getElementsByTagName('li');
		if( index <= navLi.length ){
			if( navLi[index-1].getElementsByClassName("lv_nav_label").length ==0 ){//如果标签已经添加，则不再重复添加 或者修改
				var tag = document.createElement("span");
				tag.className = 'lv_nav_label';
				tag.innerHTML = '<em>'+title+'</em><i></i></span>';
				navLi[index-1].appendChild(tag);
			}
		}
	}
}

//jsonp数据
function success_jsoncallback(json) {   
	
	for(var value in json[0]){
		var id = value.substr(12,20) ;
		if(null != json[0][value] && json[0][value].length>0){
			var len = json[0][value].length;
			for(var obj in json[0][value]){
				if(json[0][value][obj].remark.length>0){//如果维护的内容为空 则不添加元素至角标
					if('index'==id){
						init1(json[0][value][obj].bakWord1,json[0][value][obj].remark.substr(0,5));
					}else{
						init2(id,json[0][value][obj].bakWord1,json[0][value][obj].remark.substr(0,2));
					}
				}
			}
		}
	}  
};

//jsonp请求
var JSONP=document.createElement("script");    
JSONP.type="text/javascript";    
JSONP.src="//www.lvmama.com/2017index/ztRecommendInfoJson.do?blockId=219944&station=superScript&callback=success_jsoncallback";
document.getElementsByTagName("head")[0].appendChild(JSONP);   
