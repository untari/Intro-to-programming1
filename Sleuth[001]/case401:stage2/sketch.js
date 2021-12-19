/*

Officer: 2816450
CaseNum: 401-1-32388546-2816450

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When snakeVenom goes above 0.52 and warfarin dips below 0.29, decrement sulphates by 0.02
	- When chlorine goes above 0.57, increase sulphates by 0.01
	- If chlorine goes above 0.62 and warfarin goes above 0.7, decrement antivenom by 0.05
	- When snakeVenom dips below 0.75, increase antivenom by 0.05
	- If chlorine dips below 0.39 or snakeVenom dips below 0.72, decrease methylene by 0.05
	- When warfarin goes above 0.64 or sarin dips below 0.39, try increasing methylene by 0.05
	- When snakeVenom goes above 0.56 or chlorine dips below 0.32, decrement calciumChloride by 0.02
	- When sarin goes above 0.43 or warfarin dips below 0.69, increase calciumChloride by 0.05


Your conditional statements should:

consider the following poisons:

	- chlorine
	- warfarin
	- sarin
	- snakeVenom


and modify the following antidotes:

	- sulphates
	- antivenom
	- methylene
	- calciumChloride


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var warfarin;
var sarin;
var snakeVenom;


//Declare the antidote variables
var sulphates;
var antivenom;
var methylene;
var calciumChloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	warfarin = 0.5;
	sarin = 0.5;
	snakeVenom = 0.5;
	sulphates = 0.5;
	antivenom = 0.5;
	methylene = 0.5;
	calciumChloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
	// - When snakeVenom goes above 0.52 and warfarin dips below 0.29, decrement sulphates by 0.02
	// - When chlorine goes above 0.57, increase sulphates by 0.01
	// - If chlorine goes above 0.62 and warfarin goes above 0.7, decrement antivenom by 0.05
	// - When snakeVenom dips below 0.75, increase antivenom by 0.05
	// - If chlorine dips below 0.39 or snakeVenom dips below 0.72, decrease methylene by 0.05
	// - When warfarin goes above 0.64 or sarin dips below 0.39, try increasing methylene by 0.05
	// - When snakeVenom goes above 0.56 or chlorine dips below 0.32, decrement calciumChloride by 0.02
	// - When sarin goes above 0.43 or warfarin dips below 0.69, increase calciumChloride by 0.05

	if(snakeVenom > 0.52 && warfarin < 0.29)
	{
		sulphates -= 0.02;
	}
	if(chlorine > 0.57)
	{
		sulphates += 0.01;
	}
	if(chlorine > 0.62 && warfarin > 0.7)
	{
		antivenom -= 0.05
	}
	if(snakeVenom < 0.75)
	{
		antivenom += 0.05;
	}
	if(chlorine < 0.39 || snakeVenom < 0.72 )
	{
		methylene -= 0.05;
	}
	if(warfarin > 0.64 || sarin < 0.39)
	{
		methylene += 0.05;
	}
	if(snakeVenom > 0.56 || chlorine < 0.32)
	{
		calciumChloride -= 0.02;
	}
	if(sarin > 0.43 || warfarin < 0.69)
	{
		calciumChloride += 0.05;
	}
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	warfarin = nextValue(graphs[1],warfarin);
	sarin = nextValue(graphs[2],sarin);
	snakeVenom = nextValue(graphs[3],snakeVenom);


	sulphates = constrain(sulphates, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	methylene = constrain(methylene, 0, 1);
	calciumChloride = constrain(calciumChloride, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(sulphates,50,'sulphates');
	drawBar(antivenom,200,'antivenom');
	drawBar(methylene,350,'methylene');
	drawBar(calciumChloride,500,'calciumChloride');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
