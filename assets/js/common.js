document.addEventListener("DOMContentLoaded", function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#query").load("query.html");

    
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