$(document).ready(function(){
    var numSlides;

    if ($( window ).width() > 991) {
        numSlides = 3;
    } else if ($( window ).width() > 767) {
        numSlides = 2;
    } else {
        numSlides = 1;
    }

    $('.home-page-carousel').slick({
        infinite: true,
        slidesToShow: numSlides,
        slidesToScroll: numSlides,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='/assets/img/icons/paging-prev-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='/assets/img/icons/paging-next-arrow.png'>"
    });
});