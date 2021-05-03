var x = 0
function add() {
	// var num = document.getElementById("num").innerHTML.substring(7, 8);
	var num = document.getElementsByTagName("h1")[0].innerHTML.substring(7, 8);
	// alert("" + num);
	x++;
	num = x;

	document.getElementById("num").innerHTML = "Score: " + num;
}