
function initMap() {
	const house = {   lat: 47.161516589284986, lng: 27.61824894224047 };
	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: house,
		mapId: ' no key in published version '
	});


	// House Marker

	const markerIcon = './meta/icons/marker.png';
	const marker = new google.maps.Marker({
		position: house,
		map: map,
		disableDefaultUI: true,
		icon: markerIcon,
	});


	// Draw Terrain Limits
	
	const terrainCords = [
		{ lat: 47.161189, lng: 27.617943 },
		{ lat: 47.161234, lng: 27.617865 },
		{ lat: 47.161336583674206, lng: 27.618006486394197 },
		{ lat: 47.16131859998048, lng: 27.618043217460883 },
		{ lat: 47.16169656704935, lng: 27.618596423019188 },
		{ lat: 47.16163319278256, lng: 27.61869767643613 }
	];

	const terrainMap = new google.maps.Polygon({
		paths: terrainCords,
		strokeColor: '#FFFFFF',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#FFFFFF',
		fillOpacity: 0.35
	});
	
	terrainMap.setMap(map);
}