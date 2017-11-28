function WeatherWidget($widget, wuKey)
{
	this.update = function(lat, lon)
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport(lat, lon);
	};
	
	function getWeatherReport(lat, lon) 
	{
		var coords = lat + "," + lon;
		$.ajax({
/* 			url: "https://api.weather.gov/points/43.22,-71.53" + wuKey +
				 "/conditions/q/" + coords + ".json", */
			url: "https://forecast-v3.weather.gov/point/" + coords,
			dataType : "json"
		})
		.done(function(data) { populateWeather(data); })
		.fail(function(jqXHR, textStatus, errorThrown) {
			showError(errorThrown);
			 });
	}
	function showError(errorReceived)
	{
			$(".error", $widget).text(errorReceived);
	}
	
	function populateWeather(data)
	{
		var observation = data.current_observation;
		
		$(".results header img", $widget).attr("src",
				observation.icon_url);
		$(".location>span", $widget).text(observation.display_location.full);
			
		$(".conditions>span").each(function(i, e)
		{
			var $span = $(this);
			var field = $span.data("field");
			$(this).text(observation[field]);
		});
		
		$(".results footer img", $widget)
			.attr("src", observation.image.url);
		
		$(".loading", $widget).fadeOut(function ()
		{
			$(".results", $widget).fadeIn();
		});
	}	
	
}

