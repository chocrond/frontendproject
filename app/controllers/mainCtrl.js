(function(){
	var app=angular.module("app");
	app.controller("mainCtrl",mainCtrl);
	
	function mainCtrl($http, $location){
		var main=this;		
		main.title="main Controller";				
		
		main.search = function(){
			var promise=$http.get("json/animals.json");
			promise.then(function(response){
				main.animals=response.data;				
			});
			main.resultTitle="";
		}
		
		main.goTo=function(id){		  
			$location.path("/dog/"+id);		
		}
	}
	
})();