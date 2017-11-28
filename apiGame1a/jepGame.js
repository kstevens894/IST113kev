$(function playJeopardy(){	
$("#playGame").click(function() {
	$.ajax({
		url: '/api/random'
	});
});