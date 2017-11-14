"use strict";


// using a function contructor form to create an object
function MyApp()
{
	var weatherWidget = new WeatherWidget ($("#weather-widget")),
		version = "8.1";

	// creating a private function
	function setStatus(message)
	{
		$("#weather-widget").fadeIn();
		weather-widget.update();
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
		$("#WeatherWidget").click(getWeatherReport);
	};
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
