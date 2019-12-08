$(function () {
	$(".product_xq").find("img").each(function(e){
		var width= $(this).attr("width");
		if(width<400){
			$(this).attr("width","356px");
			$(this).css("width","356px");
			$(this).parent("span").css("width","342px");
		}else  if(width<600){
			$(this).attr("width","530px");
			$(this).css("width","530px");
			$(this).parent("span").css("width","530px");
		}
	});
	
	$('.sale_by_people').children().each(function(){
		//自驾游按人，默认选择1个人
		var selfDrivingSaleType="${selfDrivingSaleType!''}";
		if(selfDrivingSaleType=="PEOPLE"){
			if($(this).val()==1){
				$(this).attr("selected","selected");
			}   
		}else{
			if($(this).val()==2){
				$(this).attr("selected","selected");
			}
		}
	});
	
	
	 $('.booking_hotel_list').live('change',function(e){//门票张数选择
	    	var myArray=new Array(); 
		    $(".booking_hotel_list").each(function(e) {
		      	var selects =$(this).find(".lvmama-price-flag");
		      	if(selects.size()>0){
		      		selects.each(function(){
		      			if(myArray[e]==null){
		      				myArray[e]=0;
		      			}
		      			myArray[e]+=parseInt($(this).find("option:selected").text());
		      		});
		      	}else{
		      		 myArray[e]=1;
		      	}
		    });
	       	var temp = 0;
	  		for (var i = 0; i < myArray.length -1; i++){//获取多晚酒店预定房间数，排序
	  			for (var j = 0; j < myArray.length - i-1; j++){
	  				if (myArray[j] < myArray[j + 1]){
	  				  temp = myArray[j+1];
	  				  myArray[j+1] = myArray[j];
	  				  myArray[j] = temp;
	  				}
	  		    }
	  		 }
	  		 var maxQuality = myArray[0]*8;//门票最大购买上限
	  		 if(maxQuality==0){
	  			maxQuality=8;
	  		 }
			 	 $(".clearfix").each(function(e) {
					if($(this).attr("date-grouptype") == "adult"){
						var  selectadult = $(this).find(".room_td6").find(".buy_number");
						var text =getTicketNum(selectadult);
						var value=selectadult.find("option:first-child").val();
						var num=selectadult.attr("data-maxnum");
						if(num !=0){
						if(num>maxQuality){
							selectadult.empty();
							for(var i = 1;i<maxQuality+1; i++){
								if(i==text){
		              				selectadult.append("<option value=\""+i*value+"\"  selected = 'selected'>"+i+"</option>");
		              			}else{
		              				selectadult.append("<option value=\""+i*value+"\">"+i+"</option>");
		              			}
							}
						}else{
							selectadult.empty();
							for(var i = 0;i<num; i++){
								if(i+1==text){
		              				selectadult.append("<option value=\""+(i+1)*value+"\"  selected = 'selected'>"+(i+1)+"</option>");
		              			}else{
		              				selectadult.append("<option value=\""+(i+1)*value+"\">"+(i+1)+"</option>");
		              			}
							}
						}	
						pandora.selectModel({'autoWidth': false, 'selectElement': $('.buy_number')});
						}
					}
					if($(this).attr("date-grouptype") == "children"){
						var selectchild = $(this).find(".room_td6").find(".buy_number");
						var text = selectchild.find("option:selected").text();
						var num=selectchild.attr("data-maxnum");
						var value=selectchild.find("option:first-child").val();
						if(num != 0){
						if(num>maxQuality){
							selectchild.empty();
							for(var i = 1;i<maxQuality+1; i++){
								if(i==text){
		              				selectchild.append("<option value=\""+i*value+"\"  selected = 'selected'>"+i+"</option>");
		              			}else{
		              				selectchild.append("<option value=\""+i*value+"\">"+i+"</option>");
		              			}
							}
						}else{
							selectchild.empty();
							for(var i = 0;i<num; i++){
								if(i+1==text){
		              				selectchild.append("<option value=\""+(i+1)*value+"\"  selected = 'selected'>"+(i+1)+"</option>");
		              			}else{
		              				selectchild.append("<option value=\""+(i+1)*value+"\">"+(i+1)+"</option>");
		              			}
							}
						}
						pandora.selectModel({'autoWidth': false, 'selectElement': $('.buy_number')});	
					}
					}
				 });
	    });
	    
	 $('.detailIcon-close').click(function(){
		 $('#replaceDiv').empty();
	 });
	
	
	 $('.preorder-confirm-button').live('click',function(e){//form提交
     	if($(this).attr("data-disable")){
     		$(window).scrollTop($('div.calendar_box_new').offset().top);
     		$(".JS_calendar").click();
     		return false;
         }else{
         	if($(".buy_number.ticket-select.disney").length > 0) {
             	var totalDisney = 0;
             	$(".buy_number.ticket-select.disney").each(function() {
             		totalDisney += parseInt($(this).find("option:selected").text());
             	});
             	
             	if(totalDisney > 5) {
             		$.alert("一笔订单中迪士尼门票最多选购5张，超过5张订单提交失败，如订购数量超过5张，请分开下单。");
             		$(".buy_number.ticket-select.disney").get(0).focus();
             		return false;
             	}
             }
         	if(checkMutiHotel()==false){
         		showCheckMutiHotelFail();
         		return false;
         	}
         	//神策埋点
			var categoryId = $("#currentCategoryId").val();
			var currentSubCategoryId = $("#currentSubCategoryId").val();
			
         	if (categoryId == 17 || (categoryId==18 && currentSubCategoryId==181)) {
	         	try{
					var params = {
						current_page:window.location.href,
						product_name:$("#currentProductName").val(),
						product_id:$("#currentProductId").val(),
						product_first_category:"线路",
						product_second_category:"自由行",
						product_starting_price:0,
						package_name:"",
						package_id:"",
					};
					var startingPriceStr = document.getElementsByClassName("price_num")[0].innerText;
					var startingPrice = startingPriceStr.replace(/\D/g, '');
					params.product_starting_price = parseFloat(startingPrice);
					if(categoryId == 17){
						params.product_second_category="酒店套餐";
						var checkBtn = $(".room_list span.active_xuan");
						var package_id = checkBtn.attr("data-suppgoodsid");
						var package_name = checkBtn.attr("showgoodsname");
						params.package_id = package_id;
						params.package_name = package_name;
					}
					sensors.track('FreetourBookingAction', params);
	         	}catch(err){}
         	}
         	// 驴妈妈-点击立即抢购&开始预订触发  品友dsp
             pyRegisterCvt();
            e.stopPropagation();
         	preorderStart(e);
            //发送请求
         	return false;
         }
     	function checkMutiHotel(){
    		var map={};//groupid -> max people
    		$('.hotel-select').each(function(){//多选
    			var groupId=$(this).attr('data-groupId');
    			if(map[groupId]==null){
    				map[groupId]=parseInt(0);
    			}	
    			if($(this).hasClass('lvmama-price-flag')){
    				var selectValue =$(this).find("option:selected").text();
    				var maxVisitor =$(this).attr("maxVisitor");
    				map[groupId]+=parseInt(selectValue*maxVisitor);
    			}
            });
    		var flag=true;
    		for(var key in map){
    			var value =map[key];
    			if(value<parseInt($('.adult-count').val())){
    				focusHotel(key);
    				flag= false;
    			}
    		}
    		return flag;
    	}	
    	function showCheckMutiHotelFail(){
    		 //弹窗
            nova.dialog({
                content: $('.changer-error-pop'),  //内容
                title: "友情提醒",  //标题
                okCallback: true,  //确定按钮
                okText: "我知道了"  //确定按钮文本

            })
    	
    	}
    	function focusHotel(groupId){//标红
    		var hotel =$('#groupId_'+groupId);
    		hotel.find('.room_td6').addClass('select-error');
    	}
   	
     });
	
	function preorderStart(e){
		 e.stopPropagation();
         // alert("提交校验！");
         if ($('#preorder-confirm-button').hasClass('btn_stop')) {
             return;
         }

         //检测产品提前预定时间
         var limitTime = $("#limitTime").val();
         var serverTime = $("#serverTime").val();
         var clientTimeStart = $("#clientTimeStart").val();
         if (limitTime && serverTime && clientTimeStart) {
             limitTime = parseInt(limitTime);
             serverTime = parseInt(serverTime);
             clientTimeStart = parseInt(clientTimeStart);
         }
         if (!isNaN(limitTime) && !isNaN(serverTime) && !isNaN(clientTimeStart)) {
             //检测提前预定时间
             var clientTimeEnd = new Date().getTime();
             serverTime = serverTime + (clientTimeEnd - clientTimeStart);
             if (limitTime < serverTime) {
                 $.dialog({
                     wrapClass: "stop_tip_dialog",
                     title: '温馨提示',
                     content: '<div class="stop_tip_box"><span class="tip-icon-big tip-icon-big-warning">' +
                     '</span><p>对不起，您所预订的产品无法购买</p></div>',
                     width: 440,
                     cancel:function(){},
                     cancelValue: "确定", // 取消按钮文本
                     okClassName: "btn btn-orange btn-middle",
                     cancelClassName: "btn btn-default btn-middle",
                 })
                 return;
             }
         }

         var dlgPre = '<div class="continue-order-dialog"><span class="nova-icon-outline-lg nova-icon-warning"></span>';
         var dlgPost = '</div>';
         var msg = "";
         $.each($(".submit-data-js.need-submit-data").siblings("input[name=aperTicketTimeValidMsg]"), function (index, element) {
             if ($(element).val() != null && $(element).val().length > 0) {
                 if (msg.length > 0) {
                     msg += "<br />";
                 }
                 msg += $(element).val();
             }
         });
         if (msg.length > 0) {
             window.DestGoods.orderE = e; 	//缓存点击参数
             nova.dialog({
                 title: '',
                 content: dlgPre + msg + dlgPost,
                 width: 500,
                 height: 219,
                 zIndex: 51,
                 wrapClass: 'continue-order',
                 okCallback: function () {
                     window.DestGoods.javaCallback.preorderContinue(window.DestGoods.orderE)
                 },
                 cancelCallback: true,
                 okText: "继续预订",
                 cancelText: "重新选择",
                 okClassName: "continue-btn-ok",
                 cancelClassName: "continue-btn-cancel"
             });
             return;
         } else {
             preorderContinue(e);
         }
     }
	
	function preorderContinue(e){
		var $currentTarget = $(e.currentTarget);
		if ($currentTarget.attr("data-disable")) {
			return;
		}
		if ($currentTarget.attr("data-lock")) {
			submitData(e);
			return;
		}
		
		
	}
	
	function submitData(e){
		var itemList = [];
        var breakFlag = "1";
        var maxAdultQuantity =0,maxChildQuantity = 0;
        var changeToPeopleFlag="";//无用
        changeToPeopleFlag= $(".adult-count").data("change");
        $(".active_xuan,.btn-multi-active").each(function(){//酒店
        	var dataType = $(this).attr("data-type");
        	var item = {};
        	if(dataType=='hotel'){//酒店
                 item.goodsId=$(this).attr('data-suppgoodsid');
                 item.goodType = 'hotel';
                 item.mainItem = 'MAIN';
                 item.routeRelation = 'PACK';
                 var select= $(this).parent().prev().find('.hotel-select');
                 item.detailId =select.attr('data-detailid');
                 item.quantity=select.find("option:selected").text();
                 var hotelAdditation = {};//酒店的时候使用
        		 var hotel =$('#hotel_'+select.attr('data-groupId'));
        		 var leaveTime = hotel.attr("data-leaveTime");
                 if (typeof(leaveTime) != 'undefined' ) {
                     hotelAdditation.leaveTime = leaveTime;
                 }
                 var arrivalTime = hotel.attr("data-arrivalTime");
                 if (typeof(arrivalTime) != 'undefined' ) {
                     hotelAdditation.arrivalTime = arrivalTime;
                 }
                 var stayDays = hotel.attr("data-stayDays");
                 if (typeof(stayDays) != 'undefined' ) {
                     hotelAdditation.stayDays = stayDays;
                 }
                 item.hotelAdditation = hotelAdditation;
                 item.visitTime=hotel.attr('data-visitTime');
                 itemList.push(item);
        	}
      	});
        $('.need-submit-data').each(function(){//门票
        	var groupType = $(this).attr("data-group");
            var goodsId=$(this).attr("data-goodsId");
            var item = {};
            if(typeof(goodsId) != 'undefined'){
                item.goodsId = goodsId;
            }
            var goodType=$(this).attr("data-goodType");
            if(typeof(goodType) != 'undefined'){
                item.goodType = goodType;
            }
            var mainItem=$(this).attr("data-mainItem");
            if(typeof(mainItem) != 'undefined'){
                item.mainItem = mainItem;
            }
            var routeRelation=$(this).attr("data-routeRelation");
            if(typeof(routeRelation) != 'undefined'){
                item.routeRelation = routeRelation;
            }
            var detailId=$(this).attr("data-detailId");
            if(typeof(detailId) != 'undefined'){
                item.detailId = detailId;
            }
            var quantity=$(this).attr("data-quantity");
            if(typeof(quantity) != 'undefined'){
                if(groupType == "addition"){
                    item.adultQuantity = quantity;
                    item.quantity = quantity;
                }else{
                    item.quantity = quantity;
                }
             }
             
             if(groupType  == "ticket"){
             	 //增加品类判断
                 var childQuantity = $(this).attr("data-childQuantity");
                 if(typeof(childQuantity) != 'undefined'){
                    item.childQuantity = childQuantity*quantity;
                    if(childQuantity*quantity > maxChildQuantity){
                    	maxChildQuantity = childQuantity*quantity;
                    }
                 }
                 
                 var adultQuantity = $(this).attr("data-adultQuantity");
                 if(typeof(adultQuantity) != 'undefined'){
                    item.adultQuantity = adultQuantity*quantity;
                    if(adultQuantity*quantity > maxAdultQuantity){
                    	maxAdultQuantity = adultQuantity*quantity;
                    }
                }
             }
             
            var visitTime = $(this).attr("data-visitTime");
            if (typeof(visitTime) != 'undefined') {
                item.visitTime = visitTime;
            }
            if (groupType == "ticket") {
                var markSelect_1 = detailId + "-" + goodsId;
                $("select").each(function () {
                    var markSelect_2 = $(this).attr("data-detailid-suppgoodsid");
                    if (typeof(markSelect_2) != 'undefined' && markSelect_1 == markSelect_2) {
                        var selectOptionLength_new = $(this).find("option:selected").text();
                        if (selectOptionLength_new == '请选择') {
                            $(this)[0].focus();
                            $(this).css("background-color", "#ffcccc");
                            breakFlag = 0;
                            return false;
                        }
                    }
                })
            }
            var displayTime = $(this).attr("data-displayTime");
            if (typeof(displayTime) != 'undefined') {
                item.displayTime = displayTime;
            }
            var detail = $(this).attr("data-detail");
            if (typeof(detail) != 'undefined' && detail && (groupType == 'selectPackage' || groupType == 'hotelPackage')) {
                item.hotelcombOptions = JSON.parse(detail);
            }
            if($(".disney").length>0){
            	 item.isDisneyGood = true; 
            }
           
            //过滤掉份数为0的,而且所有下单的东西一定是会有份数的
            if ("quantity" in item && item.quantity != ""  && item.quantity != "0") {
                itemList.push(item);
            }
        });
        
      	if(breakFlag == 0){
         	return false;
     	}
      	//输入的参数也要传过去
      	var adultQuantity = $(".adult-count").val();
     	var childQuantity = $(".children-count").val();
     	var quantity = $("#preorder-quantity").val();
      	var quantityHiddenFlag = $("#preorder-quantity").data("hidden");
   		// alert(adultQuantity+":"+childQuantity+":"+quantity);
   		if(changeToPeopleFlag=="Y"){
        	var baseAdultQuantity = $("#bquantity").val();
        	quantity = Math.ceil(adultQuantity/baseAdultQuantity);
        }
      	var form = {};
      	form.itemList = itemList;
      	//如果没有酒店套餐的,按人售卖
      	if(quantityHiddenFlag == 'Y'){
      		if(adultQuantity > maxAdultQuantity){
      			maxAdultQuantity = adultQuantity;
      		}
      		if(childQuantity>maxChildQuantity){
      			maxChildQuantity = childQuantity;
      		}
          	form.adultQuantity=adultQuantity;
          	form.childQuantity=childQuantity;
          	//如果有酒店套餐的，按份售卖
      	}else if(quantityHiddenFlag == 'N'){
      		if(changeToPeopleFlag=="Y"){
      			if(adultQuantity > maxAdultQuantity){
          			maxAdultQuantity = adultQuantity;
          		}
          		if(childQuantity>maxChildQuantity){
          			maxChildQuantity = childQuantity;
          		}
       			form.adultQuantity=adultQuantity;
          		form.childQuantity=childQuantity;
            }else{
          		if((adultQuantity*quantity) > maxAdultQuantity){
          			maxAdultQuantity = adultQuantity*quantity;;
          		}
          		if((childQuantity*quantity)>maxChildQuantity){
          			maxChildQuantity = childQuantity*quantity;;
          		}
              	form.adultQuantity=adultQuantity*quantity;
              	form.childQuantity=childQuantity*quantity;
          	}
      	}
      	form.maxAdultQuantity = maxAdultQuantity;
      	form.maxChildQuantity = maxChildQuantity;
      	
      	form.quantity=quantity;
      	form.productId=$("#productId").val();
      	//form.startDistrictId = ${startDistrictId!''}
      	form.startDistrictId= $("#startDistrictId").val();
      	form.visitTime = $("#preorder-start-time").val();
     	if($("#lineRouteId"))
      	{
           form.lineRouteId=$("#lineRouteId").val();
        }
        // 游玩人数
        var travPersonQuantity = maxAdultQuantity + maxChildQuantity;
        form.travPersonQuantity = travPersonQuantity;
        
        $("#orderJson").val(encodeURI(JSON.stringify(form)));
        //alert( $("#orderJson").val());
        //改为免登录
         $("#submitDataForm").submit();
       }
		
		
	
	
	
	
	var $document = $(document);
	
	//展开房型
    $(document).on('click','.btn_list_more',function(e){
      var $this = $(this),
          typeText = $this.attr('data-type')+'<i class="detail_icon detail_icon_jt1"></i>';

        var $thisStable = $this.siblings('table');
      if ($this.hasClass('list_more_close')) {
          $this.removeClass('list_more_close').html('更多'+typeText);
            if ($thisStable.find('th').length>0) {
                $thisStable.find('tr:gt(5)').hide();
            }else{
                //$thisStable.find('tr:gt(0)').hide();
                if ($this.attr('data-type')=='保险') {
                    var $thisTr = $thisStable.find('tr');
                    for (var i = 0; i < $thisTr.length; i++) {
                        if ($thisTr.eq(i).find('.choose_ok').length>0) {
                            $thisTr.eq(i).show().siblings('tr').hide();
                            break;
                        };
                    };    
                }else{
                    $thisStable.find('tr:gt(0)').hide();
                };
                
            };
          
            if (typeof moreCallback == 'function') {
                moreCallback($this);
            };

            
      }else{
          $this.addClass('list_more_close').html('收起'+typeText);
          $this.siblings('table').find('tr').show();
          $(".room_info").hide();
      };
    });
	
	//弹出酒店介绍
    $(document).on('click','.js_hotel_name',function(e){
    	 var p =$(this).attr("pid");
    	 changecgHotelDetail.open();
    	 getHotelInfo(p,function(){
    		 $('.js_HotelDetail_tab li').eq(0).click();
    	 });
    });
    
    //弹出门票介绍
    $(document).on('click','.js_ticket_name',function(e){
    	 var p =$(this).attr("pid");
    	 var arr = new Array();
    	 var time = $(this).parent().parent().find(".booking_list_table").find(".table_list_name").attr("time");
    	 var address = $(this).parent().parent().find(".booking_list_table").find(".table_list_name").attr("address");
    	 changecgTicketDetail.open();
    	 getTicketInfo(p,time,address,'INTRO', function(){
    		   $('.js_TicketDetail_tab li').eq(0).click();
    	});
    });
	
	   
			


	
	 $(document).on('click','.js_package_choose',function(e){
		 $(".change_active").each(function(){
			$(this).removeClass("change_active");
			 
		 })
		 $(this).parent(".change_list").addClass("change_list change_active");
		 
		 
		 
		 $("#replaceTicketDiv").empty();
		 $("#ticket_loading").show();
    	var startDistrictId = $(e.currentTarget).attr("data-startDistrictId");
	    if (!startDistrictId) {
	        startDistrictId = -1;
	    }
	    var productId = $(e.currentTarget).data("productid");
	    //自主打包的产品ID 若为供应商打包就和上面的productId是一样的
	    //var lvmamaProductId = window.DestGoods.productId;
	    var lvmamaProductId=$("#productId").val();
	    var groupId = $(e.currentTarget).data("groupid");
	    var productBranchId = $(e.currentTarget).data("currentproductbranchid");//被选中的产品规格
	    var currentSuppGoodsId = $(e.currentTarget).data("suppgoodsid"); //选中的商品ID
	    var selectedProductBranchId = $(e.currentTarget).data("selectedcurrentproductbranchid"); //默认被选中的产品规格
	    var adultquantity = $(e.currentTarget).data("adultquantity");
	    var childquantity = $(e.currentTarget).data("childquantity");
	    var quantity = $(e.currentTarget).data("quantity");
	    var selectdate = $(e.currentTarget).data("selectdate");
	    var changeType = $(e.currentTarget).data("changetype");
	    var choadultQuantity = $(".adult-count").val();
  		var chochildQuantity = $(".children-count").val();
  		var changeToPeopleFlag ="";
  		var hotelNum="";
  		changeToPeopleFlag= $(".adult-count").data("change");
        if(changeToPeopleFlag=="Y"){
        	//var baseAdultQuantity = "${lineProductVO.product.baseAdultQuantity}";
        	var baseAdultQuantity = $("#bquantity").val();
        	quantity = Math.ceil(choadultQuantity/baseAdultQuantity);
        	if(changeType=="ticket"||changeType=="hotel"){
        		$(".booking_hotel_list").each(function(e) {
			      	var text = $(this).find(".active_xuan").parent().parent().find("option:selected").text();
		  	         if(hotelNum==""||hotelNum<text){
		  	       		  hotelNum=text;
		  	         }
			      });
        	}
        }else{
      	  	changeToPeopleFlag="N";
      	  	choadultQuantity="";
      	  	chochildQuantity="";
        }
        var isDebug = $("#isDebug").val();
	    //var changeSuppGoodsUrl = "destbu/changeSuppGoods";
	    //if ('${notSell}' == "Y") {
	    var   changeSuppGoodsUrl = "/vst_front/route/destbu/changeSuppGoods";
	    //}
	    $.ajax({
	        url: changeSuppGoodsUrl,
	        type: "get",
	        contentType:'html', //设置请求头信息
            contentType:'application/json;charset=utf-8', //设置请求头信息
	        //设置请求头信息
	        data: {
	            lvmamaProductId: lvmamaProductId,
	            productId: productId,
	            groupId: groupId,
	            productBranchId: productBranchId,
	            currentSuppGoodsId: currentSuppGoodsId,
	            selectDate: selectdate,
	            adultQuantity: adultquantity,
	            childQuantity: childquantity,
	            quantity: quantity,
	            changeType: changeType,
	            startDistrictId: startDistrictId,
	            changeToPeopleFlag:changeToPeopleFlag,
                choadultQuantity:choadultQuantity,
                chochildQuantity:chochildQuantity,
                hotelNum:hotelNum,
                isDebug:isDebug
	        },
	        success: function(data) {
	        	$("#ticket_loading").hide();
	        	if($("<div>"+data+"</div>").find(".do-not-modify-me").size() == 0){
	        	changeTicket.close();
	        	//console.info(data);
	        	$("#group-" + groupId).replaceWith(data);
	        	
	        	var $container = $("#group-" + groupId);
            	//执行下拉框美化操作
            	$("#replaceTicketDiv").empty();
            	$container.find(".lvmama-price-flag").each(function(e) {
                    dealtotalMoney();
                });
            	
            	
				if(changeType == "hotel"){
			           
			  		//获取酒店默认商品DIV
			  	    var houseTypeItem = $("#groupId-" + groupId ).find(".default-hotel");
			  	    
			  		//重新计算差价
			        
			        var hotelNum=0; 
				    $(".booking_hotel.booking_hotel_list").each(function(e) {
				      	var text = $(this).find(".active_xuan").parent().parent().find("option:selected").text();
			  	         if(hotelNum==""||hotelNum<text){
	  	       				  hotelNum=text;
	  	        		 }
				   	 });
			        var maxQuality = hotelNum*8;
			        if(hotelNum!=0){
			         $(".clearfix").each(function(e) {
						if($(this).attr("date-grouptype") == "adult"){
							var  selectadult = $(this).find(".room_td6").find(".buy_number");
							var text = selectadult.find("option:selected").text();
							var value=selectadult.find("option:first-child").val();
							var num=selectadult.attr("data-maxnum");
							if(num>maxQuality){
								selectadult.empty();
								for(var i = 1;i<maxQuality+1; i++){
									if(i==text){
			              				selectadult.append("<option value=\""+i*value+"\"  selected = 'selected'>"+i+"</option>");
			              			}else{
			              				selectadult.append("<option value=\""+i*value+"\">"+i+"</option>");
			              			}
								}
							}else{
								selectadult.empty();
								for(var i = 0;i<num; i++){
									if(i+1==text){
			              				selectadult.append("<option value=\""+(i+1)*value+"\"  selected = 'selected'>"+(i+1)+"</option>");
			              			}else{
			              				selectadult.append("<option value=\""+(i+1)*value+"\">"+(i+1)+"</option>");
			              			}
								}
							}	
						}
						if($(this).attr("date-grouptype") == "children"){
							var selectchild = $(this).find(".room_td6").find(".buy_number");
							var text = selectchild.find("option:selected").text();
							var num=selectchild.attr("data-maxnum");
							var value=selectchild.find("option:first-child").val();
							if(num>maxQuality){
								selectchild.empty();
								for(var i = 1;i<maxQuality+1; i++){
									if(i==text){
			              				selectchild.append("<option value=\""+i*value+"\"  selected = 'selected'>"+i+"</option>");
			              			}else{
			              				selectchild.append("<option value=\""+i*value+"\">"+i+"</option>");
			              			}
								}
							}else{
								selectchild.empty();
								for(var i = 0;i<num; i++){
									if(i+1==text){
			              				selectchild.append("<option value=\""+(i+1)*value+"\"  selected = 'selected'>"+(i+1)+"</option>");
			              			}else{
			              				selectchild.append("<option value=\""+(i+1)*value+"\">"+(i+1)+"</option>");
			              			}
								}
							}
						}
					 });
			        }
					}
            	
            	
	        	}
            	
	        }
	        
	    } );
    	
		 
		 
	 }
	 );
	
	
	    
	//更换酒店弹出层,选择
    $(document).on('click','.js_hotel_replace',function(e){
    	var choosed='';
    	var isMuti='';
    	var productId='';
    	var hotel;
    	var quantitys=[];
        var branchIds=[];
        var suppgoodsIds=[];
    	$('.change_list').each(function(){//寻找将替换的酒店
    	    hotel=$(this);
    		isMuti=hotel.find('.booking-dashDiv').hasClass('booking-dashDivSelectd');
    		if(isMuti==true){//多选
    			choosed=hotel.find('.btn-multi-active');
    		}else{
    			choosed=hotel.find('.active_xuan');
    		}
    		if(choosed.size()>0){
    			productId=hotel.data("productid");
    			choosed.each(function(index,item){
		        	var select =$(item).parent().prev().find('.hotel-select');
		        	branchIds.push(select.attr('data-currentProductBranchId'));
		        	suppgoodsIds.push(select.attr('data-suppgoodsid'));
		        	quantitys.push(select.find("option:selected").text());
		        });
    			return false;//break
			}
    		
    	});
    	$("#replaceDiv").empty();
    	$("#hotel_loading").show();
	    var groupId = $(e.currentTarget).attr("group-id");
	    var lvmamaProductId=$("#productId").val();
	    var   changeSuppGoodsUrl = "/vst_front/route/destbu/changeSuppGoodsNew";
	    $.ajax({
	        url: changeSuppGoodsUrl,
	        type: "get",
	        contentType:'html', //设置请求头信息
            contentType:'application/json;charset=utf-8', //设置请求头信息
	        data: {
	            lvmamaProductId: lvmamaProductId,
	            productId: productId,
	            groupId: groupId,
	            quantitys:quantitys.join(),
                branchIds:branchIds.join(),
                suppgoodsIds:suppgoodsIds.join(),
                isMuti:isMuti,
	            adultQuantity: $(e.currentTarget).attr('data-adultQuantity'),
	            childQuantity:$(e.currentTarget).attr('data-childQuantity'),
	            selectDate:$(e.currentTarget).attr('data-selectDate')
	        },
	        success: function(data) {
	        	$("#hotel_loading").hide();
	        	$("#groupId_"+groupId).replaceWith(data);
	        	$("#groupId_"+groupId+" .js_hotel_name").attr("pid",productId);
            	//重新查找一次，内容replace了
            	var $container = $("#groupId_"+groupId);
            	changeHotel.close();
            	//执行下拉框美化操作
            	pandora.selectModel({'autoWidth':false, 'selectElement': $container.find('.buy_number')});
            	$("#replaceDiv").empty();
            	$container.find(".lvmama-price-flag").each(function(e) {
                    dealtotalMoney();
                });
	        	
	        }
	    } );
    });
	
	
		$('.btn_xuan-multi').live('click',function(e){
			var obj = $(this);
			var select =obj.parent().prev().find('.hotel-select');
			if(obj.hasClass('btn-multi-active')){//已选状态，清空
        		//select.val(0);
        		select.removeClass('lvmama-price-flag');
    			//pandora.selectModel({'autoWidth': false, 'selectElement': select});//生成新的select
    			obj.removeClass('btn-multi-active');
				obj.html('<i class="line_icon icon_multi"></i>选择');
			}else{
				if(select.val()==0){
					select.find('option:nth-child(2)').attr("selected", true);//0 to 1
					pandora.selectModel({'autoWidth': false, 'selectElement': select});//生成新的select
				}
        		
        		select.addClass('lvmama-price-flag');
				
				obj.addClass('btn-multi-active');
				obj.html('<i class="line_icon icon_multi"></i>已选');
				var hotel =select.closest('.booking_hotel_list');
				hotel.find('.select-error').removeClass('select-error');
			}
			changeAmount(obj);
			
		});

		  
		  $('.btn_xuan').live('click',function(e){
			  e.stopPropagation();
		      hotelDoSelectAction(this);
				  
		 });
		
		  
		  $(document).on('click','.js_changeTicket',function(e){
			  changeTicket.open();
			  $("#ticket_loading").show();
	          $("#replaceTicketDiv").empty();
	          
	          var productId = $(e.currentTarget).data("productid");//产品id
	        	var groupid = $(e.currentTarget).data("groupid");
	            var currentproductbranchid = $(e.currentTarget).attr("data-currentProductBranchId");
	            var currentsuppgoodsid = $(e.currentTarget).attr("data-selectedsuppgoodsid");
	            var haveChangeButton = $(e.currentTarget).data("havechangebutton"); //是否有更换button的按钮
	            var adultquantity = $(e.currentTarget).data("adultquantity");
	            var childquantity = $(e.currentTarget).data("childquantity");
	            var quantity = $(e.currentTarget).data("quantity");
	            var selectdate = $(e.currentTarget).data("selectdate");
	            var changeType = $(e.currentTarget).data("changetype");
	            var startDistrictId = $(e.currentTarget).attr("data-startDistrictId");
	            var choadultQuantity = $(".adult-count").val();
		  		var chochildQuantity = $(".children-count").val();
		  		var changeToPeopleFlag="" ;
		  		changeToPeopleFlag= $(".adult-count").data("change");
	            if(changeToPeopleFlag=="Y"){
	            	//var baseAdultQuantity = "${lineProductVO.product.baseAdultQuantity}";
	            	var baseAdultQuantity = $("#bquantity").val();
	            	quantity = Math.ceil(choadultQuantity/baseAdultQuantity);
	            }else{
	          	  	changeToPeopleFlag="N";
	          	  	choadultQuantity="";
	          	  	chochildQuantity="";
	            }
	            if (!startDistrictId) {
	                startDistrictId = -1;
	            }

	            //这个产品ID是被打包的产品ID 解决升级问题的
	            //自主打包的产品ID 若为供应商打包就和上面的productId是一样的
	            //var lvmamaProductId = $(e.currentTarget).attr("pid");
	            var lvmamaProductId = $("#productId").val();
	            var changeTitle = "";
	            if(changeType == "hotelPackage") {
	                changeTitle = "更换酒店套餐";
	            }else if (changeType == "hotel") {
	                changeTitle = "更换酒店";
	            }else if (changeType == "ticket") {
	                changeTitle = "更换景点门票";
	            }else {
	                changeTitle = "更换其他套餐";
	            }
	            
	            var changeProductUrl = "/vst_front/route/destbu/changeProduct";

	            //if ('${notSell}' == "Y") {
	                changeProductUrl = "/vst_front/route/destbu/changeProduct";
	            //}
	            
	            $.ajax({
	                url:changeProductUrl,
	                type:"get",
	                contentType:'html', //设置请求头信息
	                data:{
	                	lvmamaProductId: lvmamaProductId,
	                    selectDate: selectdate,
	                    adultQuantity: adultquantity,
	                    childQuantity: childquantity,
	                    quantity: quantity,
	                    productId: productId,
	                    groupId: groupid,
	                    currentProductBranchId: currentproductbranchid,
	                    changeType: changeType,
	                    startDistrictId: startDistrictId,
	                    haveChangeButton: haveChangeButton,
	                    currentsuppgoodsid: currentsuppgoodsid,
	                    changeToPeopleFlag:changeToPeopleFlag,
	                    choadultQuantity:choadultQuantity,
	                    chochildQuantity:chochildQuantity
	                },
	                success: function (data) {
	                	$("#ticket_loading").hide();
	                	$("#replaceTicketDiv").html(data);
	                	changeTicket.initOther();
	                	changeTicket.myResize();
	                }
	            });
		  });
		  
		  
		  //更换酒店
        $(document).on('click','.js_changeHotel',function(e){
            changeHotel.open();
            var This= $(e.currentTarget);
            var groupid = This.data("groupid");
            var hotel =This.closest('.booking_hotel_list');
            $("#hotel_loading").show();
            $("#replaceDiv").empty();
            var quantitys=[];
            var branchIds=[];
            var suppgoodsIds=[];
            $('.lvmama-price-flag[data-type=hotel][data-groupId='+groupid+']').each(function(index,item){
            	branchIds.push($(item).attr('data-currentProductBranchId'));
            	suppgoodsIds.push($(item).attr('data-suppgoodsid'));
            	quantitys.push($(item).find("option:selected").text());
            });
           
            var isMuti=hotel.find('.booking-dashDiv').hasClass('booking-dashDivSelectd');
           
            
        	var productId = $(e.currentTarget).data("productid");//产品id
            var haveChangeButton = $(e.currentTarget).data("havechangebutton"); //是否有更换button的按钮
            var adultquantity = $(e.currentTarget).data("adultquantity");
            var childquantity = $(e.currentTarget).data("childquantity");
            var selectdate = $(e.currentTarget).data("selectdate");
            var changeType = $(e.currentTarget).data("changetype");
            var startDistrictId = $(e.currentTarget).attr("data-startDistrictId");
            if (!startDistrictId) {
                startDistrictId = -1;
            }

            //这个产品ID是被打包的产品ID 解决升级问题的
            //自主打包的产品ID 若为供应商打包就和上面的productId是一样的
            var lvmamaProductId = $("#productId").val();
            var changeProductUrl = "/vst_front/route/destbuNew/changeProduct";

            
            $.ajax({
                url:changeProductUrl,
                type:"get",
                contentType:'html', //设置请求头信息
                data:{
                	lvmamaProductId: lvmamaProductId,
                    selectDate: selectdate,
                    adultQuantity: adultquantity,
                    childQuantity: childquantity,
                    productId: productId,
                    groupId: groupid,
                    changeType: changeType,
                    startDistrictId: startDistrictId,
                    quantitys:quantitys.join(),
                    branchIds:branchIds.join(),
                    suppgoodsIds:suppgoodsIds.join(),
                    isMuti:isMuti
                },
                success: function (data) {
                	$("#hotel_loading").hide();
                	$("#replaceDiv").html(data);
                	changeHotel.initOther();
                	changeHotel.myResize();
                }
            });
            
        });
		  
		  
	  //选择份数
    $('.hotel-select').live('change', function (e) {
        //当前选中数量
        var currentQuantity = $(this).find("option:selected").text();
        var $currentItem = $(this).parents(".house-type-item");

        $currentItem.siblings(":not(.room_list_tit)").each(function(){
            var select = $(this).find(".hotel-select");
            var option = select.find("option").filter(function(){
                return $(this).text() == currentQuantity;
            });
            if(option.length == 0) {
                return true;
            }
            pandora.selectModel('setValue', select, option.val());
        });
        var buttonChoose=$currentItem.find(".btn_xuan");
        if(buttonChoose.html()==null){ //多选
        	buttonChoose=$currentItem.find('.btn_xuan-multi');
        	if(currentQuantity>0){
        		buttonChoose.addClass('btn-multi-active');
        		buttonChoose.html('<i class="line_icon icon_multi"></i>已选');
        		$(this).addClass('lvmama-price-flag');
        	}else{
        		buttonChoose.removeClass('btn-multi-active');
        		buttonChoose.html('<i class="line_icon icon_multi"></i>选择');
        		$(this).removeClass('lvmama-price-flag');
        	}
        	var hotel =buttonChoose.closest('.booking_hotel_list');
			hotel.find('.select-error').removeClass('select-error');
        	changeAmount($(this));
		}else{
			 if(buttonChoose.hasClass("active_xuan")) { //选中
				changeAmount($(this));
            	refreshHotelGapPrice($currentItem.parents(".booking_hotel_list"));
             }else{ //未选中
                  hotelDoSelectAction($currentItem.find(".btn_xuan"));
             }
		}
        
    });
   
 });
	



function toggleMutiChoose(thisObj,type){
	//status
	var This = $(thisObj);
	var hotel =This.closest('.booking_hotel_list');
	var selects=hotel.find('.hotel-select');
	var needMoney=hotel.find('.needMoney');
	if(!This.hasClass('booking-dashDivSelectd')){//close to open
		This.addClass('booking-dashDivSelectd');
//		if(type=='changeHotel'){//更换酒店里 => 间数这列
//			hotel.find('.select_column').show();
//		}
		needMoney.text('单价');
		selects.each(function(index,item){
			var select=$(item);
			var td6=select.parent();
			var price =select.attr('singlePrice');
			td6.prev().text("￥"+price/100);//单价
			var nowOption=select.children('option').first();
			//select.find('option:selected').removeAttr("selected", "");
			for(var i=nowOption.text()-1;i>=0;i--){
					select.prepend("<option value="+(i*price)+"  >"+i+"</option>");
			}
			var chooseButton=td6.next().find('.btn_xuan');
			chooseButton.removeClass('btn_xuan');
			chooseButton.addClass('btn_xuan-multi');
			if(!chooseButton.hasClass('active_xuan')){//没被选 默认0间
				chooseButton.html('<i class="line_icon icon_multi"></i>选择');
			}else{
				chooseButton.removeClass('active_xuan');
				chooseButton.addClass('btn-multi-active');
				chooseButton.html('<i class="line_icon icon_multi"></i>已选');
			}
			select.get(0).selectedIndex = 1;//默认1
			//select.find('option:nth-child(2)').attr('selected',true);
			//select.val(price); //ie不行
			pandora.selectModel({'autoWidth': false, 'selectElement': select});//生成新的select
		});
		  
	}else{ //open to close
		This.removeClass('booking-dashDivSelectd');
		needMoney.text('差价');
		hotel.find('.select-error').removeClass('select-error');
		var firstNeedMoney=0;
//		if(type=='changeHotel'){//更换酒店里 => 隐藏间数这列
//			hotel.find('.select_column').hide();
//		}
		var firstChoosedGoodId=hotel.find('.btn-multi-active').first().attr('data-suppgoodsid');
		selects.each(function(index,item){
			var select=$(item);
			var maxVisitor=select.attr('maxVisitor');//最大入住人数
			var minNum=getMinHouseNum($('.adult-count').val(),maxVisitor);//最小房间数
			var td6=select.parent();
			var price =select.attr('price');
			var chooseButton=td6.next().find('.btn_xuan-multi');
			chooseButton.removeClass('btn_xuan-multi');
			chooseButton.removeClass('btn-multi-active');
			chooseButton.addClass('btn_xuan');
			if(select.attr('data-suppgoodsid')==firstChoosedGoodId){//第一个选中
				td6.prev().text(0);//差价
				firstNeedMoney=price;
				select.addClass('lvmama-price-flag');
				chooseButton.html('已选<i class="line_icon icon_gou"></i>');
				chooseButton.addClass('active_xuan');
			}else{
				var result=(price-firstNeedMoney)/100;
				//差价
				if(result>0){
					td6.prev().text('+'+result);
				}else if(result==0){
					td6.prev().text(0);
				}else{
					td6.prev().text('-'+result);
				}
				select.removeClass('lvmama-price-flag');
				chooseButton.html('选择<i class="line_icon icon_gou"></i>');
			}
			select.children('option:lt('+minNum+')').remove();
			pandora.selectModel({'autoWidth': false, 'selectElement': select});//生成新的select
		});
	    
	}
	if(type=='changeHotel'){//更换酒店里 => 显示商品
		showChangeHotelItem();
	}else{
		dealtotalMoney(); //切换单选酒店之后再算一次价格
	    getAllBuyInfo();
	}
	
	
}


function getMinHouseNum(totalAdultQuantity ,maxVisitor){
	if(maxVisitor==1){
		return totalAdultQuantity;
	}
	if(totalAdultQuantity%2==1){
		return (parseInt(totalAdultQuantity)+1)/2;
	}else{
		return totalAdultQuantity/2;
	}
}
function refreshHotelGapPrice(thisHotel){
	var selectTr=thisHotel.find('.active_xuan').parents('.house-type-item');
	if(selectTr.size()==0){
		selectTr=thisHotel.find('.house-type-item').first();
	}
	var selectObj = selectTr.find(".hotel-select");
    //首先取到已选房型的价格
    var selectPrice = selectObj.val();
    var currentSuppGoodsId = selectObj.attr("data-suppgoodsid");
    //已选商品隐藏价格
    selectTr.find('.gap-price').text("0");
    //取所有未选商品的价格
  	$(thisHotel).find(".house-type-item").each(function(){
  		var $thisSelect = $(this).find(".hotel-select");
        var goodsId = $thisSelect.attr("data-suppgoodsid");
        if(goodsId != currentSuppGoodsId){
            var doSelectPrice =  $thisSelect.val();
            var price = doSelectPrice-selectPrice;
            if(price%100 == 0){
                price = (price/100).toFixed(0);
            }else{
                price = (price/100).toFixed(2);
            }
            if(price>0){
                price = "+"+price;
            }else if(price==0){
                price = "0";
            }else {
                price = price;
            }
            $(this).find(".gap-price").html('<span class="c_f60">'+price+'</span>');
        }
    });
}



		  
		  // 更换房型
  function hotelDoSelectAction(selectSpan){
     
     var select = $(selectSpan).parent().prev().find('.hotel-select');
     
     var hotel = select.closest('.booking_hotel_list');
     //当前选中的打包组id 
     var currentGroupidId = select.attr("data-groupId");
     
     // 当前选中规格
     var currentProductBranchId = select.attr("data-currentProductBranchId");
     //当前选中的商品ID
     var currentSuppGoodsId = select.attr("data-suppgoodsid");
     select.addClass("lvmama-price-flag");
     
   //原来选中商品的select
     var oldSelectSpan = hotel.find('.active_xuan');
     oldSelectSpan.parent().prev().find('.hotel-select').removeClass("lvmama-price-flag");
     oldSelectSpan.removeClass("active_xuan").html('选择');
     
     
  	 $(selectSpan).addClass("active_xuan").html('已选<i class="line_icon icon_gou"></i>');
  	 changeAmount($(selectSpan));
	 //重新计算差价
  	 refreshHotelGapPrice(hotel);
  }
		  






$(function () {

    function monthDiff(dateA, dateB) {
        var yearDiff = dateB.getYear() - dateA.getYear();
        var monthDiff = dateB.getMonth() - dateA.getMonth();
        return yearDiff * 12 + monthDiff;
    }

    var $document = $(document);
    var abroadGroupCalendar;  //主日历
    var abroadGroupCalendarTab;  //主日历tab
    var abroadGroupCalendarRight;  //右侧小日历


    var calendarData = {
            monthInfo: null,
            calendarInfo: null
        };

    var playDay = parseInt($("#routeNum").val()) -1 ;  //游玩天数
    function calcRightDate(date) {
        var $text = $(".playtime span");

        //12-25 周六出发 -- 12-31 周一返回

        var returnDate = lv.calendar.dateOffset(date, playDay);
        var str = lv.calendar.dateFormat(date, "MM-dd") + " " +
            abroadGroupCalendar.getDayOfWeek(date, true) + "出发 -- " +
            lv.calendar.dateFormat(returnDate, "MM-dd") + " " +
            abroadGroupCalendar.getDayOfWeek(returnDate, true) + "返回";

        str = str.replace(/星期/g, '周');

        $text.text(str)

        //成人儿童


    }

    function initCalendar(startDate, endDate) {
        abroadGroupCalendar = lv.calendar({
        	date: lv.calendar.dateFormat(startDate, "yyyy-MM"),
            autoRender: true,  //自动渲染日历
            trigger: ".abroad-group-calendar",  //触发的位置

            sourceFn: fillData,  //填充时间价格表
            completeCallback: function () {

            },  //日历加载完成后执行的回掉函数

            monthPrev: 0,  //日历可以往前翻页2页
            monthNext: 11,
            selectDateCallback: function (self) {
            	cmCreateElementTag("PC-国内景酒-详情页-价格日历-可售团期-"+productId,"价格日历");
                var newDate = lv.calendar.getDateFromFormattedString(this.getSelect()[0], "yyyy-MM-dd");

                var ymd = this.getSelect()[0];
                abroadGroupCalendarRight.selected = this.selected;
                $(".js_playtime").val(ymd);
                //abroadGroupCalendarRight.render(false)

                calcRightDate(newDate);

                //选择大日历 顶部预订 和 悬浮预订模块日期变更
                var thisVal = $('.js_float_playtime').val(), //获取当前日期值
                week = newDate.getDay(),//获取星期
                weekArr = ['日','一','二','三','四','五','六'];
            
                $('.js_float_playtime').val(thisVal+' 周'+weekArr[week]);
                
                var changeToPeopleFlag="";
                var adultQuantity = $(".adult-count").val();
	            changeToPeopleFlag = $(".adult-count").data("change");
	            var choadultQuantity;
	            var chochildQuantity;
	            if(changeToPeopleFlag=="Y"){
	            	var baseAdultQuantity = "${lineProductVO.product.baseAdultQuantity}";
	            	quantity = Math.ceil(adultQuantity/baseAdultQuantity);
	            	adultQuantity="${lineProductVO.product.baseAdultQuantity}";
	            	childQuantity="${lineProductVO.product.baseChildQuantity}";
	            	choadultQuantity = $(".adult-count").val();
	            	chochildQuantity = $(".children-count").val();
	            }else{
	          	  	changeToPeopleFlag="N";
	          	  	choadultQuantity="";
	          	  	chochildQuantity="";
	            }
                
                var quantity = $("#preorder-quantity").val();
                if(quantity == undefined) {
                	quantity = 0;
                }
                loadCM();
                var isDebug = $("#isDebug").val();
                //loadingGoods
                var ajaxData = {
                        selectDate1: thisVal,
                        //adultQuantity: $(".adult-count").val(),
                        adultQuantity: $(".adult-count").val(),
                        //adultQuantity: $("select[name='adultQuantity']").val(),
                        //childQuantity: $(".children-count").val(),
                        childQuantity: $(".children-count").val()==null?0:$(".children-count").val(),
                        //adultQuantity: $("select[name='childQuantity']").val(),
                        quantity: quantity,
                        productId: $("#productId").val(),
                        changeToPeopleFlag:changeToPeopleFlag,
      	                choadultQuantity:choadultQuantity,
      	                chochildQuantity:chochildQuantity,
      	                isDebug:isDebug
                        
                };
                
                // 按钮恢复正常
            	var $preorderConfirmButton = $(".preorder-confirm-button");
            	var $startTime = $("#preorder-start-time");
            	// 禁用掉预订按钮
                $preorderConfirmButton.attr("data-disable", true);
                $preorderConfirmButton.removeClass("btn-forbidden").addClass("btn-forbidden");
                $preorderConfirmButton.html("为您计价中");
                //$("#preorder-start-time").val(selectDate1);
                $startTime.val(thisVal);
                
                var jsonArray = $("#jsonComCoordinates").val();
            	if(jsonArray == null || jsonArray == undefined || jsonArray.length < 1 || "[]" == jsonArray){
            	   $("#line-baidu-map").css("display","none");
            	}else{
            		var jsonObj =  JSON.parse(jsonArray);
            		//alert(jsonObj[0].longitude);
            		lvmap({
            	        type: 'baidu',//地图类型,支持google, baidu. 默认google
            	        marker: true,//是否显示地图标记. 默认不显示
            	        //coordinate: { lng: 116.407, lat: 39.9 },
            	        coordinate: { lng: jsonObj[0].longitude, lat: jsonObj[0].latitude },//地图中心点的经度(lng)和纬度(lat)
            	        zoom: 15,//缩放等级. 默认15,即街道级别. 数值越大,可视区域越小,地标显示越清晰
            	        keyType:1,//key的类型仅在google地图有效，0是没有key(默认是0)，1是频道页的key
            	        containerID: "line-baidu-map",//地图容器的ID
            	        markerTips: { title: jsonObj[0].searchKey, content: jsonObj[0].address, maxWidth: 150, maxHeight: 100 }
            	        //地图标记信息: marker为true且content有值时显示. 默认不显示. 支持自定义提示框宽高.
            	    });
            	}

                
                //loading动画
                $(".booking_all").find(".loading_box").css("display", "block");
                $(".booking_all").children("div:not(.js_always_kept)").remove();
                var loadingGoodsUrl = "";
                var preview =$("#preview").val();
                if(preview == "true"){
                	loadingGoodsUrl = "/vst_front/route/destbu/loadingGoods/preview";
                }
                else{
                	loadingGoodsUrl = "/vst_front/route/destbu/loadingGoods";
                }
                //使用timer延迟加载
                if(window.lineDetail.timerId) {
                	clearTimeout(window.lineDetail.timerId);
                }
                window.lineDetail.timerId = setTimeout(function(){
                	if(window.lineDetail.timerId) {
                		window.lineDetail.timerId = undefined;
                	}
                	//请求数据
                    $.ajax({
                        url: loadingGoodsUrl,
                        type: "get",
                        contentType: 'application/json;charset=utf-8', //设置请求头信息
                        data: ajaxData,
                        success: function(data) {
                        	//是否是同一天，不是的话丢弃返回结构
                            var selectedDate = $(".td-selected").attr('data-date-map');
                            var returnDate = $(data).find("[name=visitTime]").val();
                            if(selectedDate && returnDate && selectedDate != returnDate) {
                            	//console.log("ooops, selectedDate:" + selectedDate + ", returnDate:" + returnDate);
                            	return ;
                            }
                            
                            // 按钮恢复正常
                            $preorderConfirmButton.removeAttr("data-disable");
                            $preorderConfirmButton.html("开始预订");
                            $(".booking_all").children("div:not(.js_always_kept)").remove();
                           
                            
                            var $bookingAll = $(".booking_all");
                            $bookingAll.find(".loading_box").css("display", "none");
                            $bookingAll.append(data);
                            
                           
                            
                            // 商品不可售
                            if (data.indexOf("do-not-modify-me") > -1) {
                                $preorderConfirmButton.html("开始预订");11
                                $preorderConfirmButton.removeAttr("data-lock");
                                //将总价设为--
                                $(".float_price>b").text("---");
                                $(".nchline-price-buy>b").text("---");
                                
                                $(".float_price_all>.price_info_all").empty()
                                return;
                            }
                            
                            var routeId= $("#defaultLineRouteId").val();
                            var feeIncludeHtml = $("#line_route_"+routeId).html();
                            
                            $bookingAll.append(feeIncludeHtml);
                            $preorderConfirmButton.removeClass("btn-forbidden");
                            $preorderConfirmButton.attr("data-lock", true);
                            //第一次加载算一次总价
                            $(".lvmama-price-flag").each(function(e) {
                                dealtotalMoney();
                            });
                            getAllBuyInfo();
                            //自定义下拉框，根据select控件生成一个自定义的控件
                            pandora.selectModel({'autoWidth': false, 'selectElement': $('.buy_number')});
                            pandora.selectModel({'autoWidth':false, 'selectElement': $('.room_num,.select_time')});
                            
                            //如果是第一次加载处理机票概要信息
                        }
                    });
                }, 200);
            }
        });

        abroadGroupCalendarRight = lv.calendar({
            date: lv.calendar.dateFormat(startDate, "yyyy-MM"),
            template: "small",
            trigger: ".js_playtime",  //触发的位置
            sourceFn: fillData,  //填充时间价格表
            monthPrev: 0,  //日历可以往前翻页2页
            monthNext: 10,
            bimonthly: true,
            selectDateCallback: function () {
                abroadGroupCalendar.now = this.now;
                abroadGroupCalendar.selected = this.selected;
                abroadGroupCalendar.render(false)

                var newDate = lv.calendar.getDateFromFormattedString(this.getSelect()[0], "yyyy-MM-dd");
                abroadGroupCalendarTab.switchTab(newDate);


                calcRightDate(newDate);

                //选择弹窗日历 顶部预订 和 悬浮预订模块日期变更
                var thisVal = this.$trigger.val(), //获取当前日期值
                week = newDate.getDay(),//获取星期
                weekArr = ['日','一','二','三','四','五','六'];
            
                $('.js_float_playtime').val(thisVal+' 周'+weekArr[week]);
                $("td.[data-date-map='" + thisVal + "']").click();
            },
            completeCallback:function(){
                if (this.$trigger && this.$trigger.hasClass('js_float_playtime')) {
                    this.wrap.css('margin-top',-290);//this.wrap.position().top
                }else{
                    this.wrap.css('margin-top',0);
                };
            }
        })
    }

    function fillData() {
        var self = this;
        

        /**
         * 获取剩余HTML
         * @param inventory 剩余数量
         * @returns {string} 生成的HTML
         */
        function getStoreHTML(inventory) {
            var html = "";
            if (inventory == 0) {
                html = "售罄";
            } else if (0<inventory && inventory < 10) {
                html = "余" + inventory
            } else {
				html = "充足"
			}
            return html;
        }
        /**
         * 创建浮动框
         * @returns {*|jQuery|HTMLElement}  被创建的浮动框jQuery对象
         */
        function createHover() {
            var $hover = $(".calhover");
            if ($hover.length <= 0) {
                $hover = $('<div class="calhover"><div class="triangle"></div></div>');
            } else {
                $hover.html('<div class="triangle"></div>');
            }
            $("body").append($hover);
            $hover.removeClass("calhover-right");
            return $hover;
        }

        /**
         * 设置显示
         * @param data Ajax返回值
         * @returns {boolean}
         */
        function setDate(data, monthInfo) {

            /**
             * 退化的情况，无任何返回值
             */
            if (!data) {
                return false;
            }

            var $allTd = self.wrap.find('td[data-date-map]');  //所有的日历单元格
            $allTd.children().addClass("caldisabled");  //先禁用所有的日历日期

            //对json对象进行迭代处理
            data.forEach(function (row) {
                //row 每个json对象中的元素单元，格式如下所示
                // {
                //     "child": 3688,
                //     "date": "2016-06-11",
                //     "detail": "",
                //     "endDate": "201612",
                //     "lineRouteId": 0,
                //     "lineRouteName": "A",
                //     "next": true,
                //     "prev": false,
                //     "price": 3988,
                //     "surplus": 4,
                //     "type": 1,
                //     "inventory": -1,
                //     "oversold": false,
                //     "sale": "下单满3000减200元，成人儿童可享受，不与其他优惠同享；\n下单满2000减150元，成人儿童可享受，不与其他优惠同享；\n下单满1000减100元，成人儿童可享受，不与其他优惠同享；"
                // }

                var jsonDateStr = row.date;  //json单元-日期

                //将json单元日期字符串转化为JS日历对象(new Date())
                var date = lv.calendar.getDateFromFormattedString(jsonDateStr, self.options.dateFormat);

                //将日历对象转换为字符串(只保留参数dateFormat设定的数据，默认值为年月日)
                var dateStr = lv.calendar.dateFormat(date, self.options.dateFormat);

                //json单元-价格
                var price = row.price;

                //价格-浮点数
                //var inventory = parseFloat(row.inventory);
                var inventory = parseFloat(row.surplus);

                //json单月-是否促销
                var sale = row.sale;

                //json单元-日期对应文档中的td单元格
                var $td = self.wrap.find('td[data-date-map=' + dateStr + ']');

                var lineRouteName = row.lineRouteName;

                //如果json中的数据有td单元格相对应，则显示数据信息
                if ($td) {

					//促销等元素的显示位置
					var $calActive = $td.find(".calactive");

					var priceClass = "";
					/*if (row.lvLowestSaledPrice === price) {
						priceClass = "calprice-highlight"
					}*/

					// 判断是否是本月最低价格
					if (monthInfo){
						var monthkey = row.date.substring(0, 7);
						// alert(monthkey + '11111');
						if (monthInfo[monthkey] && monthInfo[monthkey].price == row.price){
							priceClass = "calprice-highlight"
						}
					}

					//显示价格
					$td.find(".calprice").addClass(priceClass).html('<i>&yen;</i><em>' + price + '</em>起');

					//显示库存
					$td.find(".calinfo").html(getStoreHTML(inventory));

					//是否售罄
					/*
                    if (isNaN(inventory) || inventory <= 0) {
                        $td.find(".calinfo").addClass("sellout");
                        $td.children().removeClass("caldate").addClass("nodate");
                    } else {
                        $td.children().removeClass("caldisabled")
                    }*/
					/*if (isNaN(inventory) || inventory <= 0 || row.disabled) {

                        $td.children().removeClass("caldate").addClass("nodate");

                        if(isNaN(inventory) || inventory <= 0){
                            $td.find(".calinfo").addClass("sellout");
                        }

                    } else {
                        $td.children().removeClass("caldisabled")
                    }*/
					$td.children().removeClass("caldisabled");

					//是否促销
					if (sale) {
						var $sale = $('<div class="calsale">促</div>');
						$calActive.find(".calsale").remove();
						$calActive.append($sale);
					}

					// if (lineRouteName) {
					//     var $lineRouteName = $('<div class="calroute">' + lineRouteName + '</div>');
					//     $calActive.find(".calroute").remove();
					//     $calActive.append($lineRouteName);
					// }

                }
            });

            //显示促销/线路/休假浮动框
            (function () {

                var festival;  //节日
                var route;  //线路
                var sale;  //促销

                //鼠标移开，隐藏浮动框
                self.wrap.on("mouseleave", "[data-date-map]", function () {
                    var $hover = $(".calhover");
                    $hover.hide();
                    $hover.css({
                        left: 0,
                        top: 0
                    });
                });

                //鼠标移入，显示浮动框
                self.wrap.on("mouseenter", "[data-date-map]", function () {
                    var hasOnce = false;

                    //td单元格
                    var $this = $(this);
                    if ($this.children().is(".notThisMonth")) {
						// 注释掉
                        // return false;
                    }

                    //sting 当前单元格日期字符串
                    var date = $this.attr("data-date-map");

                    //创建浮动框jQuery DOM对象
                    var $hover = createHover();

                    //价格
                    var $calprices = $('<p class="calprice"><span class="calprice-adult"></span><span class="calprice-child"></span><span class="calprice-diff"></span></p>');
                    var $calprice_adult = $calprices.find(".calprice-adult");
                    var $calprice_child = $calprices.find(".calprice-child");
                    var $calprice_diff = $calprices.find(".calprice-diff");

                    //休假
                    var $calfestival = $('<p class="calfestival"><i>休</i><span></span></p>');
                    var $calfestivalContent = $calfestival.find("span");

                    //线路
                    var $calroute = $('<p class="calroute"><i>&nbsp;</i><span></span></p>');
                    var $calrouteTitle = $calroute.find("i");
                    var $calrouteContent = $calroute.find("span");

                    //优惠
                    var $caldiscount = $('<p class="caldiscount"></p>');

                    //促销
                    var $calsale = $('<p class="calsale"><i>促</i><span></span></p>');
                    var $calsaleContent = $calsale.find("span");

                    //提示
                    var $caltip = $('<p class="caltip"></p>');

                    //显示坐标
                    var left = $this.offset().left;
                    var top = $this.offset().top + $this.outerHeight();

                    //节日
                    var thatFestival = self.options.festival[date];
                    festival = thatFestival;

                    if (thatFestival) {
                        hasOnce = true;
                        $calfestivalContent.html(thatFestival.vacationName);
                        $hover.append($calfestival);
                    }

                    //获取json数据填充到页面中
                    data.forEach(function (row) {
                        if (row.date == date) {
                            var route = row.lineRouteName;

							var priceHighlight = "cal-hover-price-highlight";
							if (row.price) {
								var adultPriceClass = "";
								if (row.lvLowestSaledPrice === row.price) {
									adultPriceClass = priceHighlight
								}
								$calprice_adult.html("<span class='" + adultPriceClass + "'>成人价：<em>" + row.price + '</em></span>');
							}
							if (row.child) {
								var childPriceClass = "";
								if (row.lvLowestSaledPriceForChild === row.child) {
									childPriceClass = priceHighlight
								}
								$calprice_child.html("<span class='" + childPriceClass + "'>儿童价：<em>" + row.child + '</em></span>');
							}
							if (row.diff) {
								var diffPriceClass = "";
								if (row.lvLowestSaledPriceForDiff === row.diff) {
									diffPriceClass = priceHighlight
								}
								$calprice_diff.html("<span class='" + diffPriceClass + "'>单房差：<em>" + row.diff + '</em></span>');
							}


                            if (row.price || row.child || row.diff) {
                                hasOnce = true;
                                $hover.append($calprices);
                            }
                            if (row.sale) {
                                var sale = row.sale.replace(/\n/g, '<br/>');
                            }
                            if (row.discount) {
                                hasOnce = true;
                                $caldiscount.html(row.discount);
                                $hover.append($caldiscount);
                            }

                            if (thatFestival) {
                                hasOnce = true;
                                $calfestivalContent.html(thatFestival.vacationName);
                                $hover.append($calfestival);
                            }

                            if (route) {
                                hasOnce = true;
                                $calrouteTitle.html(route);
                                $calrouteContent.html("线路");
                                $hover.append($calroute);
                            }
                            if (sale) {
                                hasOnce = true;
                                $calsaleContent.html(sale);
                                $hover.append($calsale);
                            }

                            var tip = row.tip;

                            if (tip) {
                                tip = tip.replace(/\n/g, '<br/>');
								hasOnce = true;
                                $caltip.html(tip);
                                $hover.append($caltip);
                            }

                        }
                    });

                    //页面右侧处理，如果屏幕过小，则显示在左侧
                    // var width = $hover.outerWidth();
                    //
                    // var $table = $this.parents(".caltable");
                    // var tableLeft = $table.offset().left;
                    // var tableWidth = $table.outerWidth();
                    // if (width + left - tableLeft > tableWidth) {
                    //     left = tableLeft + (tableWidth - width);
                    //     $hover.addClass("calhover-right");
                    // }

                    //显示
                    if (hasOnce) {

                        if ($this.children().is(".notThisMonth") && self.options.bimonthly) {
                            //hide
                        } else if (!self.wrap.is(".ui-calendar-mini")) {
                            $hover.show();
                        }

                        $hover.css({
                            left: left,
                            top: top + 6
                        });

                        var triangleLeft = ~~($this.offset().left - left + $this.width() / 2);
                        $hover.find(".triangle").css({
                            left: triangleLeft
                        });

                        if (self.options.zIndex) {
                            $hover.css("zIndex", self.options.zIndex + 1);
                        }
                    }

                });

            })();
        }

        this.loading();

        setDate(calendarData.calendarInfo, calendarData.monthInfo);
        self.loaded();
    }

    
    var productId = $("#productId").val();
    var startDistrictId = $("#startDistrictId").val();
    var destId = $("#destId").val();
    var routeNum = $("#routeNum").val();
    var isDebug =$("#isDebug").val();
    $.ajax({
    	url:"/vst_front/route/data.json?businessType=DestBu&productId=" + productId + "&startDistrictId="+startDistrictId+"&isDebug="+isDebug
    }).done(function (data) {

        calendarData.monthInfo = data.monthInfo;
        calendarData.calendarInfo = data.calendarInfo;
        
        window.lineDetail.reCalLowestPrice(data.monthInfo);

        var date = new Date();
        date.setDate(1);
        var startDate = date;
        var endDate = date;
        var run = true;

        for (var i = 0; i < 12; i++) {
            var tempDate = lv.calendar.monthOffset(date, i);
            var yeahMonth = lv.calendar.dateFormat(tempDate, "yyyy-MM");
            if (calendarData.monthInfo[yeahMonth] && calendarData.monthInfo[yeahMonth].price) {
                if (run) {
                    startDate = tempDate;
                    run = false;
                }
                endDate = tempDate;
            }
        }
        
     // 判断団期是否有值，如果没有值，出现弹出框提示
        if (data.calendarInfo.length == 0) {
			$.ajax({
				url : "/vst_front/route/isCalendarJsonData",
				type : "get",
				contentType : 'application/json;charset=utf-8',
				data : {
					startDistrictId : startDistrictId,
					destId : destId,
					routeNum : routeNum
				},
				dataType : 'html',
				success : function(date) {
					/*$(".re-sold-box").html(date);
					
					nova.dialog({
			            content: $('.re-sold-box'),
			            button: null,
			            width: 840,
			            title:null,
			            contentClone: false,
			            zIndex:999
			        });*/
				}
			});
		}
        var $preorderConfirmButton = $(".preorder-confirm-button");
    	// 禁用掉预订按钮
        $preorderConfirmButton.attr("data-disable", true);
        $preorderConfirmButton.removeClass("btn-forbidden").addClass("btn-forbidden");
        initCalendar(startDate, endDate);
        initCalendarTab(calendarData.monthInfo, startDate, endDate);
        
        //处理默认的选中
        //window.lineDetail.selectLowestPriceDateForDefault();
    });

    function initCalendarTab(data, startDate, endDate) {

        //console.log(data)
        abroadGroupCalendarTab = {
            init: function () {
                this.newDate = lv.calendar.getDateFromFormattedString(lv.calendar.dateFormat(startDate, "yyyy-MM-dd"), "yyyy-MM-dd");

                this.newDate.setDate(1);
                this.minDate = lv.calendar.monthOffset(this.newDate, -abroadGroupCalendar.options.monthPrev);
                this.maxDate = lv.calendar.monthOffset(this.newDate, abroadGroupCalendar.options.monthNext);

                this.$tab = $(".calendar-tab");

                this.$calendarTabsPrev = $(".calendar-tabs-prev");
                this.$calendarTabsNext = $(".calendar-tabs-next");

                this.tabs = [];
                this.changeTabs(this.newDate);

                this.bindEvent();
            },
            changeTabs: function (date) {
                var self = this;
                this.$calendarTabsPrev.removeClass("disabled");
                this.$calendarTabsNext.removeClass("disabled");
                (function () {
                    var tempDate = lv.calendar.monthOffset(date, -4);
                    var isDisable = true;
                    for (var i = 0; i < 4; i++) {
                        var prevDate = lv.calendar.monthOffset(tempDate, i);
                        if (prevDate >= self.minDate) {
                            isDisable = false;
                        }
                    }
                    if (isDisable) {
                        self.$calendarTabsPrev.addClass("disabled");
                    }
                })();
                (function () {
                    var tempDate = lv.calendar.monthOffset(date, 4);
                    var isDisable = false;
                    for (var i = 0; i < 4; i++) {
                        var nextDate = lv.calendar.monthOffset(tempDate, -i);
                        if (nextDate > self.maxDate) {
                            isDisable = true;
                        }
                        if (nextDate > endDate) {
                            isDisable = true;
                        }
                    }
                    if (isDisable) {
                        self.$calendarTabsNext.addClass("disabled");
                    }
                })();

                this.$tab.removeClass("disabled");
                for (var i = 0; i < 4; i++) {
                    var datePoint = new Date(date);
                    datePoint = lv.calendar.monthOffset(date, i);
                    this.tabs[i] = datePoint;
                    var $thatTab = this.$tab.eq(i);
                    var yearMonth = lv.calendar.dateFormat(datePoint, "yyyy-MM");
                    $thatTab.find(".calendar-tab-month").html(lv.calendar.dateFormat(datePoint, "yyyy年M月"));

                    if (data[yearMonth] && data[yearMonth].price) {
                        var price = data[yearMonth].price;
                        $thatTab.find(".calendar-tab-price").html("￥" + price + "起");
                        $thatTab.find(".calendar-tab-price").removeClass("calendar-tab-price-none");
                    } else {
                        var tempDate = lv.calendar.getDateFromFormattedString(yearMonth, "yyyy-MM");

                        var month = null;
                        for (var j = 0; j < 12, tempDate < this.maxDate; j++) {
                            tempDate = lv.calendar.monthOffset(tempDate, 1);
                            tempYeahMonth = lv.calendar.dateFormat(tempDate, "yyyy-MM");
                            if (data[tempYeahMonth] && data[tempYeahMonth].price) {
                                month = tempDate.getMonth() + 1;
                                break;
                            }
                        }

                        if (month) {
                            $thatTab.find(".calendar-tab-price").html("无团期" + "，" + month + "月有售");
                        } else {
                            $thatTab.find(".calendar-tab-price").html("无团期");
                        }

                        $thatTab.find(".calendar-tab-price").addClass("calendar-tab-price-none");
                    }
                    $thatTab.attr("data-date", yearMonth);
                    if (datePoint < this.minDate) {
                        $thatTab.addClass("disabled");
                    }
                    if (datePoint > this.maxDate) {
                        $thatTab.addClass("disabled");
                    }
                }

                this.$tab.filter(":not(.disabled)").eq(0).click();
            },
            bindEvent: function () {
                var self = this;
                $document.on("click", ".calendar-tabs-prev", function () {
                    if (self.$calendarTabsPrev.is(".disabled")) {
                    } else {
                        self.newDate = lv.calendar.monthOffset(self.newDate, -4);
                        self.changeTabs(self.newDate);
                    }
                });

                $document.on("click", ".calendar-tabs-next", function () {
                    if (self.$calendarTabsNext.is(".disabled")) {
                    } else {
                        self.newDate = lv.calendar.monthOffset(self.newDate, 4);
                        self.changeTabs(self.newDate);
                    }
                });

                $document.on("click", ".calendar-tab", function () {
                    var $this = $(this);
                    if ($this.is(".disabled")) {
                        //Do nothing
                    } else {
                        $this.addClass("active").siblings().removeClass("active");
                        var dateStr = $this.attr("data-date");
                        var date = lv.calendar.getDateFromFormattedString(dateStr, "yyyy-MM");
                        abroadGroupCalendar.now = date;
                        abroadGroupCalendar.render();
                    }
                });
            },
            switchTab: function (date) {
                var self = this;
                var diff = monthDiff(this.newDate, date);
                var start = Math.floor(diff / 4) * 4;
                self.newDate = lv.calendar.monthOffset(self.newDate, start);
                self.changeTabs(self.newDate);
                var $tabActive = this.$tab.filter("[data-date=" + lv.calendar.dateFormat(date, "yyyy-MM") + "]");
                this.$tab.removeClass("active");
                $tabActive.addClass("active");
                $tabActive.click();

            }
        };

        abroadGroupCalendarTab.init()

    }

});

if(!window.lineDetail) {
	window.lineDetail = {};
}



//-------------------计算费用明细结束-------------------------->>>>>>> .r82485

function dealPrice(price){
	if (price % 100 == 0) {
		price = (price / 100).toFixed(0);
	} else {
		price = (price / 100).toFixed(2);
	}
	return price;
}


window.lineDetail.reCalLowestPrice = function(monthInfo) {
	if(!monthInfo)
		return ;
	var lowestPrice = Number.MAX_VALUE;
	var reCaled = false;
	for(x in monthInfo) {
		if(monthInfo[x].price && monthInfo[x].price < lowestPrice) {
			lowestPrice = monthInfo[x].price;
			reCaled = true;
		}
	}
	
	if(reCaled) {
		$(".price_num").html("￥<dfn>"+lowestPrice+"</dfn>");
	}
}

//----------------------------------默认选中当前月份的最低价-----------------------------------------
window.lineDetail.selectLowestPriceDateForDefault = function() {
	var dateSel=$("#dateSel").val();
	var finalSelectedDate ;
	if(dateSel){
		//先选择月份，再选择某天
		var dateSelected = lv.calendar.getDateFromFormattedString(dateSel, "yyyy-MM-dd")
		var yeahMonth = lv.calendar.dateFormat(dateSelected, "yyyy-MM");
		var oldYearMonth = $(".calendar-tab.active").attr("data-date");
		var identifier = ".calendar-tab[data-date=\"" +yeahMonth + "\"]";
		if(oldYearMonth !=  yeahMonth && $(identifier).find("calendar-tab-price-none").size() < 1) {
			$(".calendar-tab.active").removeClass("active");
			$(identifier).click();
		}
		$("[data-date-map='" + dateSel + "']").click();
		finalSelectedDate = dateSel;
	}else if(dateSel==""){
		//如果当月只剩下7天，那么默认显示第下月的
	var currDate = new Date();
	var totalMillSeconds = currDate.getTime();
	totalMillSeconds += 7*24*60*60*1000;
	var ahead7DayDate = new Date();
	ahead7DayDate.setTime(totalMillSeconds);
	//只有当前月仅剩7天，且下个月有日历才切换到下月份
	var monthStr = ahead7DayDate.getMonth() > 8 ?ahead7DayDate.getMonth() + 1  : "0" + (ahead7DayDate.getMonth() +1);
	var identifier = ".calendar-tab[data-date=\"" + ahead7DayDate.getFullYear() + "-" + monthStr + "\"]";
	if(currDate.getMonth() != ahead7DayDate.getMonth() && $(identifier).find(".calendar-tab-price-none").size()<1) {
		$(identifier).click();
	}
	
	var currentMonth = $(".calendar-tab.active").attr("data-date");
	var lowestPrice = Number.MAX_VALUE;
	var selectDate = null;
	$("[data-date-map]").each(function(index, e){
		var $this = $(e);
		var dayOfMonth = $this.attr("data-date-map");
		if(dayOfMonth && dayOfMonth.indexOf(currentMonth) != -1) {
			//表示是当月
			var price = $this.find("em").text();
			if(price && parseInt(price) < lowestPrice) {
				lowestPrice = parseInt(price);
				selectDate = dayOfMonth;
			}
		}
	});
		
		$("[data-date-map='" + selectDate + "']").click();
		finalSelectedDate = selectDate;
	} 
	
	if(!finalSelectedDate) {
		//没有合适的日期，那么也停止loading动画吧
		var html = '<span class="flight_go">去</span>&nbsp;&nbsp;&nbsp;&nbsp'
			+ '<span class="flight_back ml20">返</span>';
		var $flight = $(".js_ck_flight").find("dd").html(html);
	}
}

//-------------收藏开始----------
//收藏相关操作  			 
$(function(){
var fv={};
fv.startCheckFVstatus=function(){
   $.getJSON(
      "http://login.lvmama.com/nsso/ajax/checkLoginStatus.do?jsoncallback=?",
      function(data) {
          if (data.success) {
            fv.checkFavorite();
          }else {
             fv.bindFVclickEvent();
          }
      }
  );
};
//检查是否收藏
fv.checkFavorite= function(){
  var objectId= $("#productId").val() ;
	$.ajax({
	    type: "get",
		contentType: 'application/json;charset=utf-8',
      url: "localAndOutBu/checkFavoriteStatus",
      cache: false,
      data: {
          objectId:objectId
      },
      success: function(data) {
          if(data.success == "true"){
               $('.favorites').addClass('favorites_yes').html("<i class=\"detail_icon\"></i>已关注");
          } else {
          	 $('.favorites').removeClass('favorites_yes').html("<i class=\"detail_icon\"></i>关注");
          }
          fv.bindFVclickEvent();//绑定点击事件
      },
      error : function(){
          fv.bindFVclickEvent();
      }
  });
};

fv.deleteFavorite=function(){
		 var objectId=$("#productId").val();
      $.ajax({
	    type: "get",
		contentType: 'application/json;charset=utf-8',
      url: "localAndOutBu/checkFavoriteStatus",
      cache: false,
      data: {
          objectId:objectId
      },
      success: function(data) {
          if(data.success == "true"){
              $.ajax({
                      type: "get",
                  	contentType: 'application/json;charset=utf-8',
                      url: "localAndOutBu/deleteFavorite",
                      cache: false,
                      data: {
                          objectId:objectId
                      },
                      success: function(data) {
                          if(data.success == "true"){
                              $('.favorites').removeClass('favorites_yes');
                              $('.favorites').html("<i class=\"detail_icon\"></i>关注");
                          }else if(data.success == "false"){
                              alert("取消关注失败");
                          }
                      },
                      error : function(){
                          alert("取消关注");
                      }
                  });
              
              } else {
              $('.favorites').removeClass('favorites_yes');
              if($(".favorites").hasClass("favorites_yes")){
                 fv.bindFVclickEvent();
               }
          }
      },
      error : function(){
          //do nothing
          fv.bindFVclickEvent();
      }
  });           
                 
	}
	
	
	

fv.addFavorite=function(){
   var objectId= $("#productId").val();
   var lowestPrice=$("#lowestPrice").val();
   var productName=encodeURI($("#productName").val());
    var objectImageUrl=$(".js_top_img_scroll .img_scroll_box").find("img:first").attr("src");
   if (objectImageUrl || typeof(objectImageUrl)=="undefined" || objectImageUrl==0){ 
		objectImageUrl=""; 
	 }
  $.ajax({
      type: "get",
  	contentType: 'application/json;charset=utf-8',
      url: "localAndOutBu/addFavorite",
      cache: false,
      data: {
          objectId:objectId,
          objectName:productName,
          lowestPrice:lowestPrice,
          objectImageUrl:objectImageUrl
      },
      success: function(data) {
      	$('.favorites').html("<i class=\"detail_icon\"></i>已关注");
          if(data.success == "true"){
               $('.favorites').addClass('favorites_yes');
          }else if(data.success == "false"){
              alert("已经关注过此线路产品");
              $('.favorites').addClass('favorites_yes');
          }
      },
      error : function(){
          alert("关注失败");
      }
  });
};

	fv.bindFVclickEvent=function(){
		$(".favorites").live("click",function(){
		 var $This = $(this);
		 
       if ( $This.hasClass('favorites_yes') ) {
	 		fv.deleteFavorite();
		 }else{
		 	//fv.addFavorite();
		 	$.getJSON(
		                "http://login.lvmama.com/nsso/ajax/checkLoginStatus.do?jsoncallback=?",
		                {},
		                function(data) {
		                    if (data.success) {
		                      	fv.addFavorite();
		                    }else{ 
		                     showLogin(function(){
		                              fv.addFavorite();
		                              $('.dialog-close').click();//如果没有关闭当前窗口，则调用这个click。
		                           });
		                    }
		                }
		        );}
		      });
	};
//invoke fv statu check
fv.startCheckFVstatus();
});


//-------------收藏结束----------


function dealtotalMoney() {
	
    //var type = $(e).data("type");

	var price = 0;
    $(".lvmama-price-flag").each(function() {
        var select_value = $(this).val();
        if (select_value == null) {
            select_value = 0;
        }
        price += parseInt(select_value);
    });
    var priceValue = 0;
    if (price % 100 == 0) {
        priceValue = price / 100;
    } else {
        priceValue = (price / 100).toFixed(2);
    }
    $("#float_price").html("￥<dfn><b>" + priceValue+"</b></dfn>");
    $(".nchline-price-buy").html("￥<dfn><b>" + priceValue+"</b></dfn>");
    
}

function fnhh(){
	$("td.td-selected").click();
	
}


$(function(){
	$(".product_person_num").on('change', '.children-count', function(e){
		var selectedQuantity = $(e.target).val();
		$('.children-count').each(function(index, item){
			var currentQuantity = $(item).val();
			if(currentQuantity != selectedQuantity) {
				$(item).val(selectedQuantity);
				$(item).change();
			}
		});
		$("td.td-selected").click();
	});
	
	$(".product_person_num").on('change', '.adult-count', function(e){
		e.stopPropagation();
    	var baseAdultQuantity = $(".adult-count").val();
        var baseChildQuantity = $(".children-count").val();
        var quantity = $("#preorder-quantity").val();
    	var quantityHiddenFlag = $("#preorder-quantity").data("hidden");
    	var changeToPeopleFlag = $(".adult-count").data("change");
    	var $this=$(this);
    	var baseAdultQuantity1 = $("#bquantity").val();
    	var baseChildQuantity1 = $("#cquantity").val();
    	var fenQuantity = Math.ceil(baseAdultQuantity/baseAdultQuantity1);
      	if(quantityHiddenFlag == 'N'){//按份售卖
      		if(changeToPeopleFlag=="Y"){
      			if($this.attr("class")!="children-count"){
          			if(fenQuantity>0 && baseChildQuantity1>0){
          				$(".children-count").empty();
          				var childMax = fenQuantity*baseChildQuantity1;
          				for(var i = 1;i<childMax+1; i++){
                  			if(i==1){
                  				$(".children-count").append("<option value='1' selected = 'selected'>1</option>");
                  			}else{
                  				$(".children-count").append("<option value=\""+i+"\">"+i+"</option>");
                  			}
                  		}
                  		pandora.selectModel({'autoWidth': false, 'selectElement': $('#children-count')});
          			}
      			}
      		}else{
      			$(".adultCounts").text(baseAdultQuantity*quantity);
          		$(".childCounts").text(baseChildQuantity*quantity);	
      		}
      	}
		
		var selectedQuantity = $(e.target).val();
		$('.adult-count').each(function(index, item){
			var currentQuantity = $(item).val();
			if(currentQuantity != selectedQuantity) {
				$(item).val(selectedQuantity);
				$(item).change();
			}
		});
		$("td.td-selected").click();
	});
});



function setSelectedList() {
   
    var htmlStr="";
    $('.booking_hotel_list').each(function () {
    	var obj=$(this);
    	htmlStr+="<dl class=price_info_list><dt class=mt0>房型</dt>";
    	var single=obj.find('.active_xuan');
    	if(single.size()>0){
    		var hotelQuantity = single.parent().prev().find('select').find("option:selected").text() + "间";
            htmlStr+='<dd><p title="'+ single.attr('showGoodsName') +'">'+ single.attr('showGoodsName') +'</p><span>'+hotelQuantity +'</span></dd>';
    	}else{
    		var muti=obj.find('.btn-multi-active');
    		muti.each(function(index,item){
    			var hotelQuantity = $(item).parent().prev().find('select').find("option:selected").text() + "间";
    			 htmlStr+='<dd><p title="'+ $(item).attr('showGoodsName') +'">'+ $(item).attr('showGoodsName') +'</p><span>'+hotelQuantity +'</span></dd>';
    		});
        }
    	htmlStr+="</dl>";
//        //如果是非结构化套餐
//        if ('packageComb' == dataType) {
//            var hotelComb = new Object();
//            hotelComb.typeName = '酒店套餐';
//            hotelComb.goodsName = obj1.attr('showgoodsname');
//            hotelComb.quantity = obj1.attr('data-quantity') + "份";
//            checkArray.push(hotelComb);
//        }

//        //如果是套餐结构化门票
//        if ('comb_struct_ticket' == dataType && isCombStructName == '') {
//            isCombStructName = $('#currentgoodsname').text();
//            var comb_struct = new Object();
//            comb_struct.typeName = '酒店套餐';
//            comb_struct.goodsName = isCombStructName;
//            var comb_quantity = $("#preorder-quantity").val();
//            comb_struct.quantity = "1份";
//            checkArray.push(comb_struct);
//        }
//        //套餐结构化酒店
//        if ('comb_struct_hotel' == dataType && isCombStructName == '') {
//            isCombStructName = $('#currentgoodsname').text();
//            var comb_struct = new Object();
//            comb_struct.typeName = '酒店套餐';
//            comb_struct.goodsName = isCombStructName;
//            var comb_quantity = $("#preorder-quantity").val();
//            comb_struct.quantity = "1份";
//            checkArray.push(comb_struct);
//        }
        //如果是酒店
//        if ('hotel' == dataType) {
//            var hotel = new Object();
//            hotel.typeName = '房型';
//            hotel.goodsName = obj1.attr('showGoodsName');
//            var hotelQuantity = obj1.parent().parent().find('select[data-suppgoodsid=' + obj1.attr('data-suppgoodsid') + ']').find("option:selected").text() + "间";
//            htmlStr+='<dd><p title='+ obj1.attr('showGoodsName') +'>'+ obj1.attr('showGoodsName') +'</p><span>'+hotelQuantity +'</span></dd>';
//        }
    });
    htmlStr+="</dl>";
    //遍历门票
    htmlStr+="<dl class='price_info_list price_info_serve' ><dt class=mt0>门票</dt>";
    $('.buy_number.ticket-select.lvmama-price-flag').each(function () {
    	var obj1 = $(this);
        htmlStr+='<dd><p title='+ obj1.attr('showGoodsName') +'>'+ obj1.attr('showGoodsName') +'</p><span>'+getTicketNum(obj1) +'张</span></dd>';
    });
    htmlStr+="</dl>";

    if (htmlStr != "") {
        $('.price_info_all').html(htmlStr);
    }
}

$(function(){
    getAllBuyInfo();
});

function getTicketNum(select) {
	return select.find("option:selected").text();
}
function getHotelNum(select) {
	return  select.find("option:selected").text();
	
}

function getAllBuyInfo() {
    var categoryId = $("#categid").val();
    if (categoryId != 17) {
        setSelectedList();
    }
}


/*获取酒店的基本信息*/
function getHotelInfo(productId,callback){
	$("#h_loading_box").show();
	$("#cdiv").html("");
 	var hotelInfoUrl = "/vst_front/route/localJJ/getHotelInfoNew";
 	 $.ajax({
            url: hotelInfoUrl,
            type: "get",
            data: {
                productId: productId    
            },
            dataType: 'html',
            success: function(data) {
            	//$(".loading_box").after("");
            	//$("#cdiv").html("");
            	$("#h_loading_box").hide();
            	$("#cdiv").html(data);
            	callback && callback();
            },error:function(data){
    	    	alert("error");        	
    	     }
        });
 }

/*获取景点门票的基本信息*/
function getTicketInfo(productId,time,address,activeType, callback){
	$("#t_loading_box").show();
	$("#tdiv").html("");
 	var hotelInfoUrl = "/vst_front/route/localJJ/getTicketInfo";
 	 $.ajax({
            url: hotelInfoUrl,
            type: "post",
            data: {
                productId: productId,
                time:time,
                address:address,
                activeType:activeType
            },
            dataType: 'html',
            success: function(data) {
            	$("#t_loading_box").hide();
            	$("#tdiv").html(data);
            	callback && callback();
            },error:function(data){
    	    	alert("error");        	
    	     }
        });
 }


window.publicCallBack = {};
function longinCallback(){
    var btn = publicCallBack.btn;
    //大按钮
    if(btn.hasClass('nlogin')){
        window.location.href = "http://www.lvmama.com/myspace/share/comment.do";
    }
    //回复按钮
    if (btn.hasClass('com-answer-submit')){
        var cid = btn.attr('data-cid'),
                replySize = btn.attr('data-reply'),
                input = btn.next('.com-answerinput'),
                val = input.val();
        try{
            val = val.replace(/^\s+|\s+$/g,""); //去除首尾空格
            val = val.replace(/\s+/g, '&nbsp;'); // 空格 转成 &nbsp;
        }catch(d){}
        Comment.newReply(cid,replySize,val,btn);
    }
}


//促销信息
$(function () {
var $document = $(document);
    //促销信息隐藏
var discountLis = $('.liner-discount-container li');
var discountMore = $('.liner-discount-expand-more');
var discountRule = $('.liner-discount-expand-rules');
var discountExpand = $('.liner-discount-expand');
var discountPop = $('.pop-discount-container');
var discountTime;
if(discountLis.length <=3){
	 // $(discountExpand).hide();
    //discountMore.hide();
    //discountRule.show();
}else {
	// $(discountExpand).show();
    discountLis.each(function () {
        if($(this).index()>=3){
            //$(this).hide();
        	var len =parseInt(discountLis.length -3);
            discountMore.find('span').show();
            discountMore.find('span').html(discountLis.length);
            $(this).find('span').show();
            $(this).css({
                'font-size':'12px'
            })
            discountPop.find('.liner-discount-container').append($(this));
        }else{
            discountPop.find('.liner-discount-container').append($(this).clone());
		}
    });
    discountMore.show();
    discountRule.hide();
}
if(discountMore.html()!=null){
	var left =discountMore.offset().left;
	var top =discountMore.offset().top;
    discountMore.hover(function () {
        discountPop.css({
            left: left,
            top: top+25
        });
        discountPop.show();
    },function () {
        discountTime = setTimeout(function () {
            discountPop.hide();
        },300)
    });

    discountPop.hover(function () {
        clearTimeout(discountTime);
    },function () {
        discountPop.hide();
    });
}

    //促销活动展开
    var promotionLis = $('.pds-promotion .pd-section-content li');
    var promotionLisGt2 = $('.pds-promotion .pd-section-content li:gt(2)');
    var promotionBtn = $('.btn-pds-promotion-more');
    var promotionNotice = $('.pds-promotion-notice');
    if(promotionLis.length >= 3){
        promotionBtn.show();
        promotionNotice.hide();
        promotionLisGt2.hide();
    }else {
        promotionBtn.hide();
        promotionNotice.show();
    }
    $document.on('click','.btn-pds-promotion-more',function () {
        var $this = $(this);
        if(!$this.hasClass('btn-pds-promotion-less')){
            $this.addClass('btn-pds-promotion-less');
            $this.html('收起全部 <span class="icon-arrow-up"></span>');
            promotionLisGt2.show();
            promotionNotice.show()
        }else {
            $this.removeClass('btn-pds-promotion-less');
            $this.html('展开更多 <span class="icon-arrow-up"></span>');
            promotionLisGt2.hide();
            promotionNotice.hide()
        }
    })
})

function fnShowGoods(obj){
	
	var tt =$(obj);
	
	   var div = tt.parent().parent().next(".room_info");
	   
	  var trDiv = div.find("td").children().html();
	  if(trDiv != "" && trDiv != null){
		  
		  if ( div.css("display") === "none" ) {
			  div.show();
		  } else {
			  div.hide();
		  }
	  }else{
		  div.hide();
	  }
	
	
}

function pyRegisterCvt(){
	var w=window,d=document,e=encodeURIComponent;
	var b=location.href,c=d.referrer,f,g=d.cookie,h=g.match(/(^|;)\s*ipycookie=([^;]*)/),i=g.match(/(^|;)\s*ipysession=([^;]*)/);
	if (w.parent!=w){f=b;b=c;c=f;};u='//stats.ipinyou.com/cvt?a='+e('Rds.9ps.e7t6CKVu8aDDv6A4ka6sRP')+'&c='+e(h?h[2]:'')+'&s='+e(i?i[2].match(/jump\%3D(\d+)/)[1]:'')+'&u='+e(b)+'&r='+e(c)+'&rd='+(new Date()).getTime()+'&e=';
	(new Image()).src=u;
}

function initHotelValue(hotel,isMuti,goodsIds,quantitys){
	var goodsArray=goodsIds.split(',');
    var quantitysArray=quantitys.split(',');
    if(isMuti=='true'){
		hotel.find('.booking-dashDiv').addClass('booking-dashDivSelectd');// toggle status to open
	    //hotel.find('.select_column').show(); //add select column 
	    hotel.find('.needMoney').text('单价'); //showSingePrice
	    
	    hotel.find('.hotel-select').each(function(e) {//fill select value
	    	var select=$(this);
	    	var price =select.attr('singlePrice');
	    	var selectTd=select.parent();
	    	var chooseButton=selectTd.next().find('.btn_xuan');
	    	selectTd.prev().text("￥"+price/100);//单价
	       //fill option
	    	var nowOption=select.children('option').first();
			for(var i=nowOption.text()-1;i>=0;i--){
				select.prepend("<option value="+(i*price)+"  >"+i+"</option>");
			}
	        var goodsId=select.data('suppgoodsid');
	        var index=goodsArray.indexOf(goodsId+"");
	        if(index>-1){//选了
	           select.find("option[value='"+quantitysArray[index]*price+"']").attr('selected',true);
	    	   //select.val(quantitysArray[index]*price);
	    	   chooseButton.removeClass('active_xuan');
	    	   chooseButton.addClass('btn-multi-active');
	    	   chooseButton.html('<i class="line_icon icon_multi"></i>已选');
	        }else{
	    	   select.find('option').first().attr('selected',true);
			   chooseButton.html('<i class="line_icon icon_multi"></i>选择');
	        }
	        chooseButton.addClass('btn_xuan-multi');
	        chooseButton.removeClass('btn_xuan');
	       
			pandora.selectModel({'autoWidth':false, 'selectElement': select});
	    
	    });
    }else{//单选
    	hotel.find('.hotel-select').each(function(e) {//fill select value
	    	var select=$(this);
	    	var price =select.attr('singlePrice');
	        var goodsId=select.data('suppgoodsid');
	        var index=goodsArray.indexOf(goodsId+"");
	        if(index>-1){//选了
	           select.find("option[value='"+quantitysArray[index]*price+"']").attr('selected',true);
	        }
	        pandora.selectModel({'autoWidth':false, 'selectElement': select});
	    });
    	
		refreshHotelGapPrice(hotel); 
    }
	
}
function initHotelChangeReturn(hotel,isMuti,goodsIds,quantitys){
	initHotelValue(hotel,isMuti,goodsIds,quantitys);
	hotel.removeClass('change_hotel');
	getAllBuyInfo();
	
}

function initHotelChange(hotel,isMuti,goodsIds,quantitys){
	  initHotelValue(hotel,isMuti,goodsIds,quantitys);
      $(".change_list").each(function(){
    	 if($(this).attr('data-productid')!=hotel.attr('data-productid')){//其他的计算差价
    		 pandora.selectModel({'autoWidth':false, 'selectElement': $(this).find('.hotel-select')});
    		 refreshHotelGapPrice($(this)); 
    	 }
	  });
	  showChangeHotelItem();
}



function showChangeHotelItem(){//更换酒店里的  统计商品
	var single=$('.change_list').find('.active_xuan');
	var productName=$('.product-box').find('h4');
	productName.css('text-decoration','underline');
	if(single.size()>0){
		var text=single.closest('.change_list').find('.booking_info_r .js_hotel_name1').text();
		productName.attr('title',text);
		productName.text(text);
		$('.product-box').find('.item-list').empty();
		var branchName =single.closest('.house-type-item').find('.branch-name').text();
		var count =getHotelNum(single.parent().prev().find('.hotel-select'));
		$('.product-box').find('.item-list').append('<li>'+branchName+'&nbsp; x'+count+'间</li>');
	}else{
		var muti=$('.change_list').find('.btn-multi-active');
		var text =muti.first().closest('.change_list').find('.booking_info_r .js_hotel_name1').text();
		productName.attr('title',text);
		productName.text(text);
		$('.product-box').find('.item-list').empty();
		var items='';
		muti.each(function(index,item){
			var branchName =$(item).closest('.house-type-item').find('.branch-name').text();
			var count =getHotelNum($(item).parent().prev().find('.hotel-select'));
			if(count>0){
				items+='<li>'+branchName+'&nbsp; x'+count+'间</li>';
			}
		});
		$('.product-box').find('.item-list').append(items);
	}
}


function cleanChoose(obj){
	 var thisProduct=obj.attr('data-productid'); 
	 $(".change_list").each(function(){
		var hotel =$(this);
		if(hotel.attr('data-productid')!=thisProduct){
			var single=hotel.find('.active_xuan');
			if(single.size()>0){
				removeSingleChoose(single);
			}else{
				removeMutiChoose(hotel.find('.btn-multi-active'));
			}
		}
	 });
}

function changeAmount(obj){
	if(obj.attr('data-changeType')!=null){//更换酒店里的多选
		cleanChoose(obj);
		showChangeHotelItem();
	}else{
		dealtotalMoney(); //切换之后再算一次价格
	    getAllBuyInfo();
	}
}

function removeSingleChoose(obj){
	obj.parent().prev().find('.hotel-select').removeClass('lvmama-price-flag');
	obj.removeClass('active_xuan').html('选择<i class="line_icon icon_gou"></i>');
}
function removeMutiChoose(objs){
	objs.each(function(){
		$(this).parent().prev().find('.hotel-select').removeClass('lvmama-price-flag');
		$(this).removeClass('btn-multi-active').html('<i class="line_icon icon_multi"></i>选择');
	});
}







