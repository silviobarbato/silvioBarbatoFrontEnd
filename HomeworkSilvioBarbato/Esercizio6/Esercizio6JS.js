var color=['red', 'blue', 'orange', 'yellow', 'black'];
var i=0;
var intervallo;
var riprendi;

document.getElementById('body').onload=function(){
	intervallo=window.setInterval(myFunction, 15000);
};

function myFunction(){
	if(i===color.legth){
		i=0;
		document.getElementById('body').style.backgroundColor=color[i];
	}else{
		document.getElementById('body').style.backgroundColor=color[i];
		i++;
	}
}

document.getElementById('f').addEventListener('click', function(){
	clearInterval(intervallo);

	var temp=document.getElementById('body').style.backgroundColor;
	document.getElementById('body').style.backgroundColor=temp;
	riprendi=i;
});

document.getElementById('c').addEventListener('click', function(){
	intervallo=window.setInterval(myFunction, 15000);
});