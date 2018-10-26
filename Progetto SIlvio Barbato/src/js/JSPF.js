const $ = require('jquery');

var val=document.getElementsByClassName('like');

for (var i=0; i<val.length; i++){
	val[i].addEventListener('click', function(){

		if(this.style.backgroundColor === "green"){
			this.style.color="black";
			this.style.backgroundColor="white";
		}else{
			this.style.backgroundColor="green";
			this.style.color="white";
		}
	});
}



var val2=document.getElementById('cookie');

function chiudiCookie(){

	document.getElementById('cookie').style.display='none';

};
val2.addEventListener('click', chiudiCookie);

/*
$('#cok').on('click', () =>{
	$('#cookie').hide();
})
*/
/*
function doAjax(){
	$.ajax({
		url: 'src/file.json',
	method: "POST"
})
};
*/

$.ajax({
	url: 'src/file.json',
	method: "GET",
	success: function(result){
		//console.log('success');
		$('#jx').append(result);
	},
	error: function(result){
		console.log('error');
	}
});

