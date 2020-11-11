var button = document.getElementById("enter");
var clear=document.getElementById("clear");
var input = document.getElementById("userinput");
var deg= document.getElementById("deg");
var colors=document.querySelector("#DIV");
var css = document.querySelector("h3");
var array=[];

function inputLength() {
	return input.value.length;
}

function setGradient(){
document.body.style.background="linear-gradient("+deg.value+"deg,"+ array +")";
css.textContent = document.body.style.background + ";";
}


function createListElement(){
var n=input.value;
console.log(n);
var i;
var apnd = array.length;
for(i=0;i<n;i++)
{
var x= document.createElement("INPUT");
x.setAttribute("id",apnd+i);
x.setAttribute("type","color");
x.setAttribute("value","#00ff00");
document.getElementById("DIV").appendChild(x);
x.addEventListener("input",setGradient,false);
array[apnd+i]=x.value;
}
input.value = "";
}

function removeListAfterClick()
{
var d=document.getElementById("DIV");
if (d.hasChildNodes()) {
  d.removeChild(d.childNodes[0]);
  array.shift();
}
setGradient();
}

function colorValueChange(e){
if(e.target !== e.currentTarget)
{
var elid = e.target.id;
array[elid]=e.target.value;
}
e.stopPropagation();
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
clear.addEventListener("click", removeListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
deg.addEventListener("input", setGradient);
colors.addEventListener("input",colorValueChange,false);

