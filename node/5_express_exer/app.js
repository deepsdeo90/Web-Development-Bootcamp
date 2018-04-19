var express = require("express");
var app = express();
//visting "/" should print "Hi there , welcome to my assignment!!"
app.get("/",function(req,res){
	res.send("Hi there , welcome to my assignment!!");
});

//visiting "/speak/pig" should print "The pig says 'Oink"
app.get("/speak/:animal",function(req,res){
	var sound;
	var animal = req.params.animal;
/*
	if(animal === "dog"){
		sound="Woof Woof!";
	}
	if(animal === "pig"){
		sound="Oink";
	}
	if(animal === "cow"){
		sound="Moo";
	}*/

	var sounds ={
		pig:"Oink",
		cow:"Moo",
		cat:"I hate you"
	}
	res.send("The "+animal+" says "+sounds[animal]);
});

//visiting "repeat/hello/3" should print "hello hello hello"
app.get("/:str/:num",function(req,res){
	//convert to number
	var num = Number(req.params.num);
	var output ="";
	for(var i=0;i<num;i++){
		output = output + " "+ req.params.str;   
	}
	res.send(output);
});

//for other urls
app.get("*",function(req,res){
	res.send("page not found!!!!!");
});

//listen to port 
app.listen("3000",function(){
	console.log("You are listening to port  3000");
});