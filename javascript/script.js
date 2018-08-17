//$(document).ready(function() {
//    $('html, body').animate({
//        scrollTop: $("#body").offset().top
//    }, 1000);
//});
$(".homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#body").offset().top
    }, 1500);
});

$(".aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
});

$(".portfolioButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1500);
});

$(".contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);

    $("#contact-animation").addClass("animated");
    $("#contact-animation").addClass("tada");
    $("#contact-animation").addClass("delay-1s");
});



$(window).scroll(function() {

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#contact-animation").addClass("animated");
        $("#contact-animation").addClass("tada");
    } else {
        $("#contact-animation").removeClass("animated");
        $("#contact-animation").removeClass("tada");

    }
}).scroll();


//$(window).scroll(function() {
//
//    if ($(this).scrollTop() >= 40%)) {
//        $("#resume").addClass("animated");
//        $("#resume").addClass("tada");
//        $("#resume").addClass("delay-1s");
//
//    } else {
//        $("#resume").removeClass("animated");
//        $("#resume").removeClass("tada");
//        $("#resume").removeClass("delay-1s");
//    }
//});
//