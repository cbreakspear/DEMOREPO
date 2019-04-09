/*
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port); 
*/
var express = require('express');
var path = require('path');
var app = express();

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();


// create a new express server
testservices = require('./routes/testservices');



app.get('/sayHelloTest', testservices.sayHelloTest);
app.get('/', testservices.landPage);

const PORT = process.env.PORT || 1337;
app.listen(PORT,  function() {

	// print a message when the server starts listening
  //console.log("server starting on " + appEnv.url);
  console.log("server starting on : " + PORT);
});