var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine","ejs");
var fri =["Tony","Gem","Mark","Steve","Lily"];
	

app.get("/",function(req,res){
	res.render("home");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends:fri});
});

app.post("/addfriend",function(req,res){
	var newFriend = req.body.newFriend;
	fri.push(newFriend);
	res.redirect("/friends");

});
app.listen("3000",function(){
	console.log("Server  started at 3000!!!");
});