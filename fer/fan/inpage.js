

var pagew = $(document).outerWidth(true) + (window.innerWidth - document.body.clientWidth);
var pageh = $(window).innerHeight();

try {
    if (pagew > 1058) {
        $("body").on("click",".top_pos",function () {
            
        });
    }
    else {
        $(".mtmenu_click a").click(function () {
            if ($(this).hasClass("on")) {
                $(this).removeClass("on");
                $(".menufr").css({ "display": "none" });
                $("body").css({ "height": "100vh", "overflow":"visible"});
            }
            else {
                $(this).addClass("on");
                $(".menufr").css({ "display": "block" });
                $("body").css({ "height": "100vh", "overflow": "hidden" });
            }
        });
    }
}
catch (e) { }

try {
    if (pagew > 1058) {
        $(".tmenufr ul li").each(function () {
            $(this).hover(
                function () {
                    $(this).addClass("active");
                },
                function () {
                    $(this).removeClass("active");
                }
            );
        });
    }
    else {
        var tmenufr_on = -1;
        $(".tmenufr ul li").each(function (i, e) {
            if ($(this).hasClass("active")) {
                tmenufr_on = i;
            }
            $(this).find(".tm_t").click(function () {
                if (tmenufr_on != i) {
                    $(this).closest("li").addClass("active");
                    if (tmenufr_on != -1) {
                        $(this).closest("ul").find("li").eq(tmenufr_on).removeClass("active");
                    }
                    tmenufr_on = i;
                }
                else {
                    $(this).closest("li").removeClass("active");
                    tmenufr_on = -1;
                }
            });
        });
    }
}
catch (e) { }


try {
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null;
    }
    var _dw = getUrlParam("dw");
    var _stopdw = $(".cplbfr").offset().top - $(".topfr").innerHeight();
    if (_dw != null) {
        $('html, body').stop().animate({scrollTop: _stopdw +"px"})
    }

    var _top_cp = $(document).scrollTop();
    var _cptop_lh = $(".cplb_l").innerHeight();
    var _cptop = $(".cplb_r").offset().top - $(".topfr").innerHeight() - 30;
    var _cp_btntop = $(".btn_empty").offset().top;
    $(window).scroll(function () {
        _top_cp = $(document).scrollTop();
        cp_fun(_top_cp);

    })
    cp_fun(_top_cp);
    function cp_fun(obj) {
        if (obj > _cptop && obj + pageh < _cp_btntop + _cptop_lh) {
            $(".cplb_l").css({ "top": (obj - _cptop) + "px" });
        }
        else if (obj < _cptop){
            $(".cplb_l").css({ "top": "0px" });
        }
        else {
            
        }
    }

}
catch (e) { }



function countup1(_obj) {
    try {
        var settings = {
            'time': 800,
            'delay': 10
        };
        var $this = _obj;
        var $settings = settings;
        if ($this.attr("data-num") != "") {
            $this.data('counterupTo', $this.attr("data-num"));
        }
        if (!$this.data('counterupTo')) {
            $this.data('counterupTo', $this.text());
        }
        var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
        var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
        var divisions = time / delay;
        var num = $this.data('counterupTo');
        var nums = [num];
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, '');
        var isInt = /^[0-9]+$/.test(num);
        var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
        var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

        for (var i = divisions; i >= 1; i--) {

            var newNum = parseInt(Math.round(num / divisions * i));

            if (isFloat) {
                newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
            }
            if (isComma) {
                while (/(\d+)(\d{3})/.test(newNum.toString())) {
                    newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                }
            }

            nums.unshift(newNum);
        }

        $this.data('counterup-nums', nums);
        $this.text('0');

        var f = function () {
            try {
                if ($this.data('counterup-nums') != "") {
                    $this.text($this.data('counterup-nums').shift());
                }

                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            }
            catch (e) { }
        };
        $this.data('counterup-func', f);

        setTimeout($this.data('counterup-func'), delay);
    }
    catch (e) { }
}


try {
    !(function (n, e) {
        function setViewHeight() {
            var windowVH = e.innerHeight / 100
            n.documentElement.style.setProperty('--vh', windowVH + 'px')
        }
        var i = 'orientationchange' in window ? 'orientationchange' : 'resize'
        n.addEventListener('DOMContentLoaded', setViewHeight)
        e.addEventListener(i, setViewHeight)
    })(document, window)
} catch (e) { }