/*handle each item of list click event*/
$("ul").on("click","li", function(){
	//strikthrough and grey
	$(this).toggleClass("completed");
})
/*delete item from list*/
$("ul").on("click","li span",function(event){
	//fadeout text & remove entire li
	$(this).parent().fadeOut('slow',function(){
		$(this).remove();
	});
	//stop any other events bubbling up 
	event.stopPropagation();

})
/*add new to do list*/
$("input[type='text']").keypress(function(event){
	//if enter key pressed
	if(event.which === 13){
		//get value from input
		var  todoText = $(this).val();
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+todoText+"</li>");
		//clear input
		$(this).val("");
	}

});
/*toggle plus*/
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})