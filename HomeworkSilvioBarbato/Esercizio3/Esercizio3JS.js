var somma=document.getElementById("somma");
var sottrazione=document.getElementById("sottrazione");
var divisione=document.getElementById("divisione");
var moltiplicazione=document.getElementById("moltiplicazione");

somma.addEventListener('click', function(){
	var somma1=parseInt(document.getElementById("num1").value);
	var somma2=parseInt(document.getElementById("num2").value);
	var ris=somma1+somma2;
	document.getElementById("ris").innerText=ris;
});

sottrazione.addEventListener('click', function(){
	var sottrazione1=parseInt(document.getElementById("num1").value);
	var sottrazione2=parseInt(document.getElementById("num2").value);
	var ris=sottrazione1-sottrazione2;
	document.getElementById("ris").innerText=ris;
});

divisione.addEventListener('click', function(){
	var divisione1=parseInt(document.getElementById("num1").value);
	var divisione2=parseInt(document.getElementById("num2").value);
	var ris=divisione1/divisione2;
	document.getElementById("ris").innerText=ris;
});

moltiplicazione.addEventListener('click', function(){
	var molt1=parseInt(document.getElementById("num1").value);
	var molt2=parseInt(document.getElementById("num2").value);
	var ris=molt1*molt2;
	document.getElementById("ris").innerText=ris;
});