
// Pause and Resume Intro video on Click

function onClickDo() {
	if(!document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').pause();
	}
	else if(document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').play();
	}
}


// Fade In Transition

console.log('scroll disabled');

window.setTimeout(
	function() {
		$('.test').fadeOut(1500);
	}, 2000)


//  Disable scroll for the period of transition

