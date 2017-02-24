$(document).ready(function() {
    var $grid = $('.grid');
    $grid.isotope({
        // options
        itemSelector: '.grid-item'//,
        //layoutMode: 'fitRows'
    });

// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        //var filterValue = $(this).attr('data-filter');
        //$grid.isotope({ filter: filterValue });
        var selector = $(this).attr('data-filter');
        $grid.isotope({
            filter: selector
        });
        return false;
    });
});