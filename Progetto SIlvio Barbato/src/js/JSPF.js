const $ = require('jquery');

const Mustache= require('Mustache');
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





		/*$('#art1').append("<h2>" + result[0].text + "</h2>");
        $('#art1').append("<img src=" + result[1].text + ">");
        $('#art1').append("<span class="+"'label label-primary'"+">" + result[2].text + "</span>");  
        $('#art1').append("<p>" + result[3].text + "</p>");
        /*$('#art1').append("<span class="+"'like btn btn-light'>"+ result[4].text +"</span>");*/
		
		/*$('#art2').append("<h2>" + result[4].text + "</h2>");
        $('#art2').append("<img src=" + result[5].text + ">");
        $('#art2').append("<span class="+"'label label-primary'"+">" + result[6].text + "</span>");  
        $('#art2').append("<p>" + result[7].text + "</p>");
        /*$('#art2').append("<span class="+"'like btn btn-light'>"+ result[9].text +"</span>");*/

        /*$('#art3').append("<h2>" + result[8].text + "</h2>");
        $('#art3').append("<img src=" + result[9].text + ">");
        $('#art3').append("<span class="+"'label label-primary'"+">" + result[10].text + "</span>");  
        $('#art3').append("<p>" + result[11].text + "</p>");
        /*$('#art3').append("<span class="+"'like btn btn-light'>"+ result[14].text +"</span>");*/

        /*$('#art4').append("<h2>" + result[12].text + "</h2>");
        $('#art4').append("<img src=" + result[13].text + ">");
        $('#art4').append("<span class="+"'label label-primary'"+">" + result[14].text + "</span>");  
        $('#art4').append("<p>" + result[15].text + "</p>");
        /*$('#art4').append("<span class="+"'like btn btn-light'>"+ result[19].text +"</span>");*/
	},
	error: function(result){
		console.log('error');
	}
});
};


