function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);
}


$(document).ready(function() {
    footerAlign();
});

$(window).resize(function() {
    footerAlign();
});


$("#all-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 1000);
});

$("#lectures-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 1000);
});

$("#notes-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 1000);
});

$("#tm-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 1000);
});

$("#miscellaneous-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#content-resource").offset().top
    }, 1000);
});



new TypeIt("#banner-text", {
  speed: 50,
  deleteSpeed: 80,
  waitUntilVisible: true,
})
.type("Work From Home this Fall Semester.", {delay: 400})
.move(-30)
.delete(4)
.type('Study')
.move('END')
.go();

function showAll() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("all-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("lectures-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("miscellaneous-btn");
    inactiveButton.classList.remove("active-btn");



    var lectureCard, i;
    lectureCard = document.querySelectorAll(".lectures");
    for (i = 0; i < lectureCard.length; i++) {
        if (lectureCard[i].style.display === "none") {
            lectureCard[i].style.display = "block";
        }
    }

    notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        if (notesCard[i].style.display === "none") {
            notesCard[i].style.display = "block";
        }
    }

    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        if (tmCard[i].style.display === "none") {
            tmCard[i].style.display = "block";
        }
    }

    miscellaneousCard = document.querySelectorAll(".miscellaneous");
    for (i = 0; i < miscellaneousCard.length; i++) {
        if (miscellaneousCard[i].style.display === "none") {
            miscellaneousCard[i].style.display = "block";
        }
    }
}

function showLecture() {


    var activeButton, inactiveButton;

    activeButton = document.getElementById("lectures-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("miscellaneous-btn");
    inactiveButton.classList.remove("active-btn");

    var lectureCard, i;
    lectureCard = document.querySelectorAll(".lectures");

    for (i = 0; i < lectureCard.length; i++) {

        if (lectureCard[i].style.display === "none") {
            lectureCard[i].style.display = "block";
        }
    }

    notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    miscellaneousCard = document.querySelectorAll(".miscellaneous");
    for (i = 0; i < miscellaneousCard.length; i++) {
        miscellaneousCard[i].style.display = "none";
    }
}

function showNotes() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("notes-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("lectures-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("miscellaneous-btn");
    inactiveButton.classList.remove("active-btn");

    var notesCard, i;
    notesCard = document.querySelectorAll(".notes");

    for (i = 0; i < notesCard.length; i++) {

        if (notesCard[i].style.display === "none") {
            notesCard[i].style.display = "block";
        }
    }

    lectureCard = document.querySelectorAll(".lectures");
    for (i = 0; i < lectureCard.length; i++) {
        lectureCard[i].style.display = "none";
    }

    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    miscellaneousCard = document.querySelectorAll(".miscellaneous");
    for (i = 0; i < miscellaneousCard.length; i++) {
        miscellaneousCard[i].style.display = "none";
    }
}

function showTimeManagement() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("tm-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("lectures-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("miscellaneous-btn");
    inactiveButton.classList.remove("active-btn");

    var tmCard, i;
    tmCard = document.querySelectorAll(".tm");

    for (i = 0; i < tmCard.length; i++) {

        if (tmCard[i].style.display === "none") {
            tmCard[i].style.display = "block";
        }
    }

    notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }

    lectureCard = document.querySelectorAll(".lectures");
    for (i = 0; i < lectureCard.length; i++) {
        lectureCard[i].style.display = "none";
    }

    miscellaneousCard = document.querySelectorAll(".miscellaneous");
    for (i = 0; i < miscellaneousCard.length; i++) {
        miscellaneousCard[i].style.display = "none";
    }
}

function showMiscellaneous() {

    var activeButton, inactiveButton;

    activeButton = document.getElementById("miscellaneous-btn");
    activeButton.classList.add("active-btn");

    inactiveButton = document.getElementById("lectures-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("notes-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("tm-btn");
    inactiveButton.classList.remove("active-btn");

    inactiveButton = document.getElementById("all-btn");
    inactiveButton.classList.remove("active-btn");

    var miscellaneousCard, i;
    miscellaneousCard = document.querySelectorAll(".miscellaneous");

    for (i = 0; i < miscellaneousCard.length; i++) {

        if (miscellaneousCard[i].style.display === "none") {
            miscellaneousCard[i].style.display = "block";
        }
    }

    lectureCard = document.querySelectorAll(".lectures");
    for (i = 0; i < lectureCard.length; i++) {
        lectureCard[i].style.display = "none";
    }

    tmCard = document.querySelectorAll(".tm");
    for (i = 0; i < tmCard.length; i++) {
        tmCard[i].style.display = "none";
    }

    notesCard = document.querySelectorAll(".notes");
    for (i = 0; i < notesCard.length; i++) {
        notesCard[i].style.display = "none";
    }
}


window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}