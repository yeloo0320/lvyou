/*
*酒店描述信息
* 2018年6月9日11:28:28
* 涉及产品，酒店，景酒，机酒
* */
$(function(){
    "use strict" ;// 严格模式
    var timer='';//延迟时间
    var timerInterval='';//播放间隔
    $('.js-hover-fold').live("mouseenter",function(e){
        clearTimeout(timer);
        clearInterval(timerInterval);
        clearTemplate($(this));
        var h=$(this).outerHeight();
        var left=$(this).offset().left;
        var top=$(this).offset().top+h+10;
        initImage();
        $('.disney-template').css({
            left:left+'px',
            top:top+'px'
        }).show(200);
    });
    $('.js-hover-fold').live("mouseleave",function(e){
        clearTimeout(timer);
        clearInterval(timerInterval);
        timer=setTimeout(function(){
            $('.disney-template').hide();
            $('.hotel-big-img').hide();
        },200)
    });
    $('.disney-template').hover(function(){
        clearTimeout(timer);
        clearInterval(timerInterval);
        $(this).show();
    },function(){
        var $this=$(this);
        clearTimeout(timer);
        timer=setTimeout(function(){
            $('.disney-template').hide();
            $('.hotel-big-img').hide();
        },200)
    });
    var initImage = function() {
        $('.disney-template .js-product-img').each(function () {
            var $this = $(this),
                $bigImg = $this.find('.product-big-img'),
                $ulSmall = $this.find('.product-small-img ul'),
                $liSmall = $ulSmall.find('li'),
                $span = $this.find('.hotel-big-img .view-icon'),
                $flag = $this.find('.hotel-big-img .flag'),
                liFirstData = $liSmall.eq(0).find('img').attr('src'),
                len = $liSmall.length,
                index = 0;
                $bigImg.unbind();
                $liSmall.unbind();
                $span.unbind();
            if(len==0){
                $('.hotel-big-img').hide();
                //当没有图片是，隐藏图片div
/*                $flag.find('.current').html(0);
                $flag.find('.total').html(0);*/
            }else {
                $('.hotel-big-img').show();
                $flag.find('.current').html(index + 1);
                $flag.find('.total').html(len);
                $bigImg.attr('src', liFirstData);
                $liSmall.eq(0).addClass('active');
                $liSmall.on('click', function () {
                    index = $(this).index();
                    showPic(index);
                });

                $span.off().on('click', function () {
                    var $This = $(this);
                    $This.index() == 1 ? index-- : index++;
                    index > len - 1 && (index = 0);
                    index < 0 && (index = len - 1);
                    showPic(index);
                });
                var showPic = function(index) {
                    var dataSrc = $liSmall.eq(index).find('img').attr('src');
                    $bigImg.attr('src', dataSrc);
                    $liSmall.eq(index).addClass('active').siblings().removeClass('active');
                    $flag.find('.current').html(index + 1);
                };
                timerInterval = setInterval(function () {
                    autoPlay();
                }, 4000);
                $liSmall.hover(function () {
                    clearInterval(timerInterval);
                }, function () {
                    timerInterval = setInterval(function () {
                        autoPlay();
                    }, 4000);
                });
                $span.hover(function () {
                    clearInterval(timerInterval);
                }, function () {
                    timerInterval = setInterval(function () {
                        autoPlay();
                    }, 4000);
                });
                $bigImg.hover(function () {
                    clearInterval(timerInterval);
                }, function () {
                    timerInterval = setInterval(function () {
                        autoPlay();
                    }, 4000);
                });
                var autoPlay = function(){
                    index = $this.find('.product-small-img li.active').index();
                    index++;
                    index > len - 1 && (index = 0);
                    index < 0 && (index = len - 1);
                    showPic(index);
                };
            }
        });
        //########图片延迟加载
        var loadImg=function(){
            var This = $(this);
            if(!This.is(':hidden')){ //不检测隐藏元素
                var to_sc = This.attr('to_sc'),
                    js_sc = This.attr('js_sc'),
                    to = This.attr('to');
                if(to_sc){
                    This.removeAttr('to_sc');
                    var img = new Image().src = to_sc;
                }
                if(!js_sc){
                    this.src=This.css({'opacity':0}).attr("to");
                    This.removeAttr("to");
                    if(This.load()){
                        This.animate({'opacity':1},300,function(){This.removeAttr('style')});
                    }

                    this.onerror=function(){
                    }
                }

            }

        };
        setTimeout(function(){
            $('.js-product-img img[to]').each(function(){
                loadImg.call(this)
            })
        },500);
    };
    //清除数据
    function clearTemplate($this) {
        //$('.disney-template').find(".")
        var product_float = $this.siblings('.product-float').eq(0);
        $('.disney-template').find('.hotel-big-img .product-big-img').attr('src','');
        var nc_hotel_title = product_float.find('.nc-hotel-title').eq(0).html();
        var nc_hotel_describe = product_float.find('.nc-hotel-describe').eq(0).html();
        var nc_view_hotel_title = product_float.find('.nc-view-hotel-title').eq(0).html();
        $('.disney-template').find('.product-float').find('p').remove();
        if(nc_hotel_describe){
            $('.disney-template').find('.product-float').prepend('<p class="nc-hotel-describe">'+nc_hotel_describe+'</p>');
        }
        if(nc_hotel_title){
            $('.disney-template').find('.product-float').prepend('<p class="nc-hotel-title">'+nc_hotel_title+'</p>');
        }
        if (nc_view_hotel_title){
            $('.disney-template').find('.product-float').prepend('<p class="nc-view-hotel-title">'+nc_view_hotel_title+'</p>');
        }
        var $ul =$('.disney-template').find("ul");
        var $lis = product_float.find('.product-small-img ul li');
        $ul.empty();
        for (var i=0;i<$lis.length;i++){
            var src ="src=";
            if(i>=4){
                src=" to=";
            }
            src+=$lis.eq(i).attr('to');
            $ul.append('<li><img alt="" width="90" height="60" '+src+' /></li>');
        }
    }
});
