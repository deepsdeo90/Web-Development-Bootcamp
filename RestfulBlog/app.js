var  express    = require("express"),
	 methodOverride = require("method-override"),
     expressSanitizer = require("express-sanitizer"),
     bodyParser = require("body-parser"),
     mongoose   = require("mongoose"),
     app        = express();

//APP CONFIG
mongoose.connect("mongodb://localhost/Restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created: {type:Date,  default:Date.now}
});

var Blog = mongoose.model("Blog",blogSchema);
/*
Blog.create({
	title:"Test Blog",
	image:"data:image/png;base64,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",
	body:"This is my first blog in restful"
});*/

//RESFULT ROUTES
//INDEX
app.get("/",function(req,res){
	res.redirect("/blogs");
});
//NEW ROUTE
app.get("/blogs/new",function(req,res){
	res.render("new");
});
//CREATE ROUTE
app.post("/blogs",function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog,function(err,newBlog){
		if(err){
			res.render("new");
		}else{

			res.redirect("/blogs");
		}
	})
});
//SHOW ROUTE
app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show",{blog:foundBlog});
		}
	});
});
app.get("/blogs",function(req,res){
	Blog.find({},function(err,blogs){
		if(err){
			console.log("Erroe in find");
		}else{
			res.render("index",{blogs:blogs});		
		}
	});
	
});
//EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("edit",{blog:foundBlog});
		}
	});

});
//UPDATE ROUTE
app.put("/blogs/:id",function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,upatedBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs/"+req.params.id);
		}
	});
});

//DELETE ROUTE
app.delete("/blogs/:id",function(req,res){
	Blog.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs");	
		}
	});

});
app.listen("3000",function(){
	console.log("Server connected on port 3000!");
});

     