let express = require('express');
let app = express();
let ejs = require('ejs');
let bodyparser = require('body-parser');
let path = require('path');
var mongojs = require('mongojs');
var mclient = require('mongodb').MongoClient;


//var url = 'mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan?authMechanism=SCRAM-SHA-1';
//var db = mongojs(url,['contact'],{authMechanism: 'ScramSHA1'});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use( require('request-param')() )
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
});
});


	app.post('/addContact',(req,res)=>{
		console.log(req.body);
		var db = '';
mclient.connect('mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan',(err,database)=>{
	db = database;
	 db.collection('contact').insert(req.body,(err,doc)=>{
		if(err){
			console.log(err);
res.json({success:'0'});
		}

else{
	console.log('success');
	console.log(doc);
	res.json([{success:'1'}]);
}
	 })
	})
	});

	app.get('/getOne',(req,res)=>{
		var db = '';
		mclient.connect('mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan',(err,database)=>{
			if(err)
			{
			res.end('error');
			}
			else{
			db = database;
			console.log('fff')
			console.log(req.param('id'));
			var ObjectID = require("bson-objectid");

			db.collection('contact').find({"_id":ObjectID(req.param('id'))}).toArray((err,dat)=>{
				if(err)
				console.log(err);
				else{
			console.log(dat)
			res.json(dat);
				}


			});

		}
		})
	})

	app.post('/updateInfo',(req,res)=>{
		console.log('body')
		var db = '';
mclient.connect('mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan',(err,database)=>{
db = database;
var ObjectID = require("bson-objectid");
 db.collection('contact').updateOne({"_id":ObjectID(req.body.id)},{name:req.body.name,email:req.body.email},(err,doc)=>{
	if(err){
		console.log(err);
res.json({success:'0'});
	}

else{
console.log('success');
console.log(doc);
res.json([{success:'1'}]);
}
 })
})

	})


app.get('/deleteContact',(req,res)=>{
	var db = '';
	mclient.connect('mongodb://Ilankumaran:123456@ds127993.mlab.com:27993/meanstack-ilan',(err,database)=>{
		if(err)
		{
		res.end('error');
		}
		else{
		db = database;
		console.log('fff')
		console.log(req.param('id'));
		var ObjectID = require("bson-objectid");

		db.collection('contact').deleteOne({"_id":ObjectID(req.param('id'))},function(err,dat){
			if(err)
			console.log(err);
			else{

		res.json({success:'1'});
			}


		});

	}
	})
})
