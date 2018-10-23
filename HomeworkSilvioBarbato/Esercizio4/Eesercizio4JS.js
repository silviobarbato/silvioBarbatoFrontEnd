document.getElementById('op').addEventListener('click', function(){
	var p=document.getElementById("quadrato").value;
	var vettore=[];
	for(var i=0; i<p; i++){
		vettore[i]=i*i;
	}
	document.getElementById('ris').innerText=vettore;
	document.getElementById("fine_esercizio4").innerHTML= "Fine eleborazione";
});