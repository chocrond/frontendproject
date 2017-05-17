(function(){
	var app=angular.module("app");
	app.controller("contactCtrl",contactCtrl);
	
	function contactCtrl(){
		var contact=this;		
		contact.title="Contact Controller";				
		
		contact.send = function(){
			alert("Thanks, your message was sent");
			document.formContact.reset();
		}
	}
		
})();