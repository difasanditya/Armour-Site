var delay = 30000; //in milisecond


//variables
len = $('.slider-container>div').length;
step = 0;
//width set
//Untuk mengatur width dari slider-container danslider-member, mengikuti banyak gambar
$('.slider-container').css("width", (len*100)+'%');
$('.slider-member').css("width", (100/len)+'%');

$('.slider-window').css("height", $('.slider-window').height() - $('.slider-nav').height());
$('.slider-nav').css("top", -$('.slider-nav').height())

//starting timeout u/ func otomatis
loop = setTimeout(function(){otomatis();}, delay);

$('#radio-0').prop('checked', true);

function otomatis()
{
	if(step>=(len-1)) step = 0;
	else step++;
	geser();
}

function geser()
{
	$('.slider-container').css("left", '-'+(step*100)+'%');
	$('#radio-'+step).prop('checked', true);
	clearTimeout(loop);
	loop = setTimeout(function(){otomatis();}, delay);
}

//button: move right
$('.move-right').click(function(){
	if(step>=(len-1)) step = 0;
	else step++;
	clearTimeout(loop);
	geser();
});

//button: move left
$('.move-left').click(function(){
	if(step<=0) step = len-1;
	else step--;
	clearTimeout(loop);
	geser();
});

//radio button control
$('.sliderbutton').click(function(){
	step = this.value;
	clearTimeout(loop);
	geser();
});