function WeatherWidget($widget)
{
	this.update = function()
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport();
	};
	
	function getWeatherReport() {
		//not implemented
	}
	
	
}