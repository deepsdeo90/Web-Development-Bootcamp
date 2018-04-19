var numberOfsqr =6;
var colors=[];
var message = document.querySelector("#message");
//pick random color
var goalColor;
var colordisplay =document.querySelector("#colordisplay"); 
colordisplay.textContent =goalColor;

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

var modebutton =document.querySelectorAll(".mode");
init();
function init(){
	//mode btns
	for(var i=0;i<modebutton.length;i++){
	modebutton[i].addEventListener("click",function(){
		modebutton[0].classList.remove("selected");
		modebutton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numberOfsqr=3:numberOfsqr=6;
		resetFun();
	});

}


for(var i=0;i<squares.length;i++){
	//squares[i].style.background=colors[i];
	//add evetn handler click listener
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor===goalColor){
			message.textContent="Correct";
			changeColor(clickedColor);
			h1.style.background=clickedColor;
			reset.textContent="play again?"
		}else{
			this.style.background="#232323";
			message.textContent="Try Again!";
		}
	});
}
resetFun();	
}

function resetFun(){
	colors = generateRandomColors(numberOfsqr);
	goalColor =pickColor();
	colordisplay.textContent=goalColor;
	message.textContent="";
	reset.textContent="New colors";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];	
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background = "steelblue";

}
/*
easy.addEventListener("click",function(){
	numberOfsqr=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors =generateRandomColors(numberOfsqr);
	goalColor =pickColor();
	colordisplay.textContent=goalColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hard.addEventListener("click",function(){
	numberOfsqr=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors =generateRandomColors(numberOfsqr);
	goalColor =pickColor();
	colordisplay.textContent=goalColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
		
	}
});
*/

var reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
	/*colors = generateRandomColors(numberOfsqr);
	goalColor =pickColor();
	colordisplay.textContent=goalColor;
	message.textContent="";
	this.textContent="New colors";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		h1.style.background = "steelblue";
	}*/
	resetFun();
});

function changeColor(color){
for(var i=0;i<squares.length;i++){
	squares[i].style.background=color;

	}
}
//random 
function pickColor(){
	var randomNum = Math.floor(Math.random() * colors.length + 1);
	console.log(randomNum);
	return colors[randomNum-1];
}
function generateRandomColors(num){
	var arr =[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";

}