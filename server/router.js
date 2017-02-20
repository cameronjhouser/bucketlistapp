module.exports = function(app){

	app.get('/', function(req, res, next){
		res.send("HELLO HOMEPAGE... buddy old pall!");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, Thanks for signing up!");
	})

}