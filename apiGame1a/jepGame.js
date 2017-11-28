$(function playJeopardy(){

		var $jepq = $('#jepq');
	$.ajax({
		url: 'http://jservice.io/api/random',
		success: function(data){
		 $.each(data, function(i, quest) {
			 $jepq.append('<h1> '+ quest.question +' </h1>');
		});
	  },
	  error: function() {
		  alert('error loading quest');
	  }
	});
	$('#next').on('click', function() {
		var quest = {
			jepq: $question.val(),
		};
		
		$.ajax({
			type: 'POST',
			url: 'http://jservice.io/api/random',
			data: quest,
			success: function(newQuest){
				$jepq.append('<h1> '+ newQuest.question +' </h1>');
			},
			error: function() {
				alert('error saving question');
			}
	});
});