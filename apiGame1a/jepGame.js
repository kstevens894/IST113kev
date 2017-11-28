$(function (){	
$("#playGame").click(function() {
	$.ajax({
		url: '/api/random'
	}).done(function(data) {
		$("#playGame").html(data)
	})
});

}