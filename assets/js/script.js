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
})