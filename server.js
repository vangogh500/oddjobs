var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req,res) {
	res.type('text/plain');
	res.status(200);
	res.send('home');
});

app.use(function(req,res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(req,res) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port'));
});