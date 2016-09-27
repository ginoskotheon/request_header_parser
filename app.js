var http = require('http');
var express = require("express");
var app = express();
var path = require('path');

app.get('/', function(req, res){

    var os = req.headers["user-agent"].split("(")[1].split(")")[0],
    language = req.headers['accept-language'],
    ip = req.headers['x-forwarded-for'];
    
    var info = {
    "IP Address": ip,
    "Language": language,
    "OS": os
    
    };

    // res.json(info);
res.send(
    "<html>" +
    "<head><title>Request Header Parser</title></head>" +
    "<body>" +
    "<h1>Request Header Parser</h1>" +
    JSON.stringify(info) + 
    "</body>" +
    "</html>"
    );


});

app.listen(8080, function(){
    console.log('Example app listening on port 8080!');
});