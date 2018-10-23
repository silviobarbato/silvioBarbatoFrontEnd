var element document.getElementByClassName('bot');

for (element=0; step<3; step++){
	element.addEventListener('click', changeColor);
}


function changeColor(){
	document.getElementByClassName('bot').style.color = "red";

}

