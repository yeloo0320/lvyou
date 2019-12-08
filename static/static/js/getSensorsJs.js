//region 神策分析
(function (para) {
    var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
    if (typeof (w['sensorsDataAnalytic201505']) !== 'undefined') {
        return false;
    }
    w['sensorsDataAnalytic201505'] = n;
    w[n] = w[n] || function (a) {
        return function () {
            (w[n]._q = w[n]._q || []).push([a, arguments]);
        }
    };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister', 'getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        x.setAttribute('charset', 'UTF-8');
        y.parentNode.insertBefore(x, y);
        w[n].para = para;
    }
})({
    sdk_url: 'https://pics.lvjs.com.cn/js/common/sa-sdk-javascript-1.12.9/sensorsdata.min.js',
    heatmap_url: 'https://pics.lvjs.com.cn/js/common/sa-sdk-javascript-1.12.9/heatmap.min.js',
    name: 'sensors',
    server_url: 'https://trace.lvmama.com/sa?project=production',
    heatmap: {}
});

function quickAutoTrack() {

    function getCookie(name) {
        var cookieValue = null,
            doc = document
        if (doc.cookie && doc.cookie != '') {
            var cookies = doc.cookie.split(';')
            for (var i = 0; i < cookies.length; i++) {
                var cookie = (cookies[i]).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                    break
                }
            }
        }
        return cookieValue
    }

    var website_name
    website_name = getCookie('_ip_city_name')
    var autoTrackParams = {
        platform_type: 'PC',
        replace_version: ['PC_A版本']
    }
    if (website_name) {
        autoTrackParams.website_name = website_name
    }
    window.autoTrackParams = autoTrackParams
    //添加公共属性
    sensors.registerPage(autoTrackParams);

    //触发 $pageview 事件
    sensors.quick('autoTrack')

}

quickAutoTrack();

//endregion