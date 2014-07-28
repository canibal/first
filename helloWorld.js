// web.js

var express = require("express");
var logfmt = require("logfmt");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
