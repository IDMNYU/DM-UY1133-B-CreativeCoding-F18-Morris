// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  console.log("hello world");
};

// Import the HTTP module
var http = require('http');

// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8000
server.listen(8000);

console.log('Server started on port 8000');