var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var note = Buffer(fs.readFileSync('.\index.html', 'utf-8'));
var text = note.toString('utf-8', 0, 27);

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
