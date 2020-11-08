var css = document.querySelector("h3");
var deg= document.getElementById("deg");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient()
{
	body.style.background = "linear-gradient("+deg.value+"deg,"+ color1.value +", "+ color2.value +")";
	console.log(deg.value);
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
deg.addEventListener("input", setGradient);
