// var sizes = [4, 9, 10, 5, 110, 95, 40, 40];
// var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// var colours = ["grey", "brown", "blue", "red", "sienna", "pink", "blue", "cyan"];

var planets = [
	{
		size: 4,
		name: "Mercury",
		colour: "grey"
	},
	{
		size: 9,
		name: "Venus",
		colour: "brown"
	},
	{
		size: 10,
		name: "Mars",
		colour: "red"
	},
	{
		size: 110,
		name: "Jupiter",
		colour: "sienna"
	},
	{
		size: 95,
		name: "Saturn",
		colour: "pink"
	},
	{
		size: 40,
		name: "Neptune",
		colour: "cyan"
	}
]

function setup()
{
	createCanvas(1000, 600);
}

function draw()
{
	background(0);
	textAlign(CENTER);
	fill(255);

	for(var i = 0; i < 8; i++)
	{
		fill(planets[i].colour);
		ellipse(50 + i*125, height/2, planets[i].size);
		fill(255);
		text(planets[i].size, 50 + i*125, height/2 + 150);
	}
}