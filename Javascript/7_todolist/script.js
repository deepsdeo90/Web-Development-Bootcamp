var todos =[];
var input =prompt("What would you like to do?");

while(input!=="quit"){

	if(input==="list"){
		listTodo();
	}
	else if(input==="new"){
		addTodo();
		}
	else if(input==="delete"){
		deleteTodo();
	}
	input =prompt("What would you like to do?");
}
console.log("You quit app");

function listTodo(){
	console.log("*********");
	todos.forEach(function(item,i){
	console.log(i+": "+item);
	});
	console.log("*********");
}
function addTodo(){
	var newtodo = prompt("Enter new item");
	todos.push(newtodo);
	console.log("added!! ");

}
function deleteTodo(){
	var index = prompt("Enter index of item to be deleted");
	todos.splice(index,1);
	console.log("deleted!! ");
}