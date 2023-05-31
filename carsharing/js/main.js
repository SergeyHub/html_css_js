$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slideToShow: 4
        //slidesToScroll: 1
    });

    //$('.menu__btn').click(function(){
    //    $('.menu__list').toggleClass('menu__list--active');
    //});
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

});