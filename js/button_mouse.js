
var circle = document.createElement("div");
circle.id = "tracking-mouse";
$('body').append(circle);

const tracking = (e) => {
			if($('#constructie:hover').length != 0 || $('#brakedown-1:hover, #brakedown-2:hover').length != 0 ) {
				circle.style.display = "block";
				circle.style.left = e.pageX + 'px';
				circle.style.top = e.pageY + 'px';
			} else {
				circle.style.display = "none";
			}
}

document.addEventListener('mousemove', tracking);
