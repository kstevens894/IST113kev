"use strict";


// using a function contructor form to create an object
function MyWeather()
{
	var weatherWidget = new WeatherWidget($("#weather-widget")),
	version = "8.2";

	// creating a private function
	function setStatus()
	{
		$("#weather-widget").fadeIn();
		weatherWidget.update();
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		$("#getWeather").click(setStatus);
	};
	function getLocation()
	{
		if (navigator.geoLocation)
		{
			navigator.geoLocation.getCurrentPosition(
			function(position)
			{
				$("#latitude").val(position.coords.latitude);
				$("#longitude").val(position.coords.longitude);
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
		}
	}
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyWeather();
	window.app.start();
});
