var x = 0
function add() {
	// var num = document.getElementById("num").innerHTML.substring(7, 8);
	var num = document.getElementsByTagName("h1")[0].innerHTML.substring(7, 8);
	// alert("" + num);
	x++;
	num = x;

	document.getElementById("num").innerHTML = "Score: " + num;

	if (x == 30) {
		alert("Good!");
	}

	else if (x == 60) {
		alert("Nice!");
	}

	else if (x == 90) {
		alert("Awesome!");
	}

	else if (x == 120) {
		alert("Epic!");
	}

	else if (x == 150) {
		alert("Godlike!");
	}
}