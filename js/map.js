

function initMap() {
	const house = {   lat: 47.161516589284986, lng: 27.61824894224047 };
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: house,
		mapId: '4a36e4525af99f11'
	});

	const marker = new google.maps.Marker({
		position: house,
		map: map,
		disableDefaultUI: true,
	});
}
