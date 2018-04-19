var mongoose = require("mongoose");
//connect 
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name:String,
	age:Number,
	temperament:String
});

var Cat = mongoose.model("Cat",catSchema);

//add new record
/*var george = new Cat({
	name:"Mrs. Norris",
	age:7,
	temperament:"Evil"
});
george.save(function(err,cat){
	if(err){
		console.log("Something went wrong");
	}else{
		console.log("Record added");
		console.log(cat);
	}
});*/

Cat.create({
	name:"Snow White",
	age:15,
	temperament:"Bland"
},function(err,cat){
	if(err){
		console.log("Error in adding "+err);
	}
	else{
		console.log(cat);
	}
});
//retire all records
Cat.find({},function(err,cats){
	if(err){
		console.log("Error "+err);
	}
	else{
		console.log(cats);
	}
});
