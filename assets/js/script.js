$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $("header").outerHeight();

    $('#panelWrap').fullpage({
        menu: '#myNavbar',
        anchors:['about', 'projects','resume','contact'],
        lockAnchors: true,
        scrollBar: false,
        licenseKey:'ZQLIJ-PWU76-ZW2HK-3K5QI-DKKYL',
        fitToSection: true,
        dragAndMove: true,
        keyboardScrolling: true,
        animateAnchor: true,
        lazyLoading: true,
        onSlideLeave: function(section) {
            console.log(fullpage_api.getActiveSection());
        },
        beforeLeave: function(destination) {
            console.log(destination);
        }

        });

    $(".moreInfoBox").hide();
    $(".jobInfoBox").hide();
    $("#job1").hide();
    $("#job2").hide();
    $("#job3").hide();
    $("#job4").hide();
    $("#job5").hide();
    $("#resume3").hide();
    // $(".resumeBox").hide();
    $(".headerTop").hide();

    $("#currPage").click(function () {
        fullpage_api.moveSectionUp();
    })
    $("#lastPage").click(function () {
        fullpage_api.moveSectionDown();
    })

    if ($("#hiMessage").length == 1) {


        var typed = new Typed("#hiMessage", {
            strings: ["HI IM CHAZ."],
            startDelay: 1200,
            typeSpeed: 70,
            loop: false,
            showCursor: false,
            onComplete: function () {
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
                                $(".moreInfoBox").delay(2000).fadeIn(1000);
                            }
                        });
                    }
                });
            }
        });
    }
    
    // if ($("#resume1").length == 1) {
    //     var typed = new Typed("#resume1", {
    //         strings: ["I'VE WORKED IN A PLETHORA OF DIFFERENT INDUSTRIES WHICH HAVE TAUGHT ME A RANGE OF DIFFERENT SKILLS."],
    //         startDelay: 1200,
    //         typeSpeed: 70,
    //         loop: false,
    //         showCursor: false,
    //         onComplete: function (){
    //             var typed = new Typed("#resume2", {
    //                 strings: ["I'VE BEEN:"],
    //                 startDelay: 800,
    //                 smartBackspace: true,
    //                 typeSpeed: 70,
    //                 backSpeed: 50,
    //                 loop: false,
    //                 showCursor: false,
    //                 onComplete: function () {
    //                     $("#job1").delay(1000).fadeIn(1000);
    //                     $("#job2").delay(2500).fadeIn(1000);
    //                     $("#job3").delay(4000).fadeIn(1000);
    //                     $("#job4").delay(5500).fadeIn(1000);
    //                     $("#job5").delay(7000).fadeIn(1000);
    //                     $("#resume3").delay(8500).fadeIn(1000);
    //                     $(".jobInfoBox").delay(14000).fadeOut("slow");
    //                     $(".resumeBox").delay(14000).fadeIn(1000);
    //                 }
    //             });
    //         }
    //     })
    // }

});