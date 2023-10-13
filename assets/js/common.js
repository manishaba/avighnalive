document.addEventListener("DOMContentLoaded", function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#footer1").load("footer1.html");
    $("#query").load("query.html");
    $("#query1").load("query1.html");    
    var scrollPositionToShow = 200;
    var scrollUpButton = document.createElement("div");
    scrollUpButton.id = "scrollUp";
    scrollUpButton.style.position = "fixed";
    scrollUpButton.style.bottom = "20px";
    scrollUpButton.style.zIndex = "2147483647";
    scrollUpButton.innerHTML = "<i class='fa fa-angle-up'></i>";
    scrollUpButton.style.display = "none";
    document.body.appendChild(scrollUpButton);
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > scrollPositionToShow) {
            scrollUpButton.style.display = "block";
        }
        else {
            scrollUpButton.style.display = "none";
        }
    });
    scrollUpButton.addEventListener("click", function() {
        scrollToTop();
    });
    function scrollToTop() {
        var currentPosition = window.pageYOffset;
        var step = Math.floor(currentPosition / 20);
        scrollToTopAnimation();
        function scrollToTopAnimation() {
            if (currentPosition > 0) {
                currentPosition -= step;
                window.scrollTo(0, currentPosition);
                requestAnimationFrame(scrollToTopAnimation);
            }
        }
    }
});
$(document).ready(function() {
    function initializeSlider(selector) {
        var slider = $(selector);
        slider.on('init', function(event, slick){
            AOS.init({
                easing: 'ease-out-back',
                offset: 100,
                duration: 1000
            });
        });
        slider.slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            prevArrow: false,
            nextArrow: false,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    initializeSlider('.slider-wrapper-steel-category');
});