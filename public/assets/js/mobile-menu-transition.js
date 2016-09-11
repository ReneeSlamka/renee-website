$(document).ready(function() {
    $("#mobile-menu-button").click(function(){
        var $navbar = $(".site-links-section");

        if ($navbar.css("display") == "none") {
            $navbar.css({"display": "block"});
            $("#top-navbar-mobile-linebreak").css({"display": "block"});
            $(".top-navbar-container").css({"height": "296px"});
            $(".top-navbar-underimage").css({"height": "296px"});
        } else {
            $navbar.css({"display":"none"});
            $("#top-navbar-mobile-linebreak").css({"display": "none"});
            $(".top-navbar-container").css({"height": "80px"});
            $(".top-navbar-underimage").css({"height": "80px"});
        }
    });
});
