$(document).ready(function() {

    /*******************************************************************************************************************
    *********************** init
    *******************************************************************************************************************/

    setInterval(function() {
        $('.slider-wrap').css('opacity', 1)
    }, 500);

    /*******************************************************************************************************************
     *********************** sliders
     *******************************************************************************************************************/

    $('.slider-services').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.control-services',
        prevArrow: '.control-services-prev',
        nextArrow: '.control-services-next',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-price').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.control-price',
        prevArrow: '.control-price-prev',
        nextArrow: '.control-price-next',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        appendArrows: '.control-reviews',
        nextArrow: '.control-reviews-next',
        vertical: true
    });

    $('.slider-specialists').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: '.control-specialists',
        prevArrow: '.control-specialists-prev',
        nextArrow: '.control-specialists-next',
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


});