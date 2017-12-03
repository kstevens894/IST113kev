function playJeopardy(){
	//jepq= jeopardy header1 display question there
	//next = button to next question to appear
	var $jepq = $("#jepq");
	var $apiAnswerhide = $("#answerhide");
	//Greying out input field on initial execution of program
	//Because there is no question on the screen
	var UserAnswer = document.getElementById("answer");
	$(UserAnswer).attr('disabled', true);
	
	//when button is clicked make ajax call to api/categories
	$('#next').on('click',function(){
		/* allow user to input data */
		$(UserAnswer).attr('disabled', false);
		//Getting category array from API
		$.ajax({
			url: 'http://jservice.io/api/clues?category=2',
			dataType: 'json'
		})
		.done(function(data){
			/* clear input for next entry */ 
			UserAnswer.value = "";
			
			var nextQuestionID=Math.floor(Math.random() *45) ;
			$jepq.text(data[nextQuestionID].question);
			$apiAnswerhide.text(data[nextQuestionID].answer);
		})
		.fail(function(jqXHR, textStatus, errorThrown){
		});
	});	
}; /* end of playJeopardy */

function checkUserAnswer(){
	var UserAnswer = document.getElementById("answer");
	var UpperUserAnswer = document.getElementById("answer");
	var $apiAnswerhide = $("#answerhide");
	//Using .innerText to get at the string portion of the API.answer obtained
	UpperApiAnswer = answerhide.innerText;
	UpperApiAnswer = UpperApiAnswer.toUpperCase();
	
	/* trim in case user added spaces in front or back of answer */
	UserAnswer.value = UserAnswer.value.trim();
	/* Using new Upper var so that I don't change user's input on screen */
	UpperUserAnswer.value = UserAnswer.value;
	/* changing case to upper for comparison */
	/* that way user doesn't have to worry about case of answer */
	UpperUserAnswer.value = UpperUserAnswer.value.toUpperCase();

	if(UpperUserAnswer.value === UpperApiAnswer)
	{
		alert("Correct!!!!")
		$(UserAnswer).attr('disabled', true);
	}
	else
	{
		alert("Incorrect....")
	}
	
	/* blank out the last valaue user inputted */
	UserAnswer.value = "";
};


    /* Start of program */
	$(function(){
		playJeopardy();
	});

