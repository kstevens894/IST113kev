function playJeopardy(){
	//jepq= jeopardy header1 display question there
	//next = button to net question to appear
	var $jepq = $("#jepq");
	//when button is clicked make ajax call to api/random
	$('#next').on('click',function(){
		$.ajax({
			url: 'http://jservice.io/api/random',
			dataType: 'json'
	})
	.done(function(data){
		$jepq.text(data[0].question);
	})
	.fail(function(jqXHR, textStatus, errorThrown){
	});
	});
}
	
	$(function(){
		playJeopardy();
	});
	
	