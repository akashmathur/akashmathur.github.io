$(document).ready(function() {

    //Check if the device supports touch events
    var isMobile = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (isMobile == true) {
        // Loop through each stylesheet
        for (var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
            var sheet = document.styleSheets[sheetI];
            // Verify if cssRules exists in sheet
            if (sheet.cssRules) {
                // Loop through each rule in sheet
                for (var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
                    var rule = sheet.cssRules[ruleI];
                    // Verify rule has selector text
                    if (rule.selectorText) {
                        // Replace hover psuedo-class with active psuedo-class
                        rule.selectorText = rule.selectorText.replace(":hover", ":active");
                    }
                }
            }
        }
    } else {
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

    }




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

new TypeIt("#whoIAm", {
  speed: 85,
  deleteSpeed: 80,
  waitUntilVisible: true,
})
.type("Engineer.", {delay: 1200})
.delete(9)
.type('Designer.', {delay: 1200})
.delete(9)
.type("Product Manager", {delay: 1200})
.move(-15)
.type('Aspiring ')
.move('END')
.type('.')
.move('END')
.go();





