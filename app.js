var http = require('http');
var express = require("express");
var app = express();

app.get('/', function(req, res){

    var os = req.headers["user-agent"].split("(")[1].split(")")[0],
    language = req.acceptedLanguages[0],
    ip = req.headers['x-forwarded-for'];
    
    var info = {
    "IP Address": ip,
    "Language": language,
    "OS": os
    
    };

    // res.json(info);
res.end(
    "<html>" +
    "<head><title>Request Header Parser</title></head>" +
    "<body>" +
    "<h1>Request Header Parser</h1>" +
    JSON.stringify(info) + 
    "</body>" +
    "</html>"
    );


});

app.listen(process.env.PORT || 8080);