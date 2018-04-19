var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    passportLocal         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
	secret:"This is secret message",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//

app.get("/",function(req,res){
	res.render("home");
});

app.get("/secret",isLoggedIn, function(req,res){
	res.render("secret");
});
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.get("/signup",function(req,res){
		res.render("signup");

});
app.post("/signup",function(req,res){
	User.register(new User({username:req.body.username}), req.body.password,function(err,user){
			if(err){
				console.log(err);
				return res.render("signup");
			}
			passport.authenticate("local")(req,res,function(){
				res.redirect("/secret");
			});
	})
});

app.get("/login",function(req,res){
		res.render("login");

});

app.post("/login",passport.authenticate("local",{
	successRedirect:"/secret",
	failureRedirect:"/login"
}),function(req,res){
	
});

app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");

})
app.listen("3000",function(){
	console.log("Server started at 3000");
})