/////////////////////slide-effect/////////////////////////
var incrementPoint=parseInt($(".photo-bar").css("height"));
var viewPosition = 0;
var onSlide=false;

function hoverUp(){
    if(viewPosition<1){
        onSlide=false
        return;
    }
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
    if(viewPosition>=3){
        onSlide=false
        return;
    }
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
///////////////////end-of-slide-effect/////////////
///////////////////photo-init/////////////////////
var armourMemberCount = 28;
var path = "assets/img/armour-member/";
var photoNames = [];
for(var i=1;i<=armourMemberCount;i++){
    var string;
    var temp=parseInt(i);
    if(temp<10) string="00"+i+".jpg";
    else string="0"+i+".jpg";
    photoNames.push(string);
}

var frames = $('.mini-photo');
var url;
for(var i=0; i<frames.length; i++){
    url = path+photoNames[i];
    frames.eq(i).css('backgroundImage','url("'+url+'")');
    //document.getElementsByClassName("mini-photo")[i].style.backgroundImage="url('"+url+"')";
}
////////////////////end-of-photo-init////////////
////////////////////photo-effect/////////////////
var onOverStatus=false;
var currentIndex;
for(var i=0; i<frames.length; i++){
    var element = frames.eq(i);
    element.mouseover(function(){
        if(onOverStatus) return;
        onOverStatus=true;
      //  currentIndex=frames.index(this);
        $("#frame").fadeOut(500);
        setTimeout(function(){
            url = path+photoNames[currentIndex];
            $("#frame").css('backgroundImage','url("'+url+'")');
            $("#frame").fadeIn(1000);
            onOverStatus=false;
        },1000)
    });
    element.mouseenter(function(){
        currentIndex=frames.index(this);
    });
}
///////////////////end-of-photo-effect///////////
/////////////////////////////////////////////////
var instagramFormatUrl = "https://www.instagram.com/";
var instagramUrl = [
    "ad.jordi", "aldonovendilie", "fian_wi97", "andore_asu", "anthonywidjaja8", "benybudi", "ravianhartono", "christ_jon", "davinreinaldogozali",
    "difasanditya", "fannyrence", "rio_gonteng", "hejmanik", "jefdale", "jovitabhekti397", "lianaester_","martinus490", "mettsardw","nadiahafista28",
    "nicholasks_","petrapradyapramesthi", "rizkaherist", "salimhartono_","samueltheodorusj","stellameilisa", "wennieclarissaa","yoverina","yu_diii"];

$("#instagram").click(function(){
    var finalUrl = instagramFormatUrl+instagramUrl[currentIndex];
    //window.location = finalUrl;
    var win=window.open(finalUrl, '_blank');
    win.focus();
})

////////////////////////////////////////////////