var $ =window.jQuery= require('jquery');
const bootstrap = require('bootstrap');
const Mustache= require('Mustache');
const slick= require('slick-carousel');
doAjax();

/*
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
*/

/*
var val2=document.getElementById('cookie');

function chiudiCookie(){

	document.getElementById('cookie').style.display='none';

};
val2.addEventListener('click', chiudiCookie);
*/

$('#cok').on('click', () =>{
	$('#cookie').fadeOut();
});

	
/*$('.btn-light').on('click', event =>{
	$(event.currentTarget).toggleClass('btn-light2');
});*/

$(document).ajaxComplete(function(){
$('.btn-light').on('click', event =>{
	$(event.currentTarget).toggleClass('btn-light2');
});
});
/*
$.ajax({
	url: 'src/file.json',
	method: "GET",
	success: function(result){
		for(var i=0; i<result.length; i++){
			$('#jx').append(result[i].text);
		}
		
	},
	error: function(result){
		console.log('error');
	}
});*/

/*
function doAjax(){
$.ajax({
	url: 'src/file.json',
	method: "GET",
	dataType: 'json',
	success: function(result){

		var template= $('#template').html();

		var render = Mustache.render(template, result);
		$('#content').html(render);





		
	},
	error: function(result){
		console.log('error');
	}
});
};*/

function doAjax(){
$.ajax({
	url: '/articoli',
	method: "GET",
	dataType: 'json',
	success: function(result){

		var template= $('#template').html();

		var render = Mustache.render(template, result);
		//console.log(render);
		$('#content').html(render);

	},
	error: function(result){
		console.log('error');
	}
});



};

$('.pippo').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

