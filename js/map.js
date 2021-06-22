

function initMap() {
	const house = {   lat: 47.161516589284986, lng: 27.61824894224047 };
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: house
	});

	const marker = new google.maps.Marker({
		position: house,
		map: map
	});
}
