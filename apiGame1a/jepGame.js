function playJeopardy()
{
	
$("#playGame").click(function() {
	$.ajax({
		url: "http://jservice.io/api/random"
	}).done(function(data) {
		$("#playGame").text(data)
	})
});

}