// Create web server
var http = require('http');

// Create a web server that listens on port 8080
var server = http.createServer(function (req, res) {
  // Check the URL of the request
  if (req.url === '/') {
    // Respond with a simple HTML page
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>This is a simple web server</h1></body></html>');
  } else {
    // Respond with a 404 error
    res.writeHead(404);
    res.end('The requested page was not found');
  }
});

// Listen for incoming requests
server.listen(8080);
console.log('Web server listening on port 8080');
