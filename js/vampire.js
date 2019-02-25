var ratio = 16/9;
const episodes = ["radio_loop_1.mp3", "radio_loop_2.mp3", "radio_loop_3.mp3", "radio_loop_4.mp3", "radio_loop_5.mp3"];
var current = Math.floor(Math.random()*episodes.length);

function playnext() {
	if(current == episodes.length-1) { current = 0; }
	else { current += 1; }
	$('#radio').attr('src', 'audio/'+episodes[current]);
	$('#radio').trigger('play');
}

function resize() {
	$('.layer').css("height", $(window).height());
	$('.layer').css("width", $(window).width());
	if(($(window).width()/ratio) > $(window).height()) {
		$('.scale').css("width", $(window).width());
		$('.scale').css("height", $(window).width()/ratio);
	} else {
		$('.scale').css("width", $(window).height()*ratio);
		$('.scale').css("height", $(window).height());
	}
}

function moverain() {
	$('#rain').css("background-position", (Math.random()*125 + "px " + Math.random()*125 + "px"));
}

$(document).ready(function() {
	setInterval(moverain, 25);
	resize();
	$(window).bind("resize", function(){ resize() });
	$('#radio').bind("ended", function(){ playnext() });
	playnext();
});