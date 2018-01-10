function isEven(num){
	if(num%2===0)
		return true;
	return false;
}
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(num){
	var ans=1;
	for(var i=num;i>1;i--){
		ans = ans*i;
	}
	return ans;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kababToSnake(str){
	return str.replace(/-/g,"_");
}

console.log(kababToSnake("hello-world"));
console.log(kababToSnake("hello-world-agian"));