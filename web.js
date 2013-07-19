var express = require('express');

Bvar app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fs = require ('fs');
  var buf = new Buffer(100);
  buf = fs.readFileSync('index.html');

  response.send(buf.toString('utf8',0,buf.length));
	
});

var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/img'));

app.listen(port, function() {
  console.log("Listening on " + port);
});
