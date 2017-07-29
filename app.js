let express = require('express');
let app = express();
let ejs = require('ejs');
let bodyparser = require('body-parser');
let path = require('path');
var mongojs = require('mongojs');
var mclient = require('mongodb').MongoClient;

//var url = 'mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan?authMechanism=SCRAM-SHA-1';
//var db = mongojs(url,['contact'],{authMechanism: 'ScramSHA1'});


app.set('views',path.join(__dirname,'views'));
app.set('view engine',ejs);
app.engine('html',require('ejs').renderFile);

app.listen('3000',(req,res)=>{
	console.log('server started');
});
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/api',(req,res)=>{
	var db = '';
mclient.connect('mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan',(err,database)=>{
	db = database;
	 db.collection('contact').find().toArray((errr,arrr)=>{
		 console.log(arrr);
	res.json(arrr);
	});
	
	
	
	
	//res.json(obj);
})	
	//db.contact.find((err,resu)=>{
		//res.json(resu);
		//res.end('gg'+resu);
	//})
	
})

