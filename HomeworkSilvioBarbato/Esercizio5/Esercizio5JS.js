var nomi=["Silvio", "Vincenzo", "Andrea"];
document.getElementById('but').addEventListener('click', function(){
	var name=document.getElementById('in').value;
	var trovato= false;
	for(var i=0; i<nomi.length; i++){
		if(name.toString() === nomi[i]){
			trovato=true;
		}
	}
	if(trovato===true){
		document.getElementById('ris').innerText="Puoi accedere";
	}else{
		document.getElementById('ris').innerText="Non puoi accedere";
	}
});