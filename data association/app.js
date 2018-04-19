var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/data_association");
//post

//user schema
var postSchema = new mongoose.Schema({
	title:String,
	content:String
});

//model
/*var Post = mongoose.model("Post",postSchema);
//create a user
var newPost = new Post({
	title:"My first blog post",
	content:"This is lorem ipsum dummy text"
});
newPost.save(function(err,newPost){
	if(err){
		console.log(err);
	}else{
		console.log(newPost);
	}
});*/


//user schema
var userSchema = new mongoose.Schema({
	email:String,
	name:String,
	post:[postSchema]
});

//model
var User = mongoose.model("User",userSchema);
//create a user
/*var newUser = new User({
	email:"akshay@itu.edu",
	name:"Akshay",
	post:[
		{
			title:"My first blog post from akshay",
			content:"This is lorem ipsum dummy text from akshay"
		}
	]
});
newUser.save(function(err,newUser){
	if(err){
		console.log(err);
	}else{
		console.log(newUser);
	}
});*/
//find user and add post
User.findOne({name:"Dipali"},function(err,foundUser){
	if(err){
		console.log(err);
	}else{
		foundUser.post.push({
			title:"Another blog post",
			content:"This time from dipali"
		});
		foundUser.save(function(err,user){
			if(err){
				console.log(err);
			}else{
				console.log(user);
			}
		});
		
	}
});

