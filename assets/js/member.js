var incrementPoint=parseInt($(".photo-bar").css("height"));
var delay = 1000;
var viewPosition = 0;

function hoverUp(){
    if(viewPosition<1) return;
    viewPosition--;
    var position = parseInt($(".photo-bar").css("bottom"));
    position-=incrementPoint;
    $('.photo-bar').stop().animate({
        bottom: position    
    }, delay);
    setTimeout(function(){
        if ($('#arrow-up:hover').length != 0) {
            hoverUp();
        }
    },delay)
}

function hoverDown(){
    if(viewPosition>=3) return;
    viewPosition++;
    var position = parseInt($(".photo-bar").css("bottom"));
    position+=incrementPoint;
    $('.photo-bar').stop().animate({
        bottom: position    
    }, delay);
    setTimeout(function(){
        if ($('#arrow-down:hover').length != 0) {
            hoverDown();   
        }
    },delay)
}

$('#arrow-up').mouseover(function(){
    hoverUp();
});
$('#arrow-down').mouseover(function(){
    hoverDown();
});