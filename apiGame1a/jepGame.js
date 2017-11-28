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
		
		$.ajax({
			url: 'http://jservice.io/api/random',
			success: function(data){
			$.each(data, function(i, quest) {
				$jepq.replaceWith(quest.question);
			});
			},
			error: function() {
				alert('error saving question');
			}
		});
	}); 
});