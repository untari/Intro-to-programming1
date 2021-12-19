/*

Officer: 2816450
CaseNum: 401-0-10071275-2816450

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If Amanita_Mushrooms dips below 0.56, reduce aspirin by 0.05
	- When formaldehyde dips below 0.68, increase aspirin by 0.03
	- If Amanita_Mushrooms dips below 0.47, reduce protamine by 0.05
	- If formaldehyde goes above 0.4, try increasing protamine by 0.01
	- If mercury goes above 0.58, try decreasing chalk by 0.02
	- If formaldehyde goes above 0.51, try increasing chalk by 0.01


Your conditional statements should:

consider the following poisons:

	- Amanita_Mushrooms
	- formaldehyde
	- mercury


and modify the following antidotes:

	- aspirin
	- protamine
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var Amanita_Mushrooms;
var formaldehyde;
var mercury;


//Declare the antidote variables
var aspirin;
var protamine;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	Amanita_Mushrooms = 0.5;
	formaldehyde = 0.5;
	mercury = 0.5;
	aspirin = 0.5;
	protamine = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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

	// - If Amanita_Mushrooms dips below 0.56, reduce aspirin by 0.05
	// - When formaldehyde dips below 0.68, increase aspirin by 0.03
	// - If Amanita_Mushrooms dips below 0.47, reduce protamine by 0.05
	// - If formaldehyde goes above 0.4, try increasing protamine by 0.01
	// - If mercury goes above 0.58, try decreasing chalk by 0.02
	// - If formaldehyde goes above 0.51, try increasing chalk by 0.01

	if(Amanita_Mushrooms < 0.56)
	{
		aspirin -= 0.05;
	}
	if(formaldehyde < 0.68)
	{
		aspirin += 0.03;
	}
	if(Amanita_Mushrooms < 0.47)
	{
		protamine -= 0.05;
	}
	if( formaldehyde > 0.4)
	{
		protamine += 0.01;
	}
	if(mercury > 0.58)
	{
		chalk -= 0.02; 
	}
	if(formaldehyde > 0.51)
	{
		chalk += 0.01;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	Amanita_Mushrooms = nextValue(graphs[0],Amanita_Mushrooms);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	mercury = nextValue(graphs[2],mercury);


	aspirin = constrain(aspirin, 0, 1);
	protamine = constrain(protamine, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(protamine,200,'protamine');
	drawBar(chalk,350,'chalk');


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
