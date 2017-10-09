var win = false;
var attempts = 0;

function buttonDisplay(){
	
var numb1 = document.getElementById("input").value;
var numb2 = document.getElementById("input2").value;
	
		if(parseInt (numb2) == numb1){
				attempts++;
				alert("YOU WON!!! IT TOOK YOU " + attempts + " attempts");
				win = true;
		}
		if (parseInt (numb2) > numb1){
			attempts++;
			alert("Try again to high");
		}
		if (parseInt (numb2) < numb1){
			attempts++;
			alert("Try again to low");
		}
}
	
	

