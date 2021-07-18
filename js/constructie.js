
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

checkVisible('#sapatura');
checkVisible('#fundatie');
checkVisible('#zidarie');
checkVisible('#armare-placi');
checkVisible('#instalatii');
checkVisible('#sape');
checkVisible('#finisaje');
checkVisible('#pos_contact');





/* OPEN FULL SCREEN IMAGE */

const cat = { 'sapatura': 9,
			  'fundatie' : 11,
			  'zidarie' : 12,
			  'armare-placi' : 12,
			  'instalatii' : 10,
			  'sape' : 11,
			  'finisaje' : 11 };


// Full screen buttons
document.getElementById('fullscreen').addEventListener('click', function(event){
	closeImage();
	console.log("Hello");
})

document.getElementById('fullscreen-exit').addEventListener('click', function(event) {
	closeImage();
});

document.getElementById('fullscreen-next').addEventListener('click', function(event) {
	openNext();	
})

document.getElementById('fullscreen-prev').addEventListener('click', function(event) {
	openPrev();	
})



function openImage(r_src) {
	
	// parse url to get big image from compressed one.
	var url = r_src.split('/')
	var src = url[6].split('_')[1];
	var directory = './'; 
	for(let i = 3; i < 6; i++) {
		if(url[i] != ""){
			directory += (url[i] + '/');
		}
	}
	
	console.log("GET: " + directory + src);

	// Open full screen view
	var background = document.getElementById('fullscreen');
	var picture = document.getElementById('fullscreen-p');
	
	background.classList.add('background-fullscreen');
	picture.innerHTML = '';
	picture.classList.add('picture-fullscreen');
	picture.src = directory + src;
	picture.id='fullscreen-p';

	document.body.style.overflow='hidden';

	document.getElementById('fullscreen-exit').style.visibility = 'visible';
	document.getElementById('fullscreen-next').style.visibility = 'visible';
	document.getElementById('fullscreen-prev').style.visibility = 'visible';
}



function closeImage() {
	document.getElementById('fullscreen-exit').style.visibility = 'hidden';
	document.getElementById('fullscreen-next').style.visibility = 'hidden';
	document.getElementById('fullscreen-prev').style.visibility = 'hidden';

	var background = document.getElementById('fullscreen');
	background.classList.remove('background-fullscreen');

	var picture = document.getElementById('fullscreen-p');	
	picture.innerHTML = '';
	picture.src = '';
		
	document.body.style.overflow='visible';
}



function openNext() {

	var img = document.getElementById('fullscreen-p');
	var url = img.src.split('/');

	if(url[6].search('armare') !== -1){
		// fix shitty formatting on my part
		var misc = url[6].split('-');
		var src = misc[0]+ '-' + misc[1];
		var num = misc[2].split('.')[0];
		num = parseInt(num, 10);

	} else {
		var src = url[6].split('-')[0];
		var num = url[6].split('-')[1].split('.')[0];
	}
	var total = 0;

	// get total number of images in group
	var keys = Object.keys(cat);
	keys.forEach( (x) => {
		if( x === src ) {
			total = cat[x];
		}
	});

	// update for boundry
	num = num % total;	
	num += 1;

	// set
	if(url[6].search('armare') !== -1){
		
		// exception for armare-placi group
		var new_src = './meta/img/' + 'armare&beton' + '/' + src + '-' + num + '.jpg';
	} else {
		var new_src = './meta/img/' + src + '/' + src + '-' + num + '.jpg';
	}

	img.src = new_src;
	console.log(new_src);
}



function openPrev() {

	var img = document.getElementById('fullscreen-p');
	var url = img.src.split('/');
	var src = url[6].split('-')[0];
	var num = url[6].split('-')[1].split('.')[0];
	var total = 0;

	var keys = Object.keys(cat);
	keys.forEach( (x) => {
		if( x === src ) {
			total = cat[x];
		}
	});

	num--;
	if(num === 0){
		num = total;
	}
	
	var new_src = './meta/img/' + src + '/' + src + '-' + num + '.jpg';
	img.src = new_src;
	console.log(new_src);
}
