$(function () {
    $("#headerContent").load("_commonHeader.html");
    $("#navContent").load("_commonNevigation.html");
    $("#footerContent").load("_commonFooter.html");

    resetContentHeight();
});

$(window).on('resize', function () {
    resetContentHeight();
});

function resetContentHeight() {
    $("#maincontent").css({ minHeight: (window.innerHeight - 195) + 'px' });
}