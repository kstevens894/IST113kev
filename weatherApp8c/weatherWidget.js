function WeatherWidget($widget)
{
	this.update = function()
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport();
	};
	
	function getWeatherReport(lat, lon) 
	{
		var coords = lat + "," + lon;
		$.ajax({
			url: "http://api.wunderground.com/api/" + wuKey +
				 "/conditions/q/" + coords + ".json",
			dataType : "json"
		})
		.done(function(data) { populateWeather(data); })
		.fail(function(jqXHR, textStatus, errorThrown) {
			showError(errorThrown);
			 });
	}
	
	function populateWeather(data)
	{
		var observation = data.current_observation;
		
		$(".results header img", $widget).attr("src",
				observation.icon_url);
		$(".location>span", $widget).text(data.location.city);
			
		$(".conditions>span").each(function(i, e)
		{
			var $span = $(this);
			var field = $span.data("field");
			$(this).text(observation["field"]);
		});
		
		$(".results footer img", $widget)
			.attr("src", observation.image.url);
		
		$(".loading", $widget).fadeOut(function ()
		{
			$(".results", $widget).fadeIn();
		});
	}
	navigator.geolocation.getCurrentPosition(
		function(position) { alert("call was successful"); },
		function(error) { alert("call failed"); }
	);	
	
}

