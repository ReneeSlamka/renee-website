var frontEndDevTitle = "Front End Development";
var frontEndDevDescription = "frontend-skill-description-text";
var listProjects = [["blog-board", "Blog Board"], ["personal-website", "Personal Website"],
    ["brewmeister", "Brewmeister"], ["falling-myo", "Falling Myo"], ["tether-car", "Electromagnetic Tether Car"],
    ["telephone-app", "Telephone App"], ["space-invaders", "Space Invaders"]];

var databaseTitle = "Database Design";
var databaseDescription = "databases-skill-description";

var gitTitle = "Git Source Control";
var gitDescription = "git-skill-description";

var backEndDevTitle = "Backend Development";
var backEndDevDescription = "backend-skill-description";

var uiDesignTitle = "UI Design";
var uiDescription = "ui-skill-description";

var androidTitle = "Android Development";
var androidDescription = "android-skill-description";

var embeddedTitle = "Embedded Development";
var embeddedDescription = "embedded-skill-description";


$( document ).ready(function() {
    /* need to make this non conditional to size */
    $("#related-projects-list").append("<li><a href='/" + listProjects[0][0] + "'>" + listProjects[0][1] + "</a></li>");
    $("#related-projects-list").append("<li><a href='/" + listProjects[1][0] + "'>" + listProjects[1][1] + "</a></li>");
    $("#related-projects-list").append("<li><a href='/" + listProjects[2][0] + "'>" + listProjects[2][1] + "</a></li>");
    $("#related-projects-list").append("<li><a href='/" + listProjects[6][0] + "'>" + listProjects[6][1] + "</a></li>");

    if ($( window ).width() > 991) {
        $(".about-skill-badge").click(nonMobileSkillhandler);
    } else {
        var numSlides;
        if ($( window ).width() < 768) {
            numSlides = 1;
        } else {
            numSlides = 3;
            $(".about-skill-badge").click(nonMobileSkillhandler);
        }
        $('.skill-section-mobile-carousel').slick({
            infinite: true,
            slidesToShow: numSlides,
            slidesToScroll: numSlides,
            prevArrow:"<img class='a-left control-c prev slick-prev' src='/assets/img/icons/paging-prev-arrow.png'>",
            nextArrow:"<img class='a-right control-c next slick-next' src='/assets/img/icons/paging-next-arrow.png'>"
        });

        $("img.slick-arrow.slick-next").on( "click", mobileSkillHandler);
        $("img.slick-arrow.slick-prev").on( "click", mobileSkillHandler);
    }
});


function displayBadgeInfo(title, descriptionId, listrelatedProjects) {
    $("#skill-title").html(title);
    var currentVisibleDescription = document.getElementsByClassName("active skill-description-text");
    currentVisibleDescription[0].className = currentVisibleDescription[0]
        .className.replace(/(?:^|\s)active(?!\S)/g, " inactive");

    var nextVisibleDescription = document.getElementById(descriptionId);
    nextVisibleDescription.className = nextVisibleDescription
        .className.replace(/(?:^|\s)inactive(?!\S)/g, " active");

    document.getElementById("related-projects-list").innerHTML = "";
    listrelatedProjects.forEach(function(item) {
        $("#related-projects-list").append("<li><a href='/" + item[0] + "'>" + item[1] + "</a></li>");
    });
}

function matchBadgeLogic(targetElementId) {
    var relatedProjects = [];
    switch (targetElementId) {
        case "databases-badge":
            relatedProjects.push(listProjects[0]);
            relatedProjects.push(listProjects[2]);
            displayBadgeInfo(databaseTitle, databaseDescription, relatedProjects);
            break;
        case "git-badge":
            relatedProjects.push(listProjects[2]);
            relatedProjects.push(listProjects[3]);
            displayBadgeInfo(gitTitle, gitDescription, relatedProjects);
            break;
        case "backend-dev-badge":
            relatedProjects.push(listProjects[0]);
            relatedProjects.push(listProjects[2]);
            displayBadgeInfo(backEndDevTitle, backEndDevDescription, relatedProjects);
            break;
        case "ui-design-badge":
            relatedProjects.push(listProjects[0]);
            relatedProjects.push(listProjects[1]);
            relatedProjects.push(listProjects[2]);
            displayBadgeInfo(uiDesignTitle, uiDescription, relatedProjects);
            break;
        case "android-badge":
            relatedProjects.push(listProjects[3]);
            relatedProjects.push(listProjects[5]);
            displayBadgeInfo(androidTitle, androidDescription, relatedProjects);
            break;
        case "embedded-badge":
            relatedProjects.push(listProjects[4]);
            relatedProjects.push(listProjects[5]);
            displayBadgeInfo(embeddedTitle, embeddedDescription, relatedProjects);
            break;
        case "front-end-dev-badge":
        default:
            relatedProjects.push(listProjects[0]);
            relatedProjects.push(listProjects[1]);
            relatedProjects.push(listProjects[2]);
            relatedProjects.push(listProjects[6]);
            displayBadgeInfo(frontEndDevTitle, frontEndDevDescription, relatedProjects);
            break;
    }
}

function nonMobileSkillhandler(ev) {
    var targetElementId = ev.currentTarget.id;
    matchBadgeLogic(targetElementId)
}


function mobileSkillHandler() {
    var currentActivePanelId = $(".slick-current").attr('id');
    matchBadgeLogic(currentActivePanelId);
}