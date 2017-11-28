$(function playJeopardy(){

		var $jepq = $('#jepq');
	$.ajax({
		url: 'http://jservice.io/api/random',
		success: function(data){
		 $.each(data, function(i, quest) {
			 $jepq.append('<li> question: '+ quest.question +' </li>');
		});
	  }
	});
});