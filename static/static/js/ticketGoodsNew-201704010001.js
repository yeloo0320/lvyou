/**
 * 景酒商品展示页面js
 * @author Rumly
 */

var NEED_SUBMIT_FLAG = "need-submit-data";
/**
 * 门票商品数量选择
 * 此处之前是采用live方法绑定，导致多次绑定，Rumly将其修改为on方法绑定
 */
function bindTicketNumberChange() {
    $('.ticket-select').on('change', function (e) {
        //保证当前商品已经选择
        var ticketTypeSelect = $(this).parents("div.room_list").find("span.ticket-type-select");
        ticketTypeSelect.trigger("click");

        //当前选中数量
        var currentQuantity = $(this).find("option:selected").text();
        var suppgoodsid = $(this).attr("data-suppgoodsid");
        //得到需要传参的div
        var paramsDiv = $(this).parents(".adjust-ticket").find(".need-submit-data[data-goodsId='" + suppgoodsid + "']");
        paramsDiv.attr("data-quantity", currentQuantity);
        //选择完酒店之后再算一次价格
        dealtotalMoney(this);
        getAllBuyInfo();
        //算差价
        refreshTicketGapPrice();
    });
}

/**
 * 门票商品折叠
 */
function bindTicketFolderClick() {
    $('.js-flold-ticket').on('click', function () {
        var $this = $(this),
            data = $this.attr('data-name'),
            dataNum = $this.attr('data-num') - 1,
            num = $this.parent().find('.room_list:not(".room_list_tit")').length;
        if (!$this.hasClass('other_show')) {
            $this.parent().find('.room_list').show();
            $this.addClass('other_show').html('收起' + data + '（' + num + '）' + '<i class="icon_arrow"></i>');
        }
        else {
            $this.parent().find('.room_list:not(".room_list_tit"):gt(' + dataNum + ')').hide();
            $this.removeClass('other_show').html('更多' + data + '（' + num + '）' + '<i class="icon_arrow"></i>');
        }
    });
}

/**
 * 绑定门票商品选择事件
 */
function bindTicketTypeSelect() {
    $('.ticket-type-select').on('click', function () {
        var $this = $(this);
        var oldSelectButton = $this.parents("div[date-groupType]").find(".active_xuan");
        if ($this.is(oldSelectButton) == false) { //选择其他商品

            //数量标志位处理
            var lvSelect = $this.parents("ul.room_table").find(".room_td6");
            var lvOldSelect = oldSelectButton.parents("ul.room_table").find(".room_td6");
            var SELECT_FLAG = "lvmama-price-flag";
            lvOldSelect.find("select").removeClass(SELECT_FLAG);
            lvSelect.find("select").removeClass(SELECT_FLAG).addClass(SELECT_FLAG);

            //改变选中按钮的样式
            oldSelectButton.removeClass("active_xuan");
            oldSelectButton.text("选择");

            $this.addClass("active_xuan");
            $this.html('已选 <i class="line_icon icon_gou"> </i>');

            //待提交数据标志位设置
            var sumbitData = $this.parents("div.room_list").find("div.submit-data-js");
            var oldSumbitData = oldSelectButton.parents("div.room_list").find("div.submit-data-js");

            oldSumbitData.removeClass(NEED_SUBMIT_FLAG);
            sumbitData.removeClass(NEED_SUBMIT_FLAG).addClass(NEED_SUBMIT_FLAG);

            //算差价
            refreshTicketGapPrice();

            //执行算价
            dealtotalMoney(this);
            getAllBuyInfo();
        }
    });
}

/**
 * 计算门票差价
 */
function refreshTicketGapPrice() {
    var ticketGroups = $(".adjust-ticket .clearfix[date-groupType]");
    ticketGroups.each(function () {
        //可能会有两个组
        var selectObj = $(this).find(".ticket-select.lvmama-price-flag");
        //首先取到已选的价格
        var selectPrice = selectObj.val();
        var currentSuppGoodsId = selectObj.attr("data-suppgoodsid");

        //取所有未选商品的价格
        $(this).find(".room_list").each(function () {
            var $thisSelect = $(this).find(".ticket-select");
            var goodsId = $thisSelect.attr("data-suppgoodsid");

            var doSelectPrice = $thisSelect.val();
            var price = doSelectPrice - selectPrice;
            if (price % 100 == 0) {
                price = (price / 100).toFixed(0);
            } else {
                price = (price / 100).toFixed(2);
            }
            if (price == 0) {
                price = "0";
            } else if (price > 0) {
                price = "+" + price;
            }
            $(this).find(".gap-price").html('<span class="c_f60">' + price + '</span>');
        });
    });
}

