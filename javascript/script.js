//$(document).ready(function() {
//    $('html, body').animate({
//        scrollTop: $("#body").offset().top
//    }, 1000);
//});
$(".homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#body").offset().top
    }, 1000);
});

$(".aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$(".portfolioButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

$(".contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);

    $("#contact-animation").addClass("animated");
    $("#contact-animation").addClass("tada");
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




////Stack Overflow solution to remove hover on touch devices
//function hasTouch() {
//    return 'ontouchstart' in document.documentElement
//           || navigator.maxTouchPoints > 0
//           || navigator.msMaxTouchPoints > 0;
//}
//
//if (hasTouch()) { // remove all :hover stylesheets
//    try { // prevent exception on browsers not supporting DOM styleSheets properly
//        for (var si in document.styleSheets) {
//            var styleSheet = document.styleSheets[si];
//            if (!styleSheet.rules) continue;
//
//            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
//                if (!styleSheet.rules[ri].selectorText) continue;
//
//                if (styleSheet.rules[ri].selectorText.match(':hover')) {
//                    styleSheet.deleteRule(ri);
//                }
//            }
//        }
//    } catch (ex) {}
//}
//
//



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