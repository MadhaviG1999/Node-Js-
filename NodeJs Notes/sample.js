var http = require('http');
var dt = require('./samplemodule');

http.createServer(function (req, res) {
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);