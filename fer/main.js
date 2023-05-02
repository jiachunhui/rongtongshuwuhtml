require.config({
  map: {
    '*': {
      css: 'css',
    },
  },
  paths: {
    /*common*/
    jquery: 'lib/jquery-1.10.2',
    imagesloaded: 'lib/imagesloaded.pkgd.min',
    velocity: 'lib/velocity.min',
    'velocity.ui': 'lib/velocity.ui.min',
    /*swiper*/
    swiper: 'lib/swiper/swiper-bundle.min',
    resizend: 'lib/jquery-resizeEnd.min',
    nicescroll: 'lib/jquery.nicescroll.min',

    cookie: 'lib/jquery.cookie',
    /*home*/
    home: 'fan/home',
    index: 'fan/index',
    innovation: 'fan/innovation',

    /*about */

    fancybox: 'lib/fancybox/jquery.fancybox',
    ckplayer: 'lib/ckplayer/js/ckplayer',

    pixi: 'lib/pixi.min',
    /*fullpage*/
    fullpage: 'lib/fullpage/fullPage.min',
    slimscroll: 'lib/fullpage/slimscroll',
    easings: 'lib/fullpage/easings.min',

    anime: 'lib/anime.min',
  },
  shim: {
    swiper: {
      deps: ['jquery', 'css!lib/swiper/swiper-bundle.min'],
    },
    velocity: {
      deps: ['jquery'],
    },
    'velocity-ui': {
      deps: ['velocity'],
    },
    home: {
      deps: ['jquery', 'css!css/animate.min'],
    },
    index: {
      deps: ['jquery', 'css!css/animate.min'],
    },
    innovation: {
      deps: ['jquery', 'css!css/animate.min'],
    },
    easings: {
      deps: ['jquery'],
    },
    fullpage: {
      deps: ['jquery', 'easings', 'slimscroll', 'css!lib/fullpage/fullPage'],
    },
    nicescroll: {
      deps: ['jquery'],
    },
    anime: {
      deps: ['jquery'],
    },
    fancybox: {
      deps: ['jquery', 'css!lib/fancybox/jquery.fancybox.min'],
    },
    ckplayer: {
      deps: ['jquery', 'css!lib/ckplayer/css/ckplayer'],
    },
  },

  urlArgs: 'bust=' + new Date().getTime(),
});

if (_page == 'home') {
  require(['index']);
}
if (_page == 'innovation') {
  require(['innovation']);
} else {
  require(['home']);
}
