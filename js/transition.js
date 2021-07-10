
// Fade In Transition

window.setTimeout(
	function() {
		$('.test').fadeOut(1500);
	}, 2000)


// FUNCTIONS CALLED IN HTML


// Pause and Resume Intro video on Click

function onClickDo() {
	if(!document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').pause();
	}
	else if(document.getElementById('intro-video').paused) {
		document.getElementById('intro-video').play();
	}
}


// Fade to carousel

//$('#intro-video').fadeOut(1500);

function initCarousel(){
	const carousel = $('.hidden-img');
	
	// show initial image
	let i = 0;
	setInterval( () => {
		carousel[i%4].style.display = 'none';
		carousel[(i+1)%4].style.display = 'block';
	}, 2000)

	// auto change to next image in 2s
	// change depending on button press
}


