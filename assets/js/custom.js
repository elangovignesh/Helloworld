(function($) {
    "use strict";

    /*------------------------slider------------------------*/

    jQuery(document).ready(function() {

        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        jQuery('#rev_slider_2').show().revolution({
            parallax: {
                /* type: 'mouse+scroll',*/
                origo: 'slidercenter',
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40,
                    45, 46, 47, 48, 49, 50, 51, 55
                ],
                disable_onmobile: 'on'
            },

            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'auto',
            /* RESPECT ASPECT RATIO */
            minHeight: '500',
            responsiveLevels: [1270, 1024, 778, 480],
            visibilityLevels: [1270, 1024, 778, 480],
            gridwidth: [1270, 1024, 778, 480],
            gridheight: [1120, 780, 860, 720],

            /* basic navigation arrows and bullets */

            /* basic navigation arrows and bullets */
            navigation: {

                arrows: {
                    enable: false,
                    style: "zeus",
                    hide_onleave: false
                },



            }
        });
    });
    /*------------------------slider------------------------*/

    /*--------------owl------------------*/
    $(document).ready(function() {
        $('.three_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            center: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<span class="clearfix prev icon-next"></span>', '<span class="clearfix icon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 1
                },

                1000: {
                    items: 1
                },
                1200: {
                    items: 3
                }
            }
        });
    });


    /*-----------------preloader-----------------*/


    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('.preloader').fadeOut(); // will first fade out the loading animation 
        $('.preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(500);
    });

    /*-----------------preloader-----------------*/

})(window.jQuery);