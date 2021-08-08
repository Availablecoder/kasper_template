$(document).ready(function () {
    $(".preloader").css({
        Transform: "scaleX(0)"
    });
    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');
    // ---------------
    // shuffle 
    var mixer = mixitup('.suffle-container');

    $("ul.shuffle li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // -------------
    // animation on reacting he section 
    var wow = new WOW();
    wow.init();
    // -----------------------
    // sliders 
    var slider = tns({
        container: '.landing-slider',
        "items": 1,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400 ,
        autoplay: true,
        navPosition : "bottom",
        autoplayButtonOutput : false ,
        controls : true , 
        nav : true,
        preventScrollOnTouch : "auto"
    });
    var slider_2 = tns({
        container: '.skills-slider',
        "items": 2,
        "slideBy": "page",
        "mouseDrag": true,
        "swipeAngle": false,
        "speed": 400 ,
        axis : "vertical",
        autoplay: true,
        navPosition : "bottom",
        autoplayButtonOutput : false ,
        controls : false , 
        nav : true
    });
    // -------------

    // Header nav responsive
    $(window).resize(function() {
        if ($(window).width() > 767) {
            if ($("header nav ul").hasClass("mobile-menu")) {
                $("header nav ul").removeClass("mobile-menu");
                $(".toggle-menu").removeClass("fa-times");
                $(".toggle-menu").addClass("fa-bars");
            }
        }
    });
    $(".toggle-menu").click(function () {
        $(this).toggleClass("fa-bars fa-times")
        $(this).next("ul").toggleClass("mobile-menu");
    });

    $("header nav li a").click(function () {
        $(this).addClass("active")
        .parent("li").siblings().find("a").removeClass("active")
    });
    // -----------------------
    $(".scroll-top").click(function () {
        dur = $("body , html").scrollTop();
        $("body , html").animate({scrollTop : 0} , dur / 2)
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1200) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
        if ($(window).scrollTop() >= ($(".skills").offset().top - 300)) {
            $(".skills .prog-holder div.prog span").each(function () {
                $(this).css({
                    overflow: "unset",
                    width :  $(this).attr('data-progress')
                })
            });
        }
        if ($(window).scrollTop() >= $(".number").offset().top - 300) {
            // Counters 
            var countdown_1 = setInterval(function(){

                var counter_1 = parseInt($("#count-1236").html());

                if (counter_1 !== 1236) {
                    $("#count-1236").html(counter_1 + 1);
                } else {
            
                    clearInterval(countdown_1);
                }

            }, 20 );

            var countdown_2 = setInterval(function(){

                var counter_2 = parseInt($("#count-256").html());

                if (counter_2 !== 256) {
                    $("#count-256").html(counter_2 + 1);
                } else {
            
                    clearInterval(countdown_2);
                }

            }, 70 );

            var countdown_3 = setInterval(function(){

                var counter_3 = parseInt($("#count-1743").html());

                if (counter_3 !== 1743) {
                    $("#count-1743").html(counter_3 + 1);
                } else {
            
                    clearInterval(countdown_3);
                }

            }, 50 );

            var countdown_4 = setInterval(function(){

                var counter_4 = parseInt($("#count-17").html());

                if (counter_4 !== 17) {
                    $("#count-17").html(counter_4 + 1);
                } else {
            
                    clearInterval(countdown_4);
                }

            }, 500 );
            // ------------------
        }
    });
});