$(document).ready(function(){
 
$(document).keydown(function(){

if(event.keyCode == 13){	

/*clear the list in case there are values there*/
$('.allValues').children().remove();

 /*pull in the value the user enters*/
var highestNumber = $('#number').val();

/*loop through all the values*/
 for (i = 1; i <= highestNumber; i++)
 {
 	var addToList;
 	if(i % 3 == 0 && i % 5 == 0){
 		/*add FizzBuzz to list*/
 		addToList = "FizzBuzz";
 	}
 	else if(i % 3 == 0){
 		/*add Fizz to list*/
 		addToList = "Fizz";
 	}
 	else if(i % 5 == 0){
 		/*add Buzz to list*/
 		addToList = "Buzz";
 	}
 	else{
 		/*add i to list*/
 		addToList = i;
 	}

 	$(".allValues").append("<li>" + addToList + "</li>");
 }/*close For loop*/
}
}); /*close keydown*/

});
/*end of document ready*/