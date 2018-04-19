var express = require("express");
//console.log("express");
var app =express();

//display messgae "Hi" on "/"
app.get("/",function(req,res){
	//paramters are objects 
	res.send("Hi there!!");
});
//display message "bye" on "/bye"
app.get("/bye",function(req,res){
	//paramters are objects 
	res.send("BYE BYE");
});
//display message "MEOW" on "/dog"
app.get("/dog/:name",function(req,res){
	//paramters are objects 
	var msg = req.params.name;
	res.send("MEOW "+msg+" !!!");
});
//*
app.get("*",function(req,res){
	res.send("PAGE NOT FOUND");
});
//listen
app.listen('3000',function(){
	console.log("listening on port 3000!");	
});
