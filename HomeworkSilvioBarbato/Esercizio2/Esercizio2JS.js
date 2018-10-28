function quadrato(){
	var array= new Array();
	for( var i=0; i<16; i++){
		array[i]=i*i;
	}
	return array;
}

document.getElementById("quadrato").innerHTML=quadrato();
document.getElementById("fine_esercizio2").innerHTML= "Fine eleborazione";