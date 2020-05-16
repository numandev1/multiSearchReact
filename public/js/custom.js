/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

window.bioMp = function(el, options) {
    // Private
    var front = {width: 428, height: 889, ratio: (428 / 889)},
        side = {width: 302, height: 889, ratio: (302 / 889)};

    // Options
    var options = options || {},
        url = setOption(options.url, ''),
        view = setOption(options.view, 'front'),
        image = setOption(options.image, ''),
        scale = setOption(options.scale, 0),
        width = setOption(options.width, 0),
        height = setOption(options.height, 0);

    function setOption(option, _default) {
        return (typeof option === 'undefined') ? _default : option;
    }

    function setSizes() {
        var selView = (view == 'front') ? front : side;

        if(scale != 0) {
            width = (selView.width * scale);
            height = (selView.height * scale);
            return;
        }

        if(width != 0) {
            scale = (width / selView.width);
            height = (width / selView.ratio);
            return;
        }

        if(height != 0) {
            scale = (height / selView.height);
            width = (height * selView.ratio);
            return;
        }

        scale = 1;
        width = selView.width;
        height = selView.height;
    }

    function create() {
        // Set view dimensions
        var selView = (view == 'front') ? front : side;

        // Set scrollbar CSS
        var css = document.createTextNode(
            '.bio-mp-screen::-webkit-scrollbar {width: 6px; height: 6px;}' +
            '.bio-mp-screen::-webkit-scrollbar-track {background: none; -webkit-border-radius: 10px; border-radius: 10px;}' +
            '.bio-mp-screen::-webkit-scrollbar-thumb {-webkit-border-radius: 10px; border-radius: 10px; background: #777;}' +
            '.bio-mp-screen::-webkit-scrollbar-thumb:window-inactive {background: #777;}'
        );

        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(css);

        // Add phone div
        var phone = document.createElement('div');
        el.appendChild(phone);

        // Add phone image
        var phoneImage = document.createElement('img');
        phoneImage.src = image;
        phone.appendChild(phoneImage);

        // Add iframe
        var iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = 'bio-mp-screen';
        phone.appendChild(iframe);

        // Add CSS
        var wrapCss = 'width: ' + width + 'px; height: ' + height + 'px; overflow: hidden; transform-origin: 0 0 0;';
        var phoneCss = 'position: relative; top: 0px; left: 0px; width: ' + selView.width + 'px; height: ' + selView.height + 'px; background: none; -webkit-transform-origin: 0 0 0; -moz-transform-origin: 0 0 0; -ms-transform-origin: 0 0 0; -o-transform-origin: 0 0 0; transform-origin: 0 0 0; -webkit-transform: scale(' + scale + '); -moz-transform: scale(' + scale + '); -ms-transform: scale(' + scale + '); -o-transform: scale(' + scale + '); transform: scale(' + scale + ');';
        var phoneImageCss = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';

        if(view == 'front')
            var screenCss = 'position: absolute; top: 109px; left: 26.5px; width: 375px; height: 669px; border: 0;';
        else if(view == 'left')
            var screenCss = 'position: absolute; top: 135px; left: -60px; width: 375px; height: 669px; border: 0; -webkit-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -moz-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -ms-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -o-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);';
        else
            var screenCss = 'position: absolute; top: 135px; left: -13px; width: 375px; height: 669px; border: 0; -webkit-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -moz-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -ms-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -o-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);';

        el.style.cssText += wrapCss;
        phone.style.cssText = phoneCss;
        phoneImage.style.cssText = phoneImageCss;
        iframe.style.cssText = screenCss;

        // Add scrollbar CSS above the wrap
        el.parentNode.insertBefore(style, el);
    }

    // Init
    setSizes();
    create();
}


bioMp(document.getElementById('preview'), {
    url: '../Entertainer Cuckoo (ALJ)/index.html',
    view: 'front',
    image: 'images/iphone6_front_black.png',
    scale: 0.7
});

// (function($) {
//     $.fn.jPushMenu = function(customOptions) {
//         var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
//
//         $('body').addClass(o.pushBodyClass);
//
//         // Add class to toggler
//         $(this).addClass('jPushMenuBtn');
//
//         $(this).click(function(e) {
//             e.stopPropagation();
//
//             var target     = '',
//                 push_direction = '';
//
//             // Determine menu and push direction
//             if ($(this).is('.' + o.showLeftClass)) {
//                 target         = '.cbp-spmenu-left';
//                 push_direction = 'toright';
//             }
//             else if ($(this).is('.' + o.showRightClass)) {
//                 target         = '.cbp-spmenu-right';
//                 push_direction = 'toleft';
//             }
//             else if ($(this).is('.' + o.showTopClass)) {
//                 target = '.cbp-spmenu-top';
//             }
//             else if ($(this).is('.' + o.showBottomClass)) {
//                 target = '.cbp-spmenu-bottom';
//             }
//
//             if (target == '') {
//                 return;
//             }
//
//             $(this).toggleClass(o.activeClass);
//             $(target).toggleClass(o.menuOpenClass);
//
//             if ($(this).is('.' + o.pushBodyClass) && push_direction != '') {
//                 $('body').toggleClass(o.pushBodyClass + '-' + push_direction);
//             }
//
//             // Disable all other buttons
//             $('.jPushMenuBtn').not($(this)).toggleClass('disabled');
//
//             return;
//         });
//
//         var jPushMenu = {
//             close: function (o) {
//                 $('.jPushMenuBtn,body,.cbp-spmenu')
//                     .removeClass('disabled ' + o.activeClass + ' ' + o.menuOpenClass + ' ' + o.pushBodyClass + '-toleft ' + o.pushBodyClass + '-toright');
//             }
//         }
//
//         // Close menu on clicking outside menu
//         if (o.closeOnClickOutside) {
//             $('.projects').click(function() {
//                 jPushMenu.close(o);
//             });
//         }
//
//         // Close menu on clicking menu link
//         if (o.closeOnClickLink) {
//             $('.edit-nav .close').on('click',function() {
//                 jPushMenu.close(o);
//             });
//         }
//     };
//
//     /*
//      * In case you want to customize class name,
//      * do not directly edit here, use function parameter when call jPushMenu.
//      */
//     $.fn.jPushMenu.defaultOptions = {
//         pushBodyClass      : 'push-body',
//         showLeftClass      : 'menu-left',
//         showRightClass     : 'menu-right',
//         showTopClass       : 'menu-top',
//         showBottomClass    : 'menu-bottom',
//         activeClass        : 'menu-active',
//         menuOpenClass      : 'menu-open',
//         closeOnClickOutside: true,
//         closeOnClickLink   : true
//     };
// })(jQuery);


jQuery(document).ready(function($) {
    $('.toggle-menu').jPushMenu();
});

jQuery(function($) {
    $.fn.dashboard = function(args) {
        var defaults = {
            width: 768,
            sidebar: {
                collapsedClass: 'sidebar-collapsed',
                fixedClass: 'sidebar-fixed',
                beforeCollapse: function() {},
                afterCollapse: function() {},
            }
        };
        var settings = $.extend(true, defaults, args);

        init();

        function init() {
            $('[data-toggle-sidebar]').click(function(e) {
                e.preventDefault();
                toggleSidebar();
            });

            $('[data-toggle-fixed]').click(function(e) {
                e.preventDefault();
                toggleFixed();
            });

            $(window).bind('load resize', function() {
                width = window.innerWidth;

                if (width < settings.width)
                    collapseSidebar();
            });
        };

        function toggleSidebar() {
            if ($('body').hasClass(settings.sidebar.collapsedClass)) {
                expandSidebar();
            } else {
                collapseSidebar();
            }
        }

        function collapseSidebar() {
            settings.sidebar.beforeCollapse();
            $('body').addClass(settings.sidebar.collapsedClass);
            settings.sidebar.afterCollapse();
        }

        function expandSidebar() {
            $('body').removeClass(settings.sidebar.collapsedClass);
        }

        function toggleFixed() {
            $('body').toggleClass(settings.sidebar.fixedClass);
        }
    };
});

jQuery(function($) {
    var args = {
        sidebar: {
            beforeCollapse: function() {
                $('.main-sidebar .collapse').collapse('hide');
            }
        }
    };
    $('body').dashboard(args);
});


// zeynepjs initialization for demo
$(function() {
    // init zeynepjs
    var zeynep = $('.zeynep').zeynep({
        onClosed: function() {
            // enable main wrapper element clicks on any its children element
            $("body main")

            console.log('the side menu is closed.');
        },
        onOpened: function() {
            // disable main wrapper element clicks on any its children element
            $("body main").attr("style", "pointer-events: none;");

            console.log('the side menu is opened.');
        }
    });

    // handle zeynep overlay click
    $(".zeynep-overlay").click(function() {
        zeynep.close();
    });

    // open side menu if the button is clicked
    $(".btn-open").click(function() {
        if ($("html").hasClass("zeynep-opened")) {
            zeynep.close();
        } else {
            zeynep.open();
        }
    });
});


var $gallery = $('.our_favourites_slider');
var slideCount = null;

$(document).ready(function() {
    $gallery.slick({
        speed: 250,
        swipe: true,
        infinite: false,
        swipeToSlide: true,
        autoplay: false,
        prevArrow: $(".pp2"),
        nextArrow: $(".nn2"),
        touchThreshold: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

});


$gallery.on('init', function(event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
    var $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1);
}

if (document.documentElement.clientWidth < 900) {
    jQuery('.not-signin').appendTo('#signin-res');
}
$('.checkList li').click(function() {
    $(this).toggleClass('selected');
});



if (document.documentElement.clientWidth < 900) {
    jQuery('.slick-prev').appendTo('#button-wrap');
}