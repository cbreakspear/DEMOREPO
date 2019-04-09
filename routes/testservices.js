
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();



exports.sayHelloTest = function(req, res) {
   
    console.log('Reaching service for testing container');

    //res.send('You have reached the SERVICE :)');
    res.send(JSON.stringify('Reaching service for testing container'));

};

exports.landPage = function(req, res) {
    
     console.log('Landing Page');
 
     res.sendFile(__dirname + '/Test.html');
 };

