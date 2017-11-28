function playJeopardy()
{
	
$("#main").click(function() {
	$.ajax({
		url: "http://jservice.io/api/random"
	}).done(function(data) {
		$("#main").text(data)
	})
});

}