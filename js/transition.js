window.setTimeout(
	function() {
		$('.main_carousel').fadeOut(1000);
	}, 25);
	// 2500

// Pause and Resume Intro video on Click

function onClickDo() {
	if(!document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').pause();
	}
	else if(document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').play();
	}
}


window.setTimeout(
	function() {
		$('.test').fadeOut(1500);
	}, 2000)

