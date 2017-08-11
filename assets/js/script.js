$(".main").onepage_scroll({
    animationTime: 1000,
    beforeMove: function (index) {
        toogle(index, 1000);
    },
    afterMove: function (index) {},
    loop: false,
    pagination: false
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

function toogle(index, time){
    if(index != 1){
        $('#menu').fadeIn(time);
    }
    else{
        document.getElementById("toogle-menu").checked = false;
        $('#menu').fadeOut(time);
    }
}