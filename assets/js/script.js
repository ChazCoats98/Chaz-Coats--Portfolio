$(document).ready(function () {
    $(".moreInfoBox").hide();
    $("#job1").hide();
    $("#job2").hide();
    $("#job3").hide();
    $("#job4").hide();
    $("#job5").hide();
    $("#resume3").hide();
    $(".resumeBox").hide();
    $("#projectsIndex").hide();
    $("#resumeIndex").hide();
    $("#contactIndex").hide();
    $("#projectsHeader").hide();
    $("#seeResume").hide();
    $("#seeLanguages").hide();
    $("#resume1").hide();
    $("#resume2").hide();
    $("#lang1").hide();
    $("#lang2").hide();
    $("#lang3").hide();
    $("#lang4").hide();
    $("#lang5").hide();
    $("#hideButton1").hide();
    $("#hideButton2").hide();
    $("#hideButton3").hide();
    $("#hideButton4").hide();
    $("#p1img").hide();
    $("#p2img").hide();
    $("#p3img").hide();
    $("#p4img").hide();

    $('#panelWrap').fullpage({
        menu: '#myNavbar',
        anchors: ['about', 'projects', 'resume', 'contact'],
        lockAnchors: true,
        scrollBar: false,
        licenseKey: 'ZQLIJ-PWU76-ZW2HK-3K5QI-DKKYL',
        fitToSection: true,
        dragAndMove: true,
        keyboardScrolling: true,
        animateAnchor: true,
        lazyLoading: true,
        onLeave: function (origin, destination, direction) {
            console.log(destination.anchor);
            if (origin.index == 0 && direction == "down") {
                $(".headerTop").slideUp("slow");
                $(".headerText").slideUp("slow");
            } else if (origin.index == 1 && direction == "up") {
                $(".headerTop").slideDown("slow");
                $(".headerText").slideDown("slow");
            }

            if (destination.anchor == "projects" && direction == "down") {
                $("#aboutIndex").fadeOut(300);
                $("#projectsIndex").fadeIn(300);
                $("#resumeIndex").hide();
                $("#contactIndex").hide();
                $(".scrollBarShading").addClass("scroll50");
                $("#project1Bg").animate({
                    "left": "0px"
                }, 800);
                $("#project2Bg").animate({
                    "right": "0px"
                }, 800);
                $("#project3Bg").animate({
                    "left": "0px"
                }, 800);
                $("#project4Bg").animate({
                    "right": "0px"
                }, 800);
                $("#projectsHeader").delay(500).fadeIn(1000);
            } else if (destination.anchor == "resume" && direction == "down") {
                $("#aboutIndex").hide();
                $("#projectsIndex").fadeOut(300);
                $("#resumeIndex").fadeIn(300);
                $("#contactIndex").hide();
                $(".scrollBarShading").removeClass("scroll50").addClass("scroll75");
                $("#project1Bg").animate({
                    "left": "-1200px"
                }, 800);
                $("#project2Bg").animate({
                    "right": "-1200px"
                }, 800);
                $("#project3Bg").animate({
                    "left": "-1200px"
                }, 800);
                $("#project4Bg").animate({
                    "right": "-1200px"
                }, 800);
                $("#projectsHeader").fadeOut();
            } else if (destination.anchor == "contact" && direction == "down") {
                $("#aboutIndex").hide();
                $("#projectsIndex").hide();
                $("#resumeIndex").fadeOut(300);
                $("#contactIndex").fadeIn(300);
                $(".scrollBarShading").removeClass("scroll75").addClass("scroll100");
            } else if (destination.anchor == "resume" && direction == "up") {
                $("#aboutIndex").hide();
                $("#projectsIndex").hide();
                $("#resumeIndex").fadeIn(300);
                $("#contactIndex").fadeOut(300);
                $(".scrollBarShading").removeClass("scroll100").addClass("scroll75");
            } else if (destination.anchor == "projects" && direction == "up") {
                $("#aboutIndex").hide();
                $("#projectsIndex").fadeIn(300);
                $("#resumeIndex").fadeOut(300);
                $("#contactIndex").hide();
                $(".scrollBarShading").removeClass("scroll75").addClass("scroll50");
                $("#project1Bg").animate({
                    "left": "0px"
                }, 800);
                $("#project2Bg").animate({
                    "right": "0px"
                }, 800);
                $("#project3Bg").animate({
                    "left": "0px"
                }, 800);
                $("#project4Bg").animate({
                    "right": "0px"
                }, 800);
                $("#projectsHeader").delay(500).fadeIn(1000);
            } else if (destination.anchor == "about" && direction == "up") {
                $("#aboutIndex").fadeIn(300);
                $("#projectsIndex").fadeOut(300);
                $("#resumeIndex").hide();
                $("#contactIndex").hide();
                $(".scrollBarShading").removeClass("scroll50");
                $("#project1Bg").animate({
                    "left": "-1200px"
                }, 800);
                $("#project2Bg").animate({
                    "right": "-1200px"
                }, 800);
                $("#project3Bg").animate({
                    "left": "-1200px"
                }, 800);
                $("#project4Bg").animate({
                    "right": "-1200px"
                }, 800);
                $("#projectsHeader").fadeOut();
            }
        },
        afterLoad: function (origin, destination) {
            if (destination.anchor == "resume") {
                console.log(destination.anchor);
                $("#resume1").delay(500).fadeIn(1000);
                $("#resume2").delay(5000).fadeIn(1000);
                $("#lang1").delay(7000).fadeIn(1000);
                $("#lang2").delay(9000).fadeIn(1000);
                $("#lang3").delay(11000).fadeIn(1000);
                $("#lang4").delay(13000).fadeIn(1000);
                $("#lang5").delay(15000).fadeIn(1000);
                $("#seeResume").delay(17000).fadeIn(1000);
            }
        }
    });

    $("#currPage").click(function () {
        fullpage_api.moveSectionUp();
    })
    $("#lastPage").click(function () {
        fullpage_api.moveSectionDown();
    })

    $("#aboutNav").click(function () {
        fullpage_api.moveTo("about");
    });
    $("#projectsNav").click(function () {
        fullpage_api.moveTo("projects");
    });
    $("#resumeNav").click(function () {
        fullpage_api.moveTo("resume");
    });
    $("#contactNav").click(function () {
        fullpage_api.moveTo("contact");
    });

    if ($("#hiMessage").length == 1) {

        var typed = new Typed("#hiMessage", {
            strings: ["HI IM CHAZ."],
            startDelay: 1200,
            typeSpeed: 70,
            loop: false,
            showCursor: false,
            onComplete: function () {
                $(".restartAbout").on("click", function () {
                    typed.reset();
                });
                var typed = new Typed("#aboutMe", {
                    strings: ["I AM A PROGRAMMER.", "I AM AN ENGINEER.", "I AM AN ARTIST.", "I AM A MUSIC LOVER.", "I AM A WRITER.", "I AM A MOVIE FANATIC."],
                    startDelay: 800,
                    smartBackspace: true,
                    typeSpeed: 70,
                    backSpeed: 50,
                    loop: false,
                    showCursor: false,
                    onComplete: function () {
                        var typed = new Typed("#more", {
                            strings: ["WANT TO KNOW MORE?"],
                            startDelay: 800,
                            typeSpeed: 70,
                            loop: false,
                            showCursor: false,
                            onComplete: function () {
                                $(".typedBox").delay(1000).fadeOut("slow");
                                $(".moreInfoBox").delay(2000).fadeIn("slow");
                                $(".restartAbout").delay(3000).fadeIn("slow");
                                $(".restartAbout").on("click", function(){
                                typed.reset();
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    $(".restartAbout").on("click", function(){
        $(".moreInfoBox").hide();
        $(".restartAbout").hide();
        $(".typedBox").show();
        typed.reset();
        typed.start();
    });

    $("#seeResume").on("click", function(){
        $(".languageInfoBox").fadeOut("slow");
        $(".resumeBox").delay(1000).fadeIn("slow");
        $("#seeLanguages").delay(3000).fadeIn("slow");
    });

    $("#seeLanguages").on("click", function(){
        $(".resumeBox").fadeOut("slow");
        $(".languageInfoBox").delay(1000).fadeIn("slow");
        $("#seeResume").delay(3000).fadeIn("slow");
    });

    $("#showButton1").on("click", function(){
        $("#project1Box").animate({
            height: "100%",
            width: "100%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "80%",
            marginTop: "20px",
        }, 1000, "linear");
        $("#project1TextBox").animate({
            width: "50%",
        }, 1000, "linear");
        $("#image1Box").animate({
            width: "50%",
        }, 1000, "linear");
        $("#p1img").delay(2000).fadeIn(2000);
        $("#showButton1").hide();
        $("#hideButton1").show();
        $("#p2Header").hide();
        $("#p3Header").hide();
        $("#p4Header").hide();
        $("#showButton2").hide();
        $("#showButton3").hide();
        $("#showButton4").hide();
        $("#project2Box").animate({
            height: "0%",
        }, 1000);
        $("#project3Box").animate({
            height: "0%",
        }, 1000);
        $("#project4Box").animate({
            height: "0%",
        },1000);
    })

    $("#hideButton1").on("click", function() {
        $("#project1Box").animate({
            height: "25%",
        }, 1000);
        $("#project2Box").animate({
            height: "25%",
        }, 1000);
        $("#project3Box").animate({
            height: "25%",
        }, 1000);
        $("#project4Box").animate({
            height: "25%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "100%",
            marginTop: "0",
        }, 1000);
        $("#p1img").fadeOut(600);
        // $("#p1img").animate({
        //     height: "100%",
        //     width: "25%",
        //     marginTop: "0",
        //     marginRight: "0",
        // });
        $("#p1img").hide();
        $("#showButton1").fadeIn(1000);
        $("#hideButton1").hide();
        $("#p2Header").show();
        $("#p3Header").show();
        $("#p4Header").show();
        $("#showButton2").show();
        $("#showButton3").show();
        $("#showButton4").show();
    });

    $("#showButton2").on("click", function(){
        $("#project1Box").animate({
            height: "0%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "80%",
            marginTop: "20px",
        }, 1000);
        $("#p2img").animate({
            height: "60%",
            width: "90%",
            marginTop: "40px",
            marginLeft: "40px",
            borderRadius: "10px",
            boxShadow: "0 0 10px black",
        }, 1000);
        $("#showButton2").hide();
        $("#hideButton2").show();
        $("#p1Header").hide();
        $("#p3Header").hide();
        $("#p4Header").hide();
        $("#showButton1").hide();
        $("#showButton3").hide();
        $("#showButton4").hide();
        $("#project2Box").animate({
            height: "100%",
        }, 1000);
        $("#project3Box").animate({
            height: "0%",
        }, 1000);
        $("#project4Box").animate({
            height: "0%",
        }, 1000);
    })

    $("#hideButton2").on("click", function() {
        $("#project1Box").animate({
            height: "25%",
        }, 1000);
        $("#project2Box").animate({
            height: "25%",
        }, 1000);
        $("#project3Box").animate({
            height: "25%",
        }, 1000);
        $("#project4Box").animate({
            height: "25%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "100%",
            marginTop: "0",
        }, 1000);
        $("#p2img").animate({
            height: "100%",
            width: "30%",
            marginTop: "0",
            marginLeft: "0",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "5px 0px 10px -5px black",
        });
        $("#showButton2").show();
        $("#hideButton2").hide();
        $("#p1Header").show();
        $("#p3Header").show();
        $("#p4Header").show();
        $("#showButton1").show();
        $("#showButton3").show();
        $("#showButton4").show();
    });

    $("#showButton3").on("click", function(){
        $("#project1Box").animate({
            height: "0%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "80%",
            marginTop: "20px",
        }, 1000);
        $("#p3img").animate({
            height: "60%",
            width: "90%",
            marginTop: "40px",
            marginRight: "40px",
            borderRadius: "10px",
            boxShadow: "0 0 10px black",
        }, 1000);
        $("#showButton3").hide();
        $("#hideButton3").show();
        $("#p1Header").hide();
        $("#p2Header").hide();
        $("#p4Header").hide();
        $("#showButton1").hide();
        $("#showButton2").hide();
        $("#showButton4").hide();
        $("#project2Box").animate({
            height: "0%",
        }, 1000);
        $("#project3Box").animate({
            height: "100%",
        }, 1000);
        $("#project4Box").animate({
            height: "0%",
        }, 1000);
    })

    $("#hideButton3").on("click", function() {
        $("#project1Box").animate({
            height: "25%",
        }, 1000);
        $("#project2Box").animate({
            height: "25%",
        }, 1000);
        $("#project3Box").animate({
            height: "25%",
        }, 1000);
        $("#project4Box").animate({
            height: "25%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "100%",
            marginTop: "0",
        }, 1000);
        $("#p3img").animate({
            height: "100%",
            width: "30%",
            marginTop: "0",
            marginRight: "0",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "-5px 0px 10px -5px black",
        });
        $("#showButton3").show();
        $("#hideButton3").hide();
        $("#p1Header").show();
        $("#p2Header").show();
        $("#p4Header").show();
        $("#showButton1").show();
        $("#showButton2").show();
        $("#showButton4").show();
    });

    $("#showButton4").on("click", function(){
        $("#project1Box").animate({
            height: "0%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "80%",
            marginTop: "20px",
        }, 1000);
        $("#p4img").animate({
            height: "60%",
            width: "90%",
            marginTop: "40px",
            marginLeft: "40px",
            borderRadius: "10px",
            boxShadow: "0 0 10px black",
        });
        $("#showButton4").hide();
        $("#hideButton4").show();
        $("#p1Header").hide();
        $("#p2Header").hide();
        $("#p3Header").hide();
        $("#showButton1").hide();
        $("#showButton2").hide();
        $("#showButton3").hide();
        $("#project2Box").animate({
            height: "0%",
        }, 1000);
        $("#project3Box").animate({
            height: "0%",
        }, 1000);
        $("#project4Box").animate({
            height: "100%",
        }, 1000);
    })

    $("#hideButton4").on("click", function() {
        $("#project1Box").animate({
            height: "25%",
        }, 1000);
        $("#project2Box").animate({
            height: "25%",
        }, 1000);
        $("#project3Box").animate({
            height: "25%",
        }, 1000);
        $("#project4Box").animate({
            height: "25%",
        }, 1000);
        $(".projectDisplayInner").animate({
            height: "100%",
            marginTop: "0",
        }, 1000);
        $("#p4img").animate({
            height: "100%",
            width: "30%",
            marginTop: "0",
            marginLeft: "0",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "5px 0px 10px -5px black",
        });
        $("#showButton4").show();
        $("#hideButton4").hide();
        $("#showButton3").show();
        $("#hideButton3").hide();
        $("#p1Header").show();
        $("#p2Header").show();
        $("#p3Header").show();
        $("#showButton1").show();
        $("#showButton2").show();
        $("#showButton3").show();
    });
});