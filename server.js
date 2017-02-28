var express = require('express');
var bodyParser= require('body-parser');

var app= express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res)
{
res.json("hello form json ");
});

app.listen(3500,function(){
    console.log("listening to port : 3500");
});