var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/posts",function(req,res){
	var post =[
		{title:"Ashwini",age:30},
		{title:"Dipali",age:27},
		{title:"Harshal",age:21}
	];
	res.render("post",{post:post});
});

app.get("/fallinlove/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("love",{thingvar:thing});
});

//listen
app.listen("3000",function(){
	console.log("Server started on 3000");
});