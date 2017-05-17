(function(){
	var app=angular.module("app");
	app.controller("aboutCtrl",aboutCtrl);
	
	function aboutCtrl(){
		var about=this;		
		about.title="about Controller";		
	
		if(navigator.geolocation) {

			function hasPosition(position) {
				// Instanciation
				var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),

				 // Ajustage des paramètres
				 myOptions = {
					zoom: 15,
					center: point,
					mapTypeId: google.maps.MapTypeId.ROADMAP 
				 },

				 mapDiv = document.getElementById("mapDiv"),
				 map = new google.maps.Map(mapDiv, myOptions),

				 marker = new google.maps.Marker({
				  position: point,
				  map: map,
				  title: "You are here"
				  });
			}
			navigator.geolocation.getCurrentPosition(hasPosition);   
		}		
	}
			
})();