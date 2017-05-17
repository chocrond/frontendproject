(function(){
	var app=angular.module("app");
	app.controller("dogCtrl",dogCtrl);
	
	function dogCtrl($http, $routeParams){
		var vm=this;		
		vm.title="dog Controller";
				
		var promise=$http.get("json/animals.json");
		promise.then(function(response){
			var currentId = $routeParams.dogId;
			var dogs=response.data.dogs;
			for (var i = 0; i < dogs.length; i++) {
				if (dogs[i].id == currentId) {
					vm.currentDog = dogs[i];
					break;					
				}
			}
		});				
	}
	
})();