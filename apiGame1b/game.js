function playJeopardy(){
	//jepq= jeopardy header1 display question there
	//next = button to net question to appear
	var $jepq = $("#jepq");
	var $answerhide = $("#answerhide");
	//when button is clicked make ajax call to api/random
	$('#next').on('click',function(){
		$.ajax({
			url: 'http://jservice.io/api/clues?category=2',
			dataType: 'json'
	})
	.done(function(data){
		var nextQuestionID=Math.floor(Math.random() *45) ;
		$jepq.text(data[nextQuestionID].question);
		$answerhide.text(data[nextQuestionID].answer);
		
	})
	.fail(function(jqXHR, textStatus, errorThrown){
	});
	});
}
	
	$(function(){
		playJeopardy();
	});
	/* $("#answer").keypress(function(e)
	{
		if (e.which == 13) //Entere keypress
		{
			if (answer == answerhide)
			{
				alert("Correct!!! 5 points have been added to your score")
			}
			else
			{
				alert("Sorry you are incorrect 1 point has been deducted from your score...")
			}
		}
	}); */
