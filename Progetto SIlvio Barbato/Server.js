var express= require('express');

var app= express();

app.use(express.static('dist'));
var data= require('./file.json');

app.get('/articoli', function(req, res){
	res.setHeader('Content-Type','application/json');
	res.send(data);
});

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./file.json')
const db = low(adapter);


app.post('/articoli', function(req, res){
	const idb=req.body.id;
	var like =(req.body.like ==='true');

	db.get('articoli')
	.find({ id: Number(idb)})
	.assign({like: !like})
	.write();

	res.send('ok');
	
});




app.listen(3000, function (){
	console.log('Example app listening on port 3000');
});

