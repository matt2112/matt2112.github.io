$(document).ready(function () {
    
    // Cycle through fixed background images on body
    $.backstretch([
        "img/bg/beach.jpeg",
        "img/bg/britmuseum.jpeg",
        "img/bg/city1.jpeg",
        "img/bg/lake.jpeg",
        "img/bg/london1.jpeg",
        "img/bg/mountains1.jpeg",
        "img/bg/mountains2.jpeg",
        "img/bg/natmuseum.jpeg"
        ], {
        fade: 1500,
        duration: 4000
    });

    // Fade in summary text
    $('#summary').delay(200).fadeIn(1500);

    // Slide featured projects in from bottom
    $('#fp-inner-container').animate({
        marginTop: "-=500px"
    }, 1200);

    // Close menu when item clicked.
    $('.nav-item').on('click', function (e) {
        $('#collapsingNavbar').collapse('hide');
    });

    // Smooth page scrolling using jQuery Easing plugin
    $('.nav-link').on('click', function (event) {
        var $anchor = $(this).attr('href');
        $('body').animate({
            // offset height of navbar
            scrollTop: $($anchor).offset().top - 53
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    // Fade in other projects when opened
    var opclicked = false;
    $('#op-header').on('click', function () {
        if (!opclicked) {
            $('#collapse').fadeIn(1000);
            opclicked = true;
        } else {
            $('#collapse').fadeOut(500);
            opclicked = false;
        }
    });
});