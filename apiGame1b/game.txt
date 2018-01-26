var score = 0;
var numberOfCorrects = 0;
var numberOfInCorrects = 0;
var result = "";

//--------------------------------------------//
function playJeopardy(){
	//jepq= jeopardy header1 display question there
	//next = button to next question to appear
	var $jepq = $("#jepq");
	var $apiAnswerhide = $("#answerhide");
	//Greying out input field on initial execution of program
	//Because there is no question on the screen
	var UserAnswer = document.getElementById("answer");
	$(UserAnswer).attr('disabled', true);
	//Retrieve data
	if (localStorage.getItem('userpoints') !== null)
	{
	    result = localStorage.getItem('userpoints');
		score = parseInt(result);
		document.getElementById("userpoints").innerHTML = score;
	}
	
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
function resetPoints()
{
	score = 0;
	document.getElementById("userpoints").innerHTML = score;
	localStorage.setItem("userpoints", score);		
};

function checkUserAnswer(){
	var UserAnswer = document.getElementById("answer");
	var UpperUserAnswer = document.getElementById("answer");
	var $apiAnswerhide = $("#answerhide");
	var Userpoints = document.getElementById("userpoints");
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
		score = score + 5;
		numberOfCorrects = numberOfCorrects + 1;
		document.getElementById("userpoints").innerHTML = score;
		document.getElementById("correctnumber").innerHTML = numberOfCorrects;
		alert("Correct!!!! 5 points have been added to your score!!!")
		$(UserAnswer).attr('disabled', true);
	}
	else
	{
		score = score - 1;
		numberOfInCorrects = numberOfInCorrects + 1;
		document.getElementById("userpoints").innerHTML = score;
		document.getElementById("incorrectnumber").innerHTML = numberOfInCorrects;
		alert("Incorrect.... 1 points has been deducted from your score...")
	}
	//write score out to file
	localStorage.setItem("userpoints", score);
	/* blank out the last valaue user inputted */
	UserAnswer.value = "";
};


    /* Start of program */
	$(function(){
		playJeopardy();
	});

