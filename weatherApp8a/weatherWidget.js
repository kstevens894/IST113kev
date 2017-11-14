function WeatherWidget($widget)
{
	this.update = function()
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport();
	};
	
	function getWeatherReport() 
	{
		$.get("data/weather.xml")
			.done(function(data) {
				populateWeather(data);
			})
			 .fail(function(jqXHR, textStatus, errorThrown) {
				 showError(errorThrown);
			 });
	}
	
	
}