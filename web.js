var express = require('express');

var app = express.createServer(express.logger());

var note = Buffer(fs.readFileSync('index.html', 'utf-8'));
text = note.toString('utf-8');

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
