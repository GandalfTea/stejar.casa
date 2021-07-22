
// Fade In Transition

window.setTimeout(
	function() {
		$('.test').fadeOut(1000);
	}, 1000)


// FUNCTIONS CALLED IN HTML


// Pause and Resume all videos on Click

function onClickPause(clickedId) {
	if(!document.getElementById(clickedId).paused) {
		document.getElementById(clickedId).pause();
	}
	else if(document.getElementById(clickedId).paused) {
		document.getElementById(clickedId).play();
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


