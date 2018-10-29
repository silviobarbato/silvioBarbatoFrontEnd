var express= require('express');

var app= express();

app.use(express.static('dist'));
var data= require('./file.json');

app.get('/articoli', function(req, res){
	res.setHeader('Content-Type','application/json');
	res.send(data);
});

app.listen(3000, function (){
	console.log('Example app listening on port 3000');
});

