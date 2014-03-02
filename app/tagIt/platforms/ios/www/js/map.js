function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(43.646467, -79.400646),
		zoom: 8
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);