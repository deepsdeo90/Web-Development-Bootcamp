//NODE EXERSICE
function average(scr){
	var sum =0;
	var avg;
	var len = scr .length;

	for(var i=0;i<len;i++){
		sum +=scr[i];
	}
	avg = sum/len;
	console.log(Math.round(avg));
}
var scores =[90,98,89,100,100,86,94];
average(scores);

var scores =[40,65,77,82,80,54,73,63,95,49];
average(scores);