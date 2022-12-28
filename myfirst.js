var express = require('Express');
var app = express();
app.get('/', function (req, res) {
res.send('Hello World! Welcome to express js');
});
var server = app.listen(8080, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Express app listening at http://%s:%s', host, port);
});