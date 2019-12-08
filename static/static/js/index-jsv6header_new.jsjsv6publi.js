if(!searchStatistics){var searchStatistics=function(city,text){var isHome=$("body").is(".home");if(isHome){var $lv_search_box=$(".lv_search_box");var $city=$lv_search_box.find(".btn_city:visible>b");var $input=$lv_search_box.find(".lv_search:visible");if(!city){city=$city.text();}
if(!text){text=$.trim($input.val());}
if(typeof cmCreateElementTag!="undefined"){cmCreateElementTag(city+"_"+text,"首页顶部搜索框");}}}}
$(function(){try{var cookieName='remember_search_history_in_cookie';function clearSearchHistoryCookie(){if($.xcookie&&$.xcookie.deleteCookie){$.xcookie.deleteCookie(cookieName,{path:'/',expires:10,domain:'lvmama.com'});}}
clearSearchHistoryCookie();setTimeout(function(){clearSearchHistoryCookie();},1000);}catch(e){}
var $homeHotWord=$(".home-hot-word");(function(){if($("body").is(".w_1000")){var $link=$(".lv_topbar .lv_link[href='http://www.lvmama.com/md/wuxi/']");var $li=$link.parent("li.border_l");$li.hide();}})();$(".lv_s_search_quality").on("click",function(){window.open("http://www.lvmama.com/local?losc=098688&ict=i");});var $lv_city_box=$('.lv_city_box'),$search_city=$('.search_city'),$search_type=$(".search_type");$(document).bind("click",function(){$lv_city_box.removeClass('lv_city_hover');$search_city.removeClass('search_city_hover');$(".complete_box,.complete_box_hotel,.search_hot_tips,.search_hotel_mdd,.search_hotel_keyword,.lv_search_tips").hide();$search_type.removeClass("search_type_show");$.searchComplete_hotelAddon&&$.searchComplete_hotelAddon.autoSelectFirst&&$.searchComplete_hotelAddon.autoSelectFirst();$.hotelComplete&&$.hotelComplete.autoSelectFirst&&$.hotelComplete.autoSelectFirst()});var $js_btn_type=$('.js_btn_type');searchType();function searchType(){var $search_type_tab=$('.search_type_tab');var typeNum=0;if($('body').hasClass('around')||$('body').hasClass('zijia')){var typeNum=2;}else if($('body').hasClass('ticket')){typeNum=5;}else if($('body').hasClass('hotel')||$('body').attr('data-search-type')==="HOTEL"){typeNum=6;}else if($('body').hasClass('liner')){typeNum=7;}else if($('body').hasClass('visa')){typeNum=8;}else if($('body').hasClass('localfun')){typeNum=4;}
if($('body').hasClass('around_bus')){typeNum=0}
var typeIndex=$search_type_tab.find('li').eq(typeNum),typeText=typeIndex.text(),typeData=typeIndex.attr('data-type');typeIndex.hide().siblings().show();$('.search_type_list').eq(typeNum).show().siblings().hide();$js_btn_type.find('b').text(typeText).attr('data-type',typeData);$search_type_tab.parents(".lv_search_box").first().attr("data-search-type",typeData)};$js_btn_type.bind("click",function(e){var $this=$(this);e.stopPropagation();$homeHotWord.hide();$(".complete_box,.search_hot_tips").hide();$search_city.removeClass('search_city_hover');if($this.siblings('.search_type_tab').is(':hidden')){$this.parent().addClass('search_type_show');}else{$this.parent().removeClass('search_type_show');}});$('.search_type_tab li').click(function(){var $this=$(this);var typeText=$this.text(),typeCode=$this.attr("data-type"),num=$this.index();$this.hide().siblings().show();$this.parents('.search_type').removeClass('search_type_show').find('.btn_type').find('b').attr("data-type",typeCode).text(typeText);$('.search_type_list').eq(num).show().siblings().hide();$this.parents(".lv_search_box").first().attr("data-search-type",typeCode)});$('.lv_cfd_tab li').bind("click",function(e){e.stopPropagation();var $this=$(this);var num=$this.index();$this.addClass('active').siblings().removeClass('active');$this.parent().siblings('.lv_cfd_list').find('li').eq(num).show().siblings().hide();});$(".js_cf_city,.lv_s_city").bind("click",function(e){e.stopPropagation();var target=e.target||e.srcElement;var $target=$(target);if($target.is("li")&&$target.parent().is(".nav-tabs")){var $li=$target;var index=$li.index();var $parent=$li.parents(".search-station-cities").eq(0);var $tabs=$parent.find(".nav-tabs>li");var $pane=$parent.find(".search-station-cities-pane");$tabs.eq(index).addClass("active").siblings().removeClass("active");$pane.eq(index).addClass("active").siblings().removeClass("active");}
if(target.tagName.toLowerCase()==="a"){var $p=$target.parentsUntil(".search_city");var length=$p.length-1;var dataid=$target.attr("data-id"),datacode=$target.attr("data-code");$($p[length]).siblings(".btn_city").find("b").attr("data-id",dataid).html($target.html()).siblings('span').show().html('出发');$($p[length]).parent().removeClass("search_city_hover");}});$(".search_hotel_mdd").bind({"click":function(e){e=e||window.event;if(e.stopPropagation)
e.stopPropagation();else
e.cancelBubble=true;var target=e.target||e.srcElement;switch(target.tagName.toLowerCase()){case"a":var text=$(target).text();$("input:text[active]").val(text);if($(target).attr("data-id"))
$(".js_searchDest").val(text).attr("data-id",$(target).attr("data-id")).removeClass('lv_s_error');$(this).hide();break;case"li":var $this=$(target);$this.addClass('active').siblings().removeClass('active');$this.parent().siblings('.mdd_list').find("li:eq("+$this.index()+")").show().siblings().hide();break;case"span":$(this).hide();break;}},"mousedown":function(e){e=e||window.event;if(e.stopPropagation)
e.stopPropagation();else
e.cancelBubble=true;}});var $btn_lv_search=$('.btn_lv_search');$(".search_hotel_keyword").bind({"click":function(e){e=e||window.event;if(e.stopPropagation)
e.stopPropagation();else
e.cancelBubble=true;var target=e.target||e.srcElement;if(target.tagName.toLowerCase()=="a"){var text=$(target).text();if($('body').hasClass('home')){$("input:text[active]").val(text).css('color','#333');}else{$("input:text[active]").val(text).removeClass("des_tip");$btn_lv_search.attr("data-dropdownlist","true");$btn_lv_search.trigger('click');}
$(this).hide();}},"mousedown":function(e){e=e||window.event;if(e.stopPropagation)
e.stopPropagation();else
e.cancelBubble=true;}});$('.js_searchbox,.js_s_city_btn').click(function(e){e.stopPropagation();$homeHotWord.hide();$(".complete_box,.search_hot_tips").hide();$search_type.removeClass("search_type_show");if($(this).siblings('.lv_city_down').is(':hidden')){$search_city.addClass('search_city_hover');$(".search_type_list:visible").find(".search-station-cities .nav-tabs li").eq(0).click();}else{$search_city.removeClass('search_city_hover');}
$(".lv_s_city .search-station-cities .nav-tabs").each(function(index,ele){var $ele=$(ele);$ele.find("li").eq(0).click();})});try{$(".lv_search").focus(function(){$search_city.removeClass('search_city_hover');$search_type.removeClass("search_type_show");}).searchComplete();$(".lv_search2").focus(function(){$search_city.removeClass('search_city_hover');$search_type.removeClass("search_type_show");}).searchComplete_hotelAddon();}catch(e){}
var oldValue=['请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题或景区名称','请输入航线、邮轮公司或邮轮名称','请输入您需要签证的国家/地区','请输入目的地、主题、或关键词'];var lv_search=$('.form_search .lv_search');for(var i=0;i<lv_search.length;i++){lv_search.eq(i).attr('num',i);}
$(".btn_lv_search").bind("click",function(e){for(var i=0;i<oldValue.length;i++){var $input=lv_search.eq(i);if($input.val()==oldValue[i]&&!$input.is(':hidden')){$input.css('color','#333');$input.addClass("empty");return;}}
var type=$(".js_btn_type b").attr("data-type");if(type.toLowerCase()=="hotel")
{var $startDate=(".search_type_list:visible #startDate");var $endDate=$(".search_type_list:visible #endDate");if($startDate.length&&$endDate.length){var startDate=$("#startDate").val().replace(/-/g,"");var endDate=$("#endDate").val().replace(/-/g,"");var d=new Date();d.setTime(d.getTime()+30*60*1000);var expires="expires="+d.toGMTString();var start_Date=startDate.substring(0,4)+"-"
+startDate.substring(4,6)+"-"+startDate.substring(6);var end_Date=endDate.substring(0,4)+"-"+endDate.substring(4,6)
+"-"+endDate.substring(6);document.cookie="startDate_cookie ="+start_Date+";"+expires
+";path=/"+";domain=.lvmama.com";document.cookie="endDate_cookie ="+end_Date+";"+expires
+";path=/"+";domain=.lvmama.com";}
e.stopPropagation();$.searchComplete_hotelAddon.searchAndJump({startDateStr:start_Date,endDateStr:end_Date});}else{searchStatistics();$.searchComplete.searchAndJump(null,null,null,"button");}});$(".search_hot_tips").bind("click",function(e){e.stopPropagation();var target=e.target||e.srcElement;if(target.tagName.toLowerCase()==="a"){var place=$(target).html();$.searchComplete.searchAndJump(null,null,place,"hotTips");}});});(function($){$.searchType={showType:function(type){var typeNum=0;if(type=='GROUP'){typeNum=1;}else if(type=='SCENICTOUR'){typeNum=2;}else if(type=='FREETOUR'){typeNum=3;}else if(type=='LOCAL'){typeNum=4;}else if(type=='TICKET'){typeNum=5;}else if(type=='HOTEL'){typeNum=6;}else if(type=='SHIP'){typeNum=7;}else if(type=='VISA'){typeNum=8;}else if(type=='LOCALPLAY'){typeNum=9;}
var $search_type_tab=$('.search_type_tab'),typeIndex=$search_type_tab.find('li').eq(typeNum),typeText=typeIndex.text(),typeData=typeIndex.attr('data-type');typeIndex.hide().siblings().show();$('.search_type_list').eq(typeNum).show().siblings().hide();$('.js_btn_type').find('b').text(typeText).attr('data-type',typeData);$search_type_tab.parents(".lv_search_box").first().attr("data-search-type",typeData)}}})(jQuery);$(function(){$('.lv_city_btn').click(function(e){e.stopPropagation();if($(this).parent().siblings('.lv_city_down').is(':hidden')){$('.lv_city_box').addClass('lv_city_hover');}else{$('.lv_city_box').removeClass('lv_city_hover');};})
$('.lv_nav_hot').hover(function(){$(this).addClass('lv_nav_hot_hover');},function(){$(this).removeClass('lv_nav_hot_hover');});var $box=$("div.js_box");$("div.Js_LISTFIRST a").live('click',function(e){e.stopPropagation();var $body=$('body'),$this=$(this),citypinyin=$this.attr('pinyin');var provinceId=$this.attr("provinceId");var cityId=$this.attr("cityId");var zhandianName=$this.text();if($(this).hasClass('city_stop')){return;}
if($body.hasClass('ticket_city')){$.xcookie.setCookie('_ticket_ip_province_place_id',provinceId,{path:'/',expires:10,domain:'lvmama.com'});$.xcookie.setCookie('_ticket_ip_city_place_id',cityId,{path:'/',expires:10,domain:'lvmama.com'});$.xcookie.setCookie('_ticket_ip_city_name',zhandianName,{path:'/',expires:10,domain:'lvmama.com'});}else if(!/dujiaseolist/.test($body.attr('id'))){$.xcookie.setCookie('_ip_province_place_id',provinceId,{path:'/',expires:10,domain:'lvmama.com'});$.xcookie.setCookie('_ip_city_place_id',cityId,{path:'/',expires:10,domain:'lvmama.com'});$.xcookie.setCookie('_ip_city_name',zhandianName,{path:'/',expires:10,domain:'lvmama.com'});};if(!$body.hasClass('search_list')&&!$body.hasClass('d_list')){var _form=$("<form method=\"post\" >"+"<input type=\"hidden\" name=\"provinceId\" value=\""+provinceId+"\" />"+"<input type=\"hidden\" name=\"cityId\" value=\""+cityId+"\" />"+"<input type=\"hidden\" name=\"stationName\" value=\""+zhandianName+"\" /></form>");$box.prepend(_form);_form.submit();}else{var url='';if(/dujiaseolist/.test($body.attr('id'))){var dataid=$(this).attr('data-id');if(!dataid)return;url=dujiaUrl(dataid);}else{var cityid=$(this).attr("cityid");if(!cityid)
return;if(cityid=="F20001"||cityid=="F10001"){cityid=cityid.replace("F","");}
url=rebuildUrl(cityid)}
if(url){window.location.href=url;}}});$('.Js_LISTFIRST').live('click',function(e){e.stopPropagation();});function dujiaUrl(dataid){var typeOfSeo=["route","group","local","around","freetour",'scenictour','play','ziyouxing'];var url=window.location.href;var newUrl=url;for(var i=0;i<typeOfSeo.length;i++){var thisType="/"+typeOfSeo[i];if(url.indexOf(thisType)>=0){var parrten=new RegExp('('+thisType+')([^\?]+)'),urltext=url.replace(parrten,'$1');newUrl=urltext+'-H'+dataid;break;}else if(i==typeOfSeo.length-1){newUrl=url.split('#')[0]+"/route-H"+dataid;}};return newUrl;}
function rebuildUrl(placeid){var tempAnchor=null,tempParam=null,partten=null;var typeOfLink=["s.lvmama","ticket.lvmama"];var url=window.location.href;if(url.match(/K\d+/))
url=url.replace(/K\d+/,"K"+placeid);else{if(url.match(/#/)){tempAnchor=url.match(/#[\s\S]*/)[0];url=url.replace(/#[\s\S]*/,"");}
if(url.match(/\?/)){tempParam=url.match(/\?[\s\S]*/)[0];url=url.replace(/\?[\s\S]*/,"");}
if(url.indexOf(typeOfLink[0])>=0){partten=new RegExp("[A-Z][0-9]*");if(partten.test(url)){url=url.replace(/\/$/,"");}else{partten=new RegExp("\/$");if(!partten.test(url))
url+="/";}
url+="K"+placeid;}else if(url.indexOf(typeOfLink[1])>=0){partten=new RegExp("tf\-");if(partten.test(url)){url=url.replace(/\/$/,"");url+="K"+placeid;}
else{partten=new RegExp("\/$");if(!partten.test(url))
url+="/";url+="tf-K"+placeid;}}else{return null;}
if(tempParam)
url+=tempParam;if(tempAnchor)
url+=tempAnchor;}
return url;}
var $search_box=$("div.js_searchbox");$("div.js_LISTSECOND a").live('click',function(){var placeName=$(this).attr("data-name");var placeCode=$(this).attr("data-code");var placeId=$(this).attr("data-id");$search_box.attr("data-city-name",placeName);$search_box.attr("data-city-id",placeId);$search_box.attr("data-city-code",placeCode);$('#js_cityId').html(placeName);});$('.dropdown').hover(function(){$(this).addClass('dropdown_hover');},function(){$(this).removeClass('dropdown_hover');});$('.lv_my_box').hover(function(){$(this).addClass('lv_my_hover');},function(){$(this).removeClass('lv_my_hover');});showPnavDown();if($('body').hasClass('freetour_zyx')){$('#freetour .down_nav a:first').addClass('active');}
if($('body').hasClass('freetour_gty')){$('#freetour .down_nav a:last').addClass('active');}
$('.pnav_down').hover(function(){$('.pnav_down').removeClass('hover_this');$(this).addClass('hover_this');pnavDown($(this));},function(){$('.pnav_down').removeClass('hover_this');showPnavDown();});function showPnavDown(){var $bodyClass=$('body').attr('class');/around/.test($bodyClass)&&pnavDown($('#around'));/localfun/.test($bodyClass)&&pnavDown($('#abroad'));$('body').hasClass('visa')&&pnavDown($('#abroad'));/wifi_list/.test($bodyClass)&&pnavDown($('#abroad'));/abroad/.test($bodyClass)&&pnavDown($('#abroad'));/hotel/.test($bodyClass)&&(!/search_list/.test($bodyClass))&&pnavDown($('#hotel'));/flight_fit/.test($bodyClass)&&pnavDown($('#destroute'));/super-free/.test($bodyClass)&&pnavDown($('#destroute'));/flight_gnjp/.test($bodyClass)&&pnavDown($('#flight'));/custom_personal/.test($bodyClass)&&pnavDown($('#custom'));/custom_company/.test($bodyClass)&&pnavDown($('#custom'));/lvyou/.test($bodyClass)&&pnavDown($('#lvyou'));/destroute/.test($bodyClass)&&pnavDown($('#destroute'));/ticket/.test($bodyClass)&&pnavDown($('#ticket'));/zijia/.test($bodyClass)&&pnavDown($('#zijia'));/liner/.test($bodyClass)&&pnavDown($('#liner'));/QA/.test($bodyClass)&&pnavDown($('#lvyou'));/ft-airline/.test($bodyClass)&&pnavDown($('#flight'));/flight_international/.test($bodyClass)&&pnavDown($('#flight'));}
function pnavDown(nav){nav.addClass('hover_this');if(nav.length!=0){var ThisL=nav.offset().left,navL=$('.lv_nav').offset().left,navW=$('.lv_nav').width(),winW=$('body').width(),pW=nav.find('p').width()/2,thisW=nav.width()/2,downL=ThisL+thisW;nav.find('.down_nav_t').css('left',downL-5);if(navL>downL-pW){downL=navL+pW}else if(navL+navW<ThisL+pW+thisW){downL=navL+navW-pW-1;}
nav.find('.down_nav').css({'width':winW,'left':-ThisL}).find('p').css({'left':downL-pW});}}
$('.btn_links').live('click',function(){if($(this).hasClass('links_up')){$(this).removeClass('links_up').html('更多<i class="icon_arrow"></i>').parent().css('height',22);}else{$(this).addClass('links_up').html('收起<i class="icon_arrow"></i>').parent().css('height','auto');}});$('.links_list').each(function(){var find_dd=$(this).find('dd');if(find_dd.height()>30){find_dd.css('height',22);find_dd.append('<span class="btn_links">更多<i class="icon_arrow"></i></span>')}});if($('#goTopBtn').length==0){var $body=$("body"),inveLink;if(!$body.hasClass('home')){var rightBottomDom="<div id='right-bottom-tools'>";inveLink=null;if($(".crumbs-link,.nav_mb_list").length>0){inveLink="https://wj.qq.com/s/1293296/f5ae";}
if($body.hasClass('search_list')){inveLink="https://wj.qq.com/s/1293296/f5ae";}
if(($body).hasClass('lv_newhome')){inveLink="https://wj.qq.com/s/1293296/f5ae";}
if($body.hasClass('paysuccess-hotel')){inveLink="http://wj.qq.com/s/929977/a20d";}
if($body.hasClass('lvyou')&&/www\.lvmama\.com\/comment/.test(window.location.href)){inveLink="http://wj.qq.com/s/929977/a20d";}
if(inveLink&&$("#sideInve").length==0){rightBottomDom+=('<a id="sideInve" target="_blank" href="'+inveLink+'" title="有奖问卷"></a>');}
rightBottomDom+=('<a id="goTopBtn" target="_self" href="javascript:;" title="返回顶部"></a><a href="http://www.lvmama.com/userCenter/user/transItfeedBack.do" target="_blank" id="Feedback" title="意见反馈"></a>');rightBottomDom+="</div>";$body.append(rightBottomDom);if($body.hasClass('ticketChannel')){$("#right-bottom-tools").append('<span id="rbtApplet" class="JS_appletPop" tip-content="<img src=\'http://pic.lvmama.com/img/v6/applet_poptip_ticket.png\' width=\'160\' height=\'184\'>"></span>');}
if($body.hasClass('hotel')){$("#right-bottom-tools").append('<span id="rbtApplet" class="JS_appletPop" tip-content="<img src=\'http://pic.lvmama.com/img/v6/applet_poptip_hotel.png\' width=\'160\' height=\'184\'>"></span>');}
var gotop=true;var isie6=!-[1,]&&!window.XMLHttpRequest;$(window).scroll(function(){if(gotop==true){gotop=false;var timer=setTimeout(show,300);}
function show(){var nowT=$(document).scrollTop();if(nowT>200){$('#goTopBtn,#Feedback,#FeedbackNew').css({'visibility':'visible'}).addClass('goTopShow');if(isie6){$('#goTopBtn,#Feedback,#FeedbackNew').show();}}else{$('#goTopBtn,#Feedback,#FeedbackNew').css({'visibility':'hidden'}).removeClass('goTopShow');if(isie6){$('#goTopBtn,#Feedback,#FeedbackNew').hide();}};gotop=true;};});};}
$(document).on('click','#goTopBtn',function(){$(document).scrollTop(0);});$(document).on('mouseenter','#rbtWeixin',function(){$(".rbtWxCode").show();});$(document).on('mouseleave','#rbtWeixin',function(){$(".rbtWxCode").hide();});function loginCas(){window.location="http://login.lvmama.com/nsso/login?service="+encodeURIComponent(document.location)};function xhshowtips(){$('.tapbar-inner').append('<span id="stips" class="stips"><i class="sarrow"></i>验证邮箱可获300积分，<a href="http://my.lvmama.com/myspace/userinfo.do" hidefocus="false">立即验证</a><i class="sclose">×</i></span>');var useremail="";try{var userCookie=decodeURIComponent(document.cookie).match(/EMV\=.+/)+"";useremail=userCookie.replace('EMV=','');if(useremail.indexOf(";")>=0){useremail=useremail.substring(0,useremail.indexOf(";"));}else{useremail=useremail.substring(0,useremail.length);}}catch(e){var userCookie=unescape(document.cookie).match(/EMV\=.+/)+"";useremail=userCookie.replace('EMV=','');useremail=useremail.substring(0,useremail.indexOf(";"));if(useremail.indexOf(";")>=0){useremail=useremail.substring(0,useremail.indexOf(";"));}else{useremail=useremail.substring(0,useremail.length);}}finally{if(useremail=='U'||useremail=='E'){return true;}else{return false;}}}
function loadUserName(){var username="";try{username=decodeURIComponent(document.cookie.match(/UN\=(.+)%5E%21%5E/));}catch(e){username=decodeURI(document.cookie.match(/UN\=(.+)%5E%21%5E/));}
var _message_num=0;$('#J_login').html(username!="null"?"<span class='vip_name'><a href='//my.lvmama.com/myspace/index'>"+(username.split(',')[1]?username.split(',')[1]:'')+"</a></span><a href='//my.lvmama.com/myspace/letter/message' class='lv_link lv_link2'><i class='lv_icon icon_xx'></i>\u6D88\u606F</a><a class='lv_link lv_link2' rel='nofollow' href='http://login.lvmama.com/nsso/logout'>[\u9000\u51fa]</a>":"<a id='top_login' href='javascript:;'>\u8bf7\u767b\u5f55</a><a href='http://login.lvmama.com/nsso/register/registering.do' rel='nofollow'>\u514d\u8d39\u6ce8\u518c</a>");if(username!="null"){var _message_url="http://www.lvmama.com/message/index.php?r=PrivatePm/GetUnreadCount&callback=?";$.getJSON(_message_url,function(json){if(json.code==200){$("#message-num").html(json.data.unreadCount);}});}
if(username!="null"&&xhshowtips()){$('#stips').show();}else{$('#stips').hide();}};loadUserName();$('#top_login').live('click',function(){loginCas();});GetTele();function GetTele(){var tele=top.window.location.search.match(/tele=+[0-9]{3,4}/);if(tele!==null){var tele=tele[0].replace('tele=','');$.ajax({url:"http://www.lvmama.com/teleChannel/doTeleChannelShowDifferntHotLine.do?tele="+tele,type:'get',async:false,dataType:"jsonp",jsonp:"jsoncallback",jsonpCallback:"success_jsoncallback",success:function(json){$("#onlyOne").find('span').html(json.success);$("#onlyTwo").html(json.success);},error:function(){$("#onlyOne").find('span').html("1010-6060");$("#onlyTwo").html("1010-6060");}});}else{var teleCookie=$.xcookie.getCookie('tele');if(teleCookie){$("#onlyOne").find('span').html(teleCookie);$("#onlyTwo").html(teleCookie);}else{$("#onlyOne").find('span').html("1010-6060");$("#onlyTwo").html("1010-6060");}}};});(function($){$.xcookie={cookie:function(name,value,options){var path=options.path?'; path='+(options.path):'',domain=options.domain?'; domain='+(options.domain):'',secure=options.secure?'; secure':'',expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');},setCookie:function(name,value,options){var options=options||{};this.cookie(name,value,options);},getCookie:function(name){var cookieValue=null,doc=document;if(doc.cookie&&doc.cookie!=''){var cookies=doc.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=$.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;},deleteCookie:function(name,options){var options=options||{},value='';options.expires=-1;this.cookie(name,value,options);}}})(jQuery);$(function(){$.expr[":"].loading=function(elt,index){var height=$(window).height()+200;var top=$(elt).offset().top;return top>$(window).scrollTop()&&top<(height+$(window).scrollTop())};$.expr[":"].loaded=function(elt,index){var height=$(window).height()+200;var top=$(elt).offset().top;return top<height};var loadImg=function(){var This=$(this);if(!This.is(':hidden')){var to_sc=This.attr('to_sc'),js_sc=This.attr('js_sc'),to=This.attr('to');if(to_sc){This.removeAttr('to_sc');var img=new Image().src=to_sc;}
if(!js_sc){this.src=This.css({'opacity':0}).attr("to");This.removeAttr("to");if(This.load()){This.animate({'opacity':1},300,function(){This.removeAttr('style')});}
this.onerror=function(){this.src="http://pic.lvmama.com/img/cmt/img_120_60.jpg"}}}};var imgTimeId=null;var scrollImgLoading=function(){clearTimeout(imgTimeId);imgTimeId=setTimeout(function(){$("img[to]:loading").each(function(){loadImg.call(this)});if($("img[to]").size()==0){$(window).unbind('scroll',scrollImgLoading)}},200)};$(window).bind('scroll',scrollImgLoading);$("img[to]:loaded").each(function(){loadImg.call(this)});setTimeout(function(){$("img[to]:loaded").each(function(){loadImg.call(this)})},1000);});$(function(){var lv_city='<dl class="city_down_list">'
+'<dt>华北</dt>'
+'<dd>'
+'<a  cityId="110000" provinceId="110000" pinyin="beijin"  href="#">北京</a> '
+'<a  cityId="120000" provinceId="120000" pinyin="tianjin"  href="#">天津</a> '
+'<a  cityId="140100" provinceId="140000" pinyin="taiyuan"  href="#">太原</a> '
+'<a  cityId="130200" provinceId="130000" pinyin="tangshan"  href="#">唐山</a> '
+'<a  cityId="150100" provinceId="150000" pinyin="huhehaote"  href="#">呼和浩特</a> '
+'<a  cityId="150200" provinceId="150000" pinyin="baotou"  href="#">包头</a> '
+'<a  cityId="130100" provinceId="130000" pinyin="shijiazhuang"  href="#">石家庄</a> '
+'<a  cityId="150700" provinceId="150000" pinyin="hulunbeier"  href="#">呼伦贝尔</a> '
+'<a  cityId="140200" provinceId="140000" pinyin="datong"  href="#">大同</a> '
+'<a  cityId="370100" provinceId="370000" pinyin="jinan"  href="#">济南</a>'
+'<a  cityId="370200" provinceId="370000" pinyin="qingdao"  href="#">青岛</a>'
+'<a  cityId="371100" provinceId="370000" pinyin="rizhao"  href="#">日照</a> '
+'<a  cityid="370600" provinceid="370000" pinyin="yantai"  href="#">烟台</a>'
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>华东</dt>'
+'<dd>'
+'<a  cityId="310000" provinceId="310000" pinyin="shanghai"  href="#">上海</a> '
+'<a  cityId="320100" provinceId="320000" pinyin="nanjing" href="#">南京</a> '
+'<a  cityId="330100" provinceId="330000" pinyin="hangzhou" href="#">杭州</a> '
+'<a  cityId="340100" provinceId="340000" pinyin="hefei" href="#">合肥</a> '
+'<a  cityId="350200" provinceId="350000" pinyin="xiamen" href="#">厦门</a> '
+'<a  cityId="360100" provinceId="360000" pinyin="nanchang" href="#">南昌</a> '
+'<a  cityId="320500" provinceId="320000" pinyin="suzhou" href="#">苏州</a> '
+'<a  cityId="320200" provinceId="320000" pinyin="wuxi" href="#">无锡</a> '
+'<a  cityId="330200" provinceId="330000" pinyin="ningbo" href="#">宁波</a> '
+'<a  cityId="320400" provinceId="320000" pinyin="changzhou" href="#">常州</a> '
+'<a  cityId="330400" provinceId="330000" pinyin="jiaxing" href="#">嘉兴</a> '
+'<a  cityId="320600" provinceId="320000" pinyin="nantong" href="#">南通</a> '
+'<a  cityId="321000" provinceId="320000" pinyin="yangzhou" href="#">扬州</a> '
+'<a  cityId="321100" provinceId="320000" pinyin="zhenjiang" href="#">镇江</a> '
+'<a  cityId="330600" provinceId="330000" pinyin="shaoxing" href="#">绍兴</a> '
+'<a  cityId="330300" provinceId="330000" pinyin="wenzhou" href="#">温州</a> '
+'<a  cityId="330700" provinceId="330000" pinyin="jinhua" href="#">金华</a> '
+'<a  cityId="331000" provinceId="330000" pinyin="taizhou" href="#">台州</a> '
+'<a  cityId="320900" provinceId="320000" pinyin="yancheng" href="#">盐城</a> '
+'<a  cityId="370900" provinceId="370000" pinyin="taian" href="#">泰安</a> '
+'<a  cityId="340200" provinceId="340000" pinyin="wuhu" href="#">芜湖</a> '
+'<a  cityId="341000" provinceId="340000" pinyin="huangshan" href="#">黄山</a> '
+'<a  cityId="341200" provinceId="340000" pinyin="fuyang" href="#">阜阳</a> '
+'<a  cityId="350100" provinceId="350000" pinyin="fuzhou" href="#">福州</a> '
+'<a  cityId="360700" provinceId="360000" pinyin="ganzhou" href="#">赣州</a> '
+'<a  cityId="360900" provinceId="360000" pinyin="yichun" href="#">宜春</a> '
+'<a  cityId="361130" provinceId="360000" pinyin="wuyuan" href="#">婺源</a> '
+'<a  cityId="321200" provinceId="320000" pinyin="tazhou" href="#">泰州</a> '
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>东北</dt>'
+'<dd><a  cityId="210100" provinceId="210000" pinyin="shenyang"  href="#">沈阳</a> '
+'<a  cityId="210200" provinceId="210000" pinyin="dalian"  href="#">大连</a> '
+'<a  cityId="230100" provinceId="230000" pinyin="haerbin"  href="#">哈尔滨</a> '
+'<a  cityId="220100" provinceId="220000" pinyin="changchun"  href="#">长春</a> '
+'<a  cityId="230200" provinceId="230000" pinyin="qiqihaer"  href="#">齐齐哈尔</a> '
+'<a  cityId="222400" provinceId="220000" pinyin="yanbian"  href="#">延边</a> '
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>华中</dt>'
+'<dd>'
+'<a  cityId="420100" provinceId="420000" pinyin="wuhan"  href="#">武汉</a> '
+'<a  cityId="410300" provinceId="410000" pinyin="luoyang"  href="#">洛阳</a> '
+'<a  cityId="430800" provinceId="430000" pinyin="zhangjiajie"  href="#">张家界</a> '
+'<a  cityId="430100" provinceId="430000" pinyin="changsha"  href="#">长沙</a> '
+'<a  cityId="410100" provinceId="410000" pinyin="zhengzhou"  href="#">郑州</a> '
+'<a  cityId="410800" provinceId="410000" pinyin="jiaozuo"  href="#">焦作</a> '
+'<a  cityId="420500" provinceId="420000" pinyin="yichang"  href="#">宜昌</a> '
+'<a  cityId="429021" provinceId="420000" pinyin="shennongjia"  href="#">神农架</a> '
+'<a  cityid="411300" provinceid="410000" pinyin="nanyang"  href="#">南阳</a>'
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>华南</dt>'
+'<dd>'
+'<a  cityId="440100" provinceId="440000" pinyin="guangzhou" href="#">广州</a> '
+'<a  cityId="440300" provinceId="440000" pinyin="shenzhen" href="#">深圳</a> '
+'<a  cityId="450100" provinceId="450000" pinyin="nanning" href="#">南宁</a> '
+'<a  cityId="450300" provinceId="450000" pinyin="guilin" href="#">桂林</a> '
+'<a  cityId="460100" provinceId="460000" pinyin="haikou" href="#">海口</a> '
+'<a  cityId="460200" provinceId="460000" pinyin="sanya" href="#">三亚</a> '
+'<a  cityId="440400" provinceId="440000" pinyin="zhuhai" href="#">珠海</a> '
+'<a  cityId="441800" provinceId="440000" pinyin="qingyuan" href="#">清远</a> '
+'<a  cityId="441900" provinceId="440000" pinyin="dongguan" href="#">东莞</a> '
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>西南</dt>'
+'<dd>'
+'<a  cityId="510100" provinceId="510000" pinyin="chengdu" href="#">成都</a> '
+'<a  cityId="500108" provinceId="500000" pinyin="chongqin" href="#">重庆</a> '
+'<a  cityId="530100" provinceId="530000" pinyin="kunming" href="#">昆明</a> '
+'<a  cityId="530700" provinceId="530000" pinyin="lijiang" href="#">丽江</a> '
+'<a  cityId="532900" provinceId="530000" pinyin="dali" href="#">大理</a> '
+'<a  cityId="532800" provinceId="530000" pinyin="xishuangbanna" href="#">西双版纳</a> '
+'<a  cityId="530001" provinceId="530000" pinyin="xianggelila" href="#">香格里拉</a> '
+'<a  cityId="520100" provinceId="520000" pinyin="guiyang" href="#">贵阳</a> '
+'<a  cityId="540100" provinceId="540000" pinyin="lasa" href="#">拉萨</a> '
+'<a  cityId="513225" provinceId="510000" pinyin="jiuzhaigou" href="#">九寨沟</a> '
+'<a  cityId="513401" provinceId="510000" pinyin="xichang" href="#">西昌</a> '
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>西北</dt>'
+'<dd>'
+'<a  cityId="610100" provinceId="610000" pinyin="xian" href="#">西安</a> '
+'<a  cityId="640100" provinceId="640000" pinyin="yinchuan" href="#">银川</a> '
+'<a  cityId="630100" provinceId="630000" pinyin="xining" href="#">西宁</a> '
+'<a  cityId="650100" provinceId="650000" pinyin="wulumuqi" href="#">乌鲁木齐</a> '
+'<a  cityId="620100" provinceId="620000" pinyin="lanzhou" href="#">兰州</a> '
+'<a  cityId="620200" provinceId="620000" pinyin="jiayuguan" href="#">嘉峪关</a> '
+'<a  cityId="610800" provinceId="610000" pinyin="yulin" href="#">榆林</a> '
+'<a  cityId="610600" provinceId="610000" pinyin="yanan" href="#">延安</a> '
+'<a  cityId="653100" provinceId="650000" pinyin="kashi" href="#">喀什</a> '
+'<a  cityId="654321" provinceId="650000" pinyin="kanasi" href="#">喀纳斯</a> '
+'</dd></dl>'
+'<dl class="city_down_list">'
+'<dt>港澳台</dt>'
+'<dd>'
+'<a  cityId="F10001" provinceId="F10000"  pinyin="xianggang"  href="#">中国香港</a> '
+'<a  cityId="F20001" provinceId="F20000"  pinyin="aomen"  href="#">中国澳门</a> '
+'</dd></dl>';if(!$('body').hasClass('ticket_city')){$('.Js_LISTFIRST').append(lv_city);}
var chufa_city='<div class="search_city_hot cfd_hot" >'
+' <a href="javascript:;" data-code="" data-id="8" data-name="">全国</a>'
+' <a href="javascript:;" data-code="SH" data-id="9" data-name="上海">上海</a>'
+' <a href="javascript:;" data-code="SZ" data-id="60" data-name="苏州">苏州</a>'
+' <a href="javascript:;" data-code="HZ" data-id="69" data-name="杭州">杭州</a>'
+' <a href="javascript:;" data-code="BJ" data-id="13" data-name="北京">北京</a>'
+' <a href="javascript:;" data-code="TY" data-id="100" data-name="太原">太原</a>'
+' <a href="javascript:;" data-code="GZ" data-id="322" data-name="广州">广州</a>'
+' <a href="javascript:;" data-code="CD" data-id="258" data-name="成都">成都</a>'
+' <a href="javascript:;" data-code="ZQ" data-id="31" data-name="重庆">重庆</a>'
+' <a href="javascript:;" data-code="SY" data-id="257" data-name="三亚">三亚</a>'
+' <a href="javascript:;" data-code="CZ" data-id="59" data-name="常州">常州</a>'
+' <a href="javascript:;" data-code="HZ" data-id="73" data-name="湖州">湖州</a>'
+' <a href="javascript:;" data-code="QD" data-id="175" data-name="青岛">青岛</a>'
+' <a href="javascript:;" data-code="TJ" data-id="14" data-name="天津">天津</a>'
+' <a href="javascript:;" data-code="SZ" data-id="324" data-name="深圳">深圳</a>'
+' <a href="javascript:;" data-code="KM" data-id="233" data-name="昆明">昆明</a>'
+' <a href="javascript:;" data-code="HK" data-id="221" data-name="海口">海口</a>'
+' <a href="javascript:;" data-code="NJ" data-id="56" data-name="南京">南京</a>'
+' <a href="javascript:;" data-code="JX" data-id="72" data-name="嘉兴">嘉兴</a>'
+' <a href="javascript:;" data-code="NT" data-id="61" data-name="南通">南通</a>'
+' <a href="javascript:;" data-code="WX" data-id="57" data-name="无锡">无锡</a>'
+' <a href="javascript:;" data-code="XA" data-id="256" data-name="西安">西安</a>'
+'</div>'
+'<dl class="city_down_list">'
+' <dt>A-G</dt>'
+' <dd>'
+'  <a href="javascript:;" data-code="AM" data-id="41" data-name="澳门">澳门</a>'
+'  <a href="javascript:;" data-code="ALT" data-id="380" data-name="阿勒泰">阿勒泰</a>'
+'  <a href="javascript:;" data-code="AK" data-id="338" data-name="安康">安康</a>'
+'  <a href="javascript:;" data-code="BJ" data-id="13" data-name="北京">北京</a>'
+'  <a href="javascript:;" data-code="BT" data-id="112" data-name="包头">包头</a>'
+'  <a href="javascript:;" data-code="BH" data-id="211" data-name="北海">北海</a>'
+'  <a href="javascript:;" data-code="BZ" data-id="189" data-name="滨州">滨州</a>'
+'  <a href="javascript:;" data-code="BJ" data-id="332" data-name="宝鸡">宝鸡</a>'
+'  <a href="javascript:;" data-code="BB" data-id="82" data-name="蚌埠">蚌埠</a>'
+'  <a href="javascript:;" data-code="CS" data-id="308" data-name="长沙">长沙</a>'
+'  <a href="javascript:;" data-code="CZ" data-id="59" data-name="常州">常州</a>'
+'  <a href="javascript:;" data-code="CC" data-id="137" data-name="长春">长春</a>'
+'  <a href="javascript:;" data-code="CD" data-id="258" data-name="成都">成都</a>'
+'  <a href="javascript:;" data-code="ZQ" data-id="31" data-name="重庆">重庆</a>'
+'  <a href="javascript:;" data-code="CZ" data-id="146" data-name="滁州">滁州</a>'
+'  <a href="javascript:;" data-code="CD" data-id="314" data-name="常德">常德</a>'
+'  <a href="javascript:;" data-code="DL" data-id="245" data-name="大理">大理</a>'
+'  <a href="javascript:;" data-code="DZ" data-id="272" data-name="达州">达州</a>'
+'  <a href="javascript:;" data-code="DG" data-id="202" data-name="东莞">东莞</a>'
+'  <a href="javascript:;" data-code="DL" data-id="124" data-name="大连">大连</a>'
+'  <a href="javascript:;" data-code="DY" data-id="178" data-name="东营">东营</a>'
+'  <a href="javascript:;" data-code="DZ" data-id="187" data-name="德州">德州</a>'
+'  <a href="javascript:;" data-code="DT" data-id="101" data-name="大同">大同</a>'
+'  <a href="javascript:;" data-code="FS" data-id="327" data-name="佛山">佛山</a>'
+'  <a href="javascript:;" data-code="FY" data-id="147" data-name="阜阳">阜阳</a>'
+'  <a href="javascript:;" data-code="FZ" data-id="154" data-name="福州">福州</a>'
+'  <a href="javascript:;" data-code="FZ" data-id="172" data-name="抚州">抚州</a>'
+'  <a href="javascript:;" data-code="GZ" data-id="322" data-name="广州">广州</a>'
+'  <a href="javascript:;" data-code="GL" data-id="209" data-name="桂林">桂林</a>'
+'  <a href="javascript:;" data-code="GY" data-id="264" data-name="广元">广元</a>'
+'  <a href="javascript:;" data-code="GY" data-id="224" data-name="贵阳">贵阳</a>'
+'  <a href="javascript:;" data-code="GZ" data-id="169" data-name="赣州">赣州</a>'
+' </dd>'
+'</dl>'
+'<dl class="city_down_list">'
+' <dt>H-N</dt>'
+' <dd>'
+'  <a href="javascript:;" data-code="HZ" data-id="69" data-name="杭州">杭州</a>'
+'  <a href="javascript:;" data-code="HZ" data-id="73" data-name="湖州">湖州</a>'
+'  <a href="javascript:;" data-code="HF" data-id="80" data-name="合肥">合肥</a>'
+'  <a href="javascript:;" data-code="HS" data-id="88" data-name="黄山">黄山</a>'
+'  <a href="javascript:;" data-code="HEB" data-id="43" data-name="哈尔滨">哈尔滨</a>'
+'  <a href="javascript:;" data-code="HHHT" data-id="111" data-name="呼和浩特">呼和浩特</a>'
+'  <a href="javascript:;" data-code="HNBE" data-id="117" data-name="呼伦贝尔">呼伦贝尔</a>'
+'  <a href="javascript:;" data-code="HK" data-id="221" data-name="海口">海口</a>'
+'  <a href="javascript:;" data-code="HZ" data-id="196" data-name="惠州">惠州</a>'
+'  <a href="javascript:;" data-code="HA" data-id="63" data-name="淮安">淮安</a>'
+'  <a href="javascript:;" data-code="HZ" data-id="190" data-name="菏泽">菏泽</a>'
+'  <a href="javascript:;" data-code="HD" data-id="92" data-name="邯郸">邯郸</a>'
+'  <a href="javascript:;" data-code="HS" data-id="99" data-name="衡水">衡水</a>'
+'  <a href="javascript:;" data-code="HZ" data-id="336" data-name="汉中">汉中</a>'
+'  <a href="javascript:;" data-code="HY" data-id="311" data-name="衡阳">衡阳</a>'
+'  <a href="javascript:;" data-code="HB" data-id="85" data-name="淮北">淮北</a>'
+'  <a href="javascript:;" data-code="HG" data-id="46" data-name="鹤岗">鹤岗</a>'
+'  <a href="javascript:;" data-code="JX" data-id="72" data-name="嘉兴">嘉兴</a>'
+'  <a href="javascript:;" data-code="JL" data-id="138" data-name="吉林">吉林</a>'
+'  <a href="javascript:;" data-code="JN" data-id="174" data-name="济南">济南</a>'
+'  <a href="javascript:;" data-code="JZ" data-id="280" data-name="焦作">焦作</a>'
+'  <a href="javascript:;" data-code="JA" data-id="170" data-name="吉安">吉安</a>'
+'  <a href="javascript:;" data-code="JYG" data-id="341" data-name="嘉峪关">嘉峪关</a>'
+'  <a href="javascript:;" data-code="JDZ" data-id="164" data-name="景德镇">景德镇</a>'
+'  <a href="javascript:;" data-code="KM" data-id="233" data-name="昆明">昆明</a>'
+'  <a href="javascript:;" data-code="LS" data-id="79" data-name="丽水">丽水</a>'
+'  <a href="javascript:;" data-code="JH" data-id="75" data-name="金华">金华</a>'
+'  <a href="javascript:;" data-code="JJ" data-id="166" data-name="九江">九江</a>'
+'  <a href="javascript:;" data-code="JX" data-id="45" data-name="鸡西">鸡西</a>'
+'  <a href="javascript:;" data-code="LZ" data-id="261" data-name="泸州">泸州</a>'
+'  <a href="javascript:;" data-code="LS" data-id="249" data-name="拉萨">拉萨</a>'
+'  <a href="javascript:;" data-code="LJ" data-id="238" data-name="丽江">丽江</a>'
+'  <a href="javascript:;" data-code="LY" data-id="186" data-name="临沂">临沂</a>'
+'  <a href="javascript:;" data-code="LYG" data-id="62" data-name="连云港">连云港</a>'
+'  <a href="javascript:;" data-code="LC" data-id="188" data-name="聊城">聊城</a>'
+'  <a href="javascript:;" data-code="LY" data-id="193" data-name="洛阳">洛阳</a>'
+'  <a href="javascript:;" data-code="LD" data-id="320" data-name="娄底">娄底</a>'
+'  <a href="javascript:;" data-code="LZ" data-id="340" data-name="兰州">兰州</a>'
+'  <a href="javascript:;" data-code="LA" data-id="150" data-name="六安">六安</a>'
+'  <a href="javascript:;" data-code="MY" data-id="263" data-name="绵阳">绵阳</a>'
+'  <a href="javascript:;" data-code="MDJ" data-id="52" data-name="牡丹江">牡丹江</a>'
+'  <a href="javascript:;" data-code="NJ" data-id="56" data-name="南京">南京</a>'
+'  <a href="javascript:;" data-code="NT" data-id="61" data-name="南通">南通</a>'
+'  <a href="javascript:;" data-code="NB" data-id="70" data-name="宁波">宁波</a>'
+'  <a href="javascript:;" data-code="NC" data-id="163" data-name="南昌">南昌</a>'
+'  <a href="javascript:;" data-code="NN" data-id="207" data-name="南宁">南宁</a>'
+' </dd>'
+'</dl>'
+'<dl class="city_down_list">'
+' <dt>P-T</dt>'
+' <dd>'
+'  <a href="javascript:;" data-code="QZ" data-id="76" data-name="衢州">衢州</a>'
+'  <a href="javascript:;" data-code="QD" data-id="175" data-name="青岛">青岛</a>'
+'  <a href="javascript:;" data-code="QY" data-id="201" data-name="清远">清远</a>'
+'  <a href="javascript:;" data-code="QQHE" data-id="44" data-name="齐齐哈尔">齐齐哈尔</a>'
+'  <a href="javascript:;" data-code="QZ" data-id="158" data-name="泉州">泉州</a>'
+'  <a href="javascript:;" data-code="RZ" data-id="184" data-name="日照">日照</a>'
+'  <a href="javascript:;" data-code="SH" data-id="9" data-name="上海">上海</a>'
+'  <a href="javascript:;" data-code="SZ" data-id="60" data-name="苏州">苏州</a>'
+'  <a href="javascript:;" data-code="SX" data-id="74" data-name="绍兴">绍兴</a>'
+'  <a href="javascript:;" data-code="SJZ" data-id="89" data-name="石家庄">石家庄</a>'
+'  <a href="javascript:;" data-code="SZ" data-id="324" data-name="深圳">深圳</a>'
+'  <a href="javascript:;" data-code="SY" data-id="257" data-name="三亚">三亚</a>'
+'  <a href="javascript:;" data-code="SM" data-id="157" data-name="三明">三明</a>'
+'  <a href="javascript:;" data-code="SY" data-id="123" data-name="沈阳">沈阳</a>'
+'  <a href="javascript:;" data-code="ST" data-id="326" data-name="汕头">汕头</a>'
+'  <a href="javascript:;" data-code="SQ" data-id="68" data-name="宿迁">宿迁</a>'
+'  <a href="javascript:;" data-code="SR" data-id="173" data-name="上饶">上饶</a>'
+'  <a href="javascript:;" data-code="SYS" data-id="47" data-name="双鸭山">双鸭山</a>'
+'  <a href="javascript:;" data-code="TJ" data-id="14" data-name="天津">天津</a>'
+'  <a href="javascript:;" data-code="TY" data-id="100" data-name="太原">太原</a>'
+'  <a href="javascript:;" data-code="TCX" data-id="2118" data-name="腾冲">腾冲</a>'
+'  <a href="javascript:;" data-code="TZ" data-id="78" data-name="台州">台州</a>'
+'  <a href="javascript:;" data-code="TS" data-id="90" data-name="唐山">唐山</a>'
+'  <a href="javascript:;" data-code="TA" data-id="182" data-name="泰安">泰安</a>'
+'  <a href="javascript:;" data-code="TAZ" data-id="67" data-name="泰州">泰州</a>'
+' </dd>'
+'</dl>'
+'<dl class="city_down_list">'
+' <dt>W-Z</dt>'
+' <dd>'
+'  <a href="javascript:;" data-code="WX" data-id="57" data-name="无锡">无锡</a>'
+'  <a href="javascript:;" data-code="WF" data-id="180" data-name="潍坊">潍坊</a>'
+'  <a href="javascript:;" data-code="WZ" data-id="71" data-name="温州">温州</a>'
+'  <a href="javascript:;" data-code="WH" data-id="81" data-name="芜湖">芜湖</a>'
+'  <a href="javascript:;" data-code="WLMQ" data-id="367" data-name="乌鲁木齐">乌鲁木齐</a>'
+'  <a href="javascript:;" data-code="WH" data-id="291" data-name="武汉">武汉</a>'
+'  <a href="javascript:;" data-code="WN" data-id="334" data-name="渭南">渭南</a>'
+'  <a href="javascript:;" data-code="XA" data-id="256" data-name="西安">西安</a>'
+'  <a href="javascript:;" data-code="XC" data-id="1979" data-name="西昌">西昌</a>'
+'  <a href="javascript:;" data-code="XSBN" data-id="244" data-name="西双版纳">西双版纳</a>'
+'  <a href="javascript:;" data-code="XGLLX" data-id="2210" data-name="香格里拉">香格里拉</a>'
+'  <a href="javascript:;" data-code="XN" data-id="354" data-name="西宁">西宁</a>'
+'  <a href="javascript:;" data-code="XG" data-id="40" data-name="香港">香港</a>'
+'  <a href="javascript:;" data-code="XM" data-id="155" data-name="厦门">厦门</a>'
+'  <a href="javascript:;" data-code="XT" data-id="310" data-name="湘潭">湘潭</a>'
+'  <a href="javascript:;" data-code="XT" data-id="93" data-name="邢台">邢台</a>'
+'  <a href="javascript:;" data-code="XY" data-id="333" data-name="咸阳">咸阳</a>'
+'  <a href="javascript:;" data-code="XZ" data-id="58" data-name="徐州">徐州</a>'
+'  <a href="javascript:;" data-code="YA" data-id="335" data-name="延安">延安</a>'
+'  <a href="javascript:;" data-code="YY" data-id="313" data-name="岳阳">岳阳</a>'
+'  <a href="javascript:;" data-code="YB" data-id="270" data-name="宜宾">宜宾</a>'
+'  <a href="javascript:;" data-code="YB" data-id="145" data-name="延边">延边</a>'
+'  <a href="javascript:;" data-code="YC" data-id="362" data-name="银川">银川</a>'
+'  <a href="javascript:;" data-code="YK" data-id="130" data-name="营口">营口</a>'
+'  <a href="javascript:;" data-code="YC" data-id="171" data-name="宜春">宜春</a>'
+'  <a href="javascript:;" data-code="YC" data-id="64" data-name="盐城">盐城</a>'
+'  <a href="javascript:;" data-code="YC" data-id="294" data-name="宜昌">宜昌</a>'
+'  <a href="javascript:;" data-code="YL" data-id="337" data-name="榆林">榆林</a>'
+'  <a href="javascript:;" data-code="YT" data-id="168" data-name="鹰潭">鹰潭</a>'
+'  <a href="javascript:;" data-code="YZ" data-id="65" data-name="扬州">扬州</a>'
+'  <a href="javascript:;" data-code="ZZ" data-id="309" data-name="株洲">株洲</a>'
+'  <a href="javascript:;" data-code="ZS" data-id="77" data-name="舟山">舟山</a>'
+'  <a href="javascript:;" data-code="ZH" data-id="325" data-name="珠海">珠海</a>'
+'  <a href="javascript:;" data-code="ZS" data-id="203" data-name="中山">中山</a>'
+'  <a href="javascript:;" data-code="ZJJ" data-id="315" data-name="张家界">张家界</a>'
+'  <a href="javascript:;" data-code="ZB" data-id="176" data-name="淄博">淄博</a>'
+'  <a href="javascript:;" data-code="ZZ" data-id="191" data-name="郑州">郑州</a>'
+'  <a href="javascript:;" data-code="ZZ" data-id="159" data-name="漳州">漳州</a>'
+' </dd>'
+'</dl>';$('.js_all_city').append(chufa_city);if(/dujiaseolist/.test($('body').attr('id'))){$('.Js_LISTFIRST').html('<p>热门出发城市</p>'+chufa_city);if(isNaN(fromDest)&&fromDest){$('.lv_city_box .lv_city').html(fromDest).attr('data-city-name',fromDest);}}
var hot_city='<dl class="city_down_list">'
+'<dt>国内</dt>'
+'<dd>'
+' <a href="javascript:;" hidefocus="false">千岛湖</a>'
+' <a href="javascript:;" hidefocus="false">北京</a>'
+' <a href="javascript:;" hidefocus="false">普陀山</a>'
+' <a href="javascript:;" hidefocus="false">黄山</a>'
+' <a href="javascript:;" hidefocus="false">苏州</a>'
+' <a href="javascript:;" hidefocus="false">杭州</a>'
+' <a href="javascript:;" hidefocus="false">厦门</a>'
+' <a href="javascript:;" hidefocus="false">三亚</a>'
+' <a href="javascript:;" hidefocus="false">张家界</a>'
+' <a href="javascript:;" hidefocus="false">桂林</a>'
+' <a href="javascript:;" hidefocus="false">醉温泉</a>'
+' <a href="javascript:;" hidefocus="false">丽江</a>'
+' <a href="javascript:;" hidefocus="false">天目湖</a>'
+' <a href="javascript:;" hidefocus="false">常州</a>'
+' <a href="javascript:;" hidefocus="false">九寨沟</a>'
+' <a href="javascript:;" hidefocus="false">无锡</a>'
+'</dd>'
+'</dl>'
+'<dl class="city_down_list">'
+'<dt>出境</dt>'
+'<dd>'
+' <a href="javascript:;" hidefocus="false">邮轮</a>'
+' <a href="javascript:;" hidefocus="false">香港</a>'
+' <a href="javascript:;" hidefocus="false">韩国</a>'
+' <a href="javascript:;" hidefocus="false">日本</a>'
+' <a href="javascript:;" hidefocus="false">泰国</a>'
+' <a href="javascript:;" hidefocus="false">柬埔寨</a>'
+' <a href="javascript:;" hidefocus="false">长滩岛</a>'
+' <a href="javascript:;" hidefocus="false">巴厘岛</a>'
+' <a href="javascript:;" hidefocus="false">塞班岛</a>'
+' <a href="javascript:;" hidefocus="false">马尔代夫</a>'
+' <a href="javascript:;" hidefocus="false">毛里求斯</a>'
+' <a href="javascript:;" hidefocus="false">欧洲</a>'
+' <a href="javascript:;" hidefocus="false">美国</a>'
+' <a href="javascript:;" hidefocus="false">澳大利亚</a>'
+' <a href="javascript:;" hidefocus="false">迪拜</a>'
+' <a href="javascript:;" hidefocus="false">土耳其</a>'
+'</dd>'
+'</dl>';$('.js_hot_city').append(hot_city);var hotel_city='<li style="display: block;">'
+' <!--热门-->'
+' <a href="javascript:;" data-id="9" hidefocus="false">上海</a>'
+' <a href="javascript:;" data-id="56" hidefocus="false">南京</a>'
+' <a href="javascript:;" data-id="57" hidefocus="false">无锡</a>'
+' <a href="javascript:;" data-id="59" hidefocus="false">常州</a>'
+' <a href="javascript:;" data-id="60" hidefocus="false">苏州</a>'
+' <a href="javascript:;" data-id="65" hidefocus="false">扬州</a>'
+' <a href="javascript:;" data-id="66" hidefocus="false">镇江</a>'
+' <a href="javascript:;" data-id="67" hidefocus="false">泰州</a>'
+' <a href="javascript:;" data-id="69" hidefocus="false">杭州</a>'
+' <a href="javascript:;" data-id="70" hidefocus="false">宁波</a>'
+' <a href="javascript:;" data-id="71" hidefocus="false">温州</a>'
+' <a href="javascript:;" data-id="72" hidefocus="false">嘉兴</a>'
+' <a href="javascript:;" data-id="73" hidefocus="false">湖州</a>'
+' <a href="javascript:;" data-id="74" hidefocus="false">绍兴</a>'
+' <a href="javascript:;" data-id="77" hidefocus="false">舟山</a>'
+' <a href="javascript:;" data-id="78" hidefocus="false">台州</a>'
+' <a href="javascript:;" data-id="79" hidefocus="false">丽水</a>'
+' <a href="javascript:;" data-id="81" hidefocus="false">芜湖</a>'
+' <a href="javascript:;" data-id="87" hidefocus="false">安庆</a>'
+' <a href="javascript:;" data-id="149" hidefocus="false">巢湖</a>'
+' <a href="javascript:;" data-id="152" hidefocus="false">池州</a>'
+' <a href="javascript:;" data-id="154" hidefocus="false">福州</a>'
+' <a href="javascript:;" data-id="155" hidefocus="false">厦门</a>'
+' <a href="javascript:;" data-id="160" hidefocus="false">南平</a>'
+' <a href="javascript:;" data-id="168" hidefocus="false">鹰潭</a>'
+' <a href="javascript:;" data-id="173" hidefocus="false">上饶</a>'
+' <a href="javascript:;" data-id="175" hidefocus="false">青岛</a>'
+' <a href="javascript:;" data-id="322" hidefocus="false">广州</a>'
+' <a href="javascript:;" data-id="324" hidefocus="false">深圳</a>'
+' <a href="javascript:;" data-id="328" hidefocus="false">江门</a>'
+' <a href="javascript:;" data-id="196" hidefocus="false">惠州</a>'
+' <a href="javascript:;" data-id="200" hidefocus="false">阳江</a>'
+' <a href="javascript:;" data-id="201" hidefocus="false">清远</a>'
+' <a href="javascript:;" data-id="1820" hidefocus="false">阳西</a>'
+' <a href="javascript:;" data-id="88" hidefocus="false">黄山</a>'
+' <a href="javascript:;" data-id="138" hidefocus="false">吉林</a>'
+'</li>'
+'<li>'
+' <!--ABCD-->'
+' <a href="javascript:;" data-id="276" hidefocus="false">阿坝藏族羌族自治州</a>'
+' <a href="javascript:;" data-id="87" hidefocus="false">安庆</a>'
+' <a href="javascript:;" data-id="41" hidefocus="false">澳门</a>'
+' <a href="javascript:;" data-id="216" hidefocus="false">百色</a>'
+' <a href="javascript:;" data-id="82" hidefocus="false">蚌埠</a>'
+' <a href="javascript:;" data-id="94" hidefocus="false">保定</a>'
+' <a href="javascript:;" data-id="236" hidefocus="false">保山</a>'
+' <a href="javascript:;" data-id="211" hidefocus="false">北海</a>'
+' <a href="javascript:;" data-id="13" hidefocus="false">北京</a>'
+' <a href="javascript:;" data-id="230" hidefocus="false">毕节地区</a>'
+' <a href="javascript:;" data-id="189" hidefocus="false">滨州</a>'
+' <a href="javascript:;" data-id="97" hidefocus="false">沧州</a>'
+' <a href="javascript:;" data-id="314" hidefocus="false">常德</a>'
+' <a href="javascript:;" data-id="59" hidefocus="false">常州</a>'
+' <a href="javascript:;" data-id="137" hidefocus="false">长春</a>'
+' <a href="javascript:;" data-id="308" hidefocus="false">长沙</a>'
+' <a href="javascript:;" data-id="149" hidefocus="false">巢湖</a>'
+' <a href="javascript:;" data-id="258" hidefocus="false">成都</a>'
+' <a href="javascript:;" data-id="96" hidefocus="false">承德</a>'
+' <a href="javascript:;" data-id="152" hidefocus="false">池州</a>'
+' <a href="javascript:;" data-id="114" hidefocus="false">赤峰</a>'
+' <a href="javascript:;" data-id="146" hidefocus="false">滁州</a>'
+' <a href="javascript:;" data-id="245" hidefocus="false">大理白族自治州</a>'
+' <a href="javascript:;" data-id="124" hidefocus="false">大连</a>'
+' <a href="javascript:;" data-id="48" hidefocus="false">大庆</a>'
+' <a href="javascript:;" data-id="187" hidefocus="false">德州</a>'
+' <a href="javascript:;" data-id="178" hidefocus="false">东营</a>'
+' <a href="javascript:;" data-id="202" hidefocus="false">东莞</a>'
+'</li>'
+'<li>'
+' <!--EFGH-->'
+' <a href="javascript:;" data-id="303" hidefocus="false">恩施土家族苗族自治州</a>'
+' <a href="javascript:;" data-id="327" hidefocus="false">佛山</a>'
+' <a href="javascript:;" data-id="154" hidefocus="false">福州</a>'
+' <a href="javascript:;" data-id="172" hidefocus="false">抚州</a>'
+' <a href="javascript:;" data-id="169" hidefocus="false">赣州</a>'
+' <a href="javascript:;" data-id="322" hidefocus="false">广州</a>'
+' <a href="javascript:;" data-id="224" hidefocus="false">贵阳</a>'
+' <a href="javascript:;" data-id="209" hidefocus="false">桂林</a>'
+' <a href="javascript:;" data-id="43" hidefocus="false">哈尔滨</a>'
+' <a href="javascript:;" data-id="221" hidefocus="false">海口</a>'
+' <a href="javascript:;" data-id="92" hidefocus="false">邯郸</a>'
+' <a href="javascript:;" data-id="336" hidefocus="false">汉中</a>'
+' <a href="javascript:;" data-id="69" hidefocus="false">杭州</a>'
+' <a href="javascript:;" data-id="80" hidefocus="false">合肥</a>'
+' <a href="javascript:;" data-id="218" hidefocus="false">河池</a>'
+' <a href="javascript:;" data-id="199" hidefocus="false">河源</a>'
+' <a href="javascript:;" data-id="190" hidefocus="false">菏泽</a>'
+' <a href="javascript:;" data-id="311" hidefocus="false">衡阳</a>'
+' <a href="javascript:;" data-id="111" hidefocus="false">呼和浩特</a>'
+' <a href="javascript:;" data-id="117" hidefocus="false">呼伦贝尔</a>'
+' <a href="javascript:;" data-id="73" hidefocus="false">湖州</a>'
+' <a href="javascript:;" data-id="136" hidefocus="false">葫芦岛</a>'
+' <a href="javascript:;" data-id="63" hidefocus="false">淮安</a>'
+' <a href="javascript:;" data-id="300" hidefocus="false">黄冈</a>'
+' <a href="javascript:;" data-id="88" hidefocus="false">黄山</a>'
+' <a href="javascript:;" data-id="292" hidefocus="false">黄石</a>'
+' <a href="javascript:;" data-id="196" hidefocus="false">惠州</a>'
+'</li>'
+'<li>'
+' <!--JKLM-->'
+' <a href="javascript:;" data-id="170" hidefocus="false">吉安</a>'
+' <a href="javascript:;" data-id="138" hidefocus="false">吉林</a>'
+' <a href="javascript:;" data-id="174" hidefocus="false">济南</a>'
+' <a href="javascript:;" data-id="181" hidefocus="false">济宁</a>'
+' <a href="javascript:;" data-id="72" hidefocus="false">嘉兴</a>'
+' <a href="javascript:;" data-id="328" hidefocus="false">江门</a>'
+' <a href="javascript:;" data-id="75" hidefocus="false">金华</a>'
+' <a href="javascript:;" data-id="106" hidefocus="false">晋中</a>'
+' <a href="javascript:;" data-id="297" hidefocus="false">荆门</a>'
+' <a href="javascript:;" data-id="299" hidefocus="false">荆州</a>'
+' <a href="javascript:;" data-id="166" hidefocus="false">九江</a>'
+' <a href="javascript:;" data-id="192" hidefocus="false">开封</a>'
+' <a href="javascript:;" data-id="233" hidefocus="false">昆明</a>'
+' <a href="javascript:;" data-id="249" hidefocus="false">拉萨</a>'
+' <a href="javascript:;" data-id="340" hidefocus="false">兰州</a>'
+' <a href="javascript:;" data-id="98" hidefocus="false">廊坊</a>'
+' <a href="javascript:;" data-id="267" hidefocus="false">乐山</a>'
+' <a href="javascript:;" data-id="238" hidefocus="false">丽江</a>'
+' <a href="javascript:;" data-id="79" hidefocus="false">丽水</a>'
+' <a href="javascript:;" data-id="62" hidefocus="false">连云港</a>'
+' <a href="javascript:;" data-id="109" hidefocus="false">临汾</a>'
+' <a href="javascript:;" data-id="186" hidefocus="false">临沂</a>'
+' <a href="javascript:;" data-id="208" hidefocus="false">柳州</a>'
+' <a href="javascript:;" data-id="351" hidefocus="false">陇南</a>'
+' <a href="javascript:;" data-id="193" hidefocus="false">洛阳</a>'
+' <a href="javascript:;" data-id="263" hidefocus="false">绵阳</a>'
+' <a href="javascript:;" data-id="52" hidefocus="false">牡丹江</a>'
+'</li>'
+'<li>'
+' <!--NOPQRS-->'
+' <a href="javascript:;" data-id="163" hidefocus="false">南昌</a>'
+' <a href="javascript:;" data-id="268" hidefocus="false">南充</a>'
+' <a href="javascript:;" data-id="56" hidefocus="false">南京</a>'
+' <a href="javascript:;" data-id="207" hidefocus="false">南宁</a>'
+' <a href="javascript:;" data-id="160" hidefocus="false">南平</a>'
+' <a href="javascript:;" data-id="61" hidefocus="false">南通</a>'
+' <a href="javascript:;" data-id="285" hidefocus="false">南阳</a>'
+' <a href="javascript:;" data-id="70" hidefocus="false">宁波</a>'
+' <a href="javascript:;" data-id="162" hidefocus="false">宁德</a>'
+' <a href="javascript:;" data-id="44" hidefocus="false">齐齐哈尔</a>'
+' <a href="javascript:;" data-id="231" hidefocus="false">黔东南苗族侗族自治州</a>'
+' <a href="javascript:;" data-id="91" hidefocus="false">秦皇岛</a>'
+' <a href="javascript:;" data-id="175" hidefocus="false">青岛</a>'
+' <a href="javascript:;" data-id="201" hidefocus="false">清远</a>'
+' <a href="javascript:;" data-id="76" hidefocus="false">衢州</a>'
+' <a href="javascript:;" data-id="184" hidefocus="false">日照</a>'
+' <a href="javascript:;" data-id="157" hidefocus="false">三明</a>'
+' <a href="javascript:;" data-id="257" hidefocus="false">三亚</a>'
+' <a href="javascript:;" data-id="9" hidefocus="false">上海</a>'
+' <a href="javascript:;" data-id="173" hidefocus="false">上饶</a>'
+' <a href="javascript:;" data-id="323" hidefocus="false">韶关</a>'
+' <a href="javascript:;" data-id="74" hidefocus="false">绍兴</a>'
+' <a href="javascript:;" data-id="324" hidefocus="false">深圳</a>'
+' <a href="javascript:;" data-id="123" hidefocus="false">沈阳</a>'
+' <a href="javascript:;" data-id="89" hidefocus="false">石家庄</a>'
+' <a href="javascript:;" data-id="60" hidefocus="false">苏州</a>'
+' <a href="javascript:;" data-id="54" hidefocus="false">绥化</a>'
+'</li>'
+'<li>'
+' <!--TUVWX-->'
+' <a href="javascript:;" data-id="78" hidefocus="false">台州</a>'
+' <a href="javascript:;" data-id="100" hidefocus="false">太原</a>'
+' <a href="javascript:;" data-id="182" hidefocus="false">泰安</a>'
+' <a href="javascript:;" data-id="67" hidefocus="false">泰州</a>'
+' <a href="javascript:;" data-id="90" hidefocus="false">唐山</a>'
+' <a href="javascript:;" data-id="42" hidefocus="false">台湾</a>'
+' <a href="javascript:;" data-id="228" hidefocus="false">铜仁地区</a>'
+' <a href="javascript:;" data-id="183" hidefocus="false">威海</a>'
+' <a href="javascript:;" data-id="180" hidefocus="false">潍坊</a>'
+' <a href="javascript:;" data-id="334" hidefocus="false">渭南</a>'
+' <a href="javascript:;" data-id="71" hidefocus="false">温州</a>'
+' <a href="javascript:;" data-id="119" hidefocus="false">乌兰察布</a>'
+' <a href="javascript:;" data-id="367" hidefocus="false">乌鲁木齐</a>'
+' <a href="javascript:;" data-id="57" hidefocus="false">无锡</a>'
+' <a href="javascript:;" data-id="81" hidefocus="false">芜湖</a>'
+' <a href="javascript:;" data-id="291" hidefocus="false">武汉</a>'
+' <a href="javascript:;" data-id="256" hidefocus="false">西安</a>'
+' <a href="javascript:;" data-id="354" hidefocus="false">西宁</a>'
+' <a href="javascript:;" data-id="244" hidefocus="false">西双版纳傣族自治州</a>'
+' <a href="javascript:;" data-id="121" hidefocus="false">锡林郭勒盟</a>'
+' <a href="javascript:;" data-id="155" hidefocus="false">厦门</a>'
+' <a href="javascript:;" data-id="301" hidefocus="false">咸宁</a>'
+' <a href="javascript:;" data-id="321" hidefocus="false">湘西土家族苗族自治州</a>'
+' <a href="javascript:;" data-id="295" hidefocus="false">襄樊</a>'
+' <a href="javascript:;" data-id="298" hidefocus="false">孝感</a>'
+' <a href="javascript:;" data-id="279" hidefocus="false">新乡</a>'
+' <a href="javascript:;" data-id="93" hidefocus="false">邢台</a>'
+' <a href="javascript:;" data-id="58" hidefocus="false">徐州</a>'
+' <a href="javascript:;" data-id="40" hidefocus="false">香港</a>'
+'</li>'
+'<li>'
+' <!--YZ-->'
+' <a href="javascript:;" data-id="273" hidefocus="false">雅安</a>'
+' <a href="javascript:;" data-id="179" hidefocus="false">烟台</a>'
+' <a href="javascript:;" data-id="335" hidefocus="false">延安</a>'
+' <a href="javascript:;" data-id="145" hidefocus="false">延边朝鲜族自治州</a>'
+' <a href="javascript:;" data-id="64" hidefocus="false">盐城</a>'
+' <a href="javascript:;" data-id="65" hidefocus="false">扬州</a>'
+' <a href="javascript:;" data-id="200" hidefocus="false">阳江</a>'
+' <a href="javascript:;" data-id="1820" hidefocus="false">阳西</a>'
+' <a href="javascript:;" data-id="294" hidefocus="false">宜昌</a>'
+' <a href="javascript:;" data-id="171" hidefocus="false">宜春</a>'
+' <a href="javascript:;" data-id="362" hidefocus="false">银川</a>'
+' <a href="javascript:;" data-id="130" hidefocus="false">营口</a>'
+' <a href="javascript:;" data-id="337" hidefocus="false">榆林</a>'
+' <a href="javascript:;" data-id="313" hidefocus="false">岳阳</a>'
+' <a href="javascript:;" data-id="107" hidefocus="false">运城</a>'
+' <a href="javascript:;" data-id="329" hidefocus="false">湛江</a>'
+' <a href="javascript:;" data-id="315" hidefocus="false">张家界</a>'
+' <a href="javascript:;" data-id="95" hidefocus="false">张家口</a>'
+' <a href="javascript:;" data-id="159" hidefocus="false">漳州</a>'
+' <a href="javascript:;" data-id="195" hidefocus="false">肇庆</a>'
+' <a href="javascript:;" data-id="66" hidefocus="false">镇江</a>'
+' <a href="javascript:;" data-id="191" hidefocus="false">郑州</a>'
+' <a href="javascript:;" data-id="203" hidefocus="false">中山</a>'
+' <a href="javascript:;" data-id="77" hidefocus="false">舟山</a>'
+' <a href="javascript:;" data-id="325" hidefocus="false">珠海</a>'
+' <a href="javascript:;" data-id="176" hidefocus="false">淄博</a>'
+' <a href="javascript:;" data-id="226" hidefocus="false">遵义</a>'
+'</li>';$('.js_hotel_city').append(hotel_city);});try{if(window.console&&window.console.log){var asc_logo='                  :#*.                .-.\n'+'                  ####.              -###\n'+'                .*#####            :*####-\n'+'               :#######:          +######=\n'+'              -########.        :########=\n'+'             :########+        -#########.\n'+'             +########        -#########+\n'+'             *#######:        #########*\n'+'             =######+        -########+\n'+'              ######*        +#######-\n'+'              :######=-----:.*#####=\n'+'               -#################+.        :-           .\n'+'              .=#################+.       .++=        .-+-\n'+'             -#####################-     :++++.      -++++\n'+'           :*#######################:   :+++++.     =+++++\n'+'         -*#########################*   +++++.     =+++++:\n'+'      :=#############################   ++++=     -+++++:\n'+'   -*###############################+   :+++=     =+++=.\n'+'  *#################################.    -+++=====+++.\n'+' =#################################:    .-+++++++++++.\n'+' #####-.-########*-=#############*.   .-++++++++++++++:\n'+' +####-  -######*   ###########*-   .-+++++++++++++++++\n'+' .#####*=*######*..+##########+  .-+++++++++++++++++++=      .\n'+'   +#########################*  :+++++++++++++++++++++.  :-:.-.\n'+'    .=*######################+  =++- -++++-.=+++++++-    =++-::\n'+'       .:-==++++==############  :++=.-++++. =++++++-   . .--.\n'+'                  ############*  .:=+++++++++++++++==++++=:\n'+'                  *#############-   .:-----++++++++++++++++:\n'+'                   *##############*=:.     +++++++++++++++=\n'+'                  +#*:*##*##########+=##.  :+++++++++++++-=.\n'+'                  ##- +##: ......     -*-  =-:+=:---::.:=...\n'+'                      :+*:                 .  -:\n';console.log(asc_logo)}}catch(e){}
(function(){var $body=$('body'),$bodyClass=$body.attr('class');if($body.hasClass('home')){}else{if(/f.lvmama.com/.test(window.location.href))return;if(/ticket|around|destroute|abroad|liner|responsive/.test($bodyClass)){FootApp(1);}}
function FootApp(){var footAppCook='chanapp_cookie';var $footDom='<div class="footBar P800 w12">'+'<div class="syfootBar-overlay"></div>'+'<div class="syfootBar-wrap">'+'<a class="footBar-gnsyl-lv" href="http://www.lvmama.com/zt/promo/cjyoulun?losc=089761&ict=i" target="_blank"></a>'+'<a class="footBar-gnsyl_channel" href="http://www.lvmama.com/zt/promo/cjyoulun?losc=089761&ict=i" target="_blank">买国内送邮轮</a>'+'<div class="footBar-opt">'+'<div class="footBar-opt-overlay"></div>'+'<div class="footBar-opt-wei">'+'<span class="footBar-sao"></span>'+'<em>微信扫一扫，小程序预订更优惠</em>'+'</div>'+'<div class="footBar-opt-app">'+'<a class="T3D T3dY an5s" href="https://itunes.apple.com/cn/app/id443926246?mt=8" target="_blank">iPhone下载</a>'+'<a class="T3D T3dY an5s" href="http://m.lvmama.com/rewrite/d.php" target="_blank">Android下载</a>'+'<a class="T3D T3dY an5s" href="https://itunes.apple.com/cn/app/id443926246?mt=8" target="_blank">iPad下载</a>'+'</div>'+'</div>'+'<span class="footBar-close"></span>'+'</div></div>';var arguLen=arguments.length;if(!$.xcookie.getCookie(footAppCook)){setTimeout(function(){var $footBar;$body.append($footDom);$footBar=$('.footBar');arguLen>0&&$footBar.addClass('w12');setTimeout(function(){$footBar.addClass('open');},200);$('.footBar-close').click(function(){$footBar.fadeOut('fast',function(){$footBar.remove();});$.xcookie.setCookie(footAppCook,footAppCook,{path:'/',expires:30,domain:'lvmama.com'});});},5000);}}
function syFootApp(){var footAppCook='syappfoot_cookie_wy';var $footOpenDom='<div class="syfootBarOpen"></div>';var $footDom='<div class="syfootBar P800 w12">'+'<div class="syfootBar-overlay"></div>'+'<div class="syfootBar-wrap">'+'<a class="footBar-wy" href="javascript:;">五一大放价</a>'+'<a class="footBar-wy-lv" href="javascript:;">五一大放价</a>'+'<div class="footBar-opt">'+'<div class="footBar-opt-overlay"></div>'+'<div class="footBar-opt-wei">'+'<span class="footBar-sao"></span>'+'<em>微信扫一扫，小程序预订更优惠</em>'+'</div>'+'<div class="footBar-opt-app">'+'<a class="T3D T3dY an5s" href="https://itunes.apple.com/cn/app/id443926246?mt=8" target="_blank">iPhone下载</a>'+'<a class="T3D T3dY an5s" href="http://m.lvmama.com/rewrite/d.php" target="_blank">Android下载</a>'+'<a class="T3D T3dY an5s" href="https://itunes.apple.com/cn/app/id443926246?mt=8" target="_blank">iPad下载</a>'+'</div>'+'</div>'+'<span class="footBar-close"></span>'+'</div></div>';setTimeout(function(){var $footBar;$body.append($footDom);$body.append($footOpenDom);$footBar=$('.syfootBar');$footBarOpen=$('.syfootBarOpen');$('.footBar-close').click(function(){$footBar.stop(true,true).animate({left:"-100%"},1000,function(){$footBarOpen.stop(true,true).animate({left:"0"},300);});$.xcookie.setCookie(footAppCook,footAppCook,{path:'/',expires:7});});$('.syfootBarOpen').click(function(){$footBarOpen.stop(true,true).animate({left:"-123px"},300,function(){$footBar.stop(true,true).animate({left:"0"},1000);});$.xcookie.deleteCookie(footAppCook,footAppCook,{path:'/'});});if(!$.xcookie.getCookie(footAppCook)){$footBar.css({"left":0});}else{$footBarOpen.css({"left":0});}},5000);}})();$(function(){var $document=$(document);var lv_top_promotion_cookie_name="lv_top_promotion";$document.on("click",".lv_top_promotion_close",function(){$.xcookie.setCookie(lv_top_promotion_cookie_name,'yes',{path:'/',expires:7});$(".lv_top_promotion").remove();});var lv_top_promotion_cookie=$.xcookie.getCookie(lv_top_promotion_cookie_name);if(lv_top_promotion_cookie==='yes'){$(".lv_top_promotion").remove();}});$(function(){$("[id=xmy]").each(function(){var $This=$(this),$href=$This.attr('href');$This.attr('href',$href+'?losc=073073');});$('.lv_nav_l').on('click','a',function(ev){var This=$(this),losc=This.attr('data-losc');if(losc){ev.preventDefault();var target=This.attr('target');if(!target){target='_self';}
var thisHref=This.attr('href');if(losc=='084223'){window.open(thisHref,target);}else{window.open(thisHref+'?losc='+losc+'&ict=i',target);}}});});$(function(){var $body=$('body');var $bodyClass=$body.attr('class');var isNeeded=false;if(/abroad|responsive|destroute|around|ticket|hotel|zijia|liner|flight_gnjp|flight_fit|tuangou|custom|search_list|lvyou|dujia|d_list/.test($bodyClass)){isNeeded=true;}
if(/lvyou_lyb/.test($bodyClass)){isNeeded=false;}
if(isNeeded){}
function channelFloat(){var html='<div class="channel_float_l"><a class="channel_float_b"  target="_blank" href="http://www.lvmama.com/zt/promo/cjyoulun?losc=088604&ict=i"></a><a class="channel_float_s" target="_blank" href="http://www.lvmama.com/zt/promo/cjyoulun?losc=088604&ict=i"></a><span class="channel_float_close" title="关闭"></span></div>';$('body').append(html);$('.channel_float_close').live('click',function(){$(this).parent('.channel_float_l').remove();});var $channel_float_l=$('.channel_float_l'),$channel_float_b=$('.channel_float_b'),$channel_float_s=$('.channel_float_s');$channel_float_l.hover(function(){mousein();},function(){mouseout();});function mouseout(){$channel_float_s.stop(true).animate({'width':0},400,function(){$channel_float_s.hide();$channel_float_l.css({'width':45});});};function mousein(){$channel_float_l.css({'width':186});$channel_float_s.show().stop(true).animate({'width':167},400);};}});(function($){$.fn.extend({focusBanner:function(options){var defaults={placecode:"ALL",url:('https:'==document.location.protocol?'https://':'http://')+"www.lvmama.com/pet_topic/ad/queryAdInfos.do",banName:"HOMEPAGE",p:"FOCUS",width:760,height:325,scroll:false,allapend:false,tosrc:true,haslink:true}
var options=$.extend(defaults,options);return this.each(function(){var o=options,$me=$(this),yjzfirst=!o.tosrc?"src":"to",yjz=!o.tosrc?"src":"js_to";$.ajax({url:o.url,type:'GET',dataType:"jsonp",jsonp:"cbf",data:'c='+o.banName+'&p='+o.p+'&s='+o.placecode,success:function(data){var $oLi="";if(!o.allapend){$oLi=$me.find('li');if(!o.haslink){$.each(data.adInfos,function(i){if(i==0){$oLi.eq(i).append("<img "+"src=\""+this.imgUrl+"\" width=\""+o.width+"\" height=\""+o.height+"\">");}else{$oLi.eq(i).append("<img "+yjz+"=\""+this.imgUrl+"\" width=\""+o.width+"\" height=\""+o.height+"\">");}});}else{$.each(data.adInfos,function(i){if(i==0){$oLi.eq(i).append("<a href=\""+this.url+"\" target=\"_blank\"><img src=\""+this.imgUrl+"\" width=\""+o.width+"\" height=\""+o.height+"\"></a>");}else{$oLi.eq(i).append("<a href=\""+this.url+"\" target=\"_blank\"><img "+yjz+"=\""+this.imgUrl+"\" width=\""+o.width+"\" height=\""+o.height+"\"></a>");}});}
o.scroll&&$me.prepend("<li>"+$oLi.last().html().replace('js_to','src')+"</li>");}else{$.each(data.adInfos,function(){$oLi+="<a href=\""+this.url+"\" target=\"_blank\"><img src=\""+this.imgUrl+"\" width=\""+o.width+"\" height=\""+o.height+"\"></a>";});$me.append($oLi);}},error:function(){console.log("error");}});});}});})(jQuery);function addRightBottomWX(url){$("#goTopBtn").before('<div class="rbtWxPart"><div class="rbtWxCode"><img width="92" height="92" src="'+url+'"></div><a id="rbtWeixin" target="_self" href="javascript:;" title="微信助手"></a></div>')}
;!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.xssFilters=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b,c){return e.yubl(b((c||e.yufull)(a)))}c._getPrivFilters=function(){function a(a){var b=a.split(x,2);return!b[0]||2!==b.length&&a.length===b[0].length?null:b[0]}function b(a,b,c,d){function e(a,c,e,g){return c?(c=Number(c[0]<="9"?c:"0"+c),d?B(c):128===c?"€":130===c?"‚":131===c?"ƒ":132===c?"„":133===c?"…":134===c?"†":135===c?"‡":136===c?"ˆ":137===c?"‰":138===c?"Š":139===c?"‹":140===c?"Œ":142===c?"Ž":145===c?"‘":146===c?"’":147===c?"“":148===c?"”":149===c?"•":150===c?"–":151===c?"—":152===c?"˜":153===c?"™":154===c?"š":155===c?"›":156===c?"œ":158===c?"ž":159===c?"Ÿ":c>=55296&&c<=57343||13===c?"�":f.frCoPt(c)):b[e||g]||a}return b=b||p,c=c||o,void 0===a?"undefined":null===a?"null":a.toString().replace(k,"�").replace(c,e)}function c(a){return"\\"+a.charCodeAt(0).toString(16).toLowerCase()+" "}function d(a){return a.replace(t,function(a){return"-x-"+a})}function e(c){c=f.yufull(b(c));var d=a(c);return d&&w[d.toLowerCase()]?"##"+c:c}var f,g=/</g,h=/"/g,i=/'/g,j=/&/g,k=/\x00/g,l=/(?:^$|[\x00\x09-\x0D "'`=<>])/g,m=/[&<>"'`]/g,n=/(?:\x00|^-*!?>|--!?>|--?!?$|\]>|\]$)/g,o=/&(?:#([xX][0-9A-Fa-f]+|\d+);?|(Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast|ensp|emsp|thinsp);|(nbsp|amp|AMP|lt|LT|gt|GT|quot|QUOT);?)/g,p={Tab:"\t",NewLine:"\n",colon:":",semi:";",lpar:"(",rpar:")",apos:"'",sol:"/",comma:",",excl:"!",ast:"*",midast:"*",ensp:" ",emsp:" ",thinsp:" ",nbsp:" ",amp:"&",lt:"<",gt:">",quot:'"',QUOT:'"'},q=/^(?:(?!-*expression)#?[-\w]+|[+-]?(?:\d+|\d*\.\d+)(?:r?em|ex|ch|cm|mm|in|px|pt|pc|%|vh|vw|vmin|vmax)?|!important|)$/i,r=/[\x00-\x1F\x7F\[\]{}\\"]/g,s=/[\x00-\x1F\x7F\[\]{}\\']/g,t=/url[\(\u207D\u208D]+/g,u=/['\(\)]/g,v=/\/\/%5[Bb]([A-Fa-f0-9:]+)%5[Dd]/,w={javascript:1,data:1,vbscript:1,mhtml:1,"x-schema":1},x=/(?::|&#[xX]0*3[aA];?|&#0*58;?|&colon;)/,y=/(?:^[\x00-\x20]+|[\t\n\r\x00]+)/g,z={Tab:"\t",NewLine:"\n"},A=function(a,b,c){return void 0===a?"undefined":null===a?"null":a.toString().replace(b,c)},B=String.fromCodePoint||function(a){return 0===arguments.length?"":a<=65535?String.fromCharCode(a):(a-=65536,String.fromCharCode((a>>10)+55296,a%1024+56320))};return f={frCoPt:function(a){return void 0===a||null===a?"":!isFinite(a=Number(a))||a<=0||a>1114111||a>=1&&a<=8||a>=14&&a<=31||a>=127&&a<=159||a>=64976&&a<=65007||11===a||65535===(65535&a)||65534===(65535&a)?"�":B(a)},d:b,yup:function(c){return c=a(c.replace(k,"")),c?b(c,z,null,!0).replace(y,"").toLowerCase():null},y:function(a){return A(a,m,function(a){return"&"===a?"&amp;":"<"===a?"&lt;":">"===a?"&gt;":'"'===a?"&quot;":"'"===a?"&#39;":"&#96;"})},ya:function(a){return A(a,j,"&amp;")},yd:function(a){return A(a,g,"&lt;")},yc:function(a){return A(a,n,function(a){return"\0"===a?"�":"--!"===a||"--"===a||"-"===a||"]"===a?a+" ":a.slice(0,-1)+" >"})},yavd:function(a){return A(a,h,"&quot;")},yavs:function(a){return A(a,i,"&#39;")},yavu:function(a){return A(a,l,function(a){return"\t"===a?"&#9;":"\n"===a?"&#10;":"\x0B"===a?"&#11;":"\f"===a?"&#12;":"\r"===a?"&#13;":" "===a?"&#32;":"="===a?"&#61;":"<"===a?"&lt;":">"===a?"&gt;":'"'===a?"&quot;":"'"===a?"&#39;":"`"===a?"&#96;":"�"})},yu:encodeURI,yuc:encodeURIComponent,yubl:function(a){return w[f.yup(a)]?"x-"+a:a},yufull:function(a){return f.yu(a).replace(v,function(a,b){return"//["+b+"]"})},yublf:function(a){return f.yubl(f.yufull(a))},yceu:function(a){return a=b(a),q.test(a)?a:";-x:'"+d(a.replace(s,c))+"';-v:"},yced:function(a){return d(b(a).replace(r,c))},yces:function(a){return d(b(a).replace(s,c))},yceuu:function(a){return e(a).replace(u,function(a){return"'"===a?"\\27 ":"("===a?"%28":"%29"})},yceud:function(a){return e(a)},yceus:function(a){return e(a).replace(i,"\\27 ")}}};var e=c._privFilters=c._getPrivFilters();c.inHTMLData=e.yd,c.inHTMLComment=e.yc,c.inSingleQuotedAttr=e.yavs,c.inDoubleQuotedAttr=e.yavd,c.inUnQuotedAttr=e.yavu,c.uriInSingleQuotedAttr=function(a){return d(a,e.yavs)},c.uriInDoubleQuotedAttr=function(a){return d(a,e.yavd)},c.uriInUnQuotedAttr=function(a){return d(a,e.yavu)},c.uriInHTMLData=e.yufull,c.uriInHTMLComment=function(a){return e.yc(e.yufull(a))},c.uriPathInSingleQuotedAttr=function(a){return d(a,e.yavs,e.yu)},c.uriPathInDoubleQuotedAttr=function(a){return d(a,e.yavd,e.yu)},c.uriPathInUnQuotedAttr=function(a){return d(a,e.yavu,e.yu)},c.uriPathInHTMLData=e.yu,c.uriPathInHTMLComment=function(a){return e.yc(e.yu(a))},c.uriQueryInSingleQuotedAttr=c.uriPathInSingleQuotedAttr,c.uriQueryInDoubleQuotedAttr=c.uriPathInDoubleQuotedAttr,c.uriQueryInUnQuotedAttr=c.uriPathInUnQuotedAttr,c.uriQueryInHTMLData=c.uriPathInHTMLData,c.uriQueryInHTMLComment=c.uriPathInHTMLComment,c.uriComponentInSingleQuotedAttr=function(a){return e.yavs(e.yuc(a))},c.uriComponentInDoubleQuotedAttr=function(a){return e.yavd(e.yuc(a))},c.uriComponentInUnQuotedAttr=function(a){return e.yavu(e.yuc(a))},c.uriComponentInHTMLData=e.yuc,c.uriComponentInHTMLComment=function(a){return e.yc(e.yuc(a))},c.uriFragmentInSingleQuotedAttr=function(a){return e.yubl(e.yavs(e.yuc(a)))},c.uriFragmentInDoubleQuotedAttr=function(a){return e.yubl(e.yavd(e.yuc(a)))},c.uriFragmentInUnQuotedAttr=function(a){return e.yubl(e.yavu(e.yuc(a)))},c.uriFragmentInHTMLData=c.uriComponentInHTMLData,c.uriFragmentInHTMLComment=c.uriComponentInHTMLComment},{}]},{},[1])(1)});var $completeInput=null;var routeLosc='332207';var hotelLosc='332212';function addDropDownListFlag(dropDownListUrl){if(typeof LoscUrlHelper==="object"){dropDownListUrl=LoscUrlHelper.urlAddParams(dropDownListUrl,{"dropdownlist":"true"})}
return dropDownListUrl}
function rememberSearchHistoryInCookie(options){var url=xssFilters.inDoubleQuotedAttr(options.url)||"";var type=xssFilters.inHTMLData(options.type)||"";var keyword=xssFilters.inHTMLData(options.keyword)||"";var params={url:url,type:type,keyword:keyword};if(!(localStorage&&localStorage.getItem)){return;}
if(!$("body").is(".search_list")){return;}
var cookieName='remember_search_history_in_cookie';var searchHistoryStr=localStorage.getItem(cookieName);var history=[];if(searchHistoryStr){history=JSON.parse(searchHistoryStr)}
function isSameHistory(a,b){return a.keyword===b.keyword&&a.type===b.type;}
for(var j=0;j<history.length;j++){var historyItem=history[j];if(isSameHistory(historyItem,params)){return}}
if(history.length<10){}else{history.shift()}
history.push(params);var limitSize=4000;for(var i=0;i<10;i++){if(encodeURIComponent(JSON.stringify(history)).length>limitSize){history.shift();}else{break;}}
localStorage.setItem(cookieName,JSON.stringify(history))}
(function($){try{var cookieName='remember_search_history_in_cookie';function clearSearchHistoryCookie(){if($.xcookie&&$.xcookie.deleteCookie){$.xcookie.deleteCookie(cookieName,{path:'/',expires:10,domain:'lvmama.com'});}}
clearSearchHistoryCookie();setTimeout(function(){clearSearchHistoryCookie();},1000);}catch(e){}
var $document=$(document);var historyIsEmptyTemplate="<li class='hhw-is-empty'>暂无历史记录</li>";function urlAddProtocols(url){if(!url){return url;}
var auto=url.indexOf('//')===0;var http=url.indexOf('http://')===0;var https=url.indexOf('https://')===0;if(auto||http||https){return url;}
return'http://'+url;}
var $homeHotWord=$(".home-hot-word");var keys={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};var searchType=["SCENICTOUR","GROUP","FREETOUR","LOCAL","TICKET","HOTEL","ROUTE","VISA","LOCALPLAY"];var recommentListModel="<li class=\"js_recom\"><a href='$href'><p>查看<b>$searchValue</b>$typeName</p></a></li>",matchListModel="<li class=\"js_match\"><a href='$href' data-place='$searchPlace'>$searchValue</a></li>",nodataModel="<li class=\"complete_no\">找不到结果:<b>$searchKey</b></li>",matchAllList='<li class="item" data-search-value="$searchValue" data-url="$url" data-generate-id="$generateid">'+'<div class="result">$typeCount</div>'+'<div class="blank"><i class="$icon"></i></div>'+'<div class="complete_title">$searchValue <span class="complete_tips"> $subtitle $hotelType $distance $destName</span></div>'+'</li>';var $elements,$activedElement,timeoutId;var querySelecter={searchType:".js_btn_type",completeBox:".complete_box",completeUl:".complete_list",hotTips:".search_hot_tips",fromPlace:".search_type_list"};var $bodyClass=$('body').attr('class');function Factory(){$elements=this;return new searchComplete();}
Factory.searchAndJump=function(datatype,cityid,place,triggerType){var searchFlagOfAbroad="";if($('body').is(".abroad.channelBody")){searchFlagOfAbroad="Y4"}
datatype=(datatype==null||datatype=="undefined")?$(querySelecter.searchType).find("b").attr("data-type").toLowerCase():datatype;cityid=(cityid==null||cityid=="undefined")?$(querySelecter.fromPlace).filter(":visible").find(".js_searchbox>b").attr("data-id"):cityid;var $input=($activedElement!=null&&$activedElement!="undefined")?$activedElement:$(".search_type_box").find("input:visible");if($.trim($input.val())==''){$input.val('').focus();return;}
place=(place==null||place=="undefined")?encodeURIComponent($input.val()):place;var placeID=window.location.href.match(/K\d+/)?window.location.href.match(/K\d+/)[0].replace("K",""):$.xcookie.getCookie("_ip_city_place_id");var url="";if(place=="帐篷客"||place=="安吉帐篷客"||place=="zhangpengke"){if(datatype.toLowerCase()=="all"||datatype.toLowerCase()=="route"){var d=new Date();d.setDate(d.getDate()+1);var d1month=d.getMonth()+1;var d1=''+d.getFullYear()+(d1month>=10?d1month:("0"+d1month))+(d.getDate()>=10?d.getDate():("0"+d.getDate()));d.setDate(d.getDate()+1);var d2month=(d.getMonth()+1);var d2=''+d.getFullYear()+(d2month>=10?d2month:("0"+d2month))+(d.getDate()>=10?d.getDate():("0"+d.getDate()));url="http://s.lvmama.com/hotel/U686C"+d1+"O"+d2+"?keyword=帐篷客&mdd=安吉,湖州,浙江";window.location.href=url;return;}}
if(datatype.toLowerCase()!="ship"){if(cityid==null||cityid=="undefined"||datatype.toLowerCase()==="ticket"||datatype.toLowerCase()==="scenictour"){if(datatype.toLowerCase()==="scenictour"){url="http://s.lvmama.com/scenictour/"+(placeID?"K"+placeID:"")+"?keyword="+place+(triggerType?(triggerType=="button"?"&k=0":"&k=2"):"")+"#list";}else{url="http://s.lvmama.com/"+datatype+"/"+(placeID?"K"+placeID:"")+"?keyword="+place+(triggerType?(triggerType=="button"?"&k=0":"&k=2"):"")+"#list";}}else{url="http://s.lvmama.com/"+datatype+"/H"+cityid+(placeID?"K"+placeID:"")+searchFlagOfAbroad+"?keyword="+place+(triggerType?(triggerType=="button"?"&k=0":"&k=2"):"")+"#list";};}else if(datatype.toLowerCase()=="visa"){url="http://s.lvmama.com/visa/?keyword="+place;}else{url="http://www.lvmama.com/youlun/line-"+place+".html"+"#list";}
if(typeof LoscUrlHelper==="object"){switch(datatype){case'route':url=LoscUrlHelper.urlAddParams(url,{'losc':routeLosc,'ict':'i'})
break
case'hotel':url=LoscUrlHelper.urlAddParams(url,{'losc':hotelLosc,"ict":"i"})
break
default:break}}
rememberSearchHistoryInCookie({url:url,type:datatype.toUpperCase(),keyword:decodeURIComponent(place)});var $btnLvSearch=$('.btn_lv_search');if(decodeURIComponent(place)===$btnLvSearch.attr("data-old-keyword")){url=addDropDownListFlag(url)}
if(url!=window.location.href)
window.location.href=url;else
window.location.reload();}
function timeoutFn(){var fn=new searchComplete("none");fn.requestData();}
function searchComplete(option){if(option)
return;this.initialize();return $elements;}
function renderHomeHotWord(){var guessTemplate=''+'<div class="hhw-guess-box">'+'    <div class="hhw-title">猜你喜欢</div>'+'    <div class="hhw-content ">'+'        <ul class="hhw-list hhw-list-guess clearfix">'+'            {{guess}}'+'        </ul>'+'    </div>'+'</div>';var historyTemplate=''+'<div class="hhw-history-box">'+'    <div class="hhw-title">历史搜索</div>'+'    <div class="hhw-content hhw-history">'+'        <ul class="hhw-list hhw-list-history clearfix">'+'            {{history}}'+'        </ul>'+'        <div class="hhw-clear">清空</div>'+'    </div>'+'</div>';var destTemplate=''+'<div class="hhw-dest-box">'+'    <div class="hhw-title">热门目的地</div>'+'    <div class="hhw-content ">'+'        <ul class="hhw-list hhw-list-dest clearfix">'+'            {{dest}}'+'        </ul>'+'    </div>'+'</div>';var categoryTemplate=''+'<div class="hhw-content hhw-content-recommend hhw-category-box clearfix">'+'    <div class="hhw-sub-title hhw-type"><i></i><em>品类</em></div>'+'    <ul class="hhw-list hhw-list-category clearfix">'+'        {{category}}'+'    </ul>'+'</div>';var subjectTemplate=''+'<div class="hhw-content hhw-content-recommend hhw-subject-box clearfix">'+'    <div class="hhw-sub-title hhw-theme"><i></i><em>主题</em></div>'+'    <ul class="hhw-list hhw-list-subject clearfix">'+'        {{subject}}'+'    </ul>'+'</div>';var activityTemplate=''+'<div class="hhw-content hhw-content-recommend hhw-activity-box clearfix">'+'    <div class="hhw-sub-title hhw-activity"><i></i><em>活动</em></div>'+'    <ul class="hhw-list hhw-list-activity clearfix">'+'        {{activity}}'+'    </ul>'+'</div>';var recommendTemplate=''+'<div class="hhw-recommend-box">'+'    <div class="hhw-title">搜索推荐</div>'+'{{recommend}}'+'</div>';var homeHotWordContentTemplate=''+'<div class="home-hot-word-content">'+'{{all}}'+'</div>';var keyWordItemTemplate="<li class='hhw-item-keyword' data-keyword='{{keyword}}' data-batchId='{{batchId}}' title='{{keyword}}'><em>{{keyword}}</em></li>";var linkItemTemplate="<li class='hhw-item-link'><a target='_blank' href='{{url}}' title='{{keyword}}'><em>{{keyword}}</em></a></li>";function itemConcat(list,type){var html="";var template="";switch(type){case"keyword":template=keyWordItemTemplate;break;case"link":template=linkItemTemplate;break;}
for(var i=0;i<list.length;i++){var item=list[i];var itemHtml=template;if(item.keyword){itemHtml=itemHtml.replace(/{{keyword}}/g,item.keyword);}
if(item.url){itemHtml=itemHtml.replace(/{{url}}/g,urlAddProtocols(item.url));}
if(item.batchId){itemHtml=itemHtml.replace(/{{batchId}}/g,item.batchId);}
itemHtml=itemHtml.replace(/{{.*?}}/g,"");html+=itemHtml}
return html}
function successCallback(data){var homeHotWordContent="";var searchTypeSheet={GROUP:"跟团游",SCENICTOUR:"酒店+景点",FREETOUR:"自由行",LOCAL:"当地游",TICKET:"景点门票",HOTEL:"酒店",SHIP:"邮轮",VISA:"签证",LOCALPLAY:"当地玩乐"};var historyItemTemplate="<li class='hhw-history-item'><a href='{{url}}' title='{{title}}'>{{text}}</a></li>";function renderHistoryList(list){var html="";list.reverse();for(var i=0;i<list.length;i++){var item=list[i];var historyHtml=historyItemTemplate.replace("{{url}}",item.url);var typeStr="";var itemType=item.type;if(itemType&&searchTypeSheet[itemType]){typeStr="的"+searchTypeSheet[itemType];}
var keyword=item.keyword;var text='<em>'+keyword+'</em>'+typeStr;var title=keyword+typeStr;historyHtml=historyHtml.replace("{{text}}",text);historyHtml=historyHtml.replace("{{title}}",title);html+=historyHtml}
return html}
var searchHistory=[];var searchHistoryStr="";if(localStorage&&localStorage.getItem){searchHistoryStr=localStorage.getItem('remember_search_history_in_cookie');}
if(searchHistoryStr){searchHistory=JSON.parse(searchHistoryStr)}
if(searchHistory.length){homeHotWordContent+=historyTemplate.replace("{{history}}",renderHistoryList(searchHistory));}else{homeHotWordContent+=historyTemplate.replace("{{history}}",historyIsEmptyTemplate);}
var guessList=data.guessList;var guessHtml="";if(guessList&&guessList.length){(function(){var listHtml=itemConcat(guessList,"keyword");guessHtml=guessTemplate.replace("{{guess}}",listHtml);})();}
homeHotWordContent+=guessHtml;var hotDestList=data.hotDestList;var destHtml="";if(hotDestList&&hotDestList.length){(function(){var hotDestListMap=[];for(var i=0;i<hotDestList.length;i++){var hotDestItem=hotDestList[i];hotDestListMap.push({keyword:hotDestItem})}
var listHtml=itemConcat(hotDestListMap,"keyword");destHtml=destTemplate.replace("{{dest}}",listHtml);})();}
homeHotWordContent+=destHtml;var recommendHtml="";var recommendContentHtml="";function recommendAdd(list,template,slot){var html="";if(list&&list.length){(function(){var listHtml=itemConcat(list,"link");html=template.replace("{{"+slot+"}}",listHtml);})();}
recommendContentHtml+=html;}
var categoryList=data.categoryList;recommendAdd(categoryList,categoryTemplate,"category");var subjectList=data.subjectList;recommendAdd(subjectList,subjectTemplate,"subject");var activityList=data.activityList;recommendAdd(activityList,activityTemplate,"activity");if(recommendContentHtml){recommendHtml=recommendTemplate.replace("{{recommend}}",recommendContentHtml)}
homeHotWordContent+=recommendHtml;var homeHotWordContentWrap=homeHotWordContentTemplate.replace("{{all}}",homeHotWordContent);$homeHotWord.html(homeHotWordContentWrap)}}
$document.on("click",".hhw-item-keyword",function(){var $this=$(this);var keyword=$this.attr("data-keyword");var batchId=$this.attr("data-batchId");if(batchId&&batchId!==""){$.ajax("",{}).complete(function(){gotoHotKeyword()})}else{gotoHotKeyword()}
function gotoHotKeyword(){$.searchType.showType("ROUTE");$.searchComplete.searchAndJump(null,null,keyword,'button');}});$document.on("click",".hhw-clear",function(){var $this=$(this);var cookieName='remember_search_history_in_cookie';if(localStorage&&localStorage.removeItem){localStorage.removeItem(cookieName)}
$(".hhw-list-history").html(historyIsEmptyTemplate)});searchComplete.prototype={initialize:function(){var that=this;that.createContainer();that.bindEvent();},createContainer:function(){var html="<div class=\"complete_box\" style=\"display:none\"><ul class=\"complete_list\"></ul></div>";if($(querySelecter.completeBox).size()<=0)
$("body").append(html);},bindEvent:function(){var that=this;that.bindKeyupEvent();that.bindFoucsEvent();that.bindBlurEvent();},bindKeyupEvent:function(){var that=this;$elements.bind("keydown",function(e){switch(e.which){case keys.RETURN:e=e||window.event;if(!e.preventDefault())
e.returnValue=false;break;}});$elements.bind("keyup",function(e){switch(e.which){case keys.UP:that.moveUp();break;case keys.DOWN:that.moveDown();break;case keys.ESC:$(querySelecter.completeBox).hide();$(querySelecter.hotTips).hide();break;case keys.RETURN:that.select(e);break;default:$(querySelecter.hotTips).hide();clearTimeout(timeoutId);timeoutId=setTimeout(timeoutFn,300);break;}
var val=$.trim($(this).val());if(val===""){$(".home-hot-word").show();}else{$(".home-hot-word").hide();}});},bindFoucsEvent:function(){var that=this;var oldValue=['请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题、或关键词','请输入目的地、主题或景区名称','请输入航线、邮轮公司或邮轮名称','请输入您需要签证的国家/地区','请输入目的地、主题、或关键词'];for(var i=0;i<$elements.length;i++){$elements.eq(i).attr('num',i);}
$elements.bind("focus",function(e){$(querySelecter.completeBox).hide();for(var i=0;i<oldValue.length;i++){if($(this).val()==oldValue[i]){$(this).val('').css('color','#333');$(this).removeClass("empty");}}
var target=e.target||window.event.srcElement;$activedElement=$(target);var UlPosition={left:$activedElement.offset().left,top:$activedElement.offset().top+$activedElement.outerHeight()};var UlWidth=$activedElement.outerWidth();if($(querySelecter.searchType).find("b").attr("data-type").toUpperCase()==="SHIP"){UlWidth+=98;}
if($(querySelecter.searchType).find("b").attr("data-type").toUpperCase()==="ROUTE"){UlWidth=462;}
$(querySelecter.completeBox).css({width:UlWidth,left:UlPosition.left,top:UlPosition.top});if(!that.hasValue()&&$(querySelecter.searchType).find("b").attr("data-type").toUpperCase()==="ROUTE"){$(querySelecter.hotTips).show();}else{$(querySelecter.hotTips).hide();that.requestData();}
if(!that.hasValue()){$homeHotWord.show();renderHomeHotWord();}else{$homeHotWord.hide();}
$completeInput=$(this);$(".hotel_keyword,.hotel_mdd,.des_error_tips,.js_date_msg,.complete-wrap").hide();});$elements.bind("blur",function(e){var num=$(this).attr('num');if($(this).val()==''){$(this).val(oldValue[num]).css('color','#bbb');}});$elements.bind("click",function(e){that.cancelBubble(e);});},bindBlurEvent:function(){$(".home-hot-word").hide();},bindMouseEvent:function(){},moveDown:function(){var that=this;if(!that.hasValue()){return;}
var $libox=$(querySelecter.completeUl);var $activeLi=$libox.find("li.active");$activeLi.size()>0?($activeLi.next().size()>0?$activeLi.removeClass("active").next().addClass("active"):$activeLi.removeClass("active").siblings(":first").addClass("active")):$libox.find("li:first").addClass("active");var $actived=$libox.find("li.active");if($actived.hasClass("js_match"))
$activedElement.val($actived.find("a").attr("data-place"));},moveUp:function(){var that=this;if(!that.hasValue()){return;}
var $libox=$(querySelecter.completeUl);var $activeLi=$libox.find("li.active");$activeLi.size()>0?($activeLi.prev().size()>0?$activeLi.removeClass("active").prev().addClass("active"):$activeLi.removeClass("active").siblings(":last").addClass("active")):$libox.find("li:last").addClass("active");var $actived=$libox.find("li.active");if($actived.hasClass("js_match"))
$activedElement.val($actived.find("a").attr("data-place"));},select:function(e){var $activedLink=$(querySelecter.completeUl).find("li.active>a"),$firstlink=$(querySelecter.completeUl).find("li:first>a");searchStatistics();if($activedLink.size()>0){window.location.href=$activedLink.attr("href");}else{var $list=$(".complete_box_all:visible .active[data-url][data-search-value]");if($list.length>0){var city=$list.attr("data-search-value");var url=$list.attr("data-url");window.setHistory(city);window.location.href=url;}else{if($firstlink.size()>0&&$(querySelecter.searchType).find("b").attr("data-type").toUpperCase()==="TICKET"&&$activedElement.val()===$firstlink.attr("data-place")&&/scenic-/.test($firstlink.attr("href"))){window.location.href=$firstlink.attr("href");}else{Factory.searchAndJump(null,null,null,"button");}}}},hasValue:function(){if($.trim($activedElement.val())==="")
return false;else
return true;},cancelBubble:function(e){e=e||window.event;if(!e.stopPropagation())
e.cancelBubble=true;},requestData:function(){var that=this;var searchType=$(querySelecter.searchType).find("b").attr("data-type").toLowerCase();if(!that.hasValue()){$(querySelecter.completeBox).hide();if(!that.hasValue()&&searchType==="route")
$(querySelecter.hotTips).show();return;}
var ajaxurl="http://s.lvmama.com/autocomplete/autoCompleteNew.do";var ajaxDate="type="+searchType.toUpperCase()+"&keyword="+encodeURIComponent($activedElement.val());if(searchType==="ship"){ajaxurl="http://s.lvmama.com/autocomplete/lineShipAutocomplete.do";}else if(searchType==="visa"){ajaxurl="http://s.lvmama.com/autocomplete/autoCompleteVisa.do";}else if(searchType==="route"){ajaxurl='http://s.lvmama.com/autocomplete/getNewAllCompleteData.do';searchType="global";var cityId=$(".search_type_list:visible .js_searchbox b").attr("data-id");ajaxDate="&keyword="+encodeURIComponent($activedElement.val());if(cityId&&cityId!==''){ajaxDate+="&fromDestId="+cityId}
ajaxDate+="&districtId="+$('#currentCity').attr('data-id');}
$.ajax({url:ajaxurl,type:"get",dataType:"jsonp",jsonpCallback:"recive",data:ajaxDate,success:function(response){that.dataBind(response);},error:function(XMLHttpRequest,textStatus,errorThrown){console.log("jsonpError:"+errorThrown);}});function recive(response){}},replaceKeyWords:function(keyWords,title){if(!keyWords){return title;}
for(var i=0,len=keyWords.length;i<len;i++){title=title.replace(new RegExp(keyWords[i],"g"),"<em>"+keyWords[i]+"</em>");}
return title},toDecimal:function(x){var f=parseFloat(x);if(isNaN(f)){return;}
f=Math.round(x*100)/100;return f;},replaceDistance:function(distance){var newDistance=distance>=1?this.toDecimal(distance)+'千米':this.toDecimal(distance*1000)+'米';return newDistance;},dataBind:function(data){if(!(typeof data==="object"))
return;var html="",url,self=this;var datatype=$(querySelecter.searchType).find("b").attr("data-type").toLowerCase();var cityid=$(querySelecter.fromPlace).filter(":visible").find(".js_searchbox>b").attr("data-id");var placeID=window.location.href.match(/K\d+/)?window.location.href.match(/K\d+/)[0].replace("K",""):$.xcookie.getCookie("_ip_city_place_id");var matchHtml=[];self.keyWords=data.keyWords;if(data.matchList&&datatype!="ship"&&datatype!="visa"){$.each(data.matchList,function(index,items){var itemsSearchVal=datatype==="route"?items.name:items.searchValue;if(datatype==="route"){var _newItemsSearchVal=self.replaceKeyWords(self.keyWords,items.name);var tempUrl=items.url
if(typeof LoscUrlHelper==="object"){tempUrl=LoscUrlHelper.urlAddParams(items.url,{"losc":routeLosc,"ict":"i"})}
tempUrl=addDropDownListFlag(tempUrl);url=encodeURI(tempUrl);var h=matchAllList.replace("$url",url).replace("$searchValue",itemsSearchVal).replace("$searchValue",_newItemsSearchVal);if(items.showPrice&&items.price){h=h.replace("$typeCount","<dfn>￥"+items.price+"</dfn>起")}else if(items.count!=0&&typeof(items.count)!='undefined'){h=h.replace("$typeCount","约"+items.count+"个结果");}else{h=h.replace("$typeCount","");}
h=items.subtitle?h.replace("$subtitle",items.subtitle):h.replace("$subtitle","");h=items.destName?h.replace("$destName",items.destName):h.replace("$destName","");h=items.hotelType?h.replace("$hotelType","["+items.hotelType+"]"):h.replace("$hotelType","");h=items.distance?h.replace("$distance","约"+self.replaceDistance(items.distance)):h.replace("$distance","");var pcIdx=index+1;pcIdx=pcIdx<10?'0'+pcIdx:pcIdx;pcIdx=data.generateId+'-'+pcIdx;h=h.replace("$generateid",pcIdx);if((data.type==='LANDMARK'&&index===0)||data.type!='LANDMARK'){switch(items.type){case'ALL':case'GROUP':case'FREESCENICTOUR':case'LOCAL':h=h.replace("$icon","icon-product");break;case'VISA':h=h.replace("$icon","icon-visa");break;case'HOTEL':case'HOTEL_P':h=h.replace("$icon","icon-hotel");break;case'ROUTE':h=h.replace("$icon","icon-route");break;case'TICKET':h=h.replace("$icon","icon-ticket");break;case'TICKET_P':h=h.replace("$icon","icon-view");break;case'GUIDE':h=h.replace("$icon","icon-guide");break;case'SHIP':h=h.replace("$icon","icon-youlun");break;case'POSITION':h=h.replace("$icon","icon-point");break;case'FIRE':h=h.replace("$icon","icon-fire");break;default:h=h.replace("$icon","icon-route");}}else{h=h.replace('<i class="$icon"></i>','').replace('item','item item-sub');}
matchHtml.push(h);if(items.inner&&datatype==="route"){matchHtml.push(self.dataBindInner(items,pcIdx));}}else{if(datatype==="ticket"&&items.type.toLowerCase()==="ticket_p"){url="http://ticket.lvmama.com/scenic-"+items.urlId;}else if(cityid==null||cityid=="undefined"||items.type.toLowerCase()==="ticket"||datatype.toLowerCase()==="scenictour"){if(datatype.toLowerCase()==="scenictour"){url="http://s.lvmama.com/scenictour/"+(placeID?"K"+placeID:"")+"?keyword="+encodeURI(items.searchValue)+"&k=1#list";}else{url="http://s.lvmama.com/"+items.type.toLowerCase()+"/"+(placeID?"K"+placeID:"")+"?keyword="+encodeURI(items.searchValue)+"&k=1#list";}}else{if(items.searchValue=="帐篷客"||items.searchValue=="安吉帐篷客"||items.searchValue=="zhangpengke"){if(items.type.toLowerCase()=="all"||items.type.toLowerCase()=="route"){var d=new Date();d.setDate(d.getDate()+1);var d1=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();d.setDate(d.getDate()+1);var d2=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();url="http://hotels.lvmama.com/list/%E5%B8%90%E7%AF%B7%E5%AE%A2%20%E5%AE%89%E5%90%89%E6%BA%AA%E9%BE%99%E8%8C%B6%E8%B0%B7%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97,%E5%AE%89%E5%90%89%E5%8E%BF.html?longitude=119.780578&latitude=30.746796&beginBookTime="+d1+"&endBookTime="+d2+"&parentId=686&searchId=169939";}}
else
url="http://s.lvmama.com/"+items.type.toLowerCase()+"/H"+cityid+(placeID?"K"+placeID:"")+"?keyword="+encodeURI(items.searchValue)+"&k=1#list";}
url=addDropDownListFlag(url);matchHtml.push(matchListModel.replace("$href",url).replace("$searchValue",items.searchValue.replace(new RegExp('('+$activedElement.val()+")","g"),"<span>$1</span>")).replace("$searchPlace",items.searchValue));}});}else if(datatype=="visa"){for(var i=0;i<data.length;i++){url="http://s.lvmama.com/visa/?keyword="+data[i];url=addDropDownListFlag(url);matchHtml.push(matchListModel.replace("$href",url).replace("$searchValue",data[i].replace(new RegExp('('+$activedElement.val()+")","g"),"<span>$1</span>")).replace("$searchPlace",data[i]));}}else{for(var i=0;i<data.length;i++){url="http://www.lvmama.com/youlun/line-"+data[i]+".html"+"#list";url=addDropDownListFlag(url);matchHtml.push(matchListModel.replace("$href",url).replace("$searchValue",data[i].replace(new RegExp('('+$activedElement.val()+")","g"),"<span>$1</span>")).replace("$searchPlace",data[i]));}}
html+=matchHtml.join('');if(html===""){$(querySelecter.completeBox).hide();return;}
$(querySelecter.completeBox).show().find(querySelecter.completeUl).html(html);$(".search_all_mdd").hide();if(datatype==="route"){$(querySelecter.completeBox).addClass("complete_box_all");this.tongJi(data,cityid);}else{$(querySelecter.completeBox).removeClass("complete_box_all");}},dataBindInner:function(data,pcIdx){var $input=$(".search_type_list:visible .form_search input");var routesTemplate='<li class="item item-sub" data-search-value="{{searchValue}}" data-url="{{url}}" data-generate-id="{{generateId}}">'+'<div class="result">{{result}}</div>'+'<div class="blank"></div>'+'{{searchValue}}'+'<span class="complete_tips">{{hotelType}} {{distance}} {{destName}}</span>'+'</li>';if(!data){return"";}
var searchValue=data.name;var routes=data.inner;var routesHtml="";if(routes){for(var routeIndex=0;routeIndex<routes.length;routeIndex++){var route=routes[routeIndex];var type=route.type;var result="约"+route.count+"个结果";var tempRouteUrl=route.url
if(typeof LoscUrlHelper==="object"){tempRouteUrl=LoscUrlHelper.urlAddParams(tempRouteUrl,{'losc':routeLosc,'ict':'i'})}
tempRouteUrl=addDropDownListFlag(tempRouteUrl);var routeUrl=encodeURI(tempRouteUrl);var hotelType=route.hotelType?"["+route.hotelType+"]":"";var distance=route.distance?"约"+this.replaceDistance(route.distance):"";var destName=route.destName||"";var generateId=pcIdx+'-'+'0'+(routeIndex+1);if(route.showPrice)result="<dfn>￥"+route.price+"</dfn>起";routesHtml+=this.replaceWith(routesTemplate,{result:result,url:routeUrl,searchValue:this.replaceKeyWords(this.keyWords,route.name),hotelType:hotelType,distance:distance,destName:destName,generateId:generateId});}}
return routesHtml;},replaceWith:function(str,obj){for(var i in obj){str=this.replaceAll(str,"{{"+i+"}}",obj[i]);}
return str;},replaceAll:function(src,match,str){var result=src.indexOf(match);while(result>0){src=src.replace(match,str);result=src.indexOf(match)}
return src;},tongJi:function(data,cityid){if(!data.matchList.length){return false}
var dataCon=[],idx=0,type='',searchbox_channel='';if(/abroad/.test($bodyClass)){type='出境游首页';searchbox_channel='PC-ABROAD';}else if(/destroute/.test($bodyClass)){type='国内游首页';searchbox_channel='PC-DESTROUTE';}else if(/destroute-freetour/.test($bodyClass)){type='机酒自由行频道页';searchbox_channel='PC-DESTROUTE-FREETOUR';}else if(/super-free-home/.test($bodyClass)){type='超级自由行首页';searchbox_channel='PC-SUPER-FREE-HOME';}else if(/super-free-combo/.test($bodyClass)){type='超级自由行搜索列表页';searchbox_channel='PC-SUPER-FREE-COMBO';}else if(/around/.test($bodyClass)){type='周边游首页';searchbox_channel='PC-ZHOUBIANYOU';}else if(/around_j_j/.test($bodyClass)){type='酒店+景点首页';searchbox_channel='PC-FREETOUR';}else if(/around_bus/.test($bodyClass)){type='周边跟团首页';searchbox_channel='PC-AROUND';}else if(/ticket/.test($bodyClass)){type='景点门票首页';searchbox_channel='PC-TICKET';}else if(/search_list_dujia/.test($bodyClass)){type='度假搜索列表页';searchbox_channel='PC-DUJIA-SEARCH-LIST';}else if(/hotel/.test($bodyClass)){type='酒店首页';searchbox_channel='PC-HOTEL';}else if(/zijia/.test($bodyClass)){type='自驾游首页';searchbox_channel='PC-ZIJIA';}else if(/lvyue/.test($bodyClass)){type='亲子游首页';searchbox_channel='PC-LVYUE';}else if(/youlun liner/.test($bodyClass)){type='邮轮首页';searchbox_channel='PC-YOULUN';}else if(/search_list_youlun/.test($bodyClass)){type='搜索搜索列表页';searchbox_channel='PC-YOULUN-SEARCH-LIST';}else if(/^liner$/.test($bodyClass)){type='海外航线首页';searchbox_channel='PC-ABROADYOULUN';}else if(/tuangou/.test($bodyClass)){type='特卖会首页';searchbox_channel='PC-TUANGOU';}
$.each(data.matchList,function(index,el){var dataConli,newIdx;idx=parseInt(index+1);newIdx=idx<10?'0'+idx:idx;dataConli={targetUrl:{url:el.url,generateId:data.generateId+'-'+newIdx,type:type+'补全'},title:el.name,type:el.type,inner:[]}
if(typeof el.inner!=='undefined'){var inner=el.inner;for(var i=0,len=inner.length;i<len;i++){dataConli.inner.push({targetUrl:{url:inner[i].url,generateId:data.generateId+'-'+newIdx+'-0'+(i+1),type:type+'补全'},title:inner[i].name,type:inner[i].type});}}
dataCon.push(dataConli);});var myDataVal={cid:'-',device_id:$.xcookie.getCookie('BSFIT_DEVICEID')||'-',baiduid:'-',gaid:$.xcookie.getCookie('_gid')||'-',bsfit_deviceid:'-',user_id:$.xcookie.getCookie('uid')||'-',platform:'PC',mobile_type:'PC',losc_lo:'-',losc_la:'-',ip_city_place_id:$('#currentCity').attr('data-id'),scene_type:'search_exposure',searchbox_position:'HEAD',search_type:'search_complete',channel:searchbox_channel,exposure_period:new Date().getTime(),keywords:data.keyWords.join(','),search_filter:'-',content:JSON.stringify(dataCon),depart_id:cityid,dest_id:'-',start_date:'-',end_date:'-',category:'-',search_batch_id:data.generateId,token:'AE7AB4838CCC46168A119F5E871B19BF'};_search_complete_all_click_collecter={search_batch_id:data.generateId};$.ajax({url:'//ai.lvmama.com/ds/rec/searchBehaviorFeedback/exposureCollecter',type:'POST',dataType:'json',data:myDataVal,success:function(){},error:function(XMLHttpRequest,textStatus,errorThrown){console.log("tongJi-jsonpError:"+errorThrown);}})}};$.fn.searchComplete=$.searchComplete=Factory;}(jQuery));(function($){var areaPrefix=".main-search ";var $area=$(".header_search,.main-search");if($('body').hasClass('home')){return false;}
var keys={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};var destinationModel="<li><a href='javascript:;' $target data-place=\"$searchData\" data-id=\"$searchID\"><span class=\"place-name\">$searchName</span><span class=\"hotel-place-type\">$searchType</span></a></li>";var searchPageHotelDestinationModel="<li><a href='javascript:;' $target data-place=\"$searchData\" data-id=\"$searchID\"><span class=\"place-name\">$searchName</span><span class=\"hotel-place-type\">$searchType</span>$hotelInfo</a></li>";var keywordModel="<li><a href='javascript:;' $target data-place=\"$searchData\"><span class=\"hotel-name\">$searchName</span><span class=\"hotel-place-lcat\">$searchType</span></a></li>";var $elements,$activedElement,timeoutId;var querySelecter={searchType:".js_btn_type",completeBox:".complete_box_hotel",destinationBox:".hotelDestBox",keywordBox:".hotelKeywordBox",errorTipsBox:".complete_error_tips",destInput:".js_searchDest",keywordInput:".js_searchKeyword",hotDestination:".search_hotel_mdd",hotKeyword:".search_hotel_keyword",nodestTip:".lv_search_tips"};var isFocusAndNotChangeInput;var cityName=$('#currentCity');$(querySelecter.destInput).val(cityName.attr('data-city-name')).attr('data-id',cityName.attr('data-id'));$(querySelecter.destInput).css("color","#333");var oldValue=['请输入国内或海外目的地','酒店名称/地标/商圈','酒店名/商圈/地标'];function Factory(){$elements=this;return new searchComplete();}
Factory.searchAndJump=function(options){var id=$(querySelecter.destInput).attr("data-id");if(!id){$(querySelecter.nodestTip).show();return;}
var d=new Date();var newD=d.setDate(d.getDate()+1);var d2=new Date(newD);var tomorrow={year:d2.getFullYear(),month:(d2.getMonth()+1)<10?"0"+(d2.getMonth()+1):(d2.getMonth()+1),day:d2.getDate()<10?"0"+d2.getDate():d2.getDate()};var tomorrowStr=tomorrow.year.toString()+tomorrow.month.toString()+tomorrow.day.toString();var newD3=d2.setDate(d2.getDate()+1);var d3=new Date(newD3);var tomorrow2={year:d3.getFullYear(),month:(d3.getMonth()+1)<10?"0"+(d3.getMonth()+1):(d3.getMonth()+1),day:d3.getDate()<10?"0"+d3.getDate():d3.getDate()};var tomorrowStr2=tomorrow2.year.toString()+tomorrow2.month.toString()+tomorrow2.day.toString();var dest=$(querySelecter.destInput).val();var keyword=$(querySelecter.keywordInput).val();if(dest==oldValue[0]){$(querySelecter.destInput).focus();return;}
keyword=$.trim(keyword)=="酒店名称/地标/商圈"?"":keyword;keyword=$.trim(keyword)=="酒店名/商圈/地标"?"":keyword;var startDateStr=tomorrowStr.replace(/-/g,"");var endDateStr=tomorrowStr2.replace(/-/g,"");if(options.startDateStr&&options.endDateStr){startDateStr=options.startDateStr.replace(/-/g,"");endDateStr=options.endDateStr.replace(/-/g,"");}
var url="http://s.lvmama.com/hotel/U"+id+"C"+startDateStr+"O"+endDateStr+"?keyword="+encodeURIComponent(keyword)+"&mdd="+dest;if(typeof LoscUrlHelper==="object"){url=LoscUrlHelper.urlAddParams(url,{'losc':hotelLosc,"ict":"i"})}
var text=dest;if(keyword){text+="的"+keyword}
rememberSearchHistoryInCookie({url:url,type:"HOTEL",keyword:text});var $btnLvSearch=$('.btn_lv_search');if($btnLvSearch.attr("data-dropdownlist")==="true"){url=addDropDownListFlag(url)}
if(keyword===$btnLvSearch.attr("data-old-keyword")){url=addDropDownListFlag(url)}
if(url.indexOf("#")===-1){url+="#list"}
window.location.href=url;}
Factory.autoSelectFirst=function(){if(!isFocusAndNotChangeInput){return}
var $activeInput=$area.find(".js_searchDest,.js_searchKeyword").filter("[active=actived]");var inputValue=$.trim($activeInput.val());var $li=null;if($activeInput.is(".js_searchDest")){if(inputValue==="请输入国内或海外目的地"||inputValue===""){return}
var $hotelDestBox=$(".hotelDestBox>ul>li.active:first");if(!$hotelDestBox.length){$hotelDestBox=$(".hotelDestBox>ul>li:first");}
var dataPlace=$hotelDestBox.attr("data-place");$li=$hotelDestBox}
if($li){changeInputValue($li)}};function timeoutFn(){var fn=new searchComplete("none");fn.requestData();}
function searchComplete(option){if(option)
return;this.initialize();return $elements;}
var changeInputValue=function($li){isFocusAndNotChangeInput=false;var $dest=$(querySelecter.destInput);var $link=$li.find("a");var place=$link.attr("data-place");var placeId=$link.attr("data-id");var type=$li.find(".hotel-place-type").html();var placeArr=place.split(',');var lastIndex=placeArr.length-1;var lastItem;if(lastIndex){lastItem=placeArr[lastIndex];}else{lastItem="";}
var firstItem=placeArr[0];var $searchTypeList=$activedElement.parents(".search_type_list");var $searchKeyword=$searchTypeList.find(".js_searchKeyword");if(/行政区|城市|省份/.test(type)){$dest.val(place);$searchKeyword.val("").blur();}else if(/品牌/.test(type)){$searchKeyword.val(firstItem);}else{$dest.val(lastItem);$searchKeyword.val(firstItem);}
$dest.attr("data-id",placeId);};searchComplete.prototype={initialize:function(){var that=this;that.createContainer();that.bindEvent();},createContainer:function(){var html=[];html.push("<div class=\"complete_box_hotel hotelDestBox\" style=\"display:none\"></div>");html.push("<div class=\"complete_box_hotel hotelKeywordBox\" style=\"display:none\"></div>");html.push("<div class=\"complete_error_tips\" style=\"display:none;\"><span>找不到目的地：</span><span class=\"word\"></span><i>×</i></div>");if($(querySelecter.destinationBox).size()<=0)
$("body").append(html.join(''));},bindEvent:function(){var that=this;that.bindKeyupEvent();that.bindFoucsEvent();that.bindBlurEvent();that.bindMouseEvent();},bindKeyupEvent:function(){var that=this;$elements.bind("keydown",function(e){switch(e.which){case keys.RETURN:e=e||window.event;if(!e.preventDefault())
e.returnValue=false;break;}});$elements.bind("keyup",function(e){switch(e.which){case keys.UP:that.moveUp();break;case keys.DOWN:that.moveDown();break;case keys.ESC:$(querySelecter.completeBox).hide();break;case keys.RETURN:if($(querySelecter.completeBox).is(":visible")){that.select(e);}
break;default:clearTimeout(timeoutId);timeoutId=setTimeout(timeoutFn,300);if($activedElement.is(querySelecter.keywordInput))$(querySelecter.hotKeyword).hide();break;}});},bindFoucsEvent:function(){var that=this;for(var i=0;i<$elements.length;i++){$elements.eq(i).attr('num',i);}
$elements.bind("focus",function(e){isFocusAndNotChangeInput=true;for(var i=0;i<oldValue.length;i++){if($(this).val()==oldValue[i]){$(this).val('').css('color','#333');}}
var target=e.target||window.event.srcElement;$activedElement=$(target);var UlPosition={left:$activedElement.offset().left,top:$activedElement.offset().top+$activedElement.outerHeight()};var UlWidth=$activedElement.outerWidth();var $targetBox=that.getActivedBox();$targetBox.css({left:UlPosition.left,top:UlPosition.top});if($activedElement.is(querySelecter.keywordInput)){$(querySelecter.hotDestination).hide();$(querySelecter.destinationBox).hide();}else{$(querySelecter.hotKeyword).hide();$(querySelecter.keywordBox).hide();}
$(".js_hotel_calendar_popup").next(".cal-number-of-days").remove();$(".js_hotel_calendar_popup").remove();if($activedElement.val()==""&&$activedElement.is(querySelecter.destInput)){$(querySelecter.hotDestination).show();$(querySelecter.nodestTip).hide();}
else if($activedElement.val()==""&&$activedElement.is(querySelecter.keywordInput)){that.requestHotKeyword();}
else if($activedElement.val()!=="")
that.requestData();$("input:text[active]").removeAttr("active");$(target).attr("active","actived");$completeInput=$(this);$(".hotel_keyword,.hotel_mdd,.des_error_tips,.js_date_msg,.complete-wrap").hide();});$elements.bind("blur",function(e){var num=$(this).attr('num');if($(this).val()==''){$(this).val(oldValue[num]).css('color','#999');}});$elements.bind("click",function(e){that.cancelBubble(e);});},bindBlurEvent:function(){},changeInputValue:changeInputValue,bindMouseEvent:function(){var that=this;$(querySelecter.completeBox).bind("click",function(e){e=e||window.event;e.stopPropagation();var $li;var $target=$(e.target);if($target.is("li")){$li=$target;}else{$li=$target.parents("li").eq(0);}
that.changeInputValue($li);that.getActivedBox().hide();if($li.parents(".hotelKeywordBox").length){var $btnLvSearch=$('.btn_lv_search');$btnLvSearch.attr("data-dropdownlist","true");$btnLvSearch.trigger('click');}});$(querySelecter.errorTipsBox).find("i").bind("mousedown",function(){$(this).parent().hide();});},moveDown:function(){var that=this,$siblingUl;if(!that.hasValue()){return;}
var $libox=that.getActivedBox();var $activeLi=$libox.find("li.active");if($activeLi.size()>0){if($activeLi.next().size()>0){$activeLi.removeClass("active").next().addClass("active");}else{$activeLi.removeClass("active");$siblingUl=$activeLi.parent().siblings('ul');if($siblingUl.length){$siblingUl.find('li:first').addClass('active');}else{$activeLi.removeClass("active").siblings(":first").addClass("active");}}}else{$libox.find("li:first").addClass("active");}
var $actived=$libox.find("li.active");that.changeInputValue($actived);},moveUp:function(){var that=this,$siblingUl;if(!that.hasValue()){return;}
var $libox=that.getActivedBox();var $activeLi=$libox.find("li.active");if($activeLi.size()>0){if($activeLi.prev().size()>0){$activeLi.removeClass("active").prev().addClass("active");}else{$activeLi.removeClass("active");$siblingUl=$activeLi.parent().siblings('ul');if($siblingUl.length){$siblingUl.find('li:last').addClass('active');}else{$activeLi.removeClass("active").siblings(":last").addClass("active");}}}else{$libox.find("li:last").addClass("active");}
var $actived=$libox.find("li.active");that.changeInputValue($actived);},select:function(e){var $activedLink=this.getActivedBox().find("li.active>a");if($activedLink.size()>0){this.changeInputValue($activedLink.parents("li").eq(0));}
$(querySelecter.completeBox).hide();},hasValue:function(){if($.trim($activedElement.val())==="")
return false;else
return true;},getActivedBox:function(){return $activedElement.is(querySelecter.destInput)?$(querySelecter.destinationBox):$(querySelecter.keywordBox);},cancelBubble:function(e){e=e||window.event;if(!e.stopPropagation())
e.cancelBubble=true;},requestHotKeyword:function(){var that=this;$(querySelecter.hotKeyword).html("");var disID=$(querySelecter.destInput).attr("data-id");var dataStr="type=REC&districtId="+disID;$.ajax({url:"http://s.lvmama.com/autocomplete/autoCompleteHotelNew.do",type:"post",dataType:"jsonp",jsonpCallback:"recive",data:dataStr,success:function(response){that.renderHotKeywordNew(response);},error:function(XMLHttpRequest,textStatus,errorThrown){console.log("jsonpError:"+errorThrown);}});function recive(response){}},renderHotKeywordNew:function(response){var html=[];$.each(response.recommendList,function(index,items){var typeName;switch(items.type){case"landmarksTransport":typeName="交通枢纽";break;case"landmarksScenic":typeName="热门景区";break;case"landmarksBusiness":typeName="热门商圈";break;case"districtName":typeName="行政区";break;}
if(/交通枢纽|热门景区|热门商圈|行政区/.test(typeName)){html.push("<dl class=\"keyword_list\"><dt>"+typeName+"</dt><dd>");$.each(items.itemNames,function(index,subItem){html.push("<a href=\"javascript:;\">"+subItem+"</a>");});html.push("</dd></dl>");}});if(html.length>0){$(querySelecter.hotKeyword).html(html.join('')).show();}},requestData:function(){var that=this;$(querySelecter.hotDestination).hide();if(!that.hasValue()){that.getActivedBox().hide();$(querySelecter.errorTipsBox).hide();if($activedElement.is(querySelecter.destInput))
$(querySelecter.hotDestination).show();return;}
if($activedElement.is(querySelecter.destInput)){$(querySelecter.destInput).removeAttr("data-id");$(querySelecter.errorTipsBox).hide();}
var keyword=$activedElement.val();var dataStr=$activedElement.is(querySelecter.destInput)?("type=DEST&keyword="+keyword.split(",")[0]):("type=HOTEL&keyword="+keyword+"&districtId="+$(querySelecter.destInput).attr("data-id"));var ajaxurl="http://s.lvmama.com/autocomplete/autoCompleteHotelNew.do";$.ajax({url:ajaxurl,type:"post",dataType:"jsonp",jsonpCallback:"recive",data:dataStr,success:function(response){that.dataBind(response);},error:function(XMLHttpRequest,textStatus,errorThrown){console.log("jsonpError:"+errorThrown);}});function recive(response){}},replaceKeyWords:function(keyWords,title){if(!keyWords){return title;}
for(var i=0,len=keyWords.length;i<len;i++){title=title.replace(new RegExp(keyWords[i],"g"),"<b>"+keyWords[i]+"</b>");}
return title},dataBind:function(data){var isSearchListPage=$("body").is(".search_list");var hotelDestinationModel=destinationModel;if(isSearchListPage){hotelDestinationModel=searchPageHotelDestinationModel}
var that=this;if(!(typeof data==="object"))
return;var html="";var activeData=data.suggestList.length?data.suggestList:typeof(data.otherCitiesList)!=="undefined"?data.otherCitiesList:[];if(activeData){var matchHtml=[];$.each(activeData,function(index,items){var hotelInfoHtml="";var myDestDistrictName=typeof(items.destDistrictName)!=="undefined"?items.destDistrictName:cityName.text();var finalModel=hotelDestinationModel.replace("$searchData",typeof(items.keyword)!=="undefined"?items.keyword+','+myDestDistrictName:myDestDistrictName);finalModel=finalModel.replace("$searchID",typeof(items.destDistrictId)!=="undefined"?items.destDistrictId:cityName.attr("data-id")).replace("$searchName",that.replaceKeyWords(data.highlightWordList,items.displayWord)).replace("$searchType",items.wordTypeName.replace("产品","酒店"));if(items.wordType==="PRODUCT"){var hotelDetailUrl=items.hotelDetailUrl
if(typeof LoscUrlHelper==="object"){hotelDetailUrl=LoscUrlHelper.urlAddParams(hotelDetailUrl,{"losc":hotelLosc,"ict":"i"})}
hotelDetailUrl=addDropDownListFlag(hotelDetailUrl);finalModel=finalModel.replace("javascript:;",hotelDetailUrl).replace("$target","target=_blank");if(isSearchListPage){if(typeof(items.score)!=="undefined"&&$.trim(items.score)!==""){hotelInfoHtml+="<span>"+parseFloat(items.score)+"分</span>";}
if(typeof(items.poiDistance)!=="undefined"&&$.trim(items.poiDistance)!==""){hotelInfoHtml+="<span>"+items.poiDistance+"</span>";}
if(typeof(items.distance)!=="undefined"&&$.trim(items.distance)!==""){hotelInfoHtml+="<span>"+items.distance+"</span>";}
if(hotelInfoHtml!==""){hotelInfoHtml='<p class="hotel-info">'+hotelInfoHtml+'</p>';finalModel=finalModel.replace("$hotelInfo",hotelInfoHtml);}else{finalModel=finalModel.replace("$hotelInfo","");}}}else{finalModel=finalModel.replace("$target","");finalModel=finalModel.replace("$hotelInfo","");}
matchHtml.push(finalModel);});if(matchHtml.length==0){html="";}
else{if(activeData==data.otherCitiesList){html="<div class=\"completeOther\">其他城市查询结果</div>"}
html+="<ul>"+matchHtml.join('')+"</ul>";}}
if(html===""){that.getActivedBox().hide();if($activedElement.is(querySelecter.destInput)){var thisL=$activedElement.offset().left,thisT=$activedElement.offset().top,thisH=$activedElement.outerHeight(true);$(querySelecter.errorTipsBox).show().css({'left':thisL,'top':thisT+thisH}).find(".word").text($activedElement.val());}
return;}
that.getActivedBox().show().html(html);if($activedElement.is(querySelecter.destInput)){var $a=that.getActivedBox().find("li:first").addClass("active").find("a");$(querySelecter.destInput).attr("data-id",$a.attr("data-id"));}}};$.fn.searchComplete_hotelAddon=$.searchComplete_hotelAddon=Factory;}(jQuery));$(function(){var $document=$(document);function replaceWith(str,obj){for(var i in obj){str=replaceAll(str,"{{"+i+"}}",obj[i]);}
return str;}
function replaceAll(src,match,str){var result=src.indexOf(match);while(result>0){src=src.replace(match,str);result=src.indexOf(match)}
return src;}
var templateCities={hot:{main:'<div class="search-station-hot">'+'<h4>热门出发城市</h4>'+'<div class="list clearfix">'+'{{links}}'+'</div>'+'</div>',link:'<a data-id="{{hotDistrictId}}" data-name="{{hotDistrictName}}" data-code="{{hotDistrictCode}}">{{hotDistrictName}}</a>'},main:'<div class="search-station-cities">'+'<ul class="nav-tabs clearfix">'+'<li class="active">ABCD<i></i></li>'+'<li>EFGH<i></i></li>'+'<li>JKLM<i></i></li>'+'<li>NOPQRS<i></i></li>'+'<li>TUVWX<i></i></li>'+'<li>YZ<i></i></li>'+'</ul>'+'<ul class="tab-contents">'+'{{lists}}'+'</ul>'+'</div>',list:'<li class="search-station-cities-pane">'+'{{dls}}'+'</li>',dl:'<dl class="clearfix">'+'<dt>{{alpha}}</dt>'+'<dd class="clearfix">'+'{{links}}'+'</dd>'+'</dl>',link:'<a class="city" data-id="{{districtId}}" data-name="{{districtName}}" data-code="{{districtCode}}">{{districtName}}</a>'};var url="https://login.lvmama.com/seo_api/departureList/getDepartVo.do?channel=zhuzhan&jsoncallback=recive";$.ajax({url:url,dataType:"jsonp",jsonpCallback:"recive"}).done(function(data){renderCity(data);}).fail(function(err){});function renderCity(data){var coreData=data;var title=[["A","B","C","D"],["E","F","G","H","I"],["J","K","L","M"],["N","O","P","Q","R","S"],["T","U","V","W","X"],["Y","Z"]];var listsHtml="";for(var i=0;i<title.length;i++){var sub=title[i];var dlsHtml="";for(var j=0;j<sub.length;j++){var alpha=sub[j];var alphaData=coreData[alpha];if(!alphaData||alphaData.length==0){continue;}
var linksHtml="";for(var k=0;k<alphaData.length;k++){var item=alphaData[k];var districtId=item.districtId;var districtName=("香港澳门台湾".indexOf(item.districtName)!=-1)?"中国"+item.districtName:item.districtName
var districtShortPinYin=item.shortPinYin.toUpperCase();linksHtml+=replaceWith(templateCities.link,{districtId:districtId,districtName:districtName,districtCode:districtShortPinYin})}
dlsHtml+=replaceWith(templateCities.dl,{links:linksHtml,alpha:alpha})}
listsHtml+=replaceWith(templateCities.list,{dls:dlsHtml})}
var cityHtml=replaceWith(templateCities.main,{lists:listsHtml});var hotLinksHtml="";var hot=coreData.hot;if(!hot){return}
for(var hotIndex=0;hotIndex<hot.length;hotIndex++){var hotCity=hot[hotIndex];var hotDistrictId=hotCity.districtId;var hotDistrictName=hotCity.districtName;var hotDistrictShortPinYin=hotCity.shortPinYin.toUpperCase();hotLinksHtml+=replaceWith(templateCities.hot.link,{hotDistrictId:hotDistrictId,hotDistrictName:hotDistrictName,hotDistrictCode:hotDistrictShortPinYin});}
hotLinksHtml='<a data-code="SH" data-id="9" data-name="上海">上海</a> <a data-code="SZ" data-id="60" data-name="苏州">苏州</a> <a data-code="HZ" data-id="69" data-name="杭州">杭州</a> <a data-code="BJ" data-id="13" data-name="北京">北京</a> <a data-code="TY" data-id="100" data-name="太原">太原</a> <a data-code="GZ" data-id="322" data-name="广州">广州</a> <a data-code="CD" data-id="258" data-name="成都">成都</a> <a data-code="ZQ" data-id="31" data-name="重庆">重庆</a> <a data-code="SY" data-id="257" data-name="三亚">三亚</a> <a data-code="CZ" data-id="59" data-name="常州">常州</a> <a data-code="HZ" data-id="73" data-name="湖州">湖州</a> <a data-code="QD" data-id="175" data-name="青岛">青岛</a> <a data-code="TJ" data-id="14" data-name="天津">天津</a> <a data-code="SZ" data-id="324" data-name="深圳">深圳</a> <a data-code="KM" data-id="233" data-name="昆明">昆明</a> <a data-code="HK" data-id="221" data-name="海口">海口</a> <a data-code="NJ" data-id="56" data-name="南京">南京</a> <a data-code="JX" data-id="72" data-name="嘉兴">嘉兴</a> <a data-code="NT" data-id="61" data-name="南通">南通</a> <a data-code="WX" data-id="57" data-name="无锡">无锡</a> <a data-code="XA" data-id="256" data-name="西安">西安</a>';var hotHtml=replaceWith(templateCities.hot.main,{links:hotLinksHtml});var $jsAllCity=$('.js_all_city');$jsAllCity.html(hotHtml+cityHtml);$jsAllCity.width(460);}
if(/dujiaseolist/.test($('body').attr('id'))){try{$('.Js_LISTFIRST').html('<p>热门出发城市</p>'+chufa_city);}catch(e){}
if(isNaN(fromDest)&&fromDest){$('.lv_city_box .lv_city').html(fromDest).attr('data-city-name',fromDest);}}
var templateReferral={hot:{html:'<div class="search-hot-destination-season">'+'<h4>你最近在搜：</h4>'+'<div class="list clearfix">'+'{{lists}}'+'</div>'+'</div>',list:'<a>{{name}}</a>'},main:{html:'<div class="search-hot-destination-cities clearfix">'+'<h4>热门推荐：</h4>'+'{{dls}}'+'</div>',dl:'<dl class="clearfix">'+'<dt>{{dlName}}</dt>'+'<dd class="clearfix">'+'<div class="cities-group">'+'{{lists}}'+'</div>'+'</dd>'+'</dl>',list:'<a data-url="{{url}}">{{name}}</a>'}};$document.on("click",function(e){var $target=$(e.target);var isInMdd=$target.parents(".search_all_mdd").length>0;var isMdd=$target.is(".search_all_mdd");if(isInMdd||isMdd){}else{$("#search_all_fromPlaces .search_all_mdd").empty().hide();}});$document.on("click",function(e){var $target=$(e.target);var elem=".main-search .lv_search,.home-hot-word";var isInMdd=$target.parents(elem).length>0;var isMdd=$target.is(elem);if(isInMdd||isMdd){}else{$(".home-hot-word").hide();}});$("#search_all_fromPlaces input").on("click keyup",function(){var $this=$(this);var val=$.trim($this.val());if(val===""){}
function renderCityReferal(data){var historyCities=getHistory();var historyHtml="";if(!historyCities){historyCities="";}else{var historyCityArr=historyCities.split("|");var historyListHtml="";for(historyCityIndex=0;historyCityIndex<historyCityArr.length;historyCityIndex++){var city=historyCityArr[historyCityIndex];if(city&&city!==""){historyListHtml+=replaceWith(templateReferral.hot.list,{name:city});}}
if(historyCityArr.length>0){historyHtml=replaceWith(templateReferral.hot.html,{lists:historyListHtml});}}
if(historyHtml!==""){$(".search_all_mdd").html(historyHtml).show();}}});$document.on("click",".complete_box_all .item",function(e){var $this=$(this);var url=$this.attr("data-url");var city=$this.attr("data-search-value").replace(/<em>|<\/em>/g,'');if(city){setHistory(city);}
searchStatistics(null,city);rememberSearchHistoryInCookie({url:url,type:"ROUTE",keyword:city});var content={title:$this.attr('data-search-value').replace(/<em>|<\/em>/g,''),url:$this.attr('data-url'),generateId:$this.attr('data-generate-id')}
var myClickCollecter={cid:'',device_id:$.xcookie.getCookie('BSFIT_DEVICEID')||'-',baiduid:'',gaid:$.xcookie.getCookie('_gid')||'-',bsfit_deviceid:'',user_id:$.xcookie.getCookie('uid')||'-',platform:'PC',mobile_type:'PC',losc_lo:'',losc_la:'',ip_city_place_id:$('#currentCity').attr('data-id'),scene_type:'search_click',content:JSON.stringify(content),search_batch_id:_search_complete_all_click_collecter.search_batch_id,token:'AE7AB4838CCC46168A119F5E871B19BF'}
$.ajax({url:'//ai.lvmama.com/ds/rec/searchBehaviorFeedback/clickCollecter',type:'POST',dataType:'json',data:myClickCollecter,success:function(){},error:function(XMLHttpRequest,textStatus,errorThrown){console.log("tongJi-jsonpError:"+errorThrown);}});goToUrl(url);});$document.on("click",".complete_box .js_match a",function(e){var $this=$(this);var url=$this.attr("href");var city=$this.attr("data-place");searchStatistics(null,city);var searchType=$this.parents(".complete_box").eq(0).attr("data-search-type");rememberSearchHistoryInCookie({url:url,type:searchType,keyword:city});goToUrl(url);});function getHistory(){return $.xcookie.getCookie('_search_complete_all_history');}
function setHistory(city){var searchValues=getHistory();if(!searchValues){searchValues="";}
if(searchValues.indexOf(city)==-1){searchValues=city+"|"+searchValues;var match=searchValues.match(/^(.*?\|){0,10}/);if(match[0]){searchValues=match[0];}
$.xcookie.setCookie('_search_complete_all_history',searchValues,{path:'/',expires:30});}}
window.setHistory=setHistory;function goToUrl(url){window.location.href=url;}
$document.on("click",".search-hot-destination-cities a[data-url]",function(){var $this=$(this);var url=$this.attr("data-url");goToUrl(url);});$document.on("click",".search-hot-destination-season a",function(){var $this=$(this);$.searchComplete.searchAndJump(null,null,$this.text(),'button');return false;});});$(function(){$(window).resize(function(event){if($completeInput!=null){$('.complete_box,.complete_box_hotel,.complete_error_tips').css('left',$completeInput.offset().left);}});});
;(function($){$.fn.poptip=function(options){var defaults={templete:1,skin:"default",tiptitle:"",place:7,offsetX:0,offsetY:0,trigger:"mouseenter",bindevent:"live",hovershow:300}
var opt=$.extend(true,defaults,options||{});var reclock=[6,5,10,9,8,1,12,11,4,3,2,7,6];function posclock(clock){return reclock[clock];}
var templeteStr="";switch(opt.templete){case 1:templeteStr=' <div class="poptip tip-light poptip-'+opt.skin+'" '
+' style="display: none;" id="poptip'+opt.templete+'">'
+'     <div class="tip-arrow tip-arrow-'+posclock(opt.place)+'">'
+'         <em>◆</em>'
+'         <i>◆</i>'
+'     </div>'
+'     <div class="tip-content">'
+'         <h5 class="tip-title"></h5>'
+'         <p></p>'
+'     </div>'
+' </div>';break;default:break;}
if($("#poptip"+opt.templete).length==0){$("body").append(templeteStr);}
var triggerObj=this;$(this)[opt.bindevent](opt.trigger,function(){var title=$(this).attr("tip-title");var content=$(this).attr("tip-content");var obj=$("#poptip"+opt.templete);clearTimeout(triggerObj.timeId);obj.hide();if(title){obj.find(".tip-title").html(title).show();}else{if(opt.tiptitle){obj.find(".tip-title").html(opt.tiptitle).show();}else{obj.find(".tip-title").html("").hide();}}
if(opt.skin!='default'){$("#poptip"+opt.templete).attr('class','poptip tip-light poptip-'+opt.skin);}else{$("#poptip"+opt.templete).attr('class','poptip tip-light poptip-default');}
if(content){obj.find(".tip-content>p").html(content);}else{obj.hide();return;}
var left=$(this).offset().left;var top=$(this).offset().top;var posdiff=7;switch(opt.place){case 12:case 0:left-=(obj.outerWidth()-$(this).outerWidth())/2;top-=$(obj).outerHeight()+posdiff;break;case 1:left-=$(obj).outerWidth()-$(this).outerWidth();top-=$(obj).outerHeight()+posdiff;break;case 2:left+=$(this).outerWidth()+posdiff;break;case 3:left+=$(this).outerWidth()+posdiff;top-=($(obj).outerHeight()-$(this).outerHeight())/2;break;case 4:left+=$(this).outerWidth()+posdiff;top-=$(obj).outerHeight()-$(this).outerHeight();break;case 5:left-=$(obj).outerWidth()-$(this).outerWidth();top+=$(this).outerHeight()+posdiff;break;case 6:left-=(obj.outerWidth()-$(this).outerWidth())/2;top+=$(this).outerHeight()+posdiff;break;case 7:default:top+=$(this).outerHeight()+posdiff;break;case 8:left-=$(obj).outerWidth()+posdiff;top-=$(obj).outerHeight()-$(this).outerHeight();break;case 9:left-=$(obj).outerWidth()+posdiff;top-=($(obj).outerHeight()-$(this).outerHeight())/2;break;case 10:left-=$(obj).outerWidth()+posdiff;break;case 11:top-=$(obj).outerHeight()+posdiff;break;}
obj.find(".tip-arrow").attr("class","tip-arrow tip-arrow-"+posclock(opt.place)).end().css({left:left+opt.offsetX,top:top+opt.offsetY}).fadeIn(200);})[opt.bindevent]("mouseleave",function(){triggerObj.timeId=setTimeout(function(){$("#poptip"+opt.templete).hide();},opt.hovershow);$("#poptip"+opt.templete).data("timeId",triggerObj.timeId);});$("#poptip"+opt.templete).mouseenter(function(){clearTimeout(triggerObj.timeId);}).mouseleave(function(){$(this).hide();});};})(jQuery);
;(function(global,$,pandora,undefined){"use strict"
var count=1;if(pandora.selectModel){return;}
function Factory(options){var _options=$.extend({},Factory.defaults,options);_options.selectElement.each(function(){if($.data(this,'selectModel')){var id=$(this).attr("selectlinkid");$("div#selectbox_"+id).remove();}
var cid=parseInt(+new Date())+count++;$(this).attr("selectlinkid",cid);$(this).attr("data-linkid","selectlinkid_"+cid);$.data(this,'selectModel',new Select(this,_options));})}
function Select(self,options){this.instance;this.txtIndex=0;this._init(self,options);}
Select.prototype={_init:function(self,options){this.instance=this._createInstance(self);this.element=self;this.options=options;this._createElements();this._hideSelect();this._setEvents();this._changeVal();},_createInstance:function(self){return{selectId:$(self).attr("selectlinkid"),state:false};},_hideSelect:function(){$(this.element).hide();},_setEvents:function(){var self=this;$(document).on("click","html",function(e){self._closeSelectBox(true);});},_createElements:function(){var self=this;var selectModelEl=$('<div/>',{id:'selectbox_'+self.instance.selectId,'class':'selectbox '+$(self.element).attr('data-class'),data:{'sourceElement':self.element}});if(self.options.autoWidth){selectModelEl.css('width','auto');}
if($('[data-linkid="selectlinkid_'+this.instance.selectId+'"]').is(":disabled")){selectModelEl.addClass('selectbox-stop');}
var selectValueWrap=$('<p/>',{'class':'select-info like-input'}),selectBoxEl=self._createSelectOptionWrap(),isSelectBoxEmpty=selectBoxEl==null?true:false,selectValueEl=self._createSelectValueWrap(isSelectBoxEmpty),selectModelArrowWrap=$('<span/>',{'class':'select-arrow'}),selectModelArrow=$('<i/>',{'class':'ui-arrow-bottom dark-ui-arrow-bottom'});selectModelArrowWrap.append(selectModelArrow);selectValueWrap.append(selectModelArrowWrap).append(selectValueEl);selectModelEl.append(selectValueWrap).append(selectBoxEl);$(self.element).before(selectModelEl);if(self.options.autoWidth){var maxW=selectModelEl.outerWidth()+self.options.selectAddWidth,selectVal=isSelectBoxEmpty?self.options.emptyMessage:$(self.element).children("option:selected").text();selectModelEl.css('width',maxW+'px');selectValueEl.text(selectVal)}
self._setSelectBoxEvents(isSelectBoxEmpty);},_setSelectBoxEvents:function(isSelectBoxEmpty){var self=this;var selectModelEl=$("div#selectbox_"+this.instance.selectId);if(!isSelectBoxEmpty){selectModelEl.find(".select-info").click(function(e){e.stopPropagation();self._clickSelectOption();});}},_createSelectOptionWrap:function(){var self=this;var selectBoxEl=$('<div/>',{'class':'selectbox-drop'});var selectBoxOptionsEl=$('<ul/>',{'class':'select-results'});var maxWidth=0;$(self.element).children().each(function(index){var liClass=index==0?self.options.activeLi:'';var selectModelLiEl=$('<li/>',{rel:$(this).val(),text:$(this).text(),'class':liClass,click:function(e){e.stopPropagation();self._changeSelectValue(self,this);}});selectBoxOptionsEl.append(selectModelLiEl);if(self.options.autoWidth){var txt=$(this).text();var txtLen=txt.length;var txtLength=0;for(var i=0;i<txtLen;i++){var charCode=txt.charCodeAt(i);if(charCode>0&&charCode<255){txtLength+=1;}else{txtLength+=2;}}
if(txtLength>maxWidth){maxWidth=txtLength;self.txtIndex=index;}}});selectBoxEl.append(selectBoxOptionsEl);return $(this.element).children().length==0?null:selectBoxEl;},_createSelectValueWrap:function(isSelectBoxEmpty){var selectedText=$(this.element).find("option:selected").text();var selectValueEl=$('<span/>',{'class':'select-value',text:isSelectBoxEmpty?this.options.emptyMessage:(selectedText?selectedText:$(this.element).children().eq(this.txtIndex).text())});return selectValueEl;},_clickSelectOption:function(stageReady){var disabledStatus=$('[data-linkid="selectlinkid_'+this.instance.selectId+'"]').is(":disabled");if(disabledStatus){return;}
if(this.instance.state){this._closeSelectBox();}else{if(!stageReady){this._closeOthers();}else{this._openSelectBox();}}},_changeSelectValue:function(self,clickedEl){var selectValueEl=$("#selectbox_"+this.instance.selectId).find(".select-value");selectValueEl.text($(clickedEl).text());selectValueEl.attr("rel",$(clickedEl).attr("rel"));this._closeSelectBox(true);$(clickedEl).addClass(this.options.activeLi).siblings().removeClass(this.options.activeLi);this.element.selectedIndex=$(clickedEl).index();$(this.element).change();if(typeof self.options.selectCallback==="function"){self.options.selectCallback($(clickedEl).text());}},_changeVal:function(){var self=this;$(this.element).bind('change',function(){var index=this.selectedIndex;var selectModelEl=$("div#selectbox_"+self.instance.selectId);var rel=selectModelEl.find('.select-results').find('li').eq(index).attr('rel');var val=selectModelEl.find('.select-results').find('li').eq(index).text();selectModelEl.find('.select-value').text(val).attr('rel',rel);selectModelEl.find('.select-results').find('li').eq(index).addClass('liActive').siblings('li').removeClass('liActive');})},_closeSelectBox:function(internal){$("#selectbox_"+this.instance.selectId).removeClass('selectbox-active active');var selectBoxEl=$("#selectbox_"+this.instance.selectId).find(".selectbox-drop");if(selectBoxEl.is(":animated")&&!internal){return false;}
this.instance.state=false;switch(this.options.effect.type){case"fade":selectBoxEl.fadeOut(this.options.effect.speed);break;case"slide":selectBoxEl.slideUp(this.options.effect.speed);break;case"standard":selectBoxEl.hide();break;default:selectBoxEl.slideUp(this.options.effect.speed);break;}},_openSelectBox:function(){$("#selectbox_"+this.instance.selectId).addClass('selectbox-active active');var selectBoxEl=$("#selectbox_"+this.instance.selectId).find(".selectbox-drop");if(selectBoxEl.is(":animated")){return false;}
this.instance.state=true;switch(this.options.effect.type){case"fade":selectBoxEl.fadeIn(this.options.effect.speed);break;case"slide":selectBoxEl.slideDown(this.options.effect.speed);break;case"standard":selectBoxEl.show();break;default:selectBoxEl.slideDown(this.options.effect.speed);break;}},_closeOthers:function(){var self=this;$('div[id^=selectbox_]').each(function(){var el=$("div#"+$(this).attr("id"));if(el.data("sourceElement")){var sourceEl=$.data(this,"sourceElement");var selectModelInst=$.data(sourceEl,"selectModel");if(self.instance.selectId!=selectModelInst.instance.selectId){if(selectModelInst.instance.state){selectModelInst._closeSelectBox(true);}}}});self._clickSelectOption(true);}}
Factory.defaults={effect:{"type":"standard","speed":"fast"},emptyMessage:'Empty',activeLi:'liActive',autoWidth:false,selectAddWidth:20,selectElement:$('.selectModel'),selectCallback:null}
pandora.selectModel=Factory;global.pandora=pandora;}(this,jQuery,this.pandora||{}))
;/*
 * calendar.js
 * 2016-03-15
 * 2016-06-12
 * Sheng Jiang
 * 1.0.0.0
 */
(function(window,$,lv,nova){"use strict";if(!Array.prototype.forEach){Array.prototype.forEach=function(callback,thisArg){var T,k;if(this==null){throw new TypeError(' this is null or not defined');}
var O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+' is not a function');}
if(arguments.length>1){T=thisArg;}
k=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O);}
k++;}};}
if(lv.calendar){return false;}
var $document=$(document);var $body=$("body");var today=new Date();var fiveMinutes=1000*60*5;var monthSize={0:31,1:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31};function getEpochOfCST(){var epoch=new Date(1970,0,1);return epoch;}
function padNumber(num,digits,trim){var neg="";if(num<0){neg="-";num=-num;}
num=""+num;while(num.length<digits){num="0"+num;}
if(trim){num=num.substr(num.length-digits);}
return neg+num;}
function dateGetter(name,size,offset,trim){return function(date){var value=date["get"+name]();if(offset>0||value>-offset){value+=offset;}
if(value===0&&offset===-12){value=12;}
return padNumber(value,size,trim);}}
function dateSetter(name,size,offset,trim){return function(date,value){if(offset>0||value>-offset){value-=offset;}
if(value===0&&offset===-12){value=12;}
date["set"+name](value);}}
var DATE_FORMATS_SPLIT=/((?:[^yMdHhmsaZE']+)|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/;var DATE_FORMATS={yyyy:["FullYear",4],yy:["FullYear",2,0],MM:["Month",2,1],M:["Month",1,1],dd:["Date",2],d:["Date",1],HH:["Hours",2],H:["Hours",1],hh:["Hours",2,-12],h:["Hours",1,-12],mm:["Minutes",2],m:["Minutes",1],ss:["Seconds",2],s:["Seconds",1],E:["Day",1]};function Factory(options){options=$.extend({},Factory.defaults,options);return new Calendar(options);}
Factory.defaults={weekHeader:false,weekInterval:false,priceTipText:"因最低价实时变化，请以实际价格为准",showPriceTip:true,sectionSelect:false,allowMutiSelected:false,triggerEvent:"click",date:"",target:"body",offsetAmount:{top:0,left:0},englishWeekTitle:{0:'sun',1:'mon',2:'tue',3:'wed',4:'thu',5:'fri',6:'sat'},weekShortTitle:{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},wrapClass:"",weekTitle:{0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},titleTip:"{{year}}年{{month}}月",template:"big",bimonthly:false,dateFormat:"yyyy-MM-dd",monthChangeOffset:1,sourceFn:null,selectDateCallback:null,cancelDateCallback:null,completeCallback:null,clearCallback:null,okCallback:null,renderReadonly:true,cascading:false,cascadingMin:1,cascadingOffset:1,cascadingMax:-1,cascadingNextAuto:true,minLimit:null,maxLimit:null,monthNext:6,monthPrev:0,dayNext:-1,dayPrev:0,dayDisableNext:0,isTodayClick:true,numberOfDays:"{{num}}晚",division:false,showNumberOfDays:false,isBirthday:false,hasTime:false,clickDocumentHide:true,festival:{'2019-01-01':{name:'元旦',vacationName:'元旦'},'2019-02-04':{name:'除夕',vacationName:'除夕'},'2019-02-05':{name:'春节',vacationName:'春节'},'2019-02-06':{vacationName:'春节假期'},'2019-02-07':{vacationName:'春节假期'},'2019-02-08':{vacationName:'春节假期'},'2019-02-09':{vacationName:'春节假期'},'2019-02-10':{vacationName:'春节假期'},'2019-04-05':{name:'清明',vacationName:'清明节'},'2019-04-06':{vacationName:'清明节假期'},'2019-04-07':{vacationName:'清明节假期'},'2019-05-01':{name:'劳动',vacationName:'劳动节'},'2019-05-02':{vacationName:'劳动节假期'},'2019-05-03':{vacationName:'劳动节假期'},'2019-05-04':{vacationName:'劳动节假期'},'2019-06-07':{name:'端午',vacationName:'端午节'},'2019-06-08':{vacationName:'端午节假期'},'2019-06-09':{vacationName:'端午节假期'},'2019-09-13':{name:'中秋',vacationName:'中秋节'},'2019-09-14':{vacationName:'中秋节假期'},'2019-09-15':{vacationName:'中秋节假期'},'2019-10-01':{name:'国庆',vacationName:'国庆节'},'2019-10-02':{vacationName:'国庆节假期'},'2019-10-03':{vacationName:'国庆节假期'},'2019-10-04':{vacationName:'国庆节假期'},'2019-10-05':{vacationName:'国庆节假期'},'2019-10-06':{vacationName:'国庆节假期'},'2019-10-07':{vacationName:'国庆节假期'},"2020-01-01":{name:"元旦",vacationName:"元旦",},"2020-01-24":{name:"除夕",vacationName:"除夕",},"2020-01-25":{name:"春节",vacationName:"春节",},"2020-01-26":{vacationName:"春节假期",},"2020-01-27":{vacationName:"春节假期",},"2020-01-28":{vacationName:"春节假期",},"2020-01-29":{vacationName:"春节假期",},"2020-01-30":{vacationName:"春节假期",},"2020-04-04":{name:"清明",vacationName:"清明节",},"2020-04-05":{vacationName:"清明节假期",},"2020-04-06":{vacationName:"清明节假期",},"2020-05-01":{name:"劳动",vacationName:"劳动节",},"2020-05-02":{vacationName:"劳动节假期",},"2020-05-03":{vacationName:"劳动节假期",},"2020-05-04":{vacationName:"劳动节假期",},"2020-05-05":{vacationName:"劳动节假期",},"2020-06-25":{name:"端午",vacationName:"端午节",},"2020-06-26":{vacationName:"端午节假期",},"2020-06-27":{vacationName:"端午节假期",},"2020-10-01":{name:"国庆",vacationName:"国庆节、中秋节",},"2020-10-02":{vacationName:"国庆节、中秋节假期",},"2020-10-03":{vacationName:"国庆节、中秋节假期",},"2020-10-04":{vacationName:"国庆节、中秋节假期",},"2020-10-05":{vacationName:"国庆节、中秋节假期",},"2020-10-06":{vacationName:"国庆节、中秋节假期",},"2020-10-07":{vacationName:"国庆节、中秋节假期",},"2020-10-08":{vacationName:"国庆节、中秋节假期",}},cascadingEndNotShowStart:false,weekOffset:0,dayOffset:0,yearTitle:"年",monthTitle:"月",todayTitle:"今天"};function Calendar(options){this.init(options);}
Calendar.now=function(){return new Date();};Calendar.pad=function(number){var r=String(number);if(r.length===1){r='0'+r;}
return r;};Calendar.isSameDay=function(dateA,dateB){if(dateA.getFullYear()!==dateB.getFullYear()){return false;}
if(dateA.getMonth()!==dateB.getMonth()){return false;}
if(dateA.getDate()!==dateB.getDate()){return false;}
return true;};Calendar.isSameMonth=function(dateA,dateB){if(dateA.getFullYear()!==dateB.getFullYear()){return false;}
if(dateA.getMonth()!==dateB.getMonth()){return false;}
return true;};Calendar.isLeapYear=function(fullYear){if((fullYear%400===0)||((fullYear%4===0)&&(fullYear%100!==0))){return true;}else{return false;}};Calendar.dateFormat=function(date,format){var text="";var match;var parts=[];var fn;while(format){match=DATE_FORMATS_SPLIT.exec(format);if(match){parts=parts.concat(match.slice(1));format=parts.pop();}else{parts.push(format);format=null;}}
parts.forEach(function(value){var dateGetterParameter=DATE_FORMATS[value];if(dateGetterParameter){text+=dateGetter.apply(this,dateGetterParameter)(date)}else{text+=value;}});return text;};Calendar.getDateFromFormattedString=function(str,format){var date=getEpochOfCST();date.setFullYear(3000);var match;var parts=[];var strParts=[];var fn;while(format){match=DATE_FORMATS_SPLIT.exec(format);if(match){parts=parts.concat(match.slice(1));format=parts.pop();var matchSize=(match[1].length);var leftStr=str.substr(0,matchSize);str=str.substr(matchSize);strParts.push(leftStr);}else{parts.push(format);strParts.push(str);}}
for(var i=0;i<parts.length;i++){var part=parts[i];var strPart=strParts[i];if(strPart==""){break}
var number=parseInt(strPart,10);var dateSetterParameter=DATE_FORMATS[part];if(dateSetterParameter){fn=dateSetter.apply(this,dateSetterParameter);if(!isNaN(number)){fn(date,number);}}}
var invalidDate=getEpochOfCST().setFullYear(3000);if(+date===+invalidDate){date=new Date();date.isInvalidDate=true;}
return date;};Calendar.getDaysBetween=function(start,end){return Math.abs(start-end)/60/60/1000/24;};Calendar.getFirstDateInMonth=function(date){return new Date(date.getFullYear(),date.getMonth(),1);};Calendar.getLastDateInMonth=function(date){return new Date(date.getFullYear(),date.getMonth()+1,0);};Calendar.getDaysInMonth=function(month,fullYear){if(month===1&&fullYear!==undefined&&Calendar.isLeapYear(fullYear)){return 29;}
return monthSize[month];};Calendar.monthOffset=function(date,monthOffset){var newDate=new Date(date);newDate.setMonth(newDate.getMonth()+monthOffset);return newDate;};Calendar.yearOffset=function(date,yearOffset){var newDate=new Date(date);newDate.setFullYear(newDate.getFullYear()+yearOffset);return newDate;};Calendar.dateOffset=function(date,dayOffset){var newDate=new Date(date);newDate.setDate(newDate.getDate()+dayOffset);return newDate;};Calendar.dateToDay=function(date){return new Date(date.getFullYear(),date.getMonth(),date.getDate());};Calendar.dayToMS=function(days){return days*1000*60*60*24;};var n=0;Calendar.prototype={version:"1.0.0.0",construction:Calendar,destruction:function(){this.unLoadCal();},initLimit:function(){var maxLimit=this.options.maxLimit;var minLimit=this.options.minLimit;if(maxLimit){this.maxLimitDate=Calendar.getDateFromFormattedString(maxLimit,this.options.dateFormat);}
if(minLimit){this.minLimitDate=Calendar.getDateFromFormattedString(minLimit,this.options.dateFormat);}},init:function(options){var template;if(options.template=="birthday"){this.isBirthday=true;}
if(typeof options.template=="object"){template=$.extend(true,{},smallTemplate);for(var temp in options.template){template[temp]=options.template[temp];}}else{switch(options.template){case"big":template=bigTemplate;break;case"birthday":template=birthdayTemplate;break;case"small":template=smallTemplate;break;default:template=smallTemplate;break;}}
options.template=template;if(options.isBirthday&&Factory.defaults.titleTip==options.titleTip){options.titleTip='<span class="cal-year-select">{{year}}'+options.yearTitle+'<i></i></span><span class="cal-month-select">{{month}}'+options.monthTitle+'<i></i></span>';}
this.options=options;this.defaults=Factory.defaults;this.wrap=this.wrap||this.initWrap();this.date=new Date();this.selected={};this.selectedTime=getEpochOfCST();this.cascadingSelected={start:null,end:null,startTime:getEpochOfCST(),endTime:getEpochOfCST()};this.cascadingIndex=0;this.id=n++;this.initLimit();this.initNow();this.loadCal();},initNow:function(){var dateStr=this.options.date;if(typeof dateStr=="string"&&dateStr!==""){this.now=Calendar.getDateFromFormattedString(dateStr,this.options.dateFormat);}else{this.now=new Date()}},initWrap:function(){var html=$.trim(this.options.template.wrap);html=this.replaceWith(html,{bimonthly:'data-bimonthly="'+this.options.bimonthly+'"',float:'data-float="'+!this.options.autoRender+'"'});return $(html);},loadCal:function(){var options=this.options;if(options.autoRender){this.render();this.bindEvent();$(options.trigger).append(this.wrap)}else{$(document).off(options.triggerEvent,options.trigger,this.triggerEventHandler);$(document).on(options.triggerEvent,options.trigger,{self:this},this.triggerEventHandler);this.triggerBlur();}},unLoadCal:function(){var options=this.options;$(document).off(options.triggerEvent,options.trigger,this.triggerEventHandler);this.unBindEvent();},triggerBlur:function(){var self=this;$document.on("click",{self:self},this.destroyHandler);},destroy:function(){this.wrap.remove();$(".calhover").remove();$(".cal-number-of-days").remove();},destroyHandler:function(e){var $target=$(e.target);var self=e.data.self;var $calendar=$target.parents(".ui-calendar");var options=self.options;if($calendar.length<=0&&options.clickDocumentHide==true){self.destroy();}},triggerEventHandler:function(e){var self=e.data.self;e.stopPropagation();var $this=$(this);var date;if(self.options.cascading){var start=self.cascadingSelected.start;var end=self.cascadingSelected.end;var $triggers=$(self.options.trigger);var $triggerFirst=$triggers.first();var triggerFirstValue=$triggerFirst.val();var $triggerLast=$triggers.last();var triggerLastValue=$triggerLast.val();if(!start){if(triggerFirstValue){start=triggerFirstValue;self.cascadingSelected.start=start}}
if(!end){if(triggerLastValue){end=triggerLastValue;self.cascadingSelected.end=end}}
var index=$triggers.index($this);if(index==0){if(start){date=Calendar.getDateFromFormattedString(start,self.options.dateFormat);}}else if(index==1){if(end){date=Calendar.getDateFromFormattedString(end,self.options.dateFormat);}}
if(date){self.now=date;}}else{var value=$this.val();if(value){date=Calendar.getDateFromFormattedString(value,self.options.dateFormat);self.selected={};self.selected[value]=true;self.now=date;}}
if($this.is("[readonly]")&&!self.options.renderReadonly){return false;}
self.$trigger=$this;var offset=self.getOffset();self.wrap.css({"top":offset.top,"left":offset.left});var zIndex=self.options.zIndex;if(zIndex){self.wrap.css("z-index",zIndex);}
var $target=$(self.options.target);$('.ui-calendar[data-float=true]').remove();$target.append(self.wrap);self.render();self.bindEvent();},getOffset:function(){var $trigger=this.$trigger;var offsetAmount=this.options.offsetAmount;var top=this.getInt($trigger.offset().top+$trigger.outerHeight(false)+offsetAmount.top);var left=this.getInt($trigger.offset().left+offsetAmount.left);return{top:top,left:left};},getInt:function(floatNumber){var intNumber=parseInt(floatNumber,10);return intNumber;},bindEvent:function(){this.bindMonthChangeEvent();this.bindSelectEvent();this.bindMouseOverEvent();this.bindMouseLeaveEvent();this.bindBirthdayEvent();},bindBirthdayEvent:function(){this.wrap.off("click",this.hideDropdownHandler);this.wrap.on("click",{self:this},this.hideDropdownHandler);this.wrap.off("click",".cal-year-select",this.yearDropdownHandler);this.wrap.on("click",".cal-year-select",{self:this},this.yearDropdownHandler);this.wrap.off("click",".cal-month-select",this.monthDropdownHandler);this.wrap.on("click",".cal-month-select",{self:this},this.monthDropdownHandler);this.wrap.off("click",".cal-year-dropdown li",this.yearSelectHandler);this.wrap.on("click",".cal-year-dropdown li",{self:this},this.yearSelectHandler);this.wrap.off("click",".cal-month-dropdown li",this.monthSelectHandler);this.wrap.on("click",".cal-month-dropdown li",{self:this},this.monthSelectHandler);this.wrap.off("click",".cal-birthday-clear",this.birthdayClearHandler);this.wrap.on("click",".cal-birthday-clear",{self:this},this.birthdayClearHandler);this.wrap.off("click",".cal-birthday-ok",this.birthdayOkHandler);this.wrap.on("click",".cal-birthday-ok",{self:this},this.birthdayOkHandler);this.wrap.off("click",".cal-hour",this.birthdayHourHandler);this.wrap.on("click",".cal-hour",{self:this},this.birthdayHourHandler);this.wrap.off("click",".cal-minute",this.birthdayMinuteHandler);this.wrap.on("click",".cal-minute",{self:this},this.birthdayMinuteHandler);this.wrap.off("click",".cal-hour-dropdown li",this.hourSelectHandler);this.wrap.on("click",".cal-hour-dropdown li",{self:this},this.hourSelectHandler);this.wrap.off("click",".cal-minute-dropdown li",this.minuteSelectHandler);this.wrap.on("click",".cal-minute-dropdown li",{self:this},this.minuteSelectHandler);this.wrap.off("click",".cal-minute-dropdown .close",this.minuteCloseHandler);this.wrap.on("click",".cal-minute-dropdown .close",{self:this},this.minuteCloseHandler);this.wrap.off("click",".cal-hour-dropdown .close",this.hourCloseHandler);this.wrap.on("click",".cal-hour-dropdown .close",{self:this},this.hourCloseHandler);},hourCloseHandler:function(e){e.stopPropagation();var self=e.data.self;var $hourDropdown=self.wrap.find(".cal-hour-dropdown");$hourDropdown.remove();self.wrap.find(".cal-hour").removeClass("active");},minuteCloseHandler:function(e){e.stopPropagation();var self=e.data.self;var $minuteDropdown=self.wrap.find(".cal-minute-dropdown");$minuteDropdown.remove();self.wrap.find(".cal-minute").removeClass("active");},validateTime:function(){var cascadingSelected=this.cascadingSelected;if(cascadingSelected.start&&(cascadingSelected.start==cascadingSelected.end)){var startTime=cascadingSelected.startTime;var endTime=cascadingSelected.endTime;var lastTime=getEpochOfCST();lastTime.setHours(23);lastTime.setMinutes(55);if(+startTime==+lastTime){this.cascadingSelected.end=null;this.cascadingSelected.endTime=getEpochOfCST();}else if(startTime>=endTime){startTime=new Date(startTime.getTime()+fiveMinutes);this.cascadingSelected.endTime.setTime(startTime);}}},hourSelectHandler:function(e){e.stopPropagation();var self=e.data.self;var $this=$(this);if($this.is('[data-disabled="true"]')){return false;}
var hourStr=$this.attr("data-hour");var hour=parseInt(hourStr,10);var $calHour=self.wrap.find(".cal-hour");if(self.options.cascading){if(self.cascadingIndex===0){self.cascadingSelected.startTime.setHours(hour);}else{self.cascadingSelected.endTime.setHours(hour);}
self.validateTime();}else{self.selectedTime.setHours(hour);}
var $hourDropdown=self.wrap.find(".cal-hour-dropdown");$hourDropdown.remove();$calHour.html(hourStr).removeClass("active");},minuteSelectHandler:function(e){e.stopPropagation();var self=e.data.self;var $this=$(this);if($this.is('[data-disabled="true"]')){return false;}
var minuteStr=$this.attr("data-minute");var $calMinute=self.wrap.find(".cal-minute");var minute=parseInt(minuteStr,10);if(self.options.cascading){if(self.cascadingIndex===0){self.cascadingSelected.startTime.setMinutes(minute);}else{self.cascadingSelected.endTime.setMinutes(minute);}
self.validateTime();}else{self.selectedTime.setMinutes(minute);}
var $minuteDropdown=self.wrap.find(".cal-minute-dropdown");$minuteDropdown.remove();$calMinute.html(minuteStr).removeClass("active");},birthdayHourHandler:function(e){var self=e.data.self;var $this=$(this);var val=$this.html();$this.addClass("active");self.wrap.find(".cal-hour-dropdown").remove();self.wrap.find(".cal-minute-dropdown").remove();var $hourDropdown=$(''+'<div class="cal-hour-dropdown">'+'<div class="title">小时<div class="close"><i></i></div></div>'+'</div>');var $ul=$("<ul></ul>");var liArr=[];var activeClass;var startHour=0;var disabled;if(self.options.cascading&&self.cascadingIndex===1){var start=self.cascadingSelected.start;var end=self.cascadingSelected.end;var startTime=self.cascadingSelected.startTime;if(start&&(start==end)){startHour=startTime.getHours();}}
for(var i=0;i<24;i+=1){var dataHour=padNumber(i,2);if(dataHour==val){activeClass=true;}else{activeClass=false;}
if(i<startHour){disabled=true;}else{disabled=false;}
liArr.push(''+'<li'+' class="'+(activeClass?'active':'')+'"'+' data-disabled="'+(disabled?'true':'false')+'"'+' data-hour="'+dataHour+'">'+
i+'</li>');}
var liStr=liArr.join("");$ul.html(liStr);$hourDropdown.append($ul);self.wrap.append($hourDropdown);},birthdayMinuteHandler:function(e){var $this=$(this);var self=e.data.self;$this.addClass("active");var val=$this.html();var startMinute=0;var disabled;var sameDayAndHour=false;self.wrap.find(".cal-hour-dropdown").remove();self.wrap.find(".cal-minute-dropdown").remove();if(self.options.cascading&&self.cascadingIndex===1){var start=self.cascadingSelected.start;var end=self.cascadingSelected.end;var startTime=self.cascadingSelected.startTime;var endTime=self.cascadingSelected.endTime;if(start&&(start==end)){var startHour=startTime.getHours();var endHour=endTime.getHours();if(startHour===endHour){sameDayAndHour=true;startMinute=startTime.getMinutes();}}}
var $minuteDropdown=$(''+'<div class="cal-minute-dropdown">'+'<div class="title">分钟<div class="close"><i></i></div></div>'+'</div>');var $ul=$("<ul></ul>");var liArr=[];var activeClass;for(var i=0;i<60;i+=5){var dataMinute=padNumber(i,2);if(dataMinute==val){activeClass=true;}else{activeClass=false;}
if(sameDayAndHour&&(i<startMinute+5)){disabled=true;}else{disabled=false;}
liArr.push(''+'<li class="'+(activeClass?'active':'')+'"'+' data-disabled="'+(disabled?'true':'false')+'"'+' data-minute="'+dataMinute+'">'+i+'</li>');}
var liStr=liArr.join("");$ul.html(liStr);$minuteDropdown.append($ul);self.wrap.append($minuteDropdown);},birthdayOkHandler:function(e){e.stopPropagation();var self=e.data.self;self.inputTime();self.destroy();var okCallback=self.options.okCallback;if(okCallback&&$.isFunction(okCallback)){okCallback.call(self,self);}
self.toNextCal();},inputTime:function(){var self=this;var date;var start=self.cascadingSelected.start;var end=self.cascadingSelected.end;var result;if(self.options.cascading){if((self.cascadingIndex===0)&&start){date=Calendar.getDateFromFormattedString(start,self.options.dateFormat);result=self.getDateResult(date);}else if(end){date=Calendar.getDateFromFormattedString(end,self.options.dateFormat);result=self.getDateResult(date);}
if(result){self.$trigger.val(result);}}},birthdayClearHandler:function(e){var self=e.data.self;self.$trigger.val("");if(self.options.cascading){if(self.cascadingIndex===0){self.cascadingSelected.start=null;self.cascadingSelected.startTime=getEpochOfCST();}else{self.cascadingSelected.end=null;self.cascadingSelected.endTime=getEpochOfCST();}}else{self.selected={};self.selectedTime=getEpochOfCST();}
self.destroy();var clearCallback=self.options.clearCallback;if(clearCallback&&$.isFunction(clearCallback)){clearCallback.call(self,self);}
e.stopPropagation();},monthSelectHandler:function(e){var self=e.data.self;var $this=$(this);var selectedMonth=$this.attr("data-month");var month=parseInt(selectedMonth,10);self.now.setDate(1);self.now.setMonth(month);self.render();self.bindEvent();e.stopPropagation();},limitDropdown:function(){var minLimitDate=this.minLimitDate;var maxLimitDate=this.maxLimitDate;var now=this.now;var nowYear=now.getFullYear();var nowMonth=now.getMonth();if(minLimitDate&&nowYear==minLimitDate.getFullYear()){var minMonth=minLimitDate.getMonth();if(nowMonth<minMonth){this.now.setDate(1);this.now.setMonth(minMonth)}}
if(maxLimitDate&&nowYear==maxLimitDate.getFullYear()){var maxMonth=maxLimitDate.getMonth();if(nowMonth>maxMonth){this.now.setDate(1);this.now.setMonth(maxMonth)}}},yearSelectHandler:function(e){var self=e.data.self;var $this=$(this);var selectedYear=$this.attr("data-year");var year=parseInt(selectedYear,10);self.now.setFullYear(year);self.limitDropdown();self.render();self.bindEvent();e.stopPropagation();},hideDropdownHandler:function(e){var self=e.data.self;var $target=$(e.target);var $yearDropdown=self.wrap.find(".cal-year-dropdown-box");var $monthDropdown=self.wrap.find(".cal-month-dropdown-box");var $hourDropdown=self.wrap.find(".cal-hour-dropdown");var $minuteDropdown=self.wrap.find(".cal-minute-dropdown");var $hour=self.wrap.find(".cal-hour");var $minute=self.wrap.find(".cal-minute");$yearDropdown.hide();$monthDropdown.hide();$hourDropdown.hide();$minuteDropdown.hide();$hour.removeClass("active");$minute.removeClass("active");if($target.is(".cal-year-select")||$target.parents(".cal-year-select").length>0){$yearDropdown.show();}
if($target.is(".cal-month-select")||$target.parents(".cal-month-select").length>0){$monthDropdown.show();}
if($target.is(".cal-hour")||$target.is(".cal-hour-dropdown")||$target.parents(".cal-hour-dropdown").length>0){$hourDropdown.show();$hour.addClass("active");}
if($target.is(".cal-minute")||$target.is(".cal-minute-dropdown")||$target.parents(".cal-minute-dropdown").length>0){$minuteDropdown.show();$minute.addClass("active");}},yearDropdownHandler:function(e){var self=e.data.self;var $this=$(this);var $yearDropdown=self.wrap.find(".cal-year-dropdown-box");if($yearDropdown.length<=0){$yearDropdown=self.createYearDropdown($this);}
if($this.hasClass("active")){$yearDropdown.hide();}else{$yearDropdown.show();}
var calOffset={top:self.wrap.offset().top,left:self.wrap.offset().left};var offset={top:$this.offset().top,left:$this.offset().left};var calDate=self.now;var calYear=calDate.getFullYear();var $yearCurrentLi=$yearDropdown.find("[data-year="+calYear+"]");$yearDropdown.css({top:offset.top-calOffset.top,left:offset.left-calOffset.left});self.wrap.append($yearDropdown);$yearCurrentLi.addClass("active");var currentLiHeight=$yearCurrentLi.outerHeight();var currentLiIndex=$yearCurrentLi.index();var currentLiTop=currentLiHeight*currentLiIndex;$yearDropdown.find(".cal-year-dropdown").scrollTop(currentLiTop)},monthDropdownHandler:function(e){var self=e.data.self;var $this=$(this);var $monthDropdown=self.wrap.find(".cal-month-dropdown-box");if($monthDropdown.length<=0){$monthDropdown=self.createMonthDropdown($this);}
if($this.hasClass("active")){$monthDropdown.hide();}else{$monthDropdown.show();}
var calOffset={top:self.wrap.offset().top,left:self.wrap.offset().left};var offset={top:$this.offset().top,left:$this.offset().left};var calDate=self.now;var calMonth=calDate.getMonth();var $yearCurrentLi=$monthDropdown.find("[data-month="+calMonth+"]");$monthDropdown.css({top:offset.top-calOffset.top,left:offset.left-calOffset.left});self.wrap.append($monthDropdown);$yearCurrentLi.addClass("active");var currentLiHeight=$yearCurrentLi.outerHeight();var currentLiIndex=$yearCurrentLi.index();var currentLiTop=currentLiHeight*currentLiIndex;$monthDropdown.scrollTop(currentLiTop)},createMonthDropdown:function(){var minLimitDate=this.minLimitDate;var maxLimitDate=this.maxLimitDate;var minYear=minLimitDate?minLimitDate.getFullYear():1900;var maxYear=maxLimitDate?maxLimitDate.getFullYear():2099;var minMonth=0;var maxMonth=11;var nowYear=this.now.getFullYear();if(nowYear==minYear&&minLimitDate){minMonth=minLimitDate.getMonth();}
if(nowYear==maxYear&&maxLimitDate){maxMonth=maxLimitDate.getMonth();}
var $dropdownBox=$(''+'<div class="cal-month-dropdown-box">'+'    <div class="cal-month-select-active">'+(this.now.getMonth()+1)+this.options.monthTitle+'<i></i></div>'+'</div>');var $ul=$('<ul class="cal-month-dropdown"></ul>');$dropdownBox.append($ul);var liStr=[];for(var index=minMonth;index<=maxMonth;index++){liStr.push('<li data-month="'+index+'">'+(index+1)+'</li>');}
$ul.html(liStr.join(""));return $dropdownBox;},createYearDropdown:function(){var minLimitDate=this.minLimitDate;var maxLimitDate=this.maxLimitDate;var minYear=minLimitDate?minLimitDate.getFullYear():1900;var maxYear=maxLimitDate?maxLimitDate.getFullYear():2099;var $dropdownBox=$(''+'<div class="cal-year-dropdown-box">'+'    <div class="cal-year-select-active">'+this.now.getFullYear()+this.options.yearTitle+'<i></i></div>'+'</div>');var $ul=$('<ul class="cal-year-dropdown"></ul>');$dropdownBox.append($ul);var liStr=[];for(var i=minYear;i<=maxYear;i++){liStr.push('<li data-year="'+i+'">'+i+'</li>');}
$ul.html(liStr.join(""));return $dropdownBox;},bindMouseOverEvent:function(){this.wrap.off("mouseenter","[data-date-map]",this.bindMouseOverHandler);this.wrap.on("mouseenter","[data-date-map]",{self:this},this.bindMouseOverHandler);},bindMouseLeaveEvent:function(){this.wrap.off("mouseleave","[data-date-map]",this.bindMouseLeaveHandler);this.wrap.on("mouseleave","[data-date-map]",{self:this},this.bindMouseLeaveHandler);},bindMouseLeaveHandler:function(e){var self=e.data.self;if(self.options.cascading){self.hideNumberOfDays();self.renderSelected(false,false);}
if(self.options.sectionSelect){self.renderSelected(false,false);}},bindMouseOverHandler:function(e){var self=e.data.self;var $this=$(this);var dateStr=$this.attr("data-date-map");if(self.options.cascading){if(!$this.children().is(".nodate,.caldisabled")){if(!self.options.cascadingEndNotShowStart){self.renderSelected(dateStr,false);}}}
if(self.options.sectionSelect&&self.sectionSelectFlag){if(!$this.children().is(".notThisMonth,.nodate")){self.renderSelected(dateStr,false);}}},bindSelectEvent:function(){this.wrap.off("click","[data-date-map]",this.bindSelectHandler);this.wrap.on("click","[data-date-map]",{self:this},this.bindSelectHandler);},getDateResult:function(dateVal){var self=this;if(self.options.cascading){if(self.cascadingIndex===0){var startTime=self.cascadingSelected.startTime;dateVal.setHours(startTime.getHours());dateVal.setMinutes(startTime.getMinutes());}else{var endTime=self.cascadingSelected.endTime;dateVal.setHours(endTime.getHours());dateVal.setMinutes(endTime.getMinutes());}}else{var time=self.selectedTime;dateVal.setHours(time.getHours());dateVal.setMinutes(time.getMinutes());}
var dateResult=Calendar.dateFormat(dateVal,self.options.dateFormat);return dateResult;},canSectionSelect:function(td,self,date){var hasProductStr=td.attr("data-has-product");var hasProduct=false;if(hasProductStr=="true"){hasProduct=true;}
var canSelect=0;if(!self.sectionSelectFlag){if(hasProduct){self.sectionSelectFlag=true;self.sectionSelectEnd=null;self.sectionSelectStart=date;self.sectionSelectEnd=Calendar.dateOffset(date,1)}}else{var middle;var sectionSelectStart;var sectionSelectEnd;var middleStr;if(+self.sectionSelectStart==+date){}else{if(self.sectionSelectStart>date){if(hasProduct){return 4;}else{return 3;}}else{sectionSelectStart=self.sectionSelectStart;sectionSelectEnd=date;}
canSelect=1;middle=Calendar.dateOffset(sectionSelectStart,1);while(middle<sectionSelectEnd){middleStr=Calendar.dateFormat(middle,self.options.dateFormat);var $middle=self.wrap.find('[data-date-map='+middleStr+']');if($middle.attr("data-has-product")!=="true"){canSelect=2;break;}
middle=Calendar.dateOffset(middle,1);}}}
return canSelect;},bindSelectHandler:function(e){e.stopPropagation();var self=e.data.self;var selectDateCallback=self.options.selectDateCallback;var cancelDateCallback=self.options.cancelDateCallback;var autoRender=self.options.autoRender;var $this=$(this);function runSelectDateCallback(){if(selectDateCallback){selectDateCallback.call(self,self,$this);}}
function runCancelDateCallback(){if(cancelDateCallback){cancelDateCallback.call(self,self,$this);}}
if($this.children().first().is(".nodate,.caldisabled")){}else if($this.children().is(".notThisMonth")&&self.options.bimonthly){}else{var dateStr=$this.attr("data-date-map");var format=self.options.dateFormat;if(dateStr){var date=Calendar.getDateFromFormattedString(dateStr,format);if(!self.options.sectionSelect){self.now=new Date(date);}}
var end=self.cascadingSelected.end;if(end){var endDate=Calendar.getDateFromFormattedString(end,format);}
if(self.options.cascading){}else if(self.options.sectionSelect){var canSelect=self.canSectionSelect($this,self,date);if(canSelect==1||canSelect==2){self.sectionSelectFlag=false;self.sectionSelectEnd=date;}
if(canSelect==1||canSelect==0||canSelect==4){runSelectDateCallback()}else{runCancelDateCallback()}
if(canSelect==4){self.sectionSelectFlag=true;self.sectionSelectStart=date
self.sectionSelectEnd=Calendar.dateOffset(date,1);}
self.renderSelected();self.bindEvent();}else{var hasInventory=$this.children().hasClass("hasInventory");if(self.options.allowMutiSelected){var isSelect=$this.is(".td-selected");if(isSelect){delete self.selected[dateStr];$this.removeClass("td-selected");if(autoRender){runCancelDateCallback();}}else{self.selected[dateStr]=true;$this.addClass("td-selected");if(autoRender){runSelectDateCallback();}}}else{self.selected={};self.selected[dateStr]=true;var $date=self.wrap.find("[data-date-map]");$date.removeClass("td-selected");$this.addClass("td-selected");if(autoRender){runSelectDateCallback();}}}}
if(!autoRender){var $td=$this;if($this.find(".nodate,.caldisabled").length>0){return false;}
if($this.children().is(".notThisMonth")&&self.options.bimonthly){return false;}
var dateMap=$td.attr("data-date-map");var dateVal=Calendar.getDateFromFormattedString(dateMap,self.options.dateFormat);var dateResult=self.getDateResult(dateVal);self.$trigger.val(dateResult);runSelectDateCallback();if(self.options.cascading){if(self.cascadingIndex===0){self.cascadingSelected.start=dateMap}else{self.cascadingSelected.end=dateMap}
if(self.cascadingIndex===0&&end&&dateStr){var max=self.options.cascadingMax;var min=self.options.cascadingMin;var offset=self.options.cascadingOffset;var dayNext=self.options.dayNext;var thisDate=Calendar.dateToDay(self.date);var newEndDate;var maxDate=new Date(+date+Calendar.dayToMS(max));if(maxDate<endDate&&max!=-1){newEndDate=Calendar.dateFormat(maxDate,format);self.cascadingSelected.end=newEndDate;}
var offsetDate=new Date(+date+Calendar.dayToMS(offset));if(offsetDate>endDate){newEndDate=Calendar.dateFormat(offsetDate,format);self.cascadingSelected.end=newEndDate;}
if(dayNext!=-1){var lastDate=Calendar.dateOffset(thisDate,dayNext);if(offsetDate&&(+offsetDate>+lastDate)){newEndDate=Calendar.dateFormat(lastDate,format);self.cascadingSelected.end=newEndDate;}}}
self.validateTime();if(!self.options.hasTime){self.destroy();self.toNextCal();}else{self.dateValidate();self.render();self.bindEvent();}}else{self.destroy();}}},unBindEvent:function(){this.unBindMonthChangeEvent();},bindMonthChangeEvent:function(){var monthChangeOffset=this.options.monthChangeOffset||1;var $monthPrev=this.wrap.find(".month-prev");var $monthNext=this.wrap.find(".month-next");$monthPrev.off("click",this.monthChangeHandler);$monthPrev.on("click",{self:this,monthOffset:-monthChangeOffset},this.monthChangeHandler);$monthNext.off("click",this.monthChangeHandler);$monthNext.on("click",{self:this,monthOffset:+monthChangeOffset},this.monthChangeHandler);},unBindMonthChangeEvent:function(){var $monthPrev=this.wrap.find(".month-prev");var $monthNext=this.wrap.find(".month-next");$monthPrev.off("click",this.monthChangeHandler);$monthNext.off("click",this.monthChangeHandler);},dateValidate:function(){var $triggers=$(this.options.trigger);var end=this.cascadingSelected.end;if(end){var endDate=Calendar.getDateFromFormattedString(end,this.options.dateFormat);var endTime=this.cascadingSelected.endTime;endDate.setHours(endTime.getHours());endDate.setMinutes(endTime.getMinutes());var endDateStr=Calendar.dateFormat(endDate,this.options.dateFormat);$triggers.eq(1).val(endDateStr);}else{$triggers.eq(1).val("");}},toNextCal:function(){var $triggers=$(this.options.trigger);var triggerSize=$triggers.length;var cascadingCallback=this.options.cascadingCallback;this.dateValidate();if(this.options.cascadingNextAuto){var index=$triggers.index(this.$trigger);if(triggerSize-1==index){}else{var eventName=this.options.triggerEvent;$triggers.eq(index+1).trigger(eventName);if(cascadingCallback){cascadingCallback.call(this,this,$triggers.eq(index+1));}}}},monthLimit:function(){var mosNext=this.options.monthNext;var mosPrev=this.options.monthPrev;var upperLimit=Calendar.monthOffset(Calendar.getFirstDateInMonth(today),mosNext);var lowerLimit=Calendar.monthOffset(Calendar.getFirstDateInMonth(today),-mosPrev);if(mosNext!=-1&&Calendar.isSameMonth(upperLimit,this.now)){this.hideMonthNext();}
if(mosPrev!=-1&&Calendar.isSameMonth(lowerLimit,this.now)){this.hideMonthPrev();}},DateLimit:function(){if(this.maxLimitDate){var isSameMonthNext=Calendar.isSameMonth(this.maxLimitDate,this.now);if(isSameMonthNext){this.hideMonthNext();}}
if(this.minLimitDate){var isSameMonthPrev=Calendar.isSameMonth(this.minLimitDate,this.now);if(isSameMonthPrev){this.hideMonthPrev();}}},hideMonthNext:function(){this.wrap.find(".month-next").hide();},hideMonthPrev:function(){this.wrap.find(".month-prev").hide();},showMonthNext:function(){this.wrap.find(".month-next").show();},showMonthPrev:function(){this.wrap.find(".month-prev").show();},monthChangeHandler:function(e){var self=e.data.self;var monthOffset=e.data.monthOffset;self.now.setDate(1);self.now=Calendar.monthOffset(self.now,monthOffset);self.render();self.bindEvent();e.stopPropagation();},toMonth:function(yearStr,monthStr){var year=parseInt(yearStr,10);var month=parseInt(monthStr,10)-1;if(typeof year==="number"){this.now.setFullYear(year);}
if(typeof month==="number"){this.now.setDate(1);this.now.setMonth(month);}
this.render();this.bindEvent();},hideNumberOfDays:function(){$(".cal-number-of-days").hide();},render:function(disableCallback){var self=this;if(this.options.cascading){var $trigger=self.$trigger;var $triggers=$(self.options.trigger);this.cascadingIndex=$triggers.index($trigger);}
this.hideNumberOfDays();this.wrap.html("");this.wrap.append(this.createHead());this.wrap.append(this.createBody());if(this.wrap.is(".ui-calendar-big")&&this.options.showPriceTip){this.wrap.append("<div class='nova-calendar-tip'><i></i>"+this.options.priceTipText+"</div>")}
var sourceFn=this.options.sourceFn;if(!disableCallback&&$.isFunction(sourceFn)){sourceFn.call(self,self);}
this.wrap.addClass(this.options.wrapClass);var completeCallback=this.options.completeCallback;this.renderFestival();this.renderSelected(false,true);this.renderTime();this.monthLimit();this.DateLimit();if(!disableCallback&&$.isFunction(completeCallback)){completeCallback.call(this,this);}},renderTime:function(){if(this.options.hasTime){this.wrap.find(".cal-pane").children().css({"display":"inline-block"});}
if(this.options.cascading){this.renderCascadingTime();}else{this.renderNormalTime();}},setTimeHtml:function(time){var hour=time.getHours();var minute=time.getMinutes();var hourStr=padNumber(hour,2);var minuteStr=padNumber(minute,2);var $hour=this.wrap.find(".cal-hour");var $minute=this.wrap.find(".cal-minute");$hour.html(hourStr);$minute.html(minuteStr);},renderNormalTime:function(){this.setTimeHtml(this.selectedTime);},renderCascadingTime:function(){var startTime=this.cascadingSelected.startTime;var endTime=this.cascadingSelected.endTime;if(this.cascadingIndex===0){this.setTimeHtml(startTime);}else if(this.cascadingIndex===1){this.setTimeHtml(endTime);}},renderSelected:function(mouseOverEnd,isClick){var self=this;var selected=this.selected;var $dates=this.wrap.find("[data-date-map]").has(".caldate");var cascadingMin=this.options.cascadingMin;var cascadingMax=self.options.cascadingMax;var cascadingEndNotShowStart=self.options.cascadingEndNotShowStart;$dates.children().removeClass("calmiddle");var dateFormat=self.options.dateFormat;if(self.options.cascading){var start=self.cascadingSelected.start;var end=mouseOverEnd||self.cascadingSelected.end;var $startDate=$dates.filter('[data-date-map="'+start+'"]').has(".caldate");var $endDate=$dates.filter('[data-date-map="'+end+'"]').has(".caldate");if(start){var startDate=Calendar.getDateFromFormattedString(start,dateFormat);}
if(end){var endDate=Calendar.getDateFromFormattedString(end,dateFormat);}
if(this.cascadingIndex===0){}else{if(start){$dates.each(function(index,domEle){var $date=$(domEle);var dateStr=$date.attr("data-date-map");var date=Calendar.getDateFromFormattedString(dateStr,self.options.dateFormat);if(end){if(date>startDate&&date<endDate){if(!self.options.cascadingEndNotShowStart){$date.children().addClass("calmiddle");}}}
if(cascadingMin!=-1){if(date<+startDate+Calendar.dayToMS(cascadingMin)){$date.children().addClass("caldisabled")}}
if(cascadingMax!=-1){if(date>+startDate+Calendar.dayToMS(cascadingMax)){$date.children().addClass("caldisabled");}}});if(end&&$endDate.length>0){var numberOfDays=Calendar.getDaysBetween(startDate,endDate);var size={width:$endDate.width(),height:$endDate.height(),left:$endDate.offset().left,top:$endDate.offset().top};var $numberOfDays=$(".cal-number-of-days");if($numberOfDays.length<=0){$numberOfDays=$(''+'<div class="cal-number-of-days">'+'    <div class="triangle"></div>'+'    <span></span>'+'</div>');}
$numberOfDays.css({left:0,top:0});var $numberOfDaysSpan=$numberOfDays.children("span");var template=self.options.numberOfDays;var numberOfDaysHtml=self.replaceWith(template,{num:numberOfDays});$numberOfDaysSpan.html(numberOfDaysHtml);$body.append($numberOfDays);var width=$numberOfDays.width();$numberOfDays.css({left:size.left-~~(width-size.width/2)+2,top:size.top+size.height+7});if(self.options.zIndex){$numberOfDays.css("zIndex",self.options.zIndex+1);}
if(self.options.showNumberOfDays){$numberOfDays.show();}}}
if(end){if(!mouseOverEnd){$endDate.addClass("td-selected");}}}
if(end&&mouseOverEnd&&!self.options.hasTime){$dates.removeClass("td-selected");}
if(start&&!((cascadingEndNotShowStart&&this.cascadingIndex===1))){$startDate.addClass("td-selected")}}
if(self.options.sectionSelect){var $wrap=self.wrap;var $tds=$wrap.find("td[data-date-map]").filter(function(index,ele){var $ele=$(ele);if($ele.find(".notThisMonth").length>0){return false}else{return true;}});$tds.removeClass("td-selected").children().removeClass("calmiddle").find(".calday").each(function(index,ele){var $ele=$(ele);var backup=$ele.attr("data-backup");if(backup){$ele.text(backup);}});var sectionSelectStart=self.sectionSelectStart;var sectionSelectEnd=self.sectionSelectEnd;if(mouseOverEnd){sectionSelectEnd=Calendar.getDateFromFormattedString(mouseOverEnd,self.options.dateFormat);}
if(+sectionSelectStart==+sectionSelectEnd){return;}
if(sectionSelectStart&&sectionSelectEnd){if(+sectionSelectStart>+sectionSelectEnd){sectionSelectStart=null;sectionSelectEnd=null;if(!mouseOverEnd){self.sectionSelectStart=sectionSelectStart;self.sectionSelectEnd=sectionSelectEnd;}}
var middle=Calendar.dateOffset(sectionSelectStart,1);var $middle;var middleStr;while(+middle<+sectionSelectEnd){middleStr=Calendar.dateFormat(middle,dateFormat);$middle=$tds.filter('td[data-date-map='+middleStr+']');$middle.children().addClass("calmiddle");middle=Calendar.dateOffset(middle,1);}}
if(sectionSelectStart){var sectionSelectStartStr=Calendar.dateFormat(sectionSelectStart,dateFormat);var $start=$tds.filter('td[data-date-map='+sectionSelectStartStr+']');$start.addClass("td-selected");var $startCalDay=$start.find(".calday");$startCalDay.attr("data-backup",$startCalDay.text()).text("入住");}
if(sectionSelectEnd){var sectionSelectEndStr=Calendar.dateFormat(sectionSelectEnd,dateFormat);var $end=$tds.filter('td[data-date-map='+sectionSelectEndStr+']');$end.addClass("td-selected");var $endCalDay=$end.find(".calday");$endCalDay.attr("data-backup",$endCalDay.text()).text("退房");}}
$dates.each(function(index,domEle){var $td=$(domEle);if(!$td.find(".nodate").length>0){var date=$td.attr("data-date-map");if(self.selected[date]){if(self.options.autoRender){$td.addClass("td-selected");}else{if(self.$trigger.val()!=""){$td.addClass("td-selected");}}
var $thisTd=self.wrap.find('[data-date-map="'+date+'"]');if($thisTd.length>1){$thisTd.has(".notThisMonth").removeClass("td-selected");}}}});},renderFestival:function(){var festival=this.options.festival;var self=this;var $tds=this.wrap.find('td[data-date-map]');var dateToday=new Date(self.date.getFullYear(),self.date.getMonth(),self.date.getDate());var dateTodayStr=Calendar.dateFormat(dateToday,self.options.dateFormat);$tds.each(function(i,domEle){var $td=$(domEle);var $date=$td.find(".caldate");var $calActive=$date.find(".calactive");var $calday=$date.find(".calday");var date=$td.attr("data-date-map");var tdFestival=festival[date];if(tdFestival){if($(self.wrap).is(".ui-calendar-mini")){if(tdFestival.name){$date.html(tdFestival.name);$date.addClass("festival");}}else{var $calFestival=$('<div class="calfestival">休</div>');$calActive.append($calFestival);if(tdFestival.name){$date.addClass("festival");$calday.html(tdFestival.name);}}}
if(dateTodayStr===date&&self.options.todayTitle!=null){if($(self.wrap).is(".ui-calendar-mini")){$date.html(self.options.todayTitle);}else{$calday.html(self.options.todayTitle);}}
var thisDate=Calendar.getDateFromFormattedString(date,self.options.dateFormat);var thisDateMonth=thisDate.getMonth();var thisDateDay=thisDate.getDate();if(self.options.division&&thisDateDay==1){if($(self.wrap).is(".ui-calendar-mini")){}else{$calday.html((thisDateMonth+1)+"月"+thisDateDay+"日");}}})},createHead:function(){return this.options.template.calControl;},createBody:function(){var options=this.options;var html="";var date=this.now;html+=this.createSingleCalendar(date,0);if(options.bimonthly){var nextMonthDate=new Date(date);nextMonthDate.setDate(1);nextMonthDate=Calendar.monthOffset(nextMonthDate,1);html+=this.createSingleCalendar(nextMonthDate,1);}
html=this.replaceWith(options.template.calWrap,{content:html});return html;},createSingleCalendar:function(date,offset){var html="";var options=this.options;var month=date.getMonth();var year=date.getFullYear();var nextMonthDate=Calendar.monthOffset(Calendar.getFirstDateInMonth(date),1);var nextMonthYear=nextMonthDate.getFullYear();var nextMonthMonth=nextMonthDate.getMonth();var weekHeaderTh="";if(this.options.weekHeader){weekHeaderTh='<th class="ui-calendar-week-header"></th>';}
html+=this.replaceWith(options.template.calTitle,{month:this.replaceWith(options.titleTip,{year:year,month:month+1})});if(this.options.division){var nextMonthTitle=this.replaceWith(options.template.calTitle,{month:this.replaceWith(options.titleTip,{year:nextMonthYear,month:nextMonthMonth+1})});nextMonthTitle=nextMonthTitle.replace("caltitle","caltitle caltitlenext");html+=nextMonthTitle}
var weekOffset=this.options.weekOffset;var dayOffset=this.options.dayOffset;var englishWeekTitle=this.options.englishWeekTitle;var weekShortTitle=this.options.weekShortTitle;html+=this.replaceWith(options.template.calBody,{month:month+1,date:this.createDate(date),'weekHeader':weekHeaderTh,'englishWeekTitle[0]':englishWeekTitle[(0+weekOffset+dayOffset)%7],'englishWeekTitle[1]':englishWeekTitle[(1+weekOffset+dayOffset)%7],'englishWeekTitle[2]':englishWeekTitle[(2+weekOffset+dayOffset)%7],'englishWeekTitle[3]':englishWeekTitle[(3+weekOffset+dayOffset)%7],'englishWeekTitle[4]':englishWeekTitle[(4+weekOffset+dayOffset)%7],'englishWeekTitle[5]':englishWeekTitle[(5+weekOffset+dayOffset)%7],'englishWeekTitle[6]':englishWeekTitle[(6+weekOffset+dayOffset)%7],'shortWeekTitle[0]':weekShortTitle[(0+weekOffset+dayOffset)%7],'shortWeekTitle[1]':weekShortTitle[(1+weekOffset+dayOffset)%7],'shortWeekTitle[2]':weekShortTitle[(2+weekOffset+dayOffset)%7],'shortWeekTitle[3]':weekShortTitle[(3+weekOffset+dayOffset)%7],'shortWeekTitle[4]':weekShortTitle[(4+weekOffset+dayOffset)%7],'shortWeekTitle[5]':weekShortTitle[(5+weekOffset+dayOffset)%7],'shortWeekTitle[6]':weekShortTitle[(6+weekOffset+dayOffset)%7]});html=this.replaceWith(options.template.calMonth,{content:html,offset:'data-offset="'+offset+'"'});return html;},createDate:function(date){var self=this;var html="";var dateHtml="";var dates=this.getDateArrayByMonth(date);var dateSize=dates.length;var options=this.options;var weekHeader=self.options.weekHeader;var weekInterval=self.options.weekInterval;dates.forEach(function(row,index){dateHtml="";if(weekHeader){dateHtml+="<td class='ui-calendar-week-header'></td>";}
row.forEach(function(cal){if(cal){var dateMap=Calendar.dateFormat(cal,self.options.dateFormat);var singleDateHtml=self.replaceWith(options.template.day,{week:cal.getDay(),day:Calendar.dateFormat(cal,"dd"),className:self.getClass(cal,date),dateMap:'data-date-map="'+dateMap+'"'});}else{singleDateHtml='<td><div class="date caldate caldisabled"></div></td>';}
dateHtml+=singleDateHtml;});html+=self.replaceWith(options.template.weekWrap,{week:dateHtml});if(weekInterval){if(dateSize-1===index){}else{html+='<tr><td class="ui-calendar-week-interval" colspan="8"></td></tr>'}}});return html;},getClass:function(cal,date){var year=cal.getFullYear();var month=cal.getMonth();var calDate=Calendar.dateToDay(cal);var className="date";var thisDate=Calendar.dateToDay(this.date);var dayNext=this.options.dayNext;var dayPrev=this.options.dayPrev;var dayDisableNext=this.options.dayDisableNext;var cascadingOffset=this.options.cascadingOffset;var cascadingMin=this.options.cascadingMin;var cascading=this.options.cascading;if((year==date.getFullYear())&&(month==date.getMonth())){className+=" caldate";}else if(this.options.division){className+=" caldate notThisMonth";}else{if(this.wrap.is(".ui-calendar-mini")){className+=" nodate notThisMonth";}else{className+=" caldate notThisMonth";}}
var dayBetween=Calendar.getDaysBetween(thisDate,calDate);if(calDate>thisDate&&dayNext!=-1&&dayBetween>dayNext){className+=" nodate";}
if(calDate>=thisDate&&dayBetween<dayDisableNext){className+=" nodate";}
if(cascading&&this.cascadingIndex===0){var minDate=Calendar.dateOffset(calDate,cascadingMin);var lastDate=Calendar.dateOffset(thisDate,dayNext);if(minDate>lastDate&&dayNext!=-1){className+=" nodate";}}
if((calDate<thisDate)&&(dayPrev!=-1)&&(dayBetween>dayPrev)){className+=" nodate";}
if(Calendar.isSameDay(thisDate,cal)){className+=" today";if(!this.options.isTodayClick){className+=" caldisabled"}}
return className;},replaceWith:function(str,obj){for(var i in obj){str=str.replace("{{"+i+"}}",obj[i]);}
return str;},getDate:function(){return this.now.getDate();},getMonth:function(){return this.now.getMonth();},getFullYear:function(){return this.now.getFullYear();},getDay:function(){return this.now.getDay();},getWeekTitle:function(i){return this.options.weekTitle[i];},getWeekShortTitle:function(i){return this.options.weekShortTitle[i];},getDateArrayByMonth:function(date){var division=this.options.division;var dateArray=[];var year=date.getFullYear();var month=date.getMonth();var firstDate=new Date(year,month,1);var nextMonthFirstDate=new Date(year,month+1,1);var firstDateDay=firstDate.getDay();var index=-firstDateDay+this.options.weekOffset;index=index>0?index-7:index;index+=this.options.dayOffset;var row=0;var col=0;var space;var spaceStart=false;if(division){var lastDayIndex=firstDateDay+Calendar.getDaysInMonth(month,year);if(lastDayIndex>35){index+=22;}else{index+=15;}
if(lastDayIndex==35){space=0}else{space=7;}
for(row=0;row<6;row++){dateArray[row]=[];for(col=0;col<7;col++){var newDate=new Date(firstDate.getFullYear(),firstDate.getMonth(),index);if(space&&(spaceStart||(+nextMonthFirstDate==+newDate))){space--;dateArray[row][col]=null;}else{index++;dateArray[row][col]=newDate;}}}}else{for(row=0;row<6;row++){dateArray[row]=[];for(col=0;col<7;col++){index++;dateArray[row][col]=new Date(firstDate.getFullYear(),firstDate.getMonth(),index);}}}
return dateArray;},getSelect:function(){var cascading=this.options.cascading;if(cascading){return[this.cascadingSelected.start,this.cascadingSelected.end];}else{var selected=[];for(var s in this.selected){selected.push(s)}
return selected;}},getDayOfWeek:function(date,noFestival){date=date||this.now;if(date){if(Calendar.isSameDay(today,date)){return this.options.todayTitle;}
if(!noFestival){var nowStr=Calendar.dateFormat(date,this.options.dateFormat);if(nowStr){var festival=this.options.festival[nowStr];if(festival){if(festival.name){return festival.name;}}}}
var dayOfTheWeek=date.getDay();return this.options.weekTitle[dayOfTheWeek];}},loading:function(){var $loading=this.wrap.find(".month-loading");$loading.show();},loaded:function(){var $loading=this.wrap.find(".month-loading");$loading.hide();}};var calControl='<span class="month-prev" title="上一月">‹</span><span class="month-next" title="下一月">›</span>';var calWrap='<div class="calwrap clearfix">{{content}}</div>';var calMonth='<div class="calmonth" {{offset}}>{{content}}</div>';var calTitle='<div class="caltitle"><span class="mtitle">{{month}}</span></div>';var calTable='<table class="caltable">'+'    <thead>'+'        <tr>'+'            {{weekHeader}}'+'            <th class="{{englishWeekTitle[0]}}">{{shortWeekTitle[0]}}</th>'+'            <th class="{{englishWeekTitle[1]}}">{{shortWeekTitle[1]}}</th>'+'            <th class="{{englishWeekTitle[2]}}">{{shortWeekTitle[2]}}</th>'+'            <th class="{{englishWeekTitle[3]}}">{{shortWeekTitle[3]}}</th>'+'            <th class="{{englishWeekTitle[4]}}">{{shortWeekTitle[4]}}</th>'+'            <th class="{{englishWeekTitle[5]}}">{{shortWeekTitle[5]}}</th>'+'            <th class="{{englishWeekTitle[6]}}">{{shortWeekTitle[6]}}</th>'+'        </tr>'+'    </thead>'+'    <tbody>'+'        {{date}}'+'    </tbody>'+'    </table>';var calBody=''+'<div class="calbox">'+
calTable+'    <div class="month-loading"></div>'+'</div>';var weekWrap='<tr>{{week}}</tr>';var smallTemplate={wrap:'<div class="ui-calendar ui-calendar-mini" {{bimonthly}} {{float}}></div>',calControl:calControl,calWrap:calWrap,calMonth:calMonth,calTitle:calTitle,calBody:calBody,weekWrap:weekWrap,day:''+'<td data-week="{{week}}" {{dateMap}}>'+'    <div class="{{className}}">{{day}}</div>'+'</td>'};var bigTemplate={wrap:'<div class="ui-calendar ui-calendar-big" {{bimonthly}} {{float}}></div>',calControl:calControl,calWrap:calWrap,calMonth:calMonth,calTitle:calTitle,calBody:calBody,weekWrap:weekWrap,day:''+'<td data-week="{{week}}" {{dateMap}}>'+'    <div class="{{className}}">'+'        <div class="calday">{{day}}</div>'+'        <div class="calinfo"></div>'+'        <div class="calprice"></div>'+'        <div class="calactive"></div>'+'        <div class="calselected"></div>'+'    </div>'+'</td>'};var birthdayTemplate={wrap:'<div class="ui-calendar ui-calendar-mini ui-calendar-birthday" {{bimonthly}} {{float}}></div>',calControl:calControl,calWrap:calWrap,calMonth:calMonth,calTitle:calTitle,calBody:''+'<div class="calbox">'+
calTable+'<div class="cal-pane">'+'<span class="cal-time-text">时间</span>'+'<span class="cal-time-input">'+'<span class="cal-hour">00</span><span class="cal-time-to">:</span><span class="cal-minute">00</span>'+'</span>'+'<span class="btn btn-xs cal-birthday-clear">清空</span>'+'<span class="btn btn-xs cal-birthday-ok">确定</span>'+'</div>'+'<div class="month-loading"></div>'+'</div>',weekWrap:weekWrap,day:''+'<td data-week="{{week}}" {{dateMap}}>'+'    <div class="{{className}}">{{day}}</div>'+'</td>'};lv.calendar=Factory;window.lv=lv;nova.calendar=Factory;window.nova=nova;for(var c in Calendar){if(typeof Calendar[c]==="function"){Factory[c]=Calendar[c]}}})(window,jQuery,window.lv||{},window.nova||{});
;/*
 * ui.js
 * 2016-11-03
 * Sheng Jiang
 * 1.0.0.0
 */
(function(window,$,nova){"use strict";if(nova.ui){return false;}
var $document=$(document);var $body=$("body");function Factory(options){if(options&&options.template){options.template=$.extend(true,{},template,options.template);}
options=$.extend({},Factory.defaults,options);return new UI(options);}
var template={checkbox:''+'<span class="nova-checkbox"></span>',radio:''+'<span class="nova-radio"></span>',select:{main:''+'<div class="nova-select">'+'<div class="nova-select-toggle"><em>{{text}}</em><b><i></i></b></div>'+'<div class="nova-select-dropdown">'+'{{dropdown}}'+'</div>'+'</div>',optgroup:'<div class="nova-select-optgroup">'+'<div class="nova-select-optgroup-label">{{label}}</div>'+'{{options}}'+'</div>',option:'<div class="nova-select-option">{{text}}</div>'}};Factory.defaults={target:"body",template:template,radioClassName:'',selectOpenCallback:null,zIndex:null};function UI(options){this.init(options);}
UI.prototype={version:"1.0.0.0",replaceWith:function(str,obj){for(var i in obj){if(obj.hasOwnProperty(i)){str=str.replace("{{"+i+"}}",obj[i]);}}
return str;},construction:UI,init:function(options){this.options=options;this.selectOpenCallback=options.selectOpenCallback;this.defaults=Factory.defaults;this.bindEvent();},render:function(){this.checkboxRender();this.radioRender();this.selectRender();this.numberBoxRender();},selectRender:function(){var self=this;var $labels=$(this.options.target).find(".nova-select-label");$labels.each(function(index,ele){var $label=$(ele);var $select=$label.find("select");if(!$select.length){return}
var originIndex=$select.get(0).selectedIndex;function getOptHtml($children){var optHtml="";var size=$children.length;for(var index=0;index<size;index++){var $child=$children.eq(index);if($child.is("optgroup")){var label=$child.attr("label");optHtml+=getOptGroupHtml($child,label);}else{var text=$child.text();optHtml+=self.replaceWith(self.options.template.select.option,{text:text});}}
return optHtml;}
function getOptGroupHtml($optgroup,label){var $children=$optgroup.children("option");return self.replaceWith(self.options.template.select.optgroup,{label:label,options:getOptHtml($children)});}
var $selectChildren=$select.children();var optHtml=getOptHtml($selectChildren);var html=self.replaceWith(self.options.template.select.main,{dropdown:optHtml});$select.hide();$label.find(".nova-select").remove();var $novaSelect=$(html);var $activeOption=$novaSelect.find(".nova-select-option").eq(originIndex);$activeOption.addClass("active");var text=$activeOption.text();$novaSelect.find(".nova-select-toggle em").text(text);var disabled=$select.prop("disabled");if(disabled){$novaSelect.addClass("disabled");}
$label.append($novaSelect);var $dropdown=$label.find(".nova-select-dropdown");$dropdown.data("label",$label);$label.data("dropdown",$dropdown);if(self.options.zIndex){$dropdown.css("zIndex",self.options.zIndex)}})},numberBoxRender:function(){var self=this;var $numberBox=$(this.options.target).find(".nova-number-box");$numberBox.each(function(index,ele){var $box=$(ele);var $subtract=$box.find(".nova-number-box-subtract");self.addAndSubtract.call($subtract.get(0),self,0);});},unrender:function(){this.checkboxUnrender();this.radioUnrender();this.selectUnrender();},selectUnrender:function(){var $labels=$(this.options.target).find(".nova-select-label");$labels.find("select").show();$labels.find(".nova-select").remove();},checkboxUnrender:function(){var $label=$(this.options.target).find(".nova-checkbox-label");var $input=$label.find("input[type=checkbox]");var $checkbox=$label.find(".nova-checkbox");$input.removeClass("nova-checkbox-hide");$checkbox.remove();},radioUnrender:function(){var $label=$(this.options.target).find(".nova-radio-label");var $input=$label.find("input[type=radio]");var $radio=$label.find(".nova-radio");$input.removeClass("nova-radio-hide");$radio.remove();},checkboxRender:function(){var $labels=$(this.options.target).find(".nova-checkbox-label");var $inputs=$labels.find("input[type=checkbox]");var $checkboxs=$labels.find(".nova-checkbox");$inputs.addClass("nova-checkbox-hide");$checkboxs.remove();$inputs.after(this.options.template.checkbox);$inputs.each(function(index,ele){var $ele=$(ele);var checked=$ele.prop("checked");var $checkbox=$ele.parents(".nova-checkbox-label").find(".nova-checkbox");var $label=$ele.parents(".nova-checkbox-label");if(checked){$checkbox.addClass("nova-checked");$label.addClass("nova-checked");}else{$checkbox.removeClass("nova-checked");$label.removeClass("nova-checked");}
var disabled=$ele.prop("disabled");if(disabled){$checkbox.addClass("disabled");$checkbox.parents(".nova-checkbox-label").eq(0).addClass("disabled");}})},radioRender:function(){var self=this;var $labels=$(this.options.target).find(".nova-radio-label");var $inputs=$labels.find("input[type=radio]");var $radios=$labels.find(".nova-radio");$inputs.addClass("nova-radio-hide");$radios.remove();$inputs.after(this.options.template.radio);$inputs.each(function(index,ele){var $ele=$(ele);var checked=$ele.prop("checked");var $label=$ele.parents(".nova-radio-label");$label.addClass(self.options.radioClassName);var $radio=$label.find(".nova-radio");if(checked){$radio.addClass("nova-checked");}else{$radio.removeClass("nova-checked");}
var disabled=$ele.prop("disabled");if(disabled){$radio.addClass("disabled");$radio.parents(".nova-radio-label").eq(0).addClass("disabled");}})},bindEvent:function(){$(this.options.target).off("change",".nova-checkbox-label input[type=checkbox]",this.checkboxChangeHandler);$(this.options.target).on("change",".nova-checkbox-label input[type=checkbox]",{self:this},this.checkboxChangeHandler);$(this.options.target).off("change",".nova-radio-label input[type=radio]",this.radioChangeHandler);$(this.options.target).on("change",".nova-radio-label input[type=radio]",{self:this},this.radioChangeHandler);$(this.options.target).off("click",".nova-select-toggle",this.selectClickHandler);$(this.options.target).on("click",".nova-select-toggle",{self:this},this.selectClickHandler);$(this.options.target).off("click",".nova-select-option");$(this.options.target).on("click",".nova-select-option",{self:this},this.selectOptionClickHandler);$(this.options.target).off("change",".nova-select-label select");$(this.options.target).on("change",".nova-select-label select",this.selectChangeHandler);$(this.options.target).off("mousedown",".nova-number-box .nova-number-box-subtract");$(this.options.target).on("mousedown",".nova-number-box .nova-number-box-subtract",{self:this},function(e){var self=e.data.self;self.addAndSubtract.call(this,self,-1);});$(this.options.target).off("mousedown",".nova-number-box .nova-number-box-add");$(this.options.target).on("mousedown",".nova-number-box .nova-number-box-add",{self:this},function(e){var self=e.data.self;self.addAndSubtract.call(this,self,1);});$(this.options.target).off("change",".nova-number-box input",this.addAndSubtractChangeHandler);$(this.options.target).on("change",".nova-number-box input",{self:this},this.addAndSubtractChangeHandler);$($document).off("click",this.selectHideHandler);$($document).on("click",this.selectHideHandler);},selectChangeHandler:function(){var $this=$(this);var index=$this.get(0).selectedIndex;var $label=$this.parents(".nova-select-label");var text=$this.find("option").eq(index).text();var $novaSelect=$label.find(".nova-select");var $toggle=$novaSelect.find(".nova-select-toggle");var $dropdown=$novaSelect.find(".nova-select-dropdown");var $options=$dropdown.find(".nova-select-option");$options.removeClass("active");var $thisOption=$options.eq(index);$thisOption.addClass("active");$toggle.find("em").text(text);},selectOptionClickHandler:function(){var $this=$(this);var $dropdown=$this.parents(".nova-select-dropdown");var $label=$dropdown.data("label");var $select=$label.find("select");var $novaSelect=$label.find(".nova-select");var text=$this.text();var $toggle=$novaSelect.find(".nova-select-toggle");$toggle.find("em").text(text);var $options=$dropdown.find(".nova-select-option");$options.removeClass("active");$this.addClass("active");if($select.get(0).selectedIndex!==$options.index($this)){$select.get(0).selectedIndex=$options.index($this);$select.change();}
$novaSelect.removeClass("opened");$label.removeClass("opened");},selectHideHandler:function(e){var $target=$(e.target);var $select;var $label;var $allSelect=$(".nova-select");if($target.is(".nova-select")||$target.parents(".nova-select").length>0){if($target.is(".nova-select")){$select=$allSelect.not($target);}else if($target.parents(".nova-select").length>0){$select=$allSelect.not($target.parents(".nova-select"));}
$label=$select.parents(".nova-select-label");$select.removeClass("opened");}else if($target.is(".nova-select-optgroup-label")){}else{$allSelect.removeClass("opened");$label=$allSelect.parents(".nova-select-label");$("body>.nova-select-dropdown").each(function(index,ele){var $ele=$(ele);var $label=$ele.data("label");var $select=$label.find(".nova-select");$ele.hide();$select.append($ele);});}
if($label){$label.removeClass("opened");}},selectClickHandler:function(e){var self=e.data.self;var $this=$(this);var $select=$this.parent(".nova-select");var $label=$select.parents(".nova-select-label");var $dropdown=$label.data("dropdown");$dropdown.data("label",$label);$(".nova-select-dropdown").hide();if($select.is(".disabled")){}else{$select.toggleClass("opened");$label.toggleClass("opened");}
if($select.hasClass("opened")){$body.append($dropdown);var top=$this.offset().top;var left=$this.offset().left;var height=$this.outerHeight();var width=$this.outerWidth()-2;$dropdown.css({position:"absolute",top:top+height,left:left,width:width}).show();if(self.selectOpenCallback){self.selectOpenCallback.call(self,{$select:$select,$dropdown:$dropdown,$label:$label})}}else{$select.append($dropdown.hide());}},checkboxChangeHandler:function(){var $this=$(this);var $label=$this.parents(".nova-checkbox-label");var $checkbox=$label.find(".nova-checkbox");var checked=$this.prop("checked");if(checked){$checkbox.addClass("nova-checked");$label.addClass("nova-checked");}else{$checkbox.removeClass("nova-checked");$label.removeClass("nova-checked");}},radioChangeHandler:function(){var $this=$(this);var $label=$this.parents(".nova-radio-label");var $radio=$label.find(".nova-radio");var name=$this.attr("name");var checked=$this.prop("checked");var $group=$this.parents(".nova-radio-group");var $labels=$group.find(".nova-radio-label");var $inputs=$group.find(".nova-radio-label input[type=radio][name="+name+"]");var $radios=$inputs.parents(".nova-radio-label").find(".nova-radio");$radios.removeClass("nova-checked");$radio.addClass("nova-checked");$labels.removeClass("nova-checked");$label.addClass("nova-checked");},addAndSubtractChangeHandler:function(e){var self=e.data.self;var $this=$(this);var $box=$this.parent();self.addAndSubtractLimit($box,0);},addAndSubtractLimit:function($box,offset){var $subtract=$box.find(".nova-number-box-subtract");var $add=$box.find(".nova-number-box-add");var $input=$box.find("input");var num=strToNumber($input.val(),0);var min=strToNumber($input.attr("data-min"),0);var max=strToNumber($input.attr("data-max"),9);var limit={min:min,max:max};num=num+offset;if(num>=max){num=max;$add.addClass("disabled");}else{$add.removeClass("disabled");}
if(num<=min){num=min;$subtract.addClass("disabled");}else{$subtract.removeClass("disabled");}
$input.val(num)},addAndSubtract:function(self,offset){var $this=$(this);var $box=$this.parent();var isDisabled=$this.is(".disabled");self.addAndSubtractLimit($box,offset);var $input=$box.find("input");if(isDisabled){}else{$input.change();}}};nova.ui=Factory;window.nova=nova;for(var c in UI){if(UI.hasOwnProperty(c)){if(typeof UI[c]==="function"){Factory[c]=UI[c]}}}
function strToNumber(str,def){str=$.trim(str);var num=parseInt(str,10);if(isNaN(num)||!isFinite(num)){num=def;}
return num;}})(window,jQuery,window.nova||{});
;(function(global,$,pandora,undefined){"use strict"
if(global.pandora&&global.pandora.dialog){return;}
var universe=null,count=0,expando="dialog"+(+new Date),isIE6=window.VBArray&&!window.XMLHttpRequest,data={},timer=null,isArray=function(obj){if(typeof Array.isArray==="undefined"){return Object.prototype.toString.call(obj)==="[object Array]";}
return Array.isArray(obj);};function getIframeHeight(iframe){var iframe=$(iframe[0].contentWindow.document);var wh={w:iframe.width(),h:iframe.height()};return wh;}
function Factory(config,ok,cancel){var config=config||{},defaults=Factory.defaults,list=[];if(typeof config==="string"){config={content:config}}
for(var i in defaults){if(config[i]===undefined){config[i]=defaults[i];};};config.id=expando+count;if(isIE6){config.fixed=false;}
if(!config.button||!config.button.push){config.button=[];};if(ok!==undefined){config.ok=ok;};if(config.ok){config.button.push({className:config.okClassName,value:config.okValue,callback:config.ok});};if(cancel!==undefined){config.cancel=cancel;};if(config.cancel){config.button.push({className:config.cancelClassName,value:config.cancelValue,callback:config.cancel});};count++;return Dialog.list[config.id]=universe?universe._init(config):new Dialog(config);}
function Dialog(config){this._init(config);}
Dialog.prototype={constructor:Dialog,_init:function(config){var wrap=null,that=this;that.config=config;that.wrap=wrap=that.wrap||$($.trim(that._getTemplate(config)));if(universe===null){$("body").prepend(that.wrap);}
if(config.wrapClass!==""){wrap.addClass(config.wrapClass);}
wrap.addClass(config.skin);that.button.apply(that,config.button);that.title(config.title);that.content(config.content);that.size(config.width,config.height);that._zIndex(config.zIndex);that.reset();that.time(config.time);if(config.mask===true){that._mask(config);}
that.wrap.show();that._bindEvent(config);if(config.drag===true){that._drag();}
universe=null;if(typeof config.initialize==="function"){config.initialize.call(this);}
return that;},_getTemplate:function(config){return template;},_createIframe:function(url){var that=this;this.iframe=$('<iframe scrolling="no" frameborder="0" marginwidth="0" marginheight="0" width="100%" height="100%" ></iframe>');this.iframe.attr("src",url);this.iframe.one("load",function(){if(!that.wrap.is(":visible")){return;}
clearInterval(that._interval);that._interval=setInterval(function(){that._syncWH();},300);});return this.iframe;},_syncWH:function(){var h,w,wh={},wrap=this.wrap,$dialogBody=wrap.find("div.dialog-body"),padding=parseInt($dialogBody.css("paddingLeft"),10)+parseInt($dialogBody.css("paddingRight"),10),margin=parseInt($dialogBody.css("marginLeft"),10)+parseInt($dialogBody.css("marginRight"),10);var $dialogHeader=wrap.find("div.dialog-header"),$dialogFooter=wrap.find("div.dialog-footer"),bpm=this._gaugeValue($dialogBody).y,hh=$dialogHeader.height()+this._gaugeValue($dialogHeader).y,fh=$dialogFooter.height()+this._gaugeValue($dialogFooter).y;if(this.config.height!==""&&this.config.height!=="auto"){var iframeBodyH=parseInt(this.config.height,10)-bpm-hh-fh;var iframeDoc=this.iframe[0].contentWindow.document;$(iframeDoc.getElementsByTagName('body')).css({'height':iframeBodyH,'overflow-y':'scroll'});$(iframeDoc.getElementsByTagName('html')).css({'height':iframeBodyH,'overflow-y':'scroll'});}
try{this._errCount=0;wh=getIframeHeight(this.iframe);h=wh.h;w=wh.w;}catch(err){this._errCount=(this._errCount||0)+1;if(this._errCount>=6){h=this.config.initialHeight;clearInterval(this._interval);delete this._interval;}}
wrap.css("width",(margin+padding+w));wrap.find("div.dialog-body").css({"height":h,"width":w});clearInterval(this._interval);delete this._interval;},_bodyWH:function(){var h,wrap=this.wrap,$dialogBody=wrap.find("div.dialog-body"),$dialogHeader=wrap.find("div.dialog-header"),$dialogFooter=wrap.find("div.dialog-footer"),bpm=this._gaugeValue($dialogBody).y,hh=$dialogHeader.height()+this._gaugeValue($dialogHeader).y,fh=$dialogFooter.height()+this._gaugeValue($dialogFooter).y;h=parseInt(this.config.height,10)-bpm-hh-fh;wrap.find("div.dialog-body").css({"height":h,"overflow":"auto"});},_gaugeValue:function(obj){var val={};val.y=parseInt(obj.css("paddingTop"),10)+parseInt(obj.css("paddingBottom"),10)+
parseInt(obj.css("marginTop"),10)+parseInt(obj.css("marginBottom"),10);val.x=parseInt(obj.css("paddingLeft"),10)+parseInt(obj.css("paddingRight"),10)+
parseInt(obj.css("marginLeft"),10)+parseInt(obj.css("marginRight"),10);return val;},_mask:function(config){var $overlay=$("[data-mask=overlay]");this._mask=function(){$('.'+config.maskClass).show();}
if($overlay.size()===0){var div=document.createElement('div');$(div).attr("data-mask","overlay").addClass(config.maskClass).css("zIndex",config.zIndex-1);if(isIE6){$(div).css({position:'absolute',width:$(window).width()+'px',height:$(document).height()+'px'});}
$("body").prepend(div);}else{$overlay.css("z-index",config.zIndex-1);}
this._ismask=true;},_unmask:function(){var that=this;var list=Dialog.list,count=0,indexArray=[];for(var i in list){if(list.hasOwnProperty(i)){if(list[i]._ismask===true){count++;if(list[i].zIndex!==that.zIndex)
indexArray.push(list[i].zIndex);}}}
if(this._ismask===true&&count===1){$("[data-mask=overlay]").hide();}else{var maxIndex=Math.max.apply(Math,indexArray);$("[data-mask=overlay]").css("z-index",maxIndex-1);}
return this;},_drag:function(){var disX=0,disY=0,wrap=this.wrap[0],handle=this.wrap.find("div.dialog-header")[0];handle.style.cursor="move";handle.onmousedown=function(event){var event=event||window.event;disX=event.clientX-wrap.offsetLeft;disY=event.clientY-wrap.offsetTop;document.onmousemove=function(event){var event=event||window.event,iL=event.clientX-disX,iT=event.clientY-disY,maxL=document.documentElement.clientWidth-wrap.offsetWidth,maxT=document.documentElement.clientHeight-wrap.offsetHeight;iL<=0&&(iL=0);iT<=0&&(iT=0);iL>=maxL&&(iL=maxL);iT>=maxT&&(iT=maxT);wrap.style.left=iL+"px";wrap.style.top=iT+"px";return false};document.onmouseup=function(){document.onmousemove=null;document.onmouseup=null;if(this.releaseCapture){this.releaseCapture();}};if(this.setCapture){this.setCapture();}
return false};},_zIndex:function(index){Factory.defaults.zIndex=index;index=Factory.defaults.zIndex++;this.wrap.css("zIndex",index);this.zIndex=index;},_bindEvent:function(config){var that=this;that.wrap.bind("click",function(e){var target=$(e.target),index=0;if(target.attr("data-dismiss")==="dialog"){that.close(this);return false;}else{if(target.parent().is("[data-btn=btns]")){index=target.index();that._execCallback(index);}}});that._loopy();},_loopy:function(){var that=this;timer=setTimeout(function(){clearTimeout(timer);var elem=that.wrap,width=elem.width(),height=elem.height();if(width!==data.w||height!==data.h){if(that.config.dialogAuto){that.wrap.css({"position":"absolute","top":($(window).scrollTop()+that.config.dialogAutoTop)+"px","left":parseInt(($(window).width()-width)/2,10)+"px"});data.w=width;data.h=height;}else{that.reset();}}
that._loopy();},150);},_unbindEvent:function(){this.wrap.unbind("click");},_execCallback:function(index){var fns=this.config.button,fn=fns[index].callback;return typeof fn!=="function"||fn.call(this)!==false?this.close():this;},title:function(title){this.wrap.find("div.dialog-header").html(title);return this;},content:function(content){var rulReg=/^(https?:\/\/|\/|\.\/|\.\.\/)/,that=this,prev,next,parent,display;if(rulReg.test(content)){content=this._createIframe(content);}
if(typeof content!=="string"){if($(content)[0].nodeType===1){content=$(content)[0];display=content.style.display;prev=content.previousSibling;next=content.nextSibling;parent=content.parentNode;this._elemBack=function(){if(prev&&prev.parentNode){prev.parentNode.insertBefore(content,prev.nextSibling);}else if(next&&next.parentNode){next.parentNode.insertBefore(content,next);}else if(parent){parent.appendChild(content);};content.style.display=display;that._elemBack=null;};$(content).css('display','block');}}
this.wrap.find("div.dialog-content").html(content);return this;},reset:function(){var wrap=this.wrap,wh=$(window).height(),oh=wrap.height(),ow=wrap.width(),top,left;if(this.config.dialogAuto){wrap.css({"position":"absolute","top":($(window).scrollTop()+this.config.dialogAutoTop)+"px","left":parseInt(($(window).width()-ow)/2,10)+"px"});return;}
if(this.config.height!==""&&this.config.height!=="auto"){this._bodyWH();}
if(wh-oh>=50){wrap.css("position",this.config.fixed?"fixed":"absolute");this.offsets();}else{top=$(window).scrollTop()+10;left=($(window).width()-ow)/2,wrap.css({"position":"absolute","top":parseInt(top,10)+"px","left":parseInt(left,10)+"px"});}
data.w=ow;data.h=oh;},loading:function(content){var html='<div style="text-align:center">'+'<img width="46" height="46" src="http://pic.lvmama.com/img/new_v/ui_scrollLoading/loadingGIF46px.gif"'+'alt="loading..." ></div>';html=content?content:html;this.content(html);return this;},size:function(width,height){if(typeof width==="number"){width+="px";}
if(typeof height==="number"){height+="px";}
this.wrap.css({"width":width,"height":height});return this;},button:function(){var ags=[].slice.call(arguments),len=ags.length,i=0,j=0,classNameLen=0,className="",button=null,buttonAgs=null;for(;i<len;i++){buttonAgs=ags[i];button=document.createElement("button");if(isArray(buttonAgs.className)){for(classNameLen=buttonAgs.className.length;j<classNameLen;j++){className+=buttonAgs.className[j]+" ";}}else{className=buttonAgs.className===undefined?"":buttonAgs.className;}
$(button).attr({"class":"pbtn pbtn-small "+className+""}).html(buttonAgs.value);$(this.wrap).find("[data-btn=btns]").append(button);}
return this;},offsets:function(x,y){var wrap=this.wrap,ww=$(window).width(),wh=$(window).height(),ow=wrap.width(),oh=wrap.height(),left=(ww-ow)/2,top=(wh-oh)*382/1000;if(isIE6){top+=$(window).scrollTop();}
wrap.css({"top":parseInt(top)+"px","left":parseInt(left)+"px"});return this;},time:function(time){var that=this,timer=this._timer;if(timer){clearTimeout(timer);}
if(time){that._unbindEvent();$(that.wrap).find("[data-btn=btns]").html("");this._timer=setTimeout(function(){that.close();},time);};return this;},close:function(){var wrap=this.wrap,config=this.config,beforeunload=config.beforeunload;if(beforeunload&&beforeunload.call(this)===false){return this;};this._unmask();this._unbindEvent();this.time();delete Dialog.list[config.id];clearTimeout(timer);if(this._elemBack){this._elemBack();};if(universe!==null){wrap.remove();}else{universe=this;wrap.attr("style","");wrap.hide();wrap.find("div.dialog-body").attr("style","");wrap.attr("class","dialog");wrap.find("[data-title=title]").html("");wrap.find("[data-content=content]").html("");wrap.find("[data-btn=btns]").html("");}
return this;},extend:function(object){var fn=Dialog.prototype;for(var i in object){fn[i]=object[i];}
return this;}};Dialog.list={};Dialog.version="1.0";$(window).bind('resize',function(){var dialogs=Dialog.list;for(var id in dialogs){dialogs[id].reset();};});Factory.defaults={templateNmae:"template-dialog",templateType:"default",templateUrl:"/pandora/docs/assets/js/modules/template.html",button:null,fixed:true,mask:true,drag:false,dialogAuto:false,dialogAutoTop:60,initialHeight:"300px",initialize:null,beforeunload:null,ok:null,cancel:null,okValue:"确定",cancelValue:"取消",okClassName:"",cancelClassName:"",content:"",title:"消息提醒",time:null,width:"",height:"",skin:"dialog-default",wrapClass:"",maskClass:"overlay",zIndex:4000};var template='<div class="dialog">'
+'    <div class="dialog-inner clearfix">'
+'        <a class="dialog-close" data-dismiss="dialog">&times;</a>'
+'        <div class="dialog-header" data-title="title"></div>'
+'        <div class="dialog-body">'
+'            <div class="dialog-content clearfix" data-content="content">'
+'            </div>'
+'        </div>'
+'        <div class="dialog-footer" data-btn="btns" >'
+'        </div>'
+'    </div>'
+'</div>';$.alert=pandora.alert=function(content,callback){return Factory({fixed:true,mask:true,wrapClass:"dialog-mini",content:content,ok:true,beforeunload:callback});}
$.msg=pandora.msg=function(content,time){return Factory({fixed:true,mask:false,wrapClass:"dialog-msg",content:content,time:time?time:2000});}
$.confirm=pandora.confirm=function(content,ok,cancel){return Factory({fixed:true,lock:true,content:content,ok:ok?ok:true,cancel:cancel?cancel:true});};$.confirmNew=pandora.confirmNew=function(content,ok,cancel,okValue,cancelValue,okClassName,cancelClassName){return Factory({fixed:true,lock:true,content:content,ok:ok?ok:true,cancel:cancel?cancel:true,okValue:okValue?okValue:'确定',cancelValue:cancelValue?cancelValue:'取消',okClassName:okClassName?okClassName:'',cancelClassName:cancelClassName?cancelClassName:''});};$.dialog=$.fn.dialog=pandora.dialog=Factory;global.pandora=pandora;}(this,jQuery,this.pandora||{}));
;;(function($){'use strict';function safeAdd(x,y){var lsw=(x&0xffff)+(y&0xffff);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xffff)}
function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}
function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}
function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|(~b&d),a,b,x,s,t)}
function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&~d),a,b,x,s,t)}
function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}
function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)}
function binlMD5(x,len){x[len>>5]|=0x80<<(len%32);x[((len+64)>>>9<<4)+14]=len;var i;var olda;var oldb;var oldc;var oldd;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936);d=md5ff(d,a,b,c,x[i+1],12,-389564586);c=md5ff(c,d,a,b,x[i+2],17,606105819);b=md5ff(b,c,d,a,x[i+3],22,-1044525330);a=md5ff(a,b,c,d,x[i+4],7,-176418897);d=md5ff(d,a,b,c,x[i+5],12,1200080426);c=md5ff(c,d,a,b,x[i+6],17,-1473231341);b=md5ff(b,c,d,a,x[i+7],22,-45705983);a=md5ff(a,b,c,d,x[i+8],7,1770035416);d=md5ff(d,a,b,c,x[i+9],12,-1958414417);c=md5ff(c,d,a,b,x[i+10],17,-42063);b=md5ff(b,c,d,a,x[i+11],22,-1990404162);a=md5ff(a,b,c,d,x[i+12],7,1804603682);d=md5ff(d,a,b,c,x[i+13],12,-40341101);c=md5ff(c,d,a,b,x[i+14],17,-1502002290);b=md5ff(b,c,d,a,x[i+15],22,1236535329);a=md5gg(a,b,c,d,x[i+1],5,-165796510);d=md5gg(d,a,b,c,x[i+6],9,-1069501632);c=md5gg(c,d,a,b,x[i+11],14,643717713);b=md5gg(b,c,d,a,x[i],20,-373897302);a=md5gg(a,b,c,d,x[i+5],5,-701558691);d=md5gg(d,a,b,c,x[i+10],9,38016083);c=md5gg(c,d,a,b,x[i+15],14,-660478335);b=md5gg(b,c,d,a,x[i+4],20,-405537848);a=md5gg(a,b,c,d,x[i+9],5,568446438);d=md5gg(d,a,b,c,x[i+14],9,-1019803690);c=md5gg(c,d,a,b,x[i+3],14,-187363961);b=md5gg(b,c,d,a,x[i+8],20,1163531501);a=md5gg(a,b,c,d,x[i+13],5,-1444681467);d=md5gg(d,a,b,c,x[i+2],9,-51403784);c=md5gg(c,d,a,b,x[i+7],14,1735328473);b=md5gg(b,c,d,a,x[i+12],20,-1926607734);a=md5hh(a,b,c,d,x[i+5],4,-378558);d=md5hh(d,a,b,c,x[i+8],11,-2022574463);c=md5hh(c,d,a,b,x[i+11],16,1839030562);b=md5hh(b,c,d,a,x[i+14],23,-35309556);a=md5hh(a,b,c,d,x[i+1],4,-1530992060);d=md5hh(d,a,b,c,x[i+4],11,1272893353);c=md5hh(c,d,a,b,x[i+7],16,-155497632);b=md5hh(b,c,d,a,x[i+10],23,-1094730640);a=md5hh(a,b,c,d,x[i+13],4,681279174);d=md5hh(d,a,b,c,x[i],11,-358537222);c=md5hh(c,d,a,b,x[i+3],16,-722521979);b=md5hh(b,c,d,a,x[i+6],23,76029189);a=md5hh(a,b,c,d,x[i+9],4,-640364487);d=md5hh(d,a,b,c,x[i+12],11,-421815835);c=md5hh(c,d,a,b,x[i+15],16,530742520);b=md5hh(b,c,d,a,x[i+2],23,-995338651);a=md5ii(a,b,c,d,x[i],6,-198630844);d=md5ii(d,a,b,c,x[i+7],10,1126891415);c=md5ii(c,d,a,b,x[i+14],15,-1416354905);b=md5ii(b,c,d,a,x[i+5],21,-57434055);a=md5ii(a,b,c,d,x[i+12],6,1700485571);d=md5ii(d,a,b,c,x[i+3],10,-1894986606);c=md5ii(c,d,a,b,x[i+10],15,-1051523);b=md5ii(b,c,d,a,x[i+1],21,-2054922799);a=md5ii(a,b,c,d,x[i+8],6,1873313359);d=md5ii(d,a,b,c,x[i+15],10,-30611744);c=md5ii(c,d,a,b,x[i+6],15,-1560198380);b=md5ii(b,c,d,a,x[i+13],21,1309151649);a=md5ii(a,b,c,d,x[i+4],6,-145523070);d=md5ii(d,a,b,c,x[i+11],10,-1120210379);c=md5ii(c,d,a,b,x[i+2],15,718787259);b=md5ii(b,c,d,a,x[i+9],21,-343485551);a=safeAdd(a,olda);b=safeAdd(b,oldb);c=safeAdd(c,oldc);d=safeAdd(d,oldd)}
return[a,b,c,d]}
function binl2rstr(input){var i;var output='';var length32=input.length*32;for(i=0;i<length32;i+=8){output+=String.fromCharCode((input[i>>5]>>>(i%32))&0xff)}
return output}
function rstr2binl(input){var i;var output=[];output[(input.length>>2)-1]=undefined;for(i=0;i<output.length;i+=1){output[i]=0}
var length8=input.length*8;for(i=0;i<length8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xff)<<(i%32)}
return output}
function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))}
function rstrHMACMD5(key,data){var i;var bkey=rstr2binl(key);var ipad=[];var opad=[];var hash;ipad[15]=opad[15]=undefined;if(bkey.length>16){bkey=binlMD5(bkey,key.length*8)}
for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5c5c5c5c}
hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8);return binl2rstr(binlMD5(opad.concat(hash),512+128))}
function rstr2hex(input){var hexTab='0123456789abcdef';var output='';var x;var i;for(i=0;i<input.length;i+=1){x=input.charCodeAt(i);output+=hexTab.charAt((x>>>4)&0x0f)+hexTab.charAt(x&0x0f)}
return output}
function str2rstrUTF8(input){return unescape(encodeURIComponent(input))}
function rawMD5(s){return rstrMD5(str2rstrUTF8(s))}
function hexMD5(s){return rstr2hex(rawMD5(s))}
function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))}
function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))}
function md5(string,key,raw){if(!key){if(!raw){return hexMD5(string)}
return rawMD5(string)}
if(!raw){return hexHMACMD5(key,string)}
return rawHMACMD5(key,string)}
if(typeof define==='function'&&define.amd){define(function(){return md5})}else if(typeof module==='object'&&module.exports){module.exports=md5}else{$.md5=md5}})($);var poplogin='<div class="contLogin" >'
+'        <div class="user-tab-box">'
+'            <ul class="user-tab">'
+'                <li class="active">手机快捷登录</li>'
+'                <li>用户名登录</li>'
+'            </ul>'
+'         </div>'
+'        <div class="contLeft" style="display:block">'
+'                 <div id="loinTextErrorTip" class="loinTextErrorTip"></div>'
+'                 <p class="quick-area quick-mob">'
+'                     <input name="mobileLoginText" type="text" maxlength="11" id="mobileLoginText" class="user-ipt">'
+'                     <span class="poplogin_name">手机号码</span>'
+'                </p>'
+'                 <p id="rapidMobileLoginCaptcha" class="quick-area quick-yzm" style="display: none;">'
+'                      <input name="mobileLoginYzm" type="text" id="mobileLoginYzm1" class="user-ipt">'
+'                      <span class="poplogin_dynamic" >请填写计算结果或验证码</span>'
+'                      <a href="javascript:;">'
+'       <img id="imageMobile" src="https://login.lvmama.com/captcha/account/checkcode/rapidLogin.htm" width="124" height="40" onclick="reloadCheckCode(\'imageMobile\');return false;">'
+'      </a>'
+'                 </p>'
+'                 <p class="quick-area quick-yzm">'
+'                      <input name="mobileLoginYzm" type="text" id="mobileLoginYzm2" class="user-ipt">'
+'                      <span class="poplogin_dynamic">请输入动态密码</span>'
+'                      <a href="javascript:;" class="getYzm_btn">发送验证码</a>'
+'                      <a class="getYzm_time_btn" href="javascript:void(0)" style="display: none;"><em id="countdown">60</em>后重发</a>'
+'                 </p>'
+'                 <p id="_loginMobileButton">'
+'                      <a href="javascript:;" class="fast-login-btn" id="fast-login">登  录</a> '
+'                  </p>'
+'                  <div id="_mobileGeetestCaptcha" style="display: none;">'
+'                      <div id="mobile-embed-captcha"></div>'
+'                      <p id="mobile-embed-captcha-wait">正在加载验证码......</p>'
+'                  </div> '
+'                  <input type="hidden" id = "mobile_geetest_challenge" name = "mobile_geetest_challenge" value="" />'
+'                  <input type="hidden" id = "mobile_geetest_validate" name = "mobile_geetest_validate" value=""/>'
+'                  <input type="hidden" id = "mobile_geetest_seccode" name = "mobile_geetest_seccode" value=""/>'
+'                  <div class="check-box" >'
+'                     <label class="csmm_form_col w90"> </label><input type="checkbox" class="poplogin_check" checked="" id="terms">我已阅读并接受<a class="link_blue" href="http://login.lvmama.com/nsso/register/agreement.do"  target="_blank" id="lvmama_tk">《驴妈妈旅游网会员服务条款》</a>'
+'<a class="link_blue" href="http://login.lvmama.com/nsso/register/agreementThr.do"  target="_blank">《免责声明》</a>'
+'<a class="link_blue" href="http://login.lvmama.com/nsso/register/agreementTwo.do"  target="_blank">《驴妈妈隐私保护声明》</a>'
+'                  </div>'
+'                  <p class="user-end-tips">'
+'                     <i></i>快捷注册：可使用手机快捷登录功能，通过动态密码完成快捷注册并登录。'
+'                  </p>'
+'             </div>'
+'        <div class="contLeft">'
+'                 <div id="loinUserErrorTip" class="loinTextErrorTip"></div>'
+'                <p class="quick-area quick-mob">'
+'                     <input name="mobileLoginText2" type="text" id="mobileLoginText2" class="user-ipt">'
+'                     <span id="userNameTips" class="poplogin_name">手机号码/用户名/邮箱</span>'
+'                 </p>'
+'                 <p class="quick-area quick-mob">'
+'                      <input name="mobileLoginYzm" type="password" id="userpassword" class="user-ipt">'
+'                      <span id="userNameTips" class="passwd">请输入密码</span>'
+'                </p>'
+'                 <p id="rapidNormalLoginCaptcha" class="quick-area quick-yzm" style="display: none;">'
+'                      <input name="mobileLoginYzm" type="text" id="useryanzhen" class="user-ipt">'
+'                      <span id="userNameTips" class="poplogin_dynamic">请填写计算结果或验证码</span>'
+'                     <a href="javascript:;"><img id="imageNormal" src="https://login.lvmama.com/captcha/account/checkcode/login_web.htm" width="124" height="40" onclick="refreshImageCaptcha(\'imageNormal\');return false;"></a>'
+'                 </p>  '
+'                 <div class="forget-password">'
+'                      <a href="https://login.lvmama.com/nsso/findpass/index.do" class="fr" target="_blank">忘记密码？</a>'
+'                 </div> '
+'                 <p id="_loginNormalButton">'
+'                      <a href="javascript:;" class="fast-login-btn" id="user_login">登  录</a>'
+'                  </p> '
+'                  <div id="_normalGeetestCaptcha" style="display: none;">'
+'                      <div id="normal-embed-captcha"></div>'
+'                      <p id="normal-embed-captcha-wait">正在加载验证码......</p>'
+'                  </div> '
+'                  <input type="hidden" id = "normal_geetest_challenge" name = "normal_geetest_challenge" value="" />'
+'                  <input type="hidden" id = "normal_geetest_validate" name = "normal_geetest_validate" value=""/>'
+'                  <input type="hidden" id = "normal_geetest_seccode" name = "normal_geetest_seccode" value=""/>'
+'                  <input type="hidden" id = "securityCode" name = "securityCode" value=""/>'
+'                  <p class="lv-member"> 还不是驴妈妈会员？<a href="https://login.lvmama.com/nsso/register/registering.do" target="_blank">免费注册</a>'
+'                   </p>'
+'                 </div>'
+'                   <div class="account-box">'
+'                      <h4><span>合作网站账号登录</span></h4>'
+'                      <div class="login_icon clearfix">'
+'                         <a href="https://login.lvmama.com/nsso/cooperation/tencentQQUnionLogin.do" onclick="tipsWindow()" target="_blank" class="qq" title="QQ"></a>'
+'                         <a href="https://login.lvmama.com/nsso/cooperation/tencentWeiXinUnionLogin.do" onclick="tipsWindow()" target="_blank" class="weix" title="微信"></a>'
+'                         <a href="https://login.lvmama.com/nsso/cooperation/sinaUnionLogin.do" onclick="tipsWindow()" target="_blank" class="sina" title="新浪微博"></a>'
+'                         <a href="https://login.lvmama.com/nsso/cooperation/alipayUnionLogin.do" onclick="tipsWindow()" target="_blank" class="alpay" title="支付宝"></a>'
+'                      </div>'
+'                   </div>'
+'  </div>';var Tipswindows_n='   <div id="tipsWindow_n" style="display: block;">'
+'  <p><img src="http://pic.lvmama.com/img/icons/warning.gif">&nbsp;请在联合登录前不要关闭此窗口。完成登录后根据您好的情况点击下面的按钮：</p>'
+'  <strong>请在新开网页上完成登录后再选择。</strong>'
+'  <div class="tbtn">'
+'   <input name="completePayBtn" type="button" value="已完成登录" id="completePayBtn" onclick="completeLogin()"><a type="button" href="http://www.lvmama.com/public/reg_and_login" target="_blank">登录遇到问题</a>'+'</div>'
+'  <a href="javascript:void(0);" onclick="closeMsg();">返回重新选择登录方式</a>'
+' </div>';var MOBILE_REGX=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(16([6]))|(19([8|9]))|(17([0-9]))|(18([0-9])))\d{8}$/;var httpType=('https:'==document.location.protocol?'https://':'http://');var SERVER_NAME=httpType+"login.lvmama.com";var isOrNotJumpToUrl=false;var loginJumpUrl="",show_type='',mobile_geturl='';function loginURL(jumpUrl){isOrNotJumpToUrl=true;loginJumpUrl=jumpUrl;showRadidLoginDiv();}
function mobileRegisterOnBlur(fieldId,successId,errorId){$("#"+successId).html('');$("#"+errorId).html('');$("#loinTextErrorTip").empty();$("#sso_mobileAndEmail").val('');$("#sso_password").val('');var mobile=$("#"+fieldId).val();$("#"+fieldId).data("valid","false");if(!MOBILE_REGX.test($("#"+fieldId).val())){$("#"+errorId).html('<i class="error-icon"></i>请输入正确的手机号码');return false;}
return true;}
function mobileLoginBtn(){var mobileOrEMail=$('#mobileLoginText').val();if(mobileOrEMail==''){$("#loinTextErrorTip").html('<i class="error-icon"></i>请输入正确的手机号码');$('#mobileLoginText').focus();return false;}
var isCaptchaDisplay=$("#rapidMobileLoginCaptcha").is(":visible");var captcha=$('#mobileLoginYzm1').val();if(isCaptchaDisplay&&$.trim(captcha)==''){$("#loinUserErrorTip").html('<i class="error-icon"></i>请输入图形验证码');$('#mobileLoginYzm1').focus();return false;}
var verifycode=$('#mobileLoginYzm2').val();if(verifycode==''){$("#loinUserErrorTip").html('<i class="error-icon"></i>请输入动态验证码');$('#mobileLoginYzm2').focus();return false;}
$.getJSON(('https:'==document.location.protocol?'https://':'http://')+"login.lvmama.com/nsso/geetest/login/validateMobileLogin.do?jsoncallback=?",{mobileNo:mobileOrEMail},function(response){if(response.success==true){var _errorCode=response.errorCode;var _errorMsg=response.errorMsg;if(_errorCode==101){$("#loinTextErrorTip").html('<i class="error-icon"></i>'+_errorMsg);$('#mobileLoginText').focus();return;}else if(_errorCode==102){$('#_mobileGeetestCaptcha').show();$('#_loginMobileButton').hide();return;}
mobileLogin();}else{$('#_mobileGeetestCaptcha').show();$('#_loginMobileButton').hide();}});}
function mobileLogin(){var mobileOrEMail=$('#mobileLoginText').val();var captcha=$('#mobileLoginYzm1').val();var verifycode=$('#mobileLoginYzm2').val();var geetest_challenge=$('#mobile_geetest_challenge').val();var geetest_validate=$('#mobile_geetest_validate').val();var geetest_seccode=$('#mobile_geetest_seccode').val();var m_login_url=SERVER_NAME+'/nsso/ajax/login/rapidLogin.do';if(mobile_geturl!=''){m_login_url=mobile_geturl;}
$.getJSON(m_login_url+"?jsoncallback=?",{mobile:mobileOrEMail,verifycode:captcha,authenticationCode:verifycode,loginType:'L-M',mobile_geetest_challenge:geetest_challenge,mobile_geetest_validate:geetest_validate,mobile_geetest_seccode:geetest_seccode},function(response){if(response.success==false){$("#loinTextErrorTip").html('<i class="error-icon"></i>'+response.errorText);reloadCheckCode('imageMobile');}else{$('#loinTextErrorTip').html('');$(window.parent.document).find(".bgLogin,.LoginAndReg, #loginDIV").hide();try{if(show_type=='mobile'){if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}}else{$.getJSON(SERVER_NAME+"/nsso/ajax/getUserNo.do?jsoncallback=?",function(req){if(req.success){cmCreateRegistrationTag(req.result,"null","null","null","null","null","null-_-null-_-null-_-null-_-null");}
if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}});}}catch(exception){if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}}}});}
function loginBtn(){$("#mobileLoginText").val('');$("#mobileLoinTextErrorTip").empty();$("#mobileLoinTextSuccessTip").empty();var mobileOrEMail=$('#mobileLoginText2').val();if(mobileOrEMail==''){$("#loinUserErrorTip").html('<i class="error-icon"></i>请输入邮箱/手机号/用户名/会员卡');$('#sso_mobileAndEmail').focus();return false;}
var password=$('#userpassword').val();if(password==''){$("#loinUserErrorTip").html('<i class="error-icon"></i>请输入密码');$('#sso_password').focus();return false;}
var isCaptchaDisplay=$("#rapidNormalLoginCaptcha").is(":visible");var verifycode=$('#useryanzhen').val();if(isCaptchaDisplay&&$.trim(verifycode)==''){$("#loinUserErrorTip").html('<i class="error-icon"></i>请输入验证码');$('#xhsso_verifycode1').focus();return false;}
$.getJSON(SERVER_NAME+"/nsso/geetest/login/validateNormalLogin.do?jsoncallback=?",{userName:encodeURI(mobileOrEMail),password:$.md5(password),verifyCode:encodeURI(verifycode)},function(response){var _errorCode=response.errorCode;var _errorMsg=response.errorMsg;var _securityCode=response.securityCode;$('#securityCode').val(_securityCode);if(response.success==true){if(_errorCode==1){$('#_normalGeetestCaptcha').show();$('#_loginNormalButton').hide();return;}else if(_errorCode!=0){if(_errorCode==102||_errorCode==103){checkIsNeedCaptcha();}
$("#loinUserErrorTip").html('<i class="error-icon"></i>'+_errorMsg);return;}
login();}else{$('#_normalGeetestCaptcha').show();$('#_loginNormalButton').hide();return;}});}
function login(){var mobileOrEMail=$('#mobileLoginText2').val();var password=$('#userpassword').val();var verifycode=$('#useryanzhen').val();var sCode=$('#securityCode').val();var geetest_challenge=$('#normal_geetest_challenge').val();var geetest_validate=$('#normal_geetest_validate').val();var geetest_seccode=$('#normal_geetest_seccode').val();$.getJSON("https://login.lvmama.com/nsso/ajax/login/rapidLogin.do?jsoncallback=?",{mobileOrEMail:mobileOrEMail,password:$.md5(password),verifycode:verifycode,loginType:'L-N',securityCode:sCode,normal_geetest_challenge:geetest_challenge,normal_geetest_validate:geetest_validate,normal_geetest_seccode:geetest_seccode},function(data){if(data.success){$(window.parent.document).find(".bgLogin,.LoginAndReg, #loginDIV").hide();try{$.getJSON(SERVER_NAME+"/nsso/ajax/getUserNo.do?jsoncallback=?",function(req){if(req.success){cmCreateRegistrationTag(req.result,"null","null","null","null","null","null-_-null-_-null-_-null-_-null");}
if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}});}catch(exception){if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}}}else{if(data.errorText==="userNoMobile"){window.location.href="https://login.lvmama.com/nsso/union/bind/bindMobile.do";return}
$("#loinUserErrorTip").html('<i class="error-icon"></i>'+data.errorText);checkIsNeedCaptcha();}});}
function tipsWindow(obj,screenBg){$(".dialog-close").click();pandora.dialog({title:"登录遇到问题？",width:"500px",content:Tipswindows_n});}
function closeMsg(){$(".dialog-close").click();showLogin();}
function completeLogin(){$.getJSON("http://www.lvmama.com/check/login.do?jsoncallback=?",{},function(dt){if(dt.success){if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}}else{alert("您还没有登录成功");}});}
function reloadCheckCode(s1){var times=(new Date).getTime();var elt1=document.getElementById(s1);elt1.src=elt1.src+"?_="+times;}
function refreshImageCaptcha(s){var url=$("#"+s).attr("src");if(url.indexOf("?")==-1){$("#"+s).attr("src",url+"?_="+(new Date).getTime());}else{$("#"+s).attr("src",url+"&_="+(new Date).getTime());}}
function getUserName(){var username="";try{username=decodeURIComponent(document.cookie).match(/unUserName\=(.+?)\;/);}catch(e){username=unescape(document.cookie).match(/unUserName\=.+\^!\^/);}
if(username!=null){$('#mobileLoginText2').val(username[0].replace('unUserName=','').replace(';','')).siblings('span').hide();}}
function showRadidLoginDiv(){pandora.dialog({title:"快速预订 / 登录",content:poplogin,width:442,initialize:function(){if(show_type=='mobile'){$('.user-tab li').eq(1).remove();$('.account-box').remove();}
getUserName();startGeetest();}});}
function getYzm(){var $btn=$('.getYzm_btn'),timerYzm=null,Time=60;var _mobilePhone=$("#mobileLoginText").val();if(!MOBILE_REGX.test(_mobilePhone)){$("#loinTextErrorTip").html('<i class="error-icon"></i>请输入正确的手机号码');return;}
if(!$btn.hasClass('getYzm_stop')){$.getJSON(SERVER_NAME+"/nsso/ajax/captcha/checkIsNeedMobileCaptcha.do?jsoncallback=?",{mobile:_mobilePhone},function(response){var _isNeedMobileCaptcha='true';if(response.success){_isNeedMobileCaptcha=response.result;}
if(_isNeedMobileCaptcha=='true'){$("#rapidMobileLoginCaptcha").show();}else{$("#rapidMobileLoginCaptcha").hide();}
var _mobileCaptcha=$('#mobileLoginYzm1').val();if(_isNeedMobileCaptcha=='true'&&!_mobileCaptcha){$("#loinTextErrorTip").html('<i class="error-icon"></i>请输入图形验证码');return;}
$.getJSON(SERVER_NAME+"/nsso/ajax/message/mobileRapLogByPC/sendMobileCode.do?jsoncallback=?",{mobileOrEMail:_mobilePhone,verifycode:_mobileCaptcha,sendType:'2'},function(data){if(data.success){$btn.addClass('getYzm_stop').text('60秒后重发');timerYzm=setInterval(function(){Time--;if(Time<=0){$btn.text('发送验证码').removeClass('getYzm_stop');clearInterval(timerYzm);}else{$btn.text(Time+'秒后重发');}},1000);$('#loinTextErrorTip').html('');}else{var errorTips='';if(data.errorText=='errorVerifycode'){errorTips='图形验证码输入错误';}else if(data.errorText=='vcodeWarning'){errorTips='您当前短信验证码已失效，请重新发送验证码';}else if(data.errorText=='phoneWarning'){errorTips='已超过每日发送上限，请于次日再试';}else if(data.errorText=='ipLimit'){errorTips='当前IP发送频率过快，请稍后重试';}else if(data.errorText=='waiting'){errorTips='发送频率过快，请稍后重试';}else{errorTips=data.errorText;}
$('#loinTextErrorTip').html('<i class="error-icon"></i>'+errorTips+'!');}});});}}
function cooperationRegisterLogin(){$.getJSON(SERVER_NAME+"/nsso/ajax/registerLoginByCooperationCache.do?jsoncallback=?",{},function(json){if(json.success){if(isOrNotJumpToUrl){location.href=loginJumpUrl;}else{loginFormSubmit();$(".dialog-close").click();}}else{showRadidLoginDiv();}});}
function showLogin(callback,data){if(!callback){window.loginFormSubmit=function(){location.reload();};}else{window.loginFormSubmit=callback;}
if(data){show_type=data.type;mobile_geturl=data.url;}
var cooperationCacheAccount;var cooperationType;var arrStr=document.cookie.split("; ");for(var i=0;i<arrStr.length;i++){var temp=arrStr[i].split("=");if(temp[0]=="cooperationCacheAccount"){cooperationCacheAccount=unescape(temp[1]);}
if(temp[0]=="orderFromChannel"){cooperationType=unescape(temp[1]);}
if(cooperationCacheAccount!=null&&cooperationCacheAccount!=""&&cooperationType!=null&&cooperationType!=""){break;}}
if(cooperationCacheAccount!=null&&cooperationCacheAccount!=""&&cooperationType!=null&&cooperationType=="qqcb"){cooperationRegisterLogin();}else{pandora.dialog({title:"快速预订 / 登录",content:poplogin,width:442,initialize:function(){if(show_type=='mobile'){$('.user-tab li').eq(1).remove();$('.account-box').remove();}
getUserName();startGeetest();},wrapClass:'login_dialog'});}}
function checkIsNeedCaptcha(){var _userName=$("#mobileLoginText2").val();if(_userName!=null&&$.trim(_userName).length>0){setImageCaptcha();$("#rapidNormalLoginCaptcha").show();$.getJSON("https://login.lvmama.com/nsso/ajax/captcha/checkIsNeedCaptcha.do?jsoncallback=?",{userName:_userName},function(json){if(json.success==true){var decision=json.result;if(decision=='hide'){$("#rapidNormalLoginCaptcha").hide();}else{setImageCaptcha(decision);$("#rapidNormalLoginCaptcha").show();}}else{$("#rapidNormalLoginCaptcha").hide();}});}}
function setImageCaptcha(level){var url="https://login.lvmama.com/captcha/account/checkcode/login_web.htm";if(level){$("#imageNormal").attr("src",url+"?secureLevel="+level+"&_="+(new Date).getTime());}else{$("#imageNormal").attr("src",url+"?_="+(new Date).getTime());}}
function startGeetest(){$.getJSON(('https:'==document.location.protocol?'https://':'http://')+"login.lvmama.com/nsso/geetest/startCaptcha.do?jsoncallback=?",function(data){initGeetest({gt:data.gt,challenge:data.challenge,product:"float",offline:!data.success},function(captchaObj){captchaObj.onSuccess(function(){var validate=captchaObj.getValidate();$('#normal_geetest_challenge').val(validate.geetest_challenge);$('#normal_geetest_validate').val(validate.geetest_validate);$('#normal_geetest_seccode').val(validate.geetest_seccode);login();});captchaObj.appendTo("#normal-embed-captcha");captchaObj.onReady(function(){$("#normal-embed-captcha-wait")[0].className="hide";});});});$.getJSON(('https:'==document.location.protocol?'https://':'http://')+"login.lvmama.com/nsso/geetest/startCaptcha.do?jsoncallback=?",function(data){initGeetest({gt:data.gt,challenge:data.challenge,product:"float",offline:!data.success},function(captchaObj){captchaObj.onSuccess(function(){var validate=captchaObj.getValidate();$('#mobile_geetest_challenge').val(validate.geetest_challenge);$('#mobile_geetest_validate').val(validate.geetest_validate);$('#mobile_geetest_seccode').val(validate.geetest_seccode);mobileLogin();});captchaObj.appendTo("#mobile-embed-captcha");captchaObj.onReady(function(){$("#mobile-embed-captcha-wait")[0].className="hide";});});});}
function getCookie(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
return unescape(arr[2]);else
return null;}
function initFraud(){_fmOpt={partner:'lvmama',appName:'lvmama_web',token:getCookie('lvsessionid')};var cimg=new Image(1,1);cimg.onload=function(){_fmOpt.imgLoaded=true;};cimg.src="https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=lvmama&appName=lvmama_web&tokenId="+_fmOpt.token;var fm=document.createElement('script');fm.type='text/javascript';fm.async=true;fm.src=('https:'==document.location.protocol?'https://':'http://')+'static.fraudmetrix.cn/fm.js?ver=0.1&t='+(new Date().getTime()/3600000).toFixed(0);var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(fm,s);}
function initDfp(){var oHead=document.getElementsByTagName('HEAD').item(0);var oScript=document.createElement("script");oScript.type="text/javascript";oScript.src=('https:'==document.location.protocol?'https':'http')+'://dfp.lvmama.com/public/downloads/frms-fingerprint.js?custID=dfp&serviceUrl='+('https:'==document.location.protocol?'https':'http')+'://dfp.lvmama.com/public/generate/jsonp&loadSource=script';oHead.appendChild(oScript);}
$(function(){$.getScript(('https:'==document.location.protocol?'https://':'http://')+'static.geetest.com/static/tools/gt.js');$('.getYzm_btn').live('click',function(){getYzm();});$('#mobileLoginText').live('blur',function(){mobileRegisterOnBlur('mobileLoginText','mobileLoinTextSuccessTip','loinTextErrorTip');});$('#mobileLoginText2').live('blur',function(){checkIsNeedCaptcha();});$('#fast-login').live('click',function(){mobileLoginBtn();});$('#user_login').live('click',function(){loginBtn();});$("#useryanzhen").live('keyup',function(e){if(e.keyCode==13){if($("#mobileLoginText2").val()!=""&&$("#userpassword").val()!=""){loginBtn();}}});$('.user-tab li').live('click',function(){var _num=$(this).index();$(this).addClass('active').siblings().removeClass('active');$(this).parent().parent().siblings('.contLeft').eq(_num).show().siblings('.contLeft').hide();});$('.user-ipt').live('focus',function(){$(this).siblings('span').hide();});$('.user-ipt').live('blur',function(){if(!$(this).val()==''){$(this).siblings('span').hide()}else{$(this).siblings('span').show();}});$('.user-ipt').keyup(function(){if(!$(this).val()==''){$(this).siblings('span').hide()}else{$(this).siblings('span').show();}});$('.quick-area span').live('click',function(){$(this).prev().focus();});initFraud();var $pageScript=$('script'),dfpLoad=true;for(var i=0;i<$pageScript.length;i++){var jssrc=$pageScript[i].src;if(/dfp.lvmama.com\/public\/downloads\/frms-fingerprint\.js/.test(jssrc)){dfpLoad=false;break;};};if(dfpLoad){initDfp();};});
;(function(e){e.imgScroll1={init:function(a){this.listEvent(a)},listEvent:function(a){var c=this,k=a.obj.find(a.btnL),d=a.obj.find(a.btnR),b=a.obj.find(a.tabBox).find("ul"),f=a.obj.find(a.migBox).find("ul"),g=b.find("li").length;leng2=f.find("li").length;var timer;k.live("click",function(){var d=b.find("."+a.tab_name).index()-1;c.run(a,d,!0)});d.live("click",function(){var d=b.find("."+a.tab_name).index()+1;c.run(a,d)});b.find("li").click(function(){var b=e(this).index();e(this).addClass(a.tab_name).siblings().removeClass(a.tab_name);c.run(a,b)});this.initCss(b);this.initCss(f);b.css("width",g*b.find("li:first").outerWidth(!0)).find("li:first").addClass(a.tab_name);f.css("width",leng2*f.find("li:first").outerWidth(!0));1!=a.runStyle&&f.find("li").css({position:"absolute",display:"none"}).first().show();if(a.play){timer={play:null,run:function(){timer.stop();timer.play=setInterval(function(){var d=b.find("."+a.tab_name).index()+1;c.run(a,d);},5000);},stop:function(){clearInterval(timer.play);timer.play=null;}};timer.run();a.obj.find(a.migBox).parent().hover(function(){timer.stop();},function(){timer.stop();timer.run();});}},run:function(a,c,e){var d=a.obj.find(a.migBox),b=a.obj.find(a.tabBox).find("ul"),f=d.find("li:first").outerWidth(!0),g=b.find("li:first").outerWidth(!0),i=Math.ceil(b.parent().width()/g),h=d.find("li").length,j=d.find("ul").position().left;0==j%f&&(b.find("li").eq(c).addClass(a.tab_name).siblings().removeClass(a.tab_name),1==a.runStyle?0==j&&!0==e?d.find("ul").animate({left:-(h-1)*f},300):j==-(h-1)*f&&!0!=e?d.find("ul").animate({left:0},300):d.find("ul").animate({left:-c*f},300):d.find("li").eq(c).fadeIn().siblings().fadeOut(),c>h-1?(b.animate({left:0},300),b.find("li").eq(0).addClass(a.tab_name).siblings().removeClass(a.tab_name),1!=a.runStyle&&d.find("li").eq(0).fadeIn().siblings().fadeOut()):(c+1)*g>g*i+Math.abs(b.position().left)&&!0!=e?b.animate({left:-((c+1)*g-g*i)},300):0>c?h>i?b.animate({left:-(h-i)*g},300):b.animate({left:0},300):-c*g>=b.position().left&&b.animate({left:-c*g},300));if(typeof a.runCall==='function'){if(c>=h){c=0}
if(c<0){c=h-1}
a.runCall(c,h);}},initCss:function(a){a.css({position:"absolute",left:0,top:0}).parent().css({position:"relative",overflow:"hidden"})}};e.fn.imgScroll1=function(a){var c={obj:this,tab_name:"active",runStyle:1,runCall:null};e.extend(!0,c,a||{});e.imgScroll1.init(c)}})(jQuery);
;(function($){var tryComment=setInterval(function(){if($('.JS_com-tabnav li').length){clearInterval(tryComment);myComment();}},100);function myComment(){showCom($(document));function showCom(elem){elem.on('click','.compic-small li',function(){var me=$(this),oUl=me.parent(),bigbox=me.parents('.compic-scoll'),oLi=bigbox.find('li'),compicBig=bigbox.prev('.compic-big');if(!bigbox.hasClass('on')){bigbox.addClass('on');oUl.css('width',oLi.length*86+'px');}
compicBig.find("p").html('<img data-picindex="'+me.index()+'" src="'+me.data('src')+'" alt='+me.find('img').attr('alt')+'>');if(compicBig.is(":hidden")){openBigCom(compicBig);bindBtton(oLi,oUl,bigbox,compicBig);}
me.addClass('active').siblings().removeClass('active');});elem.on('click','.comment-list a',function(){var me=$(this),bigbox=me.parent(),compicBig=bigbox.prev('.compic-big');if(me.hasClass('JS_close')){compicBig.stop(true,true).slideUp(500,function(){bigbox.removeClass('on').find('li').removeClass('active');bigbox.find('ul').removeAttr('style');});}else{bigbox.find('li').eq(0).trigger('click');}});}
function openBigCom(elem){elem.stop(true,true).slideDown(500,function(){$(this).css('height',320);});}
function bindBtton(oLi,oUl,bigbox,compicBig){var len=oLi.length;var btn=bigbox.find('.compic-bigbtn');var i=0;var changePicBtn=compicBig.find('a');changePicBtn.unbind("click");changePicBtn.bind("click",function(e){var _this=$(this),img=compicBig.find('img'),pageIndex=parseInt(img.attr('data-picindex'));_this.index()>0?pageIndex++:pageIndex--;pageIndex>=len&&(pageIndex=len-1);pageIndex<0&&(pageIndex=0);img.attr("data-picindex",pageIndex).attr("src",oLi.eq(pageIndex).attr("data-src"));oLi.eq(pageIndex).addClass('active').siblings().removeClass('active');if(len>5){_this.index()>0?i++:i--;smallPicBoxScoll();};});if(len<6){btn.hide();return false;}
btn.bind('click',function(){var num=$(this).index();$(this).index()>0?i++:i--;smallPicBoxScoll();});function smallPicBoxScoll(){if((len-i)<=4){i=len-5;return false;};if(i<0){i=0;return false;};oUl.stop(true,true).animate({left:i*-86},300);}}
$('.new-cominfo').on('click','.JS_close',function(){var me=$(this);me.parents('.JS_removeBox').stop(true,true).fadeOut('fast',function(){$(this).remove();});me.parents('.JS_closeBox').stop(true,true).fadeOut('fast',function(){$('.JS-comwrite').removeClass('on');});});$(document).on('click','.JS_showmore',function(){var me=$(this),moreBox=me.parents('.ufeed-content');if(moreBox.hasClass('showmore')){moreBox.removeClass('showmore');me.html('查看全部<i class="iconcom iconcom-more"></i>');}else{moreBox.addClass('showmore');me.html('点击收起<i class="iconcom iconcom-more"></i>');}});$('.JS_com-content').on('click','.JS_reply',function(){var me=$(this),userinfo=me.parents('.comment-li'),comAnswer=userinfo.find('.com-answer'),answerForm=comAnswer.children('.com-answer-form'),len=comAnswer.find('.com-answer-li>li').length;if(comAnswer.is(":hidden")){comAnswer.stop(true,true).stop(true,true).fadeIn();answerForm.find('.com-answerinput').val("");answerForm.show();me.addClass('active');}else{if(answerForm.is(":hidden")){answerForm.stop(true,true).fadeIn();me.addClass('active');}else{if(len>0){answerForm.stop(true,true).fadeOut();me.removeClass('active');}else{comAnswer.stop(true,true).stop(true,true).fadeOut();me.removeClass('active');}}}});try{if($(".tagsback")){$(".tagsback").poptip()}}catch(e){};tabSlider($('.JS_com-tabnav li'),$('.JS_com-content>div'));function tabSlider(nav,content){nav.each(function(e){var me=$(this);me.click(function(){me.addClass("active").siblings().removeClass("active");content.eq(e).show().siblings().hide();});})}
$('.com-fx a').click(function(){var me=$(this);me.hasClass('active')?me.removeClass('active'):me.addClass('active');});$('.JS_com-content').on('click','.com-enjoy',function(){var me=$(this),em=me.children('em');if(!me.hasClass('active')){me.addClass('active');}});function checkingLogin(){var username="";try{username=decodeURIComponent(document.cookie).match(/UN\=.+\^!\^/);}catch(e){username=unescape(document.cookie).match(/UN\=.+\^!\^/);};if(username!=null){return true;}else{$(UI).ui("login");return false;}}}})(jQuery);(function(f){f.fn.FooterSeoScroll=function(h){function l(){n.scrollLeft()>=r.outerWidth()/2||n.scrollLeft()>=r.outerWidth()-n.innerWidth()?n.scrollLeft(0):n.scrollLeft(n.scrollLeft()+q)}
h=f.extend({speed:1},h);var n=f(this),r=f(n).find("ul"),v=f(r).find("li");if(!(v.outerWidth()*v.length<n.innerWidth())){v.clone().appendTo(r);v=f(r).find("li");var alW=0;v.each(function(e){alW+=$(this).outerWidth();});r.css("width",alW);var q=1,s=h.speed,x=setInterval(l,s);r.hover(function(){clearInterval(x)},function(){x=setInterval(l,s)})}}})(jQuery);(function(){0<$("#footerseo_marquee").length&&$("#footerseo_marquee").FooterSeoScroll({speed:20});})();
;(function(global){"use strict"
function Factory(options){var options=options||{},defaults=Factory.defaults;for(var i in defaults){if(options[i]===undefined){options[i]=defaults[i];};};return new MapControl(options);}
function MapControl(opt){this.init(opt);}
MapControl.prototype={constructor:MapControl,init:function(opt){var _this=this,keyArr=['','key=AIzaSyAxD3V20_zKzgdCDZopmvj-NF4gX78TJ88&','key=AIzaSyDOLUU355I1oDAme7wqF_lz7wN1gp-mLmM&'];if(!/^[0-2]$/.test(opt.keyType)){opt.keyType=0;}
var googleSrc="http://maps.google.cn/maps/api/js?"+keyArr[opt.keyType]+"sensor=false&language=zh-CN.js",baiduSrc="http://api.map.baidu.com/getscript?v=1.4";var script=document.createElement('script');script.src=opt.type==="google"?googleSrc:(opt.type==="baidu"?baiduSrc:_this.errorCatch("未获取到地图类型"));script.onload=script.onreadystatechange=function(){if(!this.readyState||this.readyState==='loaded'||this.readyState==='complete'){switch(opt.type){case"google":_this.googleMapInit(opt);break;case"baidu":window.BMap_loadScriptTime=(new Date).getTime();var style=document.createElement('link');style.href="http://api.map.baidu.com/res/14/bmap.css";style.type="text/css";style.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(style);_this.baiduMapInit(opt);break;}}}
document.body.appendChild(script);},googleMapInit:function(opt){var myLatlng={lng:opt.coordinate.lng,lat:opt.coordinate.lat};var myOptions={zoom:opt.zoom,center:myLatlng,zoomControl:true}
var map=new google.maps.Map(document.getElementById(opt.containerID),myOptions);if(opt.scrollWheel==false){map.setOptions({scrollwheel:false})};var mapId=document.getElementById(opt.containerID);mapId.onclick=function(){map.setOptions({scrollwheel:true})};mapId.onmouseout=function(e){e.stopPropagation();map.setOptions({scrollwheel:false})};if(opt.marker){var marker=new google.maps.Marker({position:myLatlng,map:map});if(opt.markerTips.content!==""){var markerDiv="<div><h4 style='margin:5px 0;'>"+opt.markerTips.title+"</h1><div>"+opt.markerTips.content+"</div></div>";var infowindow=new google.maps.InfoWindow({content:markerDiv,maxWidth:opt.marker.maxWidth});marker.addListener('click',function(){infowindow.open(map,marker);});}}
if(opt.labels&&opt.labels.length){var labels=opt.labels;var labelsLength=labels.length;for(var labelIndex=0;labelIndex<labelsLength;labelIndex++){(function(){var label=labels[labelIndex];var labelMarker=new google.maps.Marker({position:label.position,map:map});var labelInfoWindow=new google.maps.InfoWindow({content:label.title,maxWidth:label.maxWidth});labelMarker.addListener('click',function(){labelInfoWindow.open(map,labelMarker);});})();}}},baiduMapInit:function(opt){var map=new BMap.Map(opt.containerID);var point=new BMap.Point(opt.coordinate.lng,opt.coordinate.lat);var marker=new BMap.Marker(point);if(opt.scrollWheel==true){map.enableScrollWheelZoom();};var mapId=document.getElementById(opt.containerID);mapId.onclick=function(){map.enableScrollWheelZoom();};mapId.onmouseout=function(e){e.stopPropagation();map.disableScrollWheelZoom();};map.enableKeyboard();map.centerAndZoom(point,opt.zoom);var ctrl_nav=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});map.addControl(ctrl_nav);var ctrl_ove=new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});map.addControl(ctrl_ove);var ctrl_sca=new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});map.addControl(ctrl_sca);if(opt.marker){map.addOverlay(marker);if(opt.markerTips.content!==""){var opts={width:opt.markerTips.maxWidth,height:opt.markerTips.maxHeight,title:opt.markerTips.title}
var infoWindow=new BMap.InfoWindow(opt.markerTips.content,opts);marker.addEventListener("click",function(){map.openInfoWindow(infoWindow,point);});}}
if(opt.labels&&opt.labels.length){var labels=opt.labels;var labelsLength=labels.length;for(var labelIndex=0;labelIndex<labelsLength;labelIndex++){(function(){var label=labels[labelIndex];var point=new BMap.Point(label.position.lng,label.position.lat);var marker=new BMap.Marker(point);map.addOverlay(marker);var textLabel=new BMap.Label(label.title+'<div style="background: url(http://pic.lvmama.com/img/v6/line/map-arrow.png); position: absolute; width: 11px; height: 10px; top: 22px; left: 10px; overflow: hidden;"></div>',{position:point,offset:new BMap.Size(-10,-60)});map.addOverlay(textLabel);textLabel.setStyle({"display":"inline-block","position":"absolute","background-color":"#ee5d5b","color":"#FFF","border":"1px solid #bc3b3a","padding":"2px","line-height":"18px","height":"18px"});})();}}},errorCatch:function(mes){throw new Error("地图组件异常: "+mes);}};Factory.defaults={type:"google",marker:false,coordinate:{lng:116.407,lat:39.9},zoom:15,keyType:0,containerID:"mapContainer",scrollWheel:false,markerTips:{title:"",content:"",maxWidth:150,maxHeight:100}};global.lvmap=Factory;}(window));