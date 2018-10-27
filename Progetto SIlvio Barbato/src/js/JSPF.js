const $ = require('jquery');

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
	$('#cookie').hide();
});


$('.btn, .btn-light').on('click', event =>{
	$(event.currentTarget).toggleClass('btn-light2');
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

$.ajax({
	url: 'src/file.json',
	method: "GET",
	success: function(result){
		$('#art1').append("<h2>" + result[0].text + "</h2>");
        $('#art1').append("<img src=" + result[1].text + ">");
        $('#art1').append("<span class="+"'label label-primary'"+">" + result[2].text + "</span>");  
        $('#art1').append("<p>" + result[3].text + "</p>");
        $('#art1').append("<span class="+"'like btn btn-light'>"+ result[4].text +"</span>");
		
		$('#art2').append("<h2>" + result[5].text + "</h2>");
        $('#art2').append("<img src=" + result[6].text + ">");
        $('#art2').append("<span class="+"'label label-primary'"+">" + result[7].text + "</span>");  
        $('#art2').append("<p>" + result[8].text + "</p>");
        $('#art2').append("<span class="+"'like btn btn-light'>"+ result[9].text +"</span>");

        $('#art3').append("<h2>" + result[10].text + "</h2>");
        $('#art3').append("<img src=" + result[11].text + ">");
        $('#art3').append("<span class="+"'label label-primary'"+">" + result[12].text + "</span>");  
        $('#art3').append("<p>" + result[13].text + "</p>");
        $('#art3').append("<span class="+"'like btn btn-light'>"+ result[14].text +"</span>");

        $('#art4').append("<h2>" + result[15].text + "</h2>");
        $('#art4').append("<img src=" + result[16].text + ">");
        $('#art4').append("<span class="+"'label label-primary'"+">" + result[17].text + "</span>");  
        $('#art4').append("<p>" + result[18].text + "</p>");
        $('#art4').append("<span class="+"'like btn btn-light'>"+ result[19].text +"</span>");
	},
	error: function(result){
		console.log('error');
	}
});




