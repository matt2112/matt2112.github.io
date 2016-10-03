$(document).ready(function() {
    
    // Fade in summary text
    $('#summary').hide(0).delay(200).fadeIn(1500);
    
    // Slide featured projects in from bottom
    $('#fp-inner-container').animate({marginTop:"-=500px"}, 1200);
                  
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
    $('#op-header').on('click', function() {
        if (!opclicked) {
            $('#collapse').fadeIn(1000);
            opclicked = true;
        } else {
            $('#collapse').fadeOut(500);
            opclicked = false;
        }
    });
});