$(document).ready(function () {
    
	// Click to scroll up
	$(".topButton").click(function(){
        $("html, body").animate({scrollTop:0},"slow");
    });
		
	var x=1;	
    $("#btnSlideGo").click(function (e) {        
		x++;
	   	if (x>=14) {x=14;}
		slideGoBack(x);
    });
	
	$("#btnSlideBack").click(function (e) {
        x--;
	   	if (x<=0) {x=1;}
		slideGoBack(x);
    });
	
	function slideGoBack(x){
		var pic1 = $("#pic1");
		var pic2 = $("#pic2");
		var pic3 = $("#pic3");
		// Set the new image src
	   	pic1.attr('src', "images/gallery/"+x+".jpg");		
	   	pic2.attr('src', "images/gallery/"+(x+1)+".jpg");		
	   	pic3.attr('src', "images/gallery/"+(x+2)+".jpg");
		// Set the attribute data-id
		pic1.attr("data-id", x);
		pic2.attr("data-id", x+1);
		pic3.attr("data-id", x+2);
	}
	
	$('body').on('click', '.moreDetails', function() {
		var myID = $(this).attr("data-id");		
		window.location.hash = '#!/dog/'+myID;
//		$(".contentSearchSection").hide();		
//		$(this).parent().parent().parent().addClass("details");
//		$(".resultItem").hide();
//		$(".details").show();
	});
	
//	$("#btnSearch").click(function (e) {
//       
//		e.preventDefault();
//		var strBreed = $("#breed").val();
//		var strSize = $("#size").val();
//		var strSex = $("#sex").val();
//		var strColor = $("#color").val();
//		var strAge = $("#age").val();
//		var strLocation = $("#location").val();			
//		var cptDogsFound = 0;
//		
//		$("#result").html("");
//		
//		$.getJSON('json/animals.json', function(dataJson){			
//			$.each(dataJson.dogs, function(i, item){
//								
//				// Filter
//				if ((strBreed == "all" || item.breedCode == strBreed) &&
//				   (strSize == "all" || item.size == strSize) &&
//				   (strSex == "all" || item.sex == strSex) &&
//				   (strColor == "all" || item.color == strColor) &&
//				   (strAge == "all" || item.age == strAge) &&				   
//				   (strLocation == "all" || item.locationCode == strLocation))
//				{
//					AddDogToResult(item);
//					cptDogsFound++;
//				}											
//  			});			
//			var msg = "";
//			if (cptDogsFound == 0)
//				msg = "No dogs found for your search";
//			else if (cptDogsFound == 1)
//				msg = "1 dog found for your search";
//			else
//				msg = cptDogsFound + " dogs found for your search";
//			
//			$("#resultTitle").html(msg);
//		});
//				
//    }); // End btnSearch
	
	$(".lastDetails").click(function() {
		var myID = $(this).attr("data-id")*1;
		window.location.hash = '#!/dog/'+myID;
//		$("#result").html("");
//		$.getJSON('json/animals.json', function(dataJson){			
//			var dog = dataJson.dogs[myID-1];			
//			AddDogToResult(dog);
//			$(".contentSearchSection").hide();	
//		});
	});
	
//	function AddDogToResult(dog){
//		var str="";		
//		str+="<div class='resultItem'>";
//		str+="<div class='row'>"
//		str+="<div class='boxImgResult'><img src='images/gallery/"+dog.pic+"' class='moreDetails' data-id='"+dog.id+"'></div>"; 
//		str+="<div class='boxContentResult'>";
//		str+="<h3>"+dog.name+"</h3>";
//		str+="<ul class='resultList'>";
//		str+="<li><span>Breed: </span>"+dog.breedValue+"</li>";
//		str+="<li><span>Age: </span>"+dog.age+"</li>";
//		str+="<li><span>Sex: </span>"+dog.sex+"</li>";
//		str+="<li><span>Size: </span>"+dog.size+"</li>";
//		str+="<li><span>Location: </span>"+dog.locationValue+"</li>";
//		str+="</ul>";				
//		str+="</div>";
//		str+="</div>";
//		str+="<center><hr class='hrResult'></center>";
//		str+="</div>";
//		$("#result").append(str);		
//	}
			
}); // END OF READY

$(document).scroll(function(){
	var y=$(this).scrollTop();		
	if (y > 200){
		$(".topButton").fadeIn(800);
	} else{
		$(".topButton").fadeOut(800);
	}
}); // END SCROLL