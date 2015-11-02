var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var _ = require('lodash');
var methodOverride = require('method-override');
var nodeRestful = require('node-restful');

// create An Application
var app = express();


//Add Middleware necessary for REST API's

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


// Add CORS Support
app.use(function(req,res,next) {
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers','Content-Type');
next();
});

/** Testing whether Mean Server Works or Not
app.use('/hello',function(req,res,next){
	res.send('Hello World');
	next();
});

**/






//connect to MongoDb
mongoose.connect('mongodb://127.0.0.1/movie_trailer');
mongoose.connection.once('open',function(){

	app.models = require('./models/index');


	//Load the routes.
var routes = require('./routes');

_.each(routes,function(controller,route){
app.use(route,controller(app,route));
});

	console.log("listening to port 3000");
	app.listen(3000);
})