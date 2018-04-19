var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");

var input = document.querySelector("input");
var textwinningscore = document.querySelector("#winningscore");

var gameOver =false;

var winningScore =5;

var p1Score = 0;

var p2Score = 0;

p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1score===winningScore){
			console.log("game over!!");
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent=p1Score;	
	}
});

p2.addEventListener("click",function(){
	if(!gameOver){

	p2Score++;
	if(p2score===winningScore){
			console.log("game over!!");
			p2display.classList.add("winner");
			gameOver = true;
			}
	p2display.textContent=p2Score;	
	}
});

reset.addEventListener("click",reset);

input.addEventListener("change",function(){
	winningScore = Number(input.value);
	textwinningscore.textContent=input.value;
	reset();
})

function reset(){
		p1score=0;
	p2score=0;
	p1display.textContent=p1Score;	
	p2display.textContent=p2Score;
p1display.classList.remove("winner");		
p2display.classList.add("winner");
gameOver=false;

}