
$(document).ready(function () {

    /* ----------- features carousel  ----------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });

    /*    app screenshorts carousel        */
    $('.screenshorts-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout: 3000,
        autoWiidth: true,

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:true
            }
        }
    });

    /*    testimonials carousel        */
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout: 3000,
        autoWiidth: true,

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });

    /*---------- team carousel --------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout: 3000,
        autoWiidth: true,

        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    });

    /*--------   page scrolling  ScrollIt --------------*/
    $.scrollIt({
        topOffset: -50
    });

    /*------------- navbar collapse ------------------*/
    $(".nav-link").on("click",function () {
        $(".navbar-collapse").collapse("hide");
    });

    /*---- toggle theme - light and dark mode -----*/

    function toggleTheme(){
        if(localStorage.getItem("theme") !== null){
            if(localStorage.getItem("theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
        }
        updateIcone();
    }
    toggleTheme();

    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("theme","dark");
        }
        else{
            localStorage.setItem("theme","light");
        }
        updateIcone();
    });

    function updateIcone() {
        if($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }

});