require([
  'jquery',
  'anime',
  'swiper',
  'imagesloaded',
  'velocity.ui',
  'velocity',
  'resizend',
  'nicescroll',
  'cookie',
  'fullpage',
], function (domReady, anime, Swiper, imagesLoaded, velocity) {
  //
  Pace.on('start', function () {
    $('body').append('<div class="page-loading"></div>');
  });
  Pace.on('done', function () {
    //alert('页面加载完毕');
  });

  //控制顶部导航
  var p = 0,
    t = 0;

  var headerHeight = $('header').height();
  scrollFun();
  function scrollFun() {
    p = $(this).scrollTop();
    //2023-04-25
    if (p < 10) {
      $('header').removeClass('down');
    } else if (p > headerHeight) {
      if (t < p) {
        //下滚
        $('header').removeClass('down');
        $('header').addClass('up');
      } else {
        //上滚
        $('header').addClass('down');
        $('header').removeClass('up');
      }
    }
    //2023-04-26------
    var winh = $(window).height();
    if (p + 10 > winh) {
      $('#gotop').addClass('active');
    } else {
      $('#gotop').removeClass('active');
    }

    setTimeout(function () {
      t = p;
    }, 0);
  }
  $(window).scroll(function () {
    scrollFun();
  });

  //手机导航
  $('body').on('click', '#menu-btn', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#navs').removeClass('active');
    } else {
      $(this).addClass('active');
      $('#navs').addClass('active');
    }
  });

  //正式，删除
  fetch('../../inc/header.html')
    .then((response) => response.text())
    .then((data) => {
      $('#top').before(data);
      $('#top').remove();
      scrollFun();
      $('body').on('click', '#city-btn', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).next('#city-list').removeClass('active');
          $('#city-list>ul').getNiceScroll().remove();
        } else {
          $(this).addClass('active');
          $(this).next('#city-list').addClass('active');
          $('#city-list>ul').niceScroll({
            cursorwidth: '3px',
            cursorborder: 'none',
            background: 'none',
            cursorcolor: '#68b548',
            autohidemode: false,
            cursorborderradius: '0px',
          });
        }

        return false;
      });
    });

  fetch('../../inc/footer.html')
    .then((response) => response.text())
    .then((data) => {
      $('#foot').before(data);
      $('#foot').remove();
      scrollFun();
    });

  //index-box2
  // $('#index-box2-btns li').hover(function () {
  //   var index = $(this).index();
  //   $('#index-box2-btns li').removeClass('active');
  //   $(this).addClass('active');
  //   $('#index-box2-right .right-item').removeClass('active');
  //   $('#index-box2-right .right-item').eq(index).addClass('active');
  // });
  //2023-04-26-------
  $('#index-box2-btns li').on('click', function () {
    var index = $(this).index();
    $('#index-box2-btns li').removeClass('active');
    $(this).addClass('active');
    $('#index-box2-right .right-item').removeClass('active');
    $('#index-box2-right .right-item').eq(index).addClass('active');
  });
  //2023-04-25
  $('#index-box2-tab li').on('click', function () {
    var index = $(this).index();
    $('#index-box2-tab li').removeClass('active');
    $(this).addClass('active');
    $('#index-box2-content .index-box2-right2-tabcontent-item').removeClass(
      'active'
    );
    $('#index-box2-content .index-box2-right2-tabcontent-item')
      .eq(index)
      .addClass('active');

    //wow 2023-04-27
    $('#index-box2-content .index-box2-right2-tabcontent-item')
      .eq(index)
      .addClass('wow')
      .addClass('animated')
      .addClass('fadeInUp');
    return false;
  });
  $('#index-box2-tab li').hover(function () {
    var index = $(this).index();
    $('#index-box2-tab li').removeClass('active');
    $(this).addClass('active');
    $('#index-box2-content .index-box2-right2-tabcontent-item').removeClass(
      'active'
    );
    $('#index-box2-content .index-box2-right2-tabcontent-item')
      .eq(index)
      .addClass('active');

    //wow 2023-04-27
    $('#index-box2-content .index-box2-right2-tabcontent-item')
      .eq(index)
      .addClass('wow')
      .addClass('animated')
      .addClass('fadeInUp');
  });

  var mySwiper;
  var mySwiper1;
  var mySwiper2;
  var mySwiper3;
  var mySwiper4;
  var mySwiper5;
  var mySwiper6;
  var mySwiper7;
  var mySwiper8;
  var mySwiper9;
  var mySwiper10;

  var pagew =
    $(document).outerWidth(true) +
    (window.innerWidth - document.body.clientWidth);
  var pageh = $(window).innerHeight();

  $(window).on('resizeEnd', function (event) {
    repage_com();
  });

  try {
    var _topfs_v = $(document).scrollTop();
    $(window).scroll(function () {
      _topfs_v = $(document).scrollTop();
      topfr_fun(_topfs_v);
    });
    topfr_fun(_topfs_v);
    function topfr_fun(obj) {
      if (obj > 100) {
        $('.topfr').addClass('top_on1');
      } else {
        $('.topfr').removeClass('top_on1');
      }
    }
  } catch (e) {}

  try {
    //首页
    mySwiper1 = new Swiper('.index-box1 .swiper-container', {
      slidesPerView: '1',
      speed: 1000,
      effect: 'fade',
      loop: true,
      //autoplay: {
      //    delay: 5800,
      //    disableOnInteraction: false,
      //},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function (sw) {
          $('.index-box1 .swiper-slide')
            .eq(0)
            .find('.txt')
            .stop(true, true)
            .velocity('transition.slideUpIn', { stagger: 300 });
        },
        slideChangeTransitionStart: function (sw) {
          var num1 = sw.previousIndex;
          $('.index-box1 .swiper-slide')
            .eq(num1)
            .find('.txt')
            .stop(true, true)
            .css({ opacity: '0' });

          var num = sw.activeIndex;
          $('.index-box1 .swiper-slide')
            .eq(num)
            .find('.txt')
            .stop(true, true)
            .velocity('transition.slideUpIn', { stagger: 300 });
        },
        slideChangeTransitionEnd: function (sw) {},
      },
    });
  } catch (e) {}

  try {
    //index-box2
    mySwiper2 = new Swiper('.index-box2-swiper .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.index-box2-swiper .swiper-button-next',
        prevEl: '.index-box2-swiper .swiper-button-prev',
      },
      breakpoints: {
        640: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 40,
        },
        1024: {
          spaceBetween: 60,
        },
      },
    });
  } catch (e) {}

  try {
    var my3_num = 4;
    if (pagew > 1200) {
      my3_num = 4;
    } else {
      my3_num = 1.2;
    }
    mySwiper3 = new Swiper('.index-box4-swiper .swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      //loop: true,
      navigation: {
        nextEl: '.index-box4-swiper .swiper-button-next',
        prevEl: '.index-box4-swiper .swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      on: {
        slideChangeTransitionEnd: function (sw) {
          //   var num = sw.realIndex;
          //   console.log(num);
          //   countup(
          //     $('.index-box4-swiper .swiper-slide-duplicate-active').find('.no')
          //   );
          //   console.log(sw);
        },
      },
    });
  } catch (e) {}

  try {
    //2023-04-25
    var swiper2;

    var swiper333 = new Swiper('.index-box5 .swiper-bg .swiper', {
      spaceBetween: 10,
      effect: 'fade',
      navigation: {
        nextEl: '.index-box5 .swiper-bg .swiper-button-next',
        prevEl: '.index-box5 .swiper-bg .swiper-button-prev',
      },
    });
    swiper2 = new Swiper('.index-box5 .swiper1 .swiper', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.index-box5 .swiper1 .swiper-button-next',
        prevEl: '.index-box5 .swiper1 .swiper-button-prev',
      },
      controller: {
        control: swiper333,
      },
    });
    // var swiper1 = new Swiper('.index-box5 .swiper2 .swiper', {
    //   loop: true,
    //   spaceBetween: 10,
    //   slidesPerView: 1,
    //   centeredSlides: true,
    //   navigation: {
    //     nextEl: '.index-box5 .swiper2 .swiper-button-next',
    //     prevEl: '.index-box5 .swiper2 .swiper-button-prev',
    //   },
    //   thumbs: {
    //     swiper: swiper2,
    //   },
    //   controller: {
    //     control: swiper333,
    //   },
    // });

    //2023-04-25
    $('#index-box5-list .item').on('click', function () {
      var index = $(this).index();
      swiper2.slideTo(index, 300, true);
      $('#index-box5-list .item').removeClass('active');
      $(this).addClass('active');
      return false;
    });
  } catch (e) {}

  repage_com();

  function repage_com() {
    pagew =
      $(document).outerWidth(true) +
      (window.innerWidth - document.body.clientWidth);
    pageh = $(window).innerHeight();
    document.title = pagew + ' * ' + pageh;
  }

  function countup(_obj) {
    try {
      var settings = {
        time: 600,
        delay: 5,
      };

      var $this = _obj;
      var $settings = settings;

      if (!$this.data('counterupTo')) {
        $this.data('counterupTo', $this.text());
      }
      var time =
        parseInt($this.data('counter-time')) > 0
          ? parseInt($this.data('counter-time'))
          : $settings.time;
      var delay =
        parseInt($this.data('counter-delay')) > 0
          ? parseInt($this.data('counter-delay'))
          : $settings.delay;
      var divisions = time / delay;
      var num = $this.data('counterupTo');
      var nums = [num];
      var isComma = /[0-9]+,[0-9]+/.test(num);
      num = num.replace(/,/g, '');
      var isInt = /^[0-9]+$/.test(num);
      var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
      var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

      for (var i = divisions; i >= 1; i--) {
        var newNum = parseInt(Math.round((num / divisions) * i));

        if (isFloat) {
          newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces);
        }
        if (isComma) {
          while (/(\d+)(\d{3})/.test(newNum.toString())) {
            newNum = newNum
              .toString()
              .replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
          }
        }

        nums.unshift(newNum);
      }

      $this.data('counterup-nums', nums);
      $this.text('0');

      var f = function () {
        try {
          if ($this.data('counterup-nums') != '') {
            $this.text($this.data('counterup-nums').shift());
            if ($('.zhaq_01_c').attr('class') == 'zhaq_01_c') {
              if ($this.data('counterup-nums').shift() <= 20) {
                $('.zhaq_01_c').find('.img1').css({ opacity: '1' });
                $('.zhaq_01_c').find('.img2').css({ opacity: '0' });
                $('.zhaq_01_c').find('.img3').css({ opacity: '0' });
              } else if ($this.data('counterup-nums').shift() <= 60) {
                $('.zhaq_01_c').find('.img1').css({ opacity: '0' });
                $('.zhaq_01_c').find('.img2').css({ opacity: '1' });
                $('.zhaq_01_c').find('.img3').css({ opacity: '0' });
              } else if ($this.data('counterup-nums').shift() <= 100) {
                $('.zhaq_01_c').find('.img1').css({ opacity: '0' });
                $('.zhaq_01_c').find('.img2').css({ opacity: '0' });
                $('.zhaq_01_c').find('.img3').css({ opacity: '1' });
              }
            }
          }

          if ($this.data('counterup-nums').length) {
            setTimeout($this.data('counterup-func'), delay);
          } else {
            delete $this.data('counterup-nums');
            $this.data('counterup-nums', null);
            $this.data('counterup-func', null);
          }
        } catch (e) {}
      };
      $this.data('counterup-func', f);

      setTimeout($this.data('counterup-func'), delay);
    } catch (e) {}
  }

  //关于融通-荣誉资质

  function swiperywly2fun() {
    if ($(window).width() > 768) {
      var swiperywly2 = new Swiper('.about-ryzz .swiper1 .swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.about-ryzz .swiper1 .swiper-pagination',
        },
        navigation: {
          nextEl: '.about-ryzz .swiper1 .swiper-button-next',
          prevEl: '.about-ryzz .swiper1 .swiper-button-prev',
        },
      });
    } else {
      var swiperywly2 = new Swiper('.about-ryzz  .swiper1 .swiper', {
        slidesPerView: 1,
        spaceBetween: 80,
        loop: true,
        pagination: {
          el: '.about-ryzz .swiper1 .swiper-pagination',
        },
        navigation: {
          nextEl: '.about-ryzz .swiper1 .swiper-button-next',
          prevEl: '.about-ryzz .swiper1 .swiper-button-prev',
        },
      });
    }
  }

  swiperywly2fun();
  $(window).resize(function () {
    swiperywly2fun();
  });

  try {
    //about-ryzz

    var swiperAboutRyzz = new Swiper('.about-ryzz-swiper .swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.about-ryzz-swiper .swiper-pagination',
      },
      navigation: {
        nextEl: '.about-ryzz-swiper .swiper-button-next',
        prevEl: '.about-ryzz-swiper .swiper-button-prev',
      },
    });
  } catch (e) {}

  try {
    //业务
    var swiperbusiness1 = new Swiper('.business-box1 .swiper1 .swiper', {
      grabCursor: true,
      effect: 'creative',
      loop: true,
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      pagination: {
        el: '.business-box1 .swiper1 .swiper-pagination',
      },
    });
  } catch (e) {}

  try {
    var swiperbusinessshow2 = new Swiper(
      '.business-show-box2 .swiper2 .swiper',
      {
        effect: 'fade',
        noSwiping: true,
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
      }
    );
    var swiperbusinessshow1 = new Swiper(
      '.business-show-box2 .swiper1 .swiper',
      {
        autoplay: true,
        /*autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },*/
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
        thumbs: {
          swiper: swiperbusinessshow2,
        },
        pagination: {
          el: '.business-show-box2 .swiper1 .swiper-pagination',
          clickable: true,
        },
      }
    );
  } catch (e) {}

  //news
  try {
    var swipernews1 = new Swiper('.news-box1 .swiper1 .swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.news-box1 .swiper1 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.news-box1 .swiper1 .swiper-button-next',
        prevEl: '.news-box1 .swiper1 .swiper-button-prev',
      },
    });
  } catch (e) {}

  //new 停水公告

  $('.js-open-show-news-box3').on('click', function () {
    var htmls = $(this).clone().html();
    layer.open({
      type: 1,
      skin: 'demo-class',
      title: false,
      content: htmls,
    });
    return false;
  });

  //地图
  //创建和初始化地图函数：
  function initMap() {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
    addMapOverlay(); //向地图添加覆盖物
  }
  function createMap(mapdiv) {
    var map = new BMap.Map(mapdiv);

    return map;
  }
  function setMapEvent(map) {
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom();
  }
  function addClickHandler(target, window) {
    target.addEventListener('click', function () {
      target.openInfoWindow(window);
    });
  }
  function addMapOverlay(map, title, content, position) {
    var markers = [
      {
        content: content,
        title: title,
        imageOffset: { width: 0, height: -21 },
        position: { lat: position[1], lng: position[0] },
      },
    ];
    for (var index = 0; index < markers.length; index++) {
      var point = new BMap.Point(
        markers[index].position.lng,
        markers[index].position.lat
      );
      var marker = new BMap.Marker(point, {
        icon: new BMap.Icon(
          'http://api.map.baidu.com/lbsapi/createmap/images/icon.png',
          new BMap.Size(20, 25),
          {
            imageOffset: new BMap.Size(
              markers[index].imageOffset.width,
              markers[index].imageOffset.height
            ),
          }
        ),
      });
      var label = new BMap.Label(markers[index].title, {
        offset: new BMap.Size(25, 5),
      });
      var opts = {
        width: 200,
        title: markers[index].title,
        enableMessage: false,
      };
      var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
      marker.setLabel(label);
      addClickHandler(marker, infoWindow);
      map.addOverlay(marker);
    }
  }
  //向地图添加控件
  function addMapControl(map) {
    var scaleControl = new BMap.ScaleControl({
      anchor: BMAP_ANCHOR_BOTTOM_LEFT,
    });
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      type: BMAP_NAVIGATION_CONTROL_LARGE,
    });
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: false,
    });
    map.addControl(overviewControl);
  }

  $('.baidu-map').each(function () {
    var divid = $(this).attr('id');
    var bmap = createMap(divid); //创建地图
    var title = $(this).data('title');
    var content = $(this).data('desc');
    var xy = $(this).data('xy');
    var position = xy == '' ? [0, 0] : xy.split(',');

    bmap.centerAndZoom(new BMap.Point(position[0], position[1]), 15);

    setMapEvent(bmap); //设置地图事件
    addMapControl(bmap); //向地图添加控件
    addMapOverlay(bmap, title, content, position); //向地图添加覆盖物
  });

  $('#js-hover-tabs-serve-box1 .item').hover(function () {
    var index = $(this).index();
    $('#js-hover-tabs-serve-box1 .item').removeClass('active');
    $(this).addClass('active');
    $('#js-hover-tabs-serve-box1-map .map-item').removeClass('active');
    $('#js-hover-tabs-serve-box1-map .map-item').eq(index).addClass('active');

    //baidu
    if (
      $('#js-hover-tabs-serve-box1-map .map-item').eq(index).find('.baidu-map')
        .length > 0
    ) {
      var $this = $('#js-hover-tabs-serve-box1-map .map-item')
        .eq(index)
        .find('.baidu-map');
      var divid = $this.attr('id');
      var bmap = createMap(divid); //创建地图
      var title = $this.data('title');
      var content = $this.data('desc');
      var xy = $this.data('xy');
      var position = xy == '' ? [0, 0] : xy.split(',');

      bmap.centerAndZoom(new BMap.Point(position[0], position[1]), 15);

      setMapEvent(bmap); //设置地图事件
      addMapControl(bmap); //向地图添加控件
      addMapOverlay(bmap, title, content, position); //向地图添加覆盖物
    }
  });

  //
  try {
    if ($('.page-nav').find('.navs').find('li').length > 4) {
      $('.page-nav').find('.navs').addClass('navs2');
    }
  } catch (e) {}

  //
  $('.js-open-show-serve-box3').on('click', function () {
    var id = $(this).data('id');
    //ajax
    fetch('../../inc/show.html')
      .then((response) => response.text())
      .then((data) => {
        layer.open({
          type: 1,
          skin: 'demo-class2',
          title: false,
          content: data,
        });
      });

    return false;
  });

  //常见问题
  $('.js-open-show-faq').on('click', function () {
    if ($(this).hasClass('item')) {
      var htmls = $(this).clone().html();
      layer.open({
        type: 1,
        skin: 'demo-class3',
        title: false,
        content: htmls,
      });
    } else if ($(this).parent().hasClass('more')) {
      var htmls = $(this).parents('.item').clone().html();
      layer.open({
        type: 1,
        skin: 'demo-class3',
        title: false,
        content: htmls,
      });
    }
    return false;
  });
  //咨询表单
  layui.config({
    base: '../fer/lib/layui/mods/',
    version: '1.0',
  });
  layui.use(['layer', 'form', 'layarea'], function () {
    var layer = layui.layer,
      form = layui.form,
      layarea = layui.layarea;

    $('.serve-box6 .layui-input,.serve-box6 .layui-textarea').on(
      'focus',
      function () {
        $(this).parents('.item-input').addClass('active');
      }
    );
    $('.serve-box6 .layui-input,.serve-box6 .layui-textarea').on(
      'focusout',
      function () {
        $(this).parents('.item-input').removeClass('active');
      }
    );
    $('.serve-box6').on('focus', '.layui-form-select', function () {
      $(this).parents('.item-input').addClass('active');
    });
    $('.serve-box6').on('focusout', '.layui-form-select', function () {
      $(this).parents('.item-input').removeClass('active');
    });
    //提交
    form.on('submit(formDemozixun)', function (data) {
      //自己写
      layer.msg(JSON.stringify(data.field));
      return false;
    });

    var cityCookie = $.cookie('city');

    var province = $.cookie('province'),
      city = $.cookie('city'),
      county = $.cookie('county');

    // if (cityCookie != '') {
    //   switch (cityCookie) {
    //     case '北京':
    //       province = '北京市';
    //       city = '北京市';

    //       break;
    //     case '天津':
    //       province = '天津市';
    //       city = '天津市';

    //       break;
    //     case '左权县':
    //       province = '山西省';
    //       city = '晋中市';
    //       county = '左权县';
    //       break;
    //   }
    // }

    layarea.render({
      elem: '#area-picker',
      data: {
        province: province,
        city: city,
        county: county,
      },
      change: function (res) {
        //选择结果
        console.log(res);
      },
    });
  });
  //顶部城市选择

  // $('body').on('click', '#city-btn', function () {
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(this).next('#city-list').removeClass('active');
  //     $('#city-list>ul').getNiceScroll().remove();
  //   } else {
  //     $(this).addClass('active');
  //     $(this).next('#city-list').addClass('active');
  //     $('#city-list>ul').niceScroll({
  //       cursorwidth: '3px',
  //       cursorborder: 'none',
  //       background: 'none',
  //       cursorcolor: '#68b548',
  //       autohidemode: false,
  //       cursorborderradius: '0px',
  //     });
  //   }

  //   return false;
  // });
  document.addEventListener('click', function () {
    $('#city-list').removeClass('active');
    $('#city-btn').removeClass('active');

    $('#city-list>ul').getNiceScroll().remove();
    //2023-04-24
    $('#search-btn').removeClass('active');
    $('#tel1').removeClass('active');
    $('#search-btn').next().removeClass('active');
  });

  //2023-04-24  有修改
  $('body').on(
    'click',
    '#city-list, #search-btn,#search-div input',
    function (e) {
      e.stopPropagation(); //阻止冒泡
    }
  );

  $('body').on('click', '#city-list li', function () {
    var currentcity = $(this).text();
    var province = $(this).data('province');
    var city = $(this).data('city');
    var county = $(this).data('county');

    $.cookie('currentcity', currentcity);
    $.cookie('province', province);
    $.cookie('city', city);
    $.cookie('county', county);
    //var ss = $.cookie('city');
    $('#city-value').text(currentcity);
    $('#city-list li').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  //join

  //2023-04-26
  function joinbox1item() {
    if ($(window).width() > 768) {
      $('.join-box1 .tbody .item').niceScroll({
        cursorwidth: '5px',
        cursorborder: 'none',
        background: 'none',
        cursorcolor: '#68b548',
        autohidemode: false,
        cursorborderradius: '0px',
      });
    } else {
      try {
        $('.join-box1 .tbody .item').getNiceScroll().remove();
      } catch (e) {}
    }
  }
  joinbox1item();
  $(window).resize(function () {
    joinbox1item();
  });

  // var joinswiper = new Swiper('.join-box1 .swiper-bg .swiper', {
  //   spaceBetween: 10,
  //   effect: 'fade',
  //   navigation: {
  //     nextEl: '.join-box1  .swiper-bg .swiper-button-next',
  //     prevEl: '.join-box1 .swiper-bg .swiper-button-prev',
  //   },
  // });
  // var joinswiper2 = new Swiper('.join-box1 .swiper1 .swiper', {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: '.join-box1  .swiper1 .swiper-button-next',
  //     prevEl: '.join-box1 .swiper1 .swiper-button-prev',
  //   },
  //   controller: {
  //     control: joinswiper,
  //   },
  //   on: {
  //     init: function (swiper) {
  //       //Swiper初始化了
  //       $('.join-box1 .swiper1 .item').eq(this.activeIndex).niceScroll({
  //         cursorwidth: '5px',
  //         cursorborder: 'none',
  //         background: 'none',
  //         cursorcolor: '#68b548',
  //         autohidemode: false,
  //         cursorborderradius: '0px',
  //       });
  //       this.emit('transitionEnd'); //在初始化时触发一次transitionEnd事件，需要先设置transitionEnd
  //     },
  //     transitionStart: function () {
  //       $('.join-box1 .swiper1 .item').getNiceScroll().remove();
  //     },
  //     transitionEnd: function () {
  //       $('.join-box1 .swiper1 .item').eq(this.activeIndex).niceScroll({
  //         cursorwidth: '5px',
  //         cursorborder: 'none',
  //         background: 'none',
  //         cursorcolor: '#68b548',
  //         autohidemode: false,
  //         cursorborderradius: '0px',
  //       });
  //     },
  //   },
  // });
  // $('.join-box1  .swiper1 .item').hover(
  //   function () {
  //     $(this).niceScroll({
  //       cursorwidth: '5px',
  //       cursorborder: 'none',
  //       background: 'none',
  //       cursorcolor: '#68b548',
  //       autohidemode: true,
  //       cursorborderradius: '0px',
  //     });
  //   },
  //   function () {
  //     $(this).getNiceScroll().remove();
  //   }
  // );

  // $('#join-list .item').hover(function () {
  //   $('#join-list .item').removeClass('active');
  //   $(this).addClass('active');
  //   var index = $(this).index();
  //   joinswiper2.slideTo(index, 1000, false);
  // });

  $('body').on('click', '#join-list2 .item', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  });
  $('body').on('click', '#join-list2 .item-desc', function (e) {
    e.stopPropagation(); //阻止冒泡
  });

  //about
  //2023-04-25
  // $('.about-box1 .num').each(function () {
  //   var _thas = $(this);
  //   setTimeout(function () {
  //     countup2(_thas.find('.no'));
  //   }, 300);
  // });

  var aboutswiper1 = new Swiper(
    '.about-box1-2 .swiper1 .swiper1-item-0 .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .swiper1 .swiper1-item-0 .swiper-button-next',
        prevEl: '.about-box1-2 .swiper1 .swiper1-item-0 .swiper-button-prev',
      },
    }
  );
  var aboutswiper1s = new Swiper(
    '.about-box1-2 .list .swiper1-item-0s .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .list .swiper1-item-0s .swiper-button-next',
        prevEl: '.about-box1-2 .list .swiper1-item-0s .swiper-button-prev',
      },
    }
  );
  var aboutswiper2 = new Swiper(
    '.about-box1-2 .swiper1 .swiper1-item-1 .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .swiper1 .swiper1-item-1 .swiper-button-next',
        prevEl: '.about-box1-2 .swiper1 .swiper1-item-1 .swiper-button-prev',
      },
    }
  );
  var aboutswiper2s = new Swiper(
    '.about-box1-2 .list .swiper1-item-1s .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .list .swiper1-item-1s .swiper-button-next',
        prevEl: '.about-box1-2 .list .swiper1-item-1s .swiper-button-prev',
      },
    }
  );
  var aboutswiper3 = new Swiper(
    '.about-box1-2 .swiper1 .swiper1-item-2 .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .swiper1 .swiper1-item-2 .swiper-button-next',
        prevEl: '.about-box1-2 .swiper1 .swiper1-item-2 .swiper-button-prev',
      },
    }
  );
  var aboutswiper3s = new Swiper(
    '.about-box1-2 .list .swiper1-item-2s .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .list .swiper1-item-2s .swiper-button-next',
        prevEl: '.about-box1-2 .list .swiper1-item-2s .swiper-button-prev',
      },
    }
  );
  var aboutswiper4 = new Swiper(
    '.about-box1-2 .swiper1 .swiper1-item-3 .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .swiper1 .swiper1-item-3 .swiper-button-next',
        prevEl: '.about-box1-2 .swiper1 .swiper1-item-3 .swiper-button-prev',
      },
    }
  );
  var aboutswiper4s = new Swiper(
    '.about-box1-2 .list .swiper1-item-3s .swiper',
    {
      spaceBetween: 10,
      navigation: {
        nextEl: '.about-box1-2 .list .swiper1-item-3s .swiper-button-next',
        prevEl: '.about-box1-2 .list .swiper1-item-3s .swiper-button-prev',
      },
    }
  );
  $('#about-box1-2-list .item').hover(function () {
    var index = $(this).index();
    $('#about-box1-2-list .item').removeClass('active');
    $(this).addClass('active');
    $('#about-box1-2-list-swiper .swiper1-item').removeClass('active');
    $('#about-box1-2-list-swiper .swiper1-item')
      .eq(index / 2)
      .addClass('active');
  });

  //2023-04-26
  var aboutswiper12 = new Swiper('.about-box1-3 .swiper1 .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.about-box1-3 .swiper1  .swiper-button-next',
      prevEl: '.about-box1-3 .swiper1 .swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  //2023-04-24
  $('body').on('click', '#search-btn', function () {
    $('#tel1').addClass('active');
    $(this).addClass('active');
    $(this).next().addClass('active');
  });
  $('body').on('click', '#search-div .layui-btn', function (e) {
    //搜索事件
    e.stopPropagation(); //阻止冒泡
  });

  $('#navs>ul>li ').each(function () {
    if ($(this).find('ul').length > 0) {
      //有下级分类
      $(this).append('<span class="navs-open-btn"></span>');
    }
  });

  $('body').on('click', '.navs-open-btn', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      var parent = $(this).parents('.navs');
      parent.find('li').removeClass('active');
    } else {
      $(this).addClass('active');
      var parent = $(this).parents('.navs');
      parent.find('li').removeClass('active');
      $(this).parents('li').addClass('active');
    }
  });

  $('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  //2023-04-26
  $('body').on('click', '#wbfx', function () {
    var ftit = document.title;
    var lk = '';
    window.open(
      'http://service.weibo.com/share/share.php?url=' +
        document.location.href +
        '?sharesource=weibo&title=' +
        ftit +
        '&pic=' +
        lk +
        '&appkey=2706825840'
    );
    return false;
  });

  //2023-04-27
  var swiperindex6 = new Swiper('.index-box6 .swiper1 .swiper', {
    pagination: {
      el: '.index-box6 .swiper1 .swiper-pagination',
    },
  });

  //2023-04-28
  $('body').on('click', '.js-show-tips-btn', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().prev('.tips').removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).parent().prev('.tips').addClass('active');
    }
    return false;
  });
});
