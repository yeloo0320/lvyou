;(function($){'use strict';function safeAdd(x,y){var lsw=(x&0xffff)+(y&0xffff);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xffff)}
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
if(typeof define==='function'&&define.amd){define(function(){return md5})}else if(typeof module==='object'&&module.exports){module.exports=md5}else{$.md5=md5}})($);$(function(){var $document=$(document);$document.on('change','.login_checkbox input',function(e){var $this=$(this),$parent=$this.parent(),checked=$this.attr('checked');if(checked){$parent.addClass('login_checked');}else{$parent.removeClass('login_checked');};});$document.on('click','.lv_side_login_tab dd',function(e){var num=$(this).index();$(this).addClass('active').siblings().removeClass('active');$('.lv_side_logintype').eq(num).show().siblings('.lv_side_logintype').hide();if(num==2){$('.lv_side_login_third').hide();}else{$('.lv_side_login_third').show();};});$document.on('mouseover','.lv_side_nav li',function(e){var num=$(this).index();if($(this).attr('id')=='side_login'){$('.lv_side_login_box').show();}else{$('.lv_side_login_box').hide();};});$document.on('click','.lv_side_top',function(e){$('body,html').animate({'scrollTop':0},300);});lvLogin.init();});var SERVER_NAME=('https:'==document.location.protocol?'https://':'http://')+"login.lvmama.com";var lvLogin={init:function(){var self=this;$('body').append(self.createDom());$.ajax({url:SERVER_NAME+'/nsso/ajax/getUserNo.do?jsoncallback=?',type:'GET',jsonpCallback:'jsoncallback',dataType:'jsonp'}).complete(function(XMLHttpRequest,req){if(req=='success'){console.log('登录成功，欢迎来到驴妈妈！');}else{$('.lv_side').append(self.loginDom());$('#side_login').html('<i class="lv_side_icon side_icon_my"></i>');self.event();self.initFraud();var $pageScript=$('script'),dfpLoad=true;for(var i=0;i<$pageScript.length;i++){var jssrc=$pageScript[i].src;if(/dfp.lvmama.com\/public\/downloads\/frms-fingerprint\.js/.test(jssrc)){dfpLoad=false;break;};};if(dfpLoad){self.initDfp();};setTimeout(function(){self.startGeetest();},1000);self.set();$.getScript(('https:'==document.location.protocol?'https://':'http://')+'static.geetest.com/static/tools/gt.js');}});},event:function(){var self=this;var $document=$(document);$document.on('click','.img_code',function(e){self.getCode($(this));});$document.on('click','.js_user_login',function(e){self.userLogin();});$document.on('click','.js_mobile_login',function(e){self.mobileLogin();});$document.on('click','.lv_side_btn_code',function(e){self.getMobileCode($(this));});$(document).on('change','#login_user_username',function(e){self.showImgCode($(this).val());});$(document).on('click',function(e){$('.lv_side_login_box').hide();});$(document).on('click','.lv_side_login_box',function(e){e.stopPropagation();});},createDom:function(){var appletPop="";var miniProgramIcon="";if((location.pathname==="/zhoubianyou/"||location.pathname==="/freetour/")&&location.hostname==="www.lvmama.com"){appletPop="lv_side_app_applet_pop"
miniProgramIcon='   <li class="lv_side_mini_program">'
+'    <i class="lv_side_icon side_icon_applet"></i>'
+'    <!-- 小程序模块 -->'
+'    <div class="lv_side_app_box">'
+'     <img class="lv_side_app_ewm" src="http://pic.lvmama.com/img/v6/applet_poptip_around.png" width="160" alt="">'
+'     <span class="side_login_arrow_r">◆</span>'
+'    </div>'
+'   </li>'}
var lv_side_app='   <li class="lv_side_app '+appletPop+'">'
+'    <i class="lv_side_icon side_icon_app"></i>'
+'    <!-- APP模块 -->'
+'    <div class="lv_side_app_box">'
+'     <img class="lv_side_app_ewm" src="http://www.lvmama.com/zt/web/sider/index_sider_app.png" width="79" alt="">'
+'     <span class="side_login_arrow_r">◆</span>'
+'    </div>'
+'   </li>';var sideHtml='<div class="lv_side" id="lv_side">'
+'  <ul class="lv_side_nav">'
+miniProgramIcon
+lv_side_app
+'   <li id="side_login">'
+'    <a href="//my.lvmama.com/myspace/index" target="_blank">'
+'     <p>我的驴妈妈</p><i class="lv_side_icon side_icon_my"></i>'
+'    </a>'
+'   </li>'
+'   <li>'
+'    <a href="http://www.ctcnn.com/Research/pc_L.htm" target="_blank">'
+'     <p>有奖问卷</p><i class="lv_side_icon side_icon_questionnaire"></i>'
+'    </a>'
+'   </li>'
+'   <li>'
+'    <a href="http://www.lvmama.com/userCenter/user/transItfeedBack.do" target="_blank">'
+'     <p>意见反馈</p><i class="lv_side_icon side_icon_feedback"></i>'
+'    </a>'
+'   </li>'
+'   <li class="lv_side_top">'
+'    <p>返回顶部</p><i class="lv_side_icon side_icon_top"></i>'
+'   </li>'
+'  </ul>'
+' </div>';return sideHtml;},loginDom:function(){var loginHtml='<div class="lv_side_login_box">'
+'   <dl class="lv_side_login_tab">'
+'    <dd class="active">普通登录</dd>'
+'    <dd>手机动态密码登录</dd>'
+'    <dd style="display:none;">扫码登录</dd>'
+'   </dl>'
+' '
+'   <!-- 普通登录 -->'
+'   <div class="lv_side_logintype" style="display:block;">'
+'    <div class="lv_side_login_tip" id="login_user_tip"></div>'
+'    <ul class="lv_side_login_list">'
+'     <li><input class="login_input" id="login_user_username" type="text" placeholder="邮箱／手机号／用户名／会员卡"><i class="lv_side_icon side_icon_name"></i></li>'
+'     <li><input class="login_input" id="login_user_pass" type="password" placeholder="请输入密码"><i class="lv_side_icon side_icon_pass"></i></li>'
+'     <li style="display:none;"><input class="login_input login_input_min" id="login_user_imgcode" type="text" placeholder="请填写计算结果或验证码"><img class="img_code" id="user_img_code" src="'+SERVER_NAME+'/captcha/account/checkcode/login_web.htm" title="点击更换验证码" width="104" height="42"></li>'
+'    </ul>'
+' '
+'    <!-- <div class="lv_side_check lv_side_remember_pass"><a href="#">忘记密码？</a><label><span class="login_checkbox lv_side_icon "><input type="checkbox"></span>记住密码30天</label></div> -->'
+' '
+'    <a class="lv_side_btn_login js_user_login">登 录</a>'
+'    <!-- 普通登录，滑动验证模块 -->'
+'    <div class="embed_captcha" id="user_embed_captcha"></div>'
+' '
+'    <p class="lv_side_register_tip">还不是驴妈妈会员？<a href="https://login.lvmama.com/nsso/register/registering.do" target="_blank">立即注册</a></p>'
+'   </div>'
+' '
+'   <!-- 手机登录 -->'
+'   <div class="lv_side_logintype">'
+'    <!-- 登录提示 -->'
+'    <div class="lv_side_login_tip" id="login_mobile_tip"></div>'
+' '
+'    <ul class="lv_side_login_list">'
+'     <li><input class="login_input" id="login_mobile" type="text" maxlength="11" placeholder="手机号"><i class="lv_side_icon side_icon_mobile"></i></li>'
+'     <li style="display:none;"><input class="login_input login_input_min" id="login_mobile_imgcode" type="text" placeholder="请填写计算结果或验证码"><img class="img_code"  id="mobile_img_code" src="'+SERVER_NAME+'/captcha/account/checkcode/rapidLogin.htm" title="点击更换验证码" width="104" height="42"></li>'
+'     <li><input class="login_input login_input_min" id="login_mobile_code" type="text" placeholder="请输入动态密码"><span class="lv_side_btn_code">获取动态密码</span></li>'
+'    </ul>'
+' '
+'    <a class="lv_side_btn_login js_mobile_login">登 录</a>'
+'    <!-- 手机登录，滑动验证模块 -->'
+'    <div class="embed_captcha" id="mobile_embed_captcha"></div>'
+'    '
+'    <div class="lv_side_check lv_side_contract">'
+'     <label><span class="login_checkbox lv_side_icon login_checked"><input class="js_contract_checked" type="checkbox" checked=""></span>我已阅读并接受</label>'
+'     <a href="http://login.lvmama.com/nsso/register/agreement.do" target="_blank">《驴妈妈旅游网会员服务条款》</a>'
+'     <a href="http://login.lvmama.com/nsso/register/agreementThr.do" target="_blank">《免责声明》</a>'
+'     <a href="http://login.lvmama.com/nsso/register/agreementTwo.do" target="_blank">《驴妈妈隐私保护声明》</a>'
+'    </div>'
+'    <p class="lv_side_tip">快捷注册:可使用手机快捷登录功能，通过动态密码完成快捷注册并登录。</p>'
+'   </div>'
+'  '
+' '
+'   <!-- 二维码登录 -->'
+'   <div class="lv_side_logintype">'
+'    <div class="ewm_login_tit"><i class="lv_side_icon lv_side_sao"></i>手机扫码，登录更安全</div>'
+'    <div class="ewm_login_box">'
+'     <img src="http://pic.lvmama.com/img/channel/tuangou/app.png" width="160" height="160" alt="">'
+'     <div class="ewm_login_refresh"><p>二维码已过期</p><span class="ewm_login_refresh_btn">刷新</span></div>'
+'    </div>'
+'    <p class="ewm_login_tip">打开驴妈妈APP扫二维码登录</p>'
+'   </div>'
+' '
+'   <!-- 第三方登录 -->'
+'   <div class="lv_side_login_third">'
+'    <a class="lv_side_icon lv_side_qq" href="https://login.lvmama.com/nsso/cooperation/tencentQQUnionLogin.do" onclick="tipsWindow()" target="_blank" title="QQ登录"></a>'
+'    <a class="lv_side_icon lv_side_wx" href="https://login.lvmama.com/nsso/cooperation/tencentWeiXinUnionLogin.do" onclick="tipsWindow()" target="_blank" title="微信登录"></a>'
+'    <a class="lv_side_icon lv_side_wb" href="https://login.lvmama.com/nsso/cooperation/sinaUnionLogin.do" onclick="tipsWindow()" target="_blank" title="新浪微博登录"></a>'
+'    <a class="lv_side_icon lv_side_zfb" href="https://login.lvmama.com/nsso/cooperation/alipayUnionLogin.do" onclick="tipsWindow()" target="_blank" title="支付宝登录"></a>'
+'   </div>'
+'   '
+'   <span class="side_login_arrow_r">◆</span>'
+'   '
+'   <!-- 手机登录滑动验证码值 -->'
+'   <input type="hidden" id="mobile_geetest_challenge">'
+'      <input type="hidden" id="mobile_geetest_validate">'
+'      <input type="hidden" id="mobile_geetest_seccode">'
+'   <!-- 普通登录滑动验证码值 -->'
+'   <input type="hidden" id="normal_geetest_challenge">'
+'      <input type="hidden" id="normal_geetest_validate">'
+'      <input type="hidden" id="normal_geetest_seccode">'
+'  '
+'  </div>';return loginHtml;},userLogin:function(){var self=this;var $login_user_username=$('#login_user_username'),$login_user_pass=$('#login_user_pass'),$login_user_imgcode=$('#login_user_imgcode'),username=$('#login_user_username').val(),password=$('#login_user_pass').val(),imgcode=$('#login_user_imgcode').val();if(username==''){this.tip('请输入邮箱/手机号/用户名/会员卡');$login_user_username.focus();}else if(password==''){this.tip('请输入密码');$login_user_pass.focus();}else if(imgcode==''&&!$login_user_imgcode.is(":hidden")){this.tip('请输入验证码');$login_user_imgcode.focus();}else{this.removeTip();$.getJSON(SERVER_NAME+"/nsso/geetest/login/validateNormalLogin.do?jsoncallback=?",{userName:encodeURI(username),password:$.md5(password),verifyCode:encodeURI(imgcode)},function(response){var sCode=response.securityCode;if(response.success==true){var _errorCode=response.errorCode;var _errorMsg=response.errorMsg;if(_errorCode==1){$('#user_embed_captcha').show();$('.js_user_login').hide();}else if(_errorCode!=0){if(_errorCode==102||_errorCode==103){self.showImgCode(username);self.getCode($('#user_img_code'));}
self.tip(_errorMsg);}else{var geetest_challenge=$('#normal_geetest_challenge').val();var geetest_validate=$('#normal_geetest_validate').val();var geetest_seccode=$('#normal_geetest_seccode').val();$.getJSON(SERVER_NAME+"/nsso/ajax/login/rapidLogin.do?jsoncallback=?",{mobileOrEMail:encodeURI(username),password:$.md5(password),verifycode:encodeURI(imgcode),loginType:'L-N',securityCode:sCode,normal_geetest_challenge:geetest_challenge,normal_geetest_validate:geetest_validate,normal_geetest_seccode:geetest_seccode},function(data){if(data.success){self.removeTip();$(window.parent.document).find(".bgLogin,.LoginAndReg, #loginDIV").hide();$.ajax({url:SERVER_NAME+'/nsso/ajax/getUserNo.do?jsoncallback=?',type:'GET',jsonpCallback:'jsoncallback',dataType:'jsonp'}).complete(function(XMLHttpRequest,req){if(req=='success'&&req.success){try{cmCreateRegistrationTag(req.result,"null","null","null","null","null","null-_-null-_-null-_-null-_-null");}catch(exception){console.log(exception);};}
self.options.userName=username;self.callback();});}else{if(data.errorText==="userNoMobile"){window.location.href="https://login.lvmama.com/nsso/union/bind/bindMobile.do";return}
self.tip(data.errorText);self.showImgCode(username);self.getCode($('#user_img_code'));}});}}else{$('#_normalGeetestCaptcha').show();$('#_loginNormalButton').hide();return;}});};},mobileLogin:function(){var self=this;var $login_mobile=$('#login_mobile'),$login_mobile_imgcode=$('#login_mobile_imgcode'),$login_mobile_code=$('#login_mobile_code'),mobile=$login_mobile.val(),imgcode=$login_mobile_imgcode.val(),mobilecode=$login_mobile_code.val();if(mobile==''){self.tip('请输入手机号','mobile');$login_mobile.focus();}else if(!/1(3|4|5|7|8|9)\d{9}/.test(mobile)){self.tip('请输入正确的手机号','mobile');$login_mobile.focus();}else if($login_mobile_imgcode.is(':visible')&&$.trim(imgcode)==''){self.tip('请输入图形验证码','mobile');$login_mobile_imgcode.focus();}else if($.trim(mobilecode)==''){self.tip('请输入动态密码','mobile');$login_mobile_code.focus();}else if($('.js_contract_checked').attr('checked')!='checked'){self.tip('未阅读并接受驴妈妈条款','mobile');}else{$.getJSON(SERVER_NAME+"/nsso/geetest/login/validateMobileLogin.do?jsoncallback=?",{mobileNo:mobile},function(response){if(response.success==true){var _errorCode=response.errorCode;var _errorMsg=response.errorMsg;if(_errorCode==101){self.tip(_errorMsg,'mobile');$login_mobile.focus();return;}else if(_errorCode==102){$('#mobile_embed_captcha').show();$('.js_mobile_login').hide();}else{var mobile_login_url=SERVER_NAME+'/nsso/ajax/login/rapidLogin.do';if(location.hostname=='md.lvmama.com'){mobile_login_url='//md.lvmama.com/o2o_front/ajax/login/rapidLogin.do';};var geetest_challenge=$('#mobile_geetest_challenge').val();var geetest_validate=$('#mobile_geetest_validate').val();var geetest_seccode=$('#mobile_geetest_seccode').val();$.getJSON(mobile_login_url+"?jsoncallback=?",{mobile:mobile,verifycode:imgcode,authenticationCode:mobilecode,loginType:'L-M',mobile_geetest_challenge:geetest_challenge,mobile_geetest_validate:geetest_validate,mobile_geetest_seccode:geetest_seccode},function(response){if(response.success==false){self.tip(response.errorText,'mobile');self.getCode($('#mobile_img_code'));}else{self.removeTip();$(window.parent.document).find(".bgLogin,.LoginAndReg, #loginDIV").hide();$.ajax({url:SERVER_NAME+'/nsso/ajax/getUserNo.do?jsoncallback=?',type:'GET',jsonpCallback:'jsoncallback',dataType:'jsonp'}).complete(function(XMLHttpRequest,req){if(req=='success'&&req.success){try{cmCreateRegistrationTag(req.result,"null","null","null","null","null","null-_-null-_-null-_-null-_-null");}catch(exception){console.log(exception);};}
self.options.userName=mobile;self.callback();});}});};}else{$('#mobile_embed_captcha').show();$('.js_mobile_login').hide();}});}},ewmLogin:function(){},getCode:function($this,level){var url=$this.attr("src").split('?')[0];if(level){$this.attr("src",url+"?secureLevel="+level+"&_="+(new Date).getTime());}else{$this.attr("src",url+"?times="+(new Date).getTime());}},getMobileCode:function($btn){var self=this;var $login_mobile=$('#login_mobile'),mobile=$login_mobile.val(),$imgcode=$('#login_mobile_imgcode'),timerYzm=null,Time=60;if(mobile==''){self.tip('请输入手机号','mobile');$login_mobile.focus();return false;}else if(!/1(3|4|5|7|8|9)\d{9}/.test(mobile)){self.tip('请输入正确的手机号','mobile');$login_mobile.focus();return false;}else if($imgcode.is(':visible')&&$imgcode.val()==''){self.tip('请输入图形验证码','mobile');$imgcode.focus();return false;};if(!$btn.hasClass('mobile_code_stop')){$.getJSON(SERVER_NAME+"/nsso/ajax/captcha/checkIsNeedMobileCaptcha.do?jsoncallback=?",{mobile:mobile},function(response){if(response.success){if(response.result=='true'&&$imgcode.val()==''){$imgcode.val('').parent().show();self.tip('请输入图形验证码','mobile');$imgcode.focus();}else{$.getJSON(SERVER_NAME+"/nsso/ajax/message/mobileRapLogByPC/sendMobileCode.do?jsoncallback=?",{mobileOrEMail:mobile,verifycode:$imgcode.val(),sendType:'2'},function(data){if(data.success){$('#login_mobile_code').focus();$btn.addClass('mobile_code_stop').text('60秒后重发');timerYzm=setInterval(function(){Time--;if(Time<=0){$btn.text('获取动态密码').removeClass('mobile_code_stop');clearInterval(timerYzm);}else{$btn.text(Time+'秒后重发');}},1000);self.removeTip();}else{var errorTips='';if(data.errorText=='errorVerifycode'){errorTips='图形验证码输入错误';}else if(data.errorText=='vcodeWarning'){errorTips='您当前短信验证码已失效，请重新发送验证码';}else if(data.errorText=='phoneWarning'){errorTips='已超过每日发送上限，请于次日再试';}else if(data.errorText=='ipLimit'){errorTips='当前IP发送频率过快，请稍后重试';}else if(data.errorText=='waiting'){errorTips='发送频率过快，请稍后重试';}else{errorTips=data.errorText;};self.tip(errorTips,'mobile');self.getCode($('#mobile_img_code'));$imgcode.val('').focus();}});};}else{self.tip((response.errorText?response.errorText:'动态密码发送失败，请稍后重试'),'mobile');}});}},showImgCode:function(userName){var self=this;if($.trim(userName).length>0){$("#user_img_code").show();$.getJSON("https://login.lvmama.com/nsso/ajax/captcha/checkIsNeedCaptcha.do?jsoncallback=?",{userName:userName},function(json){if(json.success==true){var decision=json.result;if(decision=='hide'){$("#user_img_code").hide();}else{self.getCode($('#user_img_code'),decision);$("#user_img_code").parent().show();}}});}},tip:function(html,type){if(type=='mobile'){$('#login_mobile_tip').addClass('login_error').html('<i class="lv_side_icon side_icon_error"></i>'+html);}else{$('#login_user_tip').addClass('login_error').html('<i class="lv_side_icon side_icon_error"></i>'+html);};},removeTip:function(){$('#login_user_tip,#login_mobile_tip').removeClass('login_error').html('');},options:{jumpUrl:'',userName:'',callback:null,set:[1,1,0]},success:function(option){this.options=$.extend(true,this.options,option);},callback:function(){var newOpt=this.options;if(typeof newOpt.callback==='function'){newOpt.callback({userName:newOpt.userName});return;};if($.trim(newOpt.jumpUrl)){location.href=newOpt.jumpUrl;return;};location.reload();},initFraud:function(){_fmOpt={partner:'lvmama',appName:'lvmama_web',token:this.getCookie('lvsessionid')};var cimg=new Image(1,1);cimg.onload=function(){_fmOpt.imgLoaded=true;};cimg.src="https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=lvmama&appName=lvmama_web&tokenId="+_fmOpt.token;var fm=document.createElement('script');fm.type='text/javascript';fm.async=true;fm.src=('https:'==document.location.protocol?'https://':'http://')+'static.fraudmetrix.cn/fm.js?ver=0.1&t='+(new Date().getTime()/3600000).toFixed(0);var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(fm,s);},initDfp:function(){var oHead=document.getElementsByTagName('HEAD').item(0);var oScript=document.createElement("script");oScript.type="text/javascript";oScript.src=('https:'==document.location.protocol?'https':'http')+'://dfp.lvmama.com/public/downloads/frms-fingerprint.js?custID=dfp&serviceUrl='+('https:'==document.location.protocol?'https':'http')+'://dfp.lvmama.com/public/generate/jsonp&loadSource=script';oHead.appendChild(oScript);},getCookie:function(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
return unescape(arr[2]);else
return null;},setCookie:function(objName,objValue,expire){var now=new Date();now.setDate(now.getDate()+expire);document.cookie=objName+"="+escape(objValue)+";path=/;domain=.lvmama.com;expires="+now.toGMTString();},startGeetest:function(){$.getJSON(SERVER_NAME+"/nsso/geetest/startCaptcha.do?jsoncallback=?",function(data){initGeetest({gt:data.gt,challenge:data.challenge,product:"float",offline:!data.success},function(captchaObj){captchaObj.onSuccess(function(){var validate=captchaObj.getValidate();$('#normal_geetest_challenge').val(validate.geetest_challenge);$('#normal_geetest_validate').val(validate.geetest_validate);$('#normal_geetest_seccode').val(validate.geetest_seccode);userLogin();});captchaObj.appendTo("#user_embed_captcha");captchaObj.onReady(function(){});});});$.getJSON(SERVER_NAME+"/nsso/geetest/startCaptcha.do?jsoncallback=?",function(data){initGeetest({gt:data.gt,challenge:data.challenge,product:"float",offline:!data.success},function(captchaObj){captchaObj.onSuccess(function(){var validate=captchaObj.getValidate();$('#mobile_geetest_challenge').val(validate.geetest_challenge);$('#mobile_geetest_validate').val(validate.geetest_validate);$('#mobile_geetest_seccode').val(validate.geetest_seccode);mobileLogin();});captchaObj.appendTo("#mobile_embed_captcha");captchaObj.onReady(function(){});});});},show:function(arr){this.options.set=arr;},set:function(){var arr=this.options.set;var active=true;for(var i=0;i<arr.length;i++){var siShow=arr[i];var $dd=$('.lv_side_login_tab').find('dd').eq(i);if(siShow>0){$dd.show();if(active){active=false;$dd.addClass('active');$('.lv_side_logintype').eq(i).show().siblings('.lv_side_logintype').hide();};}else{$dd.hide();};};}};