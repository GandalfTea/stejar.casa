window.setTimeout(
	function() {
		$('.main_carousel').fadeOut(1000);
	}, 2500);

// Pause and Resume Intro video on Click

function onClickDo() {
	if(!document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').pause();
	}
	else if(document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').play();
	}
}

