
/* SIDE MENU HIGHLIGHT LIVE UPDATE ON SCROLL*/

var deleted = false;
function checkVisible(element){
	$(window).scroll(function() {
		var topOfElement = $(element).offset().top;
		var bottomOfElement = $(element).offset().top + $(element).innerHeight() - 100;
		var bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
		var topOfScreen = $(window).scrollTop();

		// Show side menu when not looking at contact form
		if(deleted) {
			var elements = document.getElementsByClassName('menu-link');
			for(var i = 0; i < elements.length; i++) {
				elements[i].classList.remove("menu-none");
			}

			var elements = document.getElementsByClassName('link');
			for(var i = 0; i < elements.length; i++) {
				elements[i].classList.remove("link-none");
			}
			
			deleted = false;
		}
	
		const tags = element.split('#')
		var menuItem = "menu-" + tags[1];

		if((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement)){
			
			// Fade side menu when looking at contact form
			if(element === '#pos_contact') {
				var elements = document.getElementsByClassName('menu-link');
		
				// reversed because the last element is the brightest
				for(var i = elements.length - 1; i >= 0; i--) {
					elements[i].classList.add("menu-none");
				}

				var elements = document.getElementsByClassName('link');
				for(var i = elements.length - 1; i >= 0; i--) {
					elements[i].classList.add("link-none");
				}

				deleted = true;
			} else{
				document.getElementById(menuItem).classList.add("menu-active");
			}

		} else {
			if(element != '#pos_contact'){
				if(document.getElementById(menuItem).classList.contains("menu-active")) {
					document.getElementById(menuItem).classList.remove("menu-active");
				}
			}
		}
	});
}

checkVisible('#sapatura', true);
checkVisible('#fundatie', true);
checkVisible('#zidarie', true);
checkVisible('#armare-beton', true);
checkVisible('#instalatii', true);
checkVisible('#sape', true);
checkVisible('#finisaje', true);
checkVisible('#pos_contact', false);





/* OPEN FULL SCREEN IMAGE */


// listen for click on #image-small
// create black div background with window on overthing: hidden;
// place image in center of screen, fill size
// back, forward and exit buttons
