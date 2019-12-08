
/* footer.js
 * 远程调用统一底部html
 * 为了SEO的目的，网站地图移至topbar位置
 */
(function(){
    var footerhtml =  '<!-- 公共底部  --><!-- footer\\ -->'
                    + '<div class="wrap" style="clear: both;"><a class="public_ft" href="http://www.lvmama.com/public/user_security" target="_blank"><ul class="public_ft_list"><li><i class="ft_ioc1"></i><strong>价格保证</strong>同类产品，保证低价</li><li><i class="ft_ioc2"></i><strong>退订保障</strong>因特殊情况影响出行，保证退订</li><li><i class="ft_ioc3"></i><strong>救援保障</strong>旅途中遇意外情况，保证援助</li><li><i class="ft_ioc4"></i><strong>7x24小时服务</strong>快速响应，全年无休</li></ul></a></div>'
                    + '<!-- copyright\\ -->'
                    + '<div class="lv-footer clearfix wrap" style="margin:0 auto;">'
                    + '    <p class="footer-link">'
                    + '       <a href="http://www.lvmama.com/public/about_lvmama" rel="nofollow">关于我们</a> | '
					+ '       <a href="http://www.lvmama.com/public/lianxi_us" rel="nofollow">联系我们</a> | '
                    + '       <a href="http://www.lvmama.com/public/site_map">网站地图</a> | '
                    + '       <a href="http://hotels.lvmama.com/brand/">酒店品牌</a> | '
                    + '       <a href="http://hotels.lvmama.com/area/">酒店查询</a> | '
                    + '       <a href="http://www.lvmama.com/public/help" rel="nofollow">帮助中心</a> | '
                    + '       <a href="http://www.lvmama.com/public/links">友情链接</a> | '
                    + '       <a href="http://www.lvmama.com/public/jobs" rel="nofollow">诚聘英才</a> | '
                    + '   <a href="http://www.lvmama.com/public/zizhi_lvmama" rel="nofollow">旅游度假资质</a> | '
                    + '       <a href="http://www.lvmama.com/userCenter/user/transItfeedBack.do" rel="nofollow">意见反馈</a> | '
                    + '       <a rel="nofollow" href="http://www.lvmama.com/public/adwy">广告业务</a>'
                    + '    </p>'
                    + '    <p class="lv-copyright">Copyright &copy; 2019 www.lvmama.com. 上海景域文化传播股份有限公司版权所有&#12288;<a href="http://pic.lvmama.com/img/businesslicense.jpg" target="_blank">营业执照</a>&#12288;<a href="http://www.miitbeian.gov.cn" target="_blank" rel="nofollow">沪ICP备13011172号-3</a>&#12288;增值电信业务经营许可证编号：<a rel="nofollow" href="http://pic.lvmama.com/img/ICP.jpg" target="_blank">沪B2-20100030</a></p>'
                    + '   <div class="lv-safety">'
                    + '      <a class="safety2" target="_blank" rel="nofollow" title="经营性网站备案信息" href="http://www.miibeian.gov.cn/"></a>'
                    + '      <a class="safety3" target="_blank" rel="nofollow" title="网络110报警服务" href="http://www.cyberpolice.cn"></a>'
                    + '      <a class="safety4" target="_blank" rel="nofollow" title="支付宝特约商家"></a>'
                    + '      <a class="safety5" target="_blank" rel="nofollow" title="AAA级信用企业" href="http://www.itrust.org.cn/home/index/itrust_certifi/wm/1664396140.html"></a>'
                    + '      <a class="safety6" target="_blank" rel="nofollow" title="上海工商" href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=20110930103539539"></a>'
                    + '      <a class="safety7" target="_blank" rel="nofollow" title="可信网站" href="https://ss.knet.cn/verifyseal.dll?sn=2010101800100002662&comefrom=trust&trustKey=dn&trustValue=www.lvmama.com"></a>'
                    + '      <a class="safety8" target="_blank" rel="nofollow" title="诚信认证示范企业" href="https://credit.szfw.org/CX20160614015657160455.html" id="___szfw_logo___" hidefocus="false"></a>'
                    + '      <a class="safety9" target="_blank" rel="nofollow" title="网络社会征信网" href="http://www.zx110.org"></a>'
                    + '      <a class="safety10" target="_blank" rel="nofollow" title="360网站安全检测" href="http://webscan.360.cn"></a>'
                    + '      <a class="safety11" target="_blank" rel="nofollow" title="网监安全" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010702001030"></a>'
                    + '      <a class="safety13" target="_blank" rel="nofollow" title="举报中心" href="http://www.shjbzx.cn/"></a>'
                    + '   </div>'
                    + '</div><!-- //footer -->'
                    + '<!-- 公共底部结束  -->';
    document.write(footerhtml);
})();

/*流量数据收集(PC版)的部码*/
(function() {
     var arr = ['https://pics.lvjs.com.cn/mobile/lib/src/bdcTrace/dist/bdctrace-pc.js'];
     for (var i = 0; i < arr.length; i++) {
          var lmm = document.createElement('script');
          lmm.type = 'text/javascript';
          //arr[i] = (document.location.protocol == 'https:' ? 'https:': 'http:')+ arr[i];
          lmm.src = arr[i];
          var s = document.getElementsByTagName('head')[0];
          s.parentNode.insertBefore(lmm, s);
     }
})();
