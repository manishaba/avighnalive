document.addEventListener("DOMContentLoaded", function() {
    $("#header").load("../../components/Header/header.html");
    $("#footer").load("../../components/Footer/footer.html");
    $("#query").load("../../components/Query/query.html");
    
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
    $('.topics a').on('click', function() {
        //selecting the syllabus class
        $select = $('<div class="syllabus"></div>');
        $(this).parents('li').each(function(n, li) {
            //Adding / to each anchor tag of li
            $select.prepend(' / ',$(li).children('a').clone());
        });
        // Displaying the hierarchical order of pages.
        $('.display').html(
        $select.prepend('<a href="#syllabus">Home</a>'));
    })
});