var nodeRestful = require('node-restful');

module.exports = function(app,route) {

var rest = nodeRestful.model(
	'movie',
	app.models.movie
	).methods(['get','put','post','delete']);

// Register this End Point with the Application
 rest.register(app,route);

 // Return middleware.
 return function(req,res,next){
 	next();
 };

};