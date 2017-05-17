(function(){
	var app=angular.module("app");
	app.controller("giveCtrl",giveCtrl);
	
	function giveCtrl($http){
		var give=this;		
		give.title="give Controller";	
		
		/*
		give.uploadFile = function(files){
			console.log("uploadFile");
			give.fd = new FormData();
			console.log(files[0]);
			give.fd.append("file", files[0]);			
		}*/
		
		give.submit=function(dog){
			alert("This feature is currently not operational. It will be implemented with NodeJS.");
			/*var promise=$http.get("json/animals.json");
			promise.then(function(response){
				console.log("success");
				give.dogs=response.data.dogs;
				console.log(give.dogs.length);				
				//give.dogs.push(dog);
				var newDog = { "id": give.dogs.length+1, "name":dog.name, "age":dog.age, "breedCode":dog.breedCode, "breedValue":$("#breed option:selected").text(), "size":dog.size, "sexCode":dog.sexCode, "sexValue":$("#sex option:selected").text(), "colorCode":dog.colorCode ,"colorValue":$("#color option:selected").text(), "locationCode":dog.locationCode, "locationValue":$("#location option:selected").text(), "pic": give.dogs.length+1+".jpg"}
				console.log(newDog);
				//$http.post("json/animals.json", give.dogs);	
				
				$http({ url: 'http://localhost:3000/give',
						method: "POST",
						data: JSON.stringify(newDog),
						header: 'Content-Type: undefined'
					});
			});
			*/			
		}
	}
	
})();