
let index = 0;
const totalWorkItems = (".work-item").length;

$(window).on("load",function () {
    $(".preloader").addClass(("loaded"));
});
//var totalWorkItems1 = document.getElementsByClassName(".work-item");
//console.log("totalWorkItems1= ", totalWorkItems1);
console.log("totalWorkItems = ", (".work-item").length);

$(document).ready(function () {

    // nav toggle
    $(".nav-toggle").click(function () {
       $(".header .nav").slideToggle();
    });
    $(".header .nav a").click(function () {
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });
    // fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed")
        }
        else{
            $(".header").removeClass("fixed");
        }
    });
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes
            // to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // set lightbox img max height
    const wHeight =$(window).height();
    $(".lightbox-img").css("max-height",wHeight+"px");

    // lightbox
    $(".work-item-inner").click(function () {
        index = ($(this).parent(".work-item").index());
        console.log("index = ", index);
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    });
    $(".lightbox .next").click(function () {
        if(index == 0){
            index = totalWorkItems -1;
            console.log("index next = ", index);
        }
        else {
            index--;
            console.log("index next= ", index);
        }
        lightboxSlideShow();
    });

    $(".lightbox .prev").click(function () {
        if(index == totalWorkItems -1){
            index = 0;
        }
        else {
            index++;
        }
        lightboxSlideShow();
    });

    // close lightbox
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

    // close lightbox when clicked outside of img-box
    ///$(".lightbox").click(function(event) {
        //if(($event.target).hasClass("lightbox")){
            //$(this).removeClass("open");
        //}
    //})

});

function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-ccounter").html(totalWorkItems + "/" + (index+1) );

}

