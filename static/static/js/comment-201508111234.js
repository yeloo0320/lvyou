<!-- 点评部分的-->
/**
 * 如果使用Comment.param,则需要new
 */
var Comment = {
		/**
		 * @param type          点评类别
		 * @param currentPage   当前页
		 * @param totalCount    总数
		 * @param placeId       POI
		 * @param productId     产品ID
		 * @param placeIdType   POI类型
		 * @param isPicture     晒图
		 * @param isBest        精华
		 * @param isPOI         是不是POI
		 * @param isELong       是不是艺龙点评
		 * @param productRef    多productId查询
		 * @param vstType       VST产品类型
		 * @param isRef         是否调用相关点评
		 */
		param:function(){
			this.type;
			this.currentPage;
			this.totalCount;
			this.placeId;
			this.productId; 
			this.placeIdType;
			this.isPicture;
			this.isBest;
			this.isPOI;
			this.isELong;
			this.productRef;
			this.vstType;
			this.isRef;
		},
		/**
		 *点评翻页 可以使用 new Comment.param(),也可以直接{type:"a",currentPage:"1",...}
		 * <br/> type          点评类别
		 * <br/> currentPage   当前页
		 * <br/> totalCount    总数
		 * <br/> placeId       POI
		 * <br/> productId     产品ID
		 * <br/> placeIdType   POI类型
		 * <br/> isPicture     晒图
		 * <br/> isBest        精华
		 * <br/> isPOI         是不是POI
		 * <br/> isELong       是不是艺龙点评
		 * <br/> productRef    多productId查询
		 * <br/> vstType       VST产品类型
		 * <br/> isRef         是否调用相关点评
		 */
		newLoadPaginationOfComment:function(param){
			$.ajax({
				type: "post",
				url: "/vst_front/comment/newPaginationOfComments",
				data: param,
				dataType: 'html',
				success: function(data) {
					$("#"+param.type+"CmtComment").html(data);
					$(window).scrollTop($('.new-cominfo').offset().top);
					$("[id=xmy]").each(function(){
						var $This = $(this),
						$href = $This.attr('href');
						$This.attr('href',$href+'?losc=073073');
						});
				}
			});
		},
		/**
		 * 点击有用
		 * @param usefulCount 有用数
		 * @param commentId   点评ID
		 * @param type        点评类别
		 */
		addUsefulCount:function(usefulCount,commentId,type){
			$.ajax({
				type: "get",
				async: false,
				dataType: "jsonp",
				jsonp: "jsoncallback",
				jsonpCallback: "success_jsonpCallback",
				url: "http://www.lvmama.com/comment/ajax/addUsefulCountOfCmt.do",
				data: {
					commentId: commentId
				},
				success: function(jsonList, textStatus) {
					if (!jsonList.result) {
						alert("已经点过一次");
					} else {
						var newUsefulCount = parseFloat(usefulCount) + parseFloat(1);
						$("#userfulCount_"+type + "_"+commentId).html("<i class=\"iconcom iconcom-enjoy\"></i>有用<em>" + newUsefulCount + "</em>");
					}
				}
			});
		},
		/**
		 * 点击回复
		 * @param commentId 点评ID
		 * @param replySize 点评回复数
		 * @param val       回复内容
		 * @param btn       回复按钮
		 */
		newReply:function(commentId,replySize,val,btn){
			var replyClass = "repit-reply";
			if(btn.hasClass(replyClass))
				return;
			
			var len = val.length;
			if(len > 200){
				val = val.substring(0,200);
			}
			
			btn.addClass(replyClass);
			$.ajax({
				type: "get",
				async: false,
				dataType: "jsonp",
				jsonp: "jsoncallback",
				jsonpCallback: "success_jsonpCallback",
				url: "http://www.lvmama.com/comment/ajax/addReply.do",
				data: {
					commentId: commentId,
					content: val
				},
				success: function(data) {
					if (data.success) {
						alert("您的回复已经发布成功，请等待审核！");
						btn.next('.com-answerinput').val("");
						btn.parents('.com-answer-form').hide();
						if(replySize <= 0){
							btn.parents('.com-answer').hide();
						}
					} else {
						alert("您的回复发布失败，请重新尝试!");
					}
				}
			});
			btn.removeClass(replyClass);
		},
		
		/**
		 * 查看全部回复
		 * @param commentId 点评ID
		 * @param type      点评类别
		 */
		showMoreReplay:function(commentId,type){
			$("#comment_hide_reply_"+commentId+"_"+type).show();
			$("#showMoreDiv_"+commentId+"_"+type).hide();
		},
		
		showCompleteData:function(commentId,type) {
			var content = $("#cmtContent_"+type + commentId).attr("title");
			$("#cmtContent_" +type + commentId).html(content);
			var _thisA = $("#cmtContent_"+type + commentId).next('');
			_thisA.hide();
		}
	
};

/*
 * 判断登陆 执行操作
 * loginDo(登陆成功要执行的方法,登陆失败要执行的方法)
 */
function loginDo(suc,fail){
    $.getJSON("http://www.lvmama.com/check/login.do?jsoncallback=?", {}, function(dt) {
        if (dt.success) {
            if(suc) suc();
        } else {
            if(fail) fail();
            showLogin(suc);
            return false;
        }
    });
}

/**
 * 写点评
 */
(function(){
	var doc = $(document);
	
	//大按钮事件
	$('.nlogin').click(function(){
		var _this = $(this);
		var suc = function() {
			window.location.href="http://www.lvmama.com/myspace/share/comment.do"
		};
		var fail = function() {
			//记录按钮
			publicCallBack.btn = _this;
		}
		loginDo(suc,fail);
	});
	
	//回复事件
	doc.on('click','.com-answer-submit',function() {
		var _this = $(this),
		input = _this.next('.com-answerinput'),
		val = input.val();
		try{
			val = val.replace(/^\s+|\s+$/g,""); //去除首尾空格
			val = val.replace(/\s+/g, '&nbsp;'); // 空格 转成 &nbsp;
		}catch(d){}
		
		var suc = function() {
			var cid = _this.attr('data-cid'),
			replySize = _this.attr('data-reply');
            Comment.newReply(cid,replySize,val,_this);
		},
		fail = function() {
			//记录按钮
			publicCallBack.btn = _this;
		};
		
		var len = parseInt(String(val).replace(/[^\x00-\xff]/g,'aa').length/2);
		//验证
		if(len == 0) {
			alert('回复字数太少哦~');
			input.focus();
		}else{
			loginDo(suc,fail);
		}
	});
})();

<!-- 点评部分的-->

//一级点评切换                 套餐点评     酒店点评      景点点评     相关点评
$('.JS_tabnav li').live('click',function(){
	
    var tclass = $(this).attr('class');
    var id = $(this).attr('id');
    if(tclass == "active"){
    	
    }else{
    	$(this).addClass("active").siblings().removeClass("active");
    	
    	if(id == "taocan_Cmt"){
    		$('.comment-sTab').show();
    	}else{
    		$('.comment-sTab').hide();
    	}
    }
    
    var id = "";
        id = $(this).attr('id');
    if(id == "taocan_Cmt"){
    	$("#allCmtComment").show();
    	$("#refCmtComment").hide();
    }else{
    	$("#allCmtComment").hide();
    	$("#bestCmtComment").hide();
    	$("#picCmtComment").hide();
    	$("#refCmtComment").show();
    }
     
});

//套餐点评下切换               全部    精华     带图 
$('.comment-sTab li').live('click',function(){
	
    var tclass = $(this).attr('class');
    if(tclass == "current"){
    
    }else{
    	$(this).addClass("current").siblings().removeClass("current");
    }
	
    var id = "";
        id = $(this).attr('id');
    if(id == "allCmt"){
    	$("#allCmtComment").show();
    	$("#bestCmtComment").hide();
    	$("#picCmtComment").hide();
    	
    }else if(id == "bestCmt"){
    	$("#bestCmtComment").show();
    	$("#allCmtComment").hide();
    	$("#picCmtComment").hide();
    }else if(id == "picCmt"){
    	$("#picCmtComment").show();
    	$("#allCmtComment").hide();
    	$("#bestCmtComment").hide();
    }
    
});


