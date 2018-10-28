function addizione(num1, num2){
	return num1+num2;
}

function sottrazione(num1, num2){
	return num1-num2;
}
function divisione(num1, num2){
	return num1/num2;
}
function moltiplicazione(num1, num2){
	return num1*num2;
}
var num1=3;
var num2=2;

document.getElementById("addizione").innerHTML=addizione(num1,num2);
document.getElementById("sottrazione").innerHTML=sottrazione(num1,num2);
document.getElementById("divisione").innerHTML=divisione(num1, num2);
document.getElementById("moltiplicazione").innerHTML=moltiplicazione(num1, num2);