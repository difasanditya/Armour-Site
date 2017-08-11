var incrementPoint=parseInt($(".photo-bar").css("height"));
var viewPosition = 0;
var onSlide=false;

function hoverUp(){
    if(viewPosition<1) return;
    onSlide=true;
    viewPosition--;
    var position = parseInt($(".photo-bar").css("bottom"));
    position-=incrementPoint;
    $('.photo-bar').stop().animate({
        bottom: position    
    }, 500);
    setTimeout(function(){
        if ($('#arrow-up:hover').length != 0) {
            hoverUp();
        }else onSlide=false;
    },1000)
}

function hoverDown(){
    if(viewPosition>=3) return;
    onSlide=true;
    viewPosition++;
    var position = parseInt($(".photo-bar").css("bottom"));
    position+=incrementPoint;
    $('.photo-bar').stop().animate({
        bottom: position    
    }, 500);
    setTimeout(function(){
        if ($('#arrow-down:hover').length != 0) {
            hoverDown();   
        }else onSlide=false;
    },1000)
}

$('#arrow-up').mouseover(function(){
    if(!onSlide)
    hoverUp();
});
$('#arrow-down').mouseover(function(){
    if(!onSlide)
    hoverDown();
});