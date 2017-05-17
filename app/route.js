(function(){
	
	angular.module("app").config(function($routeProvider){
		
		$routeProvider.when("/",{
			templateUrl:"app/pages/home.html"
		}).when("/give",{
			templateUrl:"app/pages/give.html"
		}).when("/dog/:dogId",{
			templateUrl:"app/pages/dog.html"			
		}).when("/contact",{
			templateUrl:"app/pages/contact.html"
		}).when("/about",{
			templateUrl:"app/pages/about.html"
		});
	})
	
	
})();