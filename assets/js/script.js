$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHeight = $("header").outerHeight();

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
            typeSpeed: 100,
            loop: false,
            showCursor: false,
            onComplete: function() {
                var typed = new Typed("#aboutMe", {
                    strings: ["I AM A PROGRAMMER.", "I AM AN ENGINEER.", "I AM AN ARTIST.", "I AM A MUSIC LOVER.", "I AM A MOVIE FANATIC."],
                    startDelay: 500,
                    smartBackspace: true,
                    typeSpeed: 100,
                    backSpeed: 50,
                    loop: false,
                    showCursor: false,
                    onComplete: function() {
                        var typed = new Typed("#more", {
                            strings: ["WANT TO KNOW MORE?"],
                            startDelay: 500,
                            typeSpeed: 100,
                            loop: false,
                            showCursor: false,
                    });
                }
                });
            }
        });
    }
});