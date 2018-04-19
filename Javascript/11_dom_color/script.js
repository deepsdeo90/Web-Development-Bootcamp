var btn = document.querySelector("button");
var body = document.querySelector("body");
if(btn){
	btn.addEventListener("click",function(){
	body.classList.toggle("purple");
});

}
/*
btn.addEventListener("click",function(){
	body.classList.toggle("purple");

})*/