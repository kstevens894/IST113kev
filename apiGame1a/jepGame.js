$(function playJeopardy(){	
	$.ajax({
		url: 'http://jservice.io/api/random'
		success: function(data){
		 $.each(data, function(i, quest) {
			 
		});
			
	  }
	});
});