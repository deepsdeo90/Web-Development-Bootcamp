function reverse(list){
	for(var i=list.length-1;i>=0;i--){
		console.log(list[i]);
	}
}
function isUniform(list){
	var first =list[0];
	for(var i=1;i<list.length;i++){
		if(list[i]!==first)
			return false;
	}
	return true;
/*
	var first =list[0];
	list.forEach(function(item){
		if(item!==first){
			return false;
		}
	});
	return true;
	*/

}
function sumArray(list){

	var sum=0;
	list.forEach(function(item){
		sum+=item;
	});
	return sum;
}

function max(list){
	var max=list[0];
	for(var i=1;i<list.length;i++){
		if(list[i]>max){
			max=list[i]
		}
	}
	return max;
}
console.log("REVERSE ARRAY");
reverse([1,2,3,4]);

console.log("IS UNIFORM")
console.log(isUniform([1,2,3,4]));
console.log(isUniform([1,1,1,4]));
console.log(isUniform([4,4,4,4]));

console.log("SUM OF ARRAY");
console.log(sumArray([1,2,3,4]));
console.log(sumArray([1,1,1,4]));
console.log(sumArray([4,4,4,4]));

console.log("MAXIMUM")
console.log(max([1,2,3,4]));
console.log(max([1,1,1,4]));
console.log(max([4,4,4,4]));
console.log(max([4,-100,]));