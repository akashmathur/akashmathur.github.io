$(document).ready(function() {
    
    
    
function hoverTouchUnstick() {
  // Check if the device supports touch events
  if('ontouchstart' in document.documentElement) {
    // Loop through each stylesheet
    for(var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
      var sheet = document.styleSheets[sheetI];
      // Verify if cssRules exists in sheet
      if(sheet.cssRules) {
        // Loop through each rule in sheet
        for(var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
          var rule = sheet.cssRules[ruleI];
          // Verify rule has selector text
          if(rule.selectorText) {
            // Replace hover psuedo-class with active psuedo-class
            rule.selectorText = rule.selectorText.replace(":hover", ":active");
          }
        }
      }
    }
  }
}
    
    
    
    // code to hover on both link and picture mouseovers
    // this makes it look like the same entity being clicked
    $(".pic-GIS-hover").hover(function() {
        $(".para-GIS-hover").css("opacity", "0.60");
        $(".pic-GIS-hover").css("opacity", "0.60");
    }, function() {
        $(".para-GIS-hover").css("opacity", "1.0");
        $(".pic-GIS-hover").css("opacity", "1.0");
    });

    $(".para-GIS-hover").hover(function() {
        $(".pic-GIS-hover").css("opacity", "0.60");
        $(".para-GIS-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-GIS-hover").css("opacity", "1.0");
        $(".para-GIS-hover").css("opacity", "1.0");
    });

    $(".pic-lego-hover").hover(function() {
        $(".para-lego-hover").css("opacity", "0.60");
        $(".pic-lego-hover").css("opacity", "0.60");
    }, function() {
        $(".para-lego-hover").css("opacity", "1.0");
        $(".pic-lego-hover").css("opacity", "1.0");
    });

    $(".para-lego-hover").hover(function() {
        $(".pic-lego-hover").css("opacity", "0.60");
        $(".para-lego-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-lego-hover").css("opacity", "1.0");
        $(".para-lego-hover").css("opacity", "1.0");
    });

    $(".pic-arduino-hover").hover(function() {
        $(".para-arduino-hover").css("opacity", "0.60");
        $(".pic-arduino-hover").css("opacity", "0.60");
    }, function() {
        $(".para-arduino-hover").css("opacity", "1.0");
        $(".pic-arduino-hover").css("opacity", "1.0");
    });

    $(".para-arduino-hover").hover(function() {
        $(".pic-arduino-hover").css("opacity", "0.60");
        $(".para-arduino-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-arduino-hover").css("opacity", "1.0");
        $(".para-arduino-hover").css("opacity", "1.0");
    });

    $(".pic-website-hover").hover(function() {
        $(".para-website-hover").css("opacity", "0.60");
        $(".pic-website-hover").css("opacity", "0.60");
    }, function() {
        $(".para-website-hover").css("opacity", "1.0");
        $(".pic-website-hover").css("opacity", "1.0");
    });

    $(".para-website-hover").hover(function() {
        $(".pic-website-hover").css("opacity", "0.60");
        $(".para-website-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-website-hover").css("opacity", "1.0");
        $(".para-website-hover").css("opacity", "1.0");
    });
    
     $(".pic-c51-hover").hover(function() {
        $(".para-c51-hover").css("opacity", "0.60");
        $(".pic-c51-hover").css("opacity", "0.60");
    }, function() {
        $(".para-c51-hover").css("opacity", "1.0");
        $(".pic-c51-hover").css("opacity", "1.0");
    });

    $(".para-c51-hover").hover(function() {
        $(".pic-c51-hover").css("opacity", "0.60");
        $(".para-c51-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-c51-hover").css("opacity", "1.0");
        $(".para-c51-hover").css("opacity", "1.0");
    });
    
     $(".pic-raingrid-hover").hover(function() {
        $(".para-raingrid-hover").css("opacity", "0.60");
        $(".pic-raingrid-hover").css("opacity", "0.60");
    }, function() {
        $(".para-raingrid-hover").css("opacity", "1.0");
        $(".pic-raingrid-hover").css("opacity", "1.0");
    });

    $(".para-raingrid-hover").hover(function() {
        $(".pic-raingrid-hover").css("opacity", "0.60");
        $(".para-raingrid-hover").css("opacity", "0.60");
    }, function() {
        $(".pic-raingrid-hover").css("opacity", "1.0");
        $(".para-raingrid-hover").css("opacity", "1.0");
    });

});

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