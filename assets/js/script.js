$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $("header").outerHeight();

    $(".moreInfoBox").hide();

    $(window).scroll(function (event) {
        didScroll = true;
        console.log("scroll down true");
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
            console.log("didscroll false");
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop-st) <= delta)
        return;
        if (st > lastScrollTop && st > headerHeight) {
            $("header").removeClass("scrollDown").addClass("scrollUp");
        } else {
            if (st + $(window).height() < $(document).height()) {
                $("header").removeClass("scrollUp").addClass("scrollDown");
            }
        }
        lastScrollTop = st;
    }

    if ($("#hiMessage").length == 1) {
             

        var typed = new Typed("#hiMessage", {
            strings: ["HI IM CHAZ."],
            startDelay: 1200,
            typeSpeed:70,
            loop: false,
            showCursor: false,
            onComplete: function() {
                var typed = new Typed("#aboutMe", {
                    strings: ["I AM A PROGRAMMER.", "I AM AN ENGINEER.", "I AM AN ARTIST.", "I AM A MUSIC LOVER.", "I AM A WRITER.", "I AM A MOVIE FANATIC."],
                    startDelay: 100,
                    smartBackspace: true,
                    typeSpeed: 70,
                    backSpeed: 50,
                    loop: false,
                    showCursor: false,
                    onComplete: function() {
                        var typed = new Typed("#more", {
                            strings: ["WANT TO KNOW MORE?"],
                            startDelay: 800,
                            typeSpeed: 70,
                            loop: false,
                            showCursor: false,
                            onComplete: function() {
                                $( ".typedBox").delay(1000).fadeOut("slow");
                                $(".moreInfoBox").delay(2000).fadeIn(1000);
                            }
                    });
                }
                });
            }
        });
    }
});