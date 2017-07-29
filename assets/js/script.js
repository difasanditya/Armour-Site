$(".main").onepage_scroll({
    animationTime: 1000,
    beforeMove: function (index) {},
    afterMove: function (index) {},
    loop: false,
    pagination: false
});
$('#next').click(function () {
    $('.main').moveDown();
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    loopCount: Infinity,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    autoInsertCss: true
});