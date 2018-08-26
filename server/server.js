const express = require('express');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/hello-react';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
	console.log('mongo connect success');
});
const User = mongoose.model('user', new mongoose.Schema({
	name: {type: String, require: true},
	age: {type: Number, require: true}
}));

// User.create({
// 	name: 'Xia',
// 	age: 18
// }, function(err, doc){
// 	if(!err){
// 		console.log(doc);
// 	}else{
// 		console.log(err);
// 	}
// });

// User.deleteMany({age: 18}, function(err, doc){
// 	if(!err){
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })


const app = express();

app.get('/', function(req, res){
	res.send('Hello world');
});

app.get('/data', function(req, res){
	User.find({}, function(err, doc){
		res.json(doc);
	});
	
});

app.listen(9093, function(){
	console.log('Node app start at port 9093');
});