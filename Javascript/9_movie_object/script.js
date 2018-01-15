var movie=[
{
	title:"In Burges",
	rating:5,
	IsWatched:true
},
{
	title:"Frozen",
	rating:4.5,
	IsWatched:false
},
{
	title:"Mad Max Fury Road",
	rating:5,
	IsWatched:true
},
{
	title:"Les Miserables",
	rating:3.5,
	IsWatched:false
}

];

movie.forEach(function(item){
	var output="You have";
	if(!item.IsWatched){
		output+=" not";
	}
	output +=" watched ";
	output += "\""+item.title+"\" - "+item.rating+" stars";
	console.log(output);
});