$(document).ready(function(){
    var numSlides;

    if ($( window ).width() > 991) {
        numSlides = 3;
    } else if ($( window ).width() > 700) {
        numSlides = 2;
    } else if ($( window ).width() > 500) {
        numSlides = 1;
    } else {
        numSlides = 1;
    }

    $('.home-page-carousel').slick({
        infinite: true,
        slidesToShow: numSlides,
        slidesToScroll: numSlides
    });
});