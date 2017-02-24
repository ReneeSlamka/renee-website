$(document).ready(function() {
    $("#mobile-menu-button").click(function(){
        var $navbar = $("#topNavToggleBlock");

        if ($navbar.css("display") == "none") {
            $navbar.css({"display": "block"});
            $("#top-navbar-mobile-linebreak").css({"display": "block"});
        } else {
            $navbar.css({"display":"none"});
            $("#top-navbar-mobile-linebreak").css({"display": "none"});
        }
    });
});
