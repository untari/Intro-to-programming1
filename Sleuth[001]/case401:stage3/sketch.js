/*

Officer: 2816450
CaseNum: 401-2-17386490-2816450

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When AmanitaMushrooms dips below 0.73 and Spider_Venom goes above 0.41, try decreasing opioids by 0.04
	- When formaldehyde dips below 0.38 and hemlock dips below 0.28, or on the other hand, strychnine goes above 0.33, increase opioids by 0.04
	- When either AmanitaMushrooms goes above 0.72, botulinium dips below 0.32, or perhaps formaldehyde goes above 0.3, decrement glucagon by 0.01
	- When hemlock dips below 0.6, whilst at the same time, Spider_Venom dips below 0.71 or strychnine goes above 0.31, increase glucagon by 0.03
	- If formaldehyde goes above 0.61 and hemlock dips below 0.46, try decreasing paracetamol by 0.04
	- When either Spider_Venom dips below 0.32, strychnine goes above 0.69, or perhaps botulinium dips below 0.49, try increasing paracetamol by 0.05
	- If formaldehyde dips below 0.43 or strychnine dips below 0.42, decrease sodium_bicarbonate by 0.04
	- When Spider_Venom goes above 0.74, botulinium goes above 0.46, and also AmanitaMushrooms dips below 0.46, try increasing sodium_bicarbonate by 0.05


Your conditional statements should:

consider the following poisons:

	- AmanitaMushrooms
	- formaldehyde
	- hemlock
	- strychnine
	- botulinium
	- Spider_Venom


and modify the following antidotes:

	- opioids
	- glucagon
	- paracetamol
	- sodium_bicarbonate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var AmanitaMushrooms;
var formaldehyde;
var hemlock;
var strychnine;
var botulinium;
var Spider_Venom;


//Declare the antidote variables
var opioids;
var glucagon;
var paracetamol;
var sodium_bicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	AmanitaMushrooms = 0.5;
	formaldehyde = 0.5;
	hemlock = 0.5;
	strychnine = 0.5;
	botulinium = 0.5;
	Spider_Venom = 0.5;
	opioids = 0.5;
	glucagon = 0.5;
	paracetamol = 0.5;
	sodium_bicarbonate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	// When AmanitaMushrooms dips below 0.73 and Spider_Venom goes above 0.41, try decreasing opioids by 0.04
	if(AmanitaMushrooms < 0.73 && Spider_Venom > 0.41)
	{
		opioids -= 0.04;
	}
	// 	- When formaldehyde dips below 0.38 and hemlock dips below 0.28, or on the other hand, strychnine goes above 0.33, increase opioids by 0.04
	if(formaldehyde < 0.38 && hemlock < 0.28 || strychnine > 0.33)
	{
		opioids += 0.04;
	}
	// 	- When either AmanitaMushrooms goes above 0.72, botulinium dips below 0.32, or perhaps formaldehyde goes above 0.3, decrement glucagon by 0.01
	if(AmanitaMushrooms > 0.72 || botulinium < 0.32 || formaldehyde > 0.3 )
	{
		glucagon -= 0.01;
	}
	// 	- When hemlock dips below 0.6, whilst at the same time, Spider_Venom dips below 0.71 or strychnine goes above 0.31, increase glucagon by 0.03
	if(hemlock < 0.6 || Spider_Venom < 0.71 || strychnine > 0.31)
	{
		glucagon += 0.3;
	}
	// 	- If formaldehyde goes above 0.61 and hemlock dips below 0.46, try decreasing paracetamol by 0.04
	if(formaldehyde > 0.61 && hemlock < 0.46)
	{
		paracetamol -= 0.04;
	}
	// 	- When either Spider_Venom dips below 0.32, strychnine goes above 0.69, or perhaps botulinium dips below 0.49, try increasing paracetamol by 0.05
	if(Spider_Venom < 0.32 || strychnine > 0.69 || botulinium < 0.49)
	{
		paracetamol += 0.05;
	}
	// 	- If formaldehyde dips below 0.43 or strychnine dips below 0.42, decrease sodium_bicarbonate by 0.04
	if(formaldehyde < 0.43 || strychnine < 0.42)
	{
		sodium_bicarbonate -= 0.04;
	}
	// 	- When Spider_Venom goes above 0.74, botulinium goes above 0.46, and also AmanitaMushrooms dips below 0.46, try increasing sodium_bicarbonate by 0.05
	if(Spider_Venom > 0.74 && botulinium > 0.46 && AmanitaMushrooms < 0.46)
	{
		sodium_bicarbonate += 0.05;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	AmanitaMushrooms = nextValue(graphs[0],AmanitaMushrooms);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	hemlock = nextValue(graphs[2],hemlock);
	strychnine = nextValue(graphs[3],strychnine);
	botulinium = nextValue(graphs[4],botulinium);
	Spider_Venom = nextValue(graphs[5],Spider_Venom);


	opioids = constrain(opioids, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	sodium_bicarbonate = constrain(sodium_bicarbonate, 0, 1);


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
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('hemlock: ' + nf(hemlock,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(opioids,50,'opioids');
	drawBar(glucagon,200,'glucagon');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(sodium_bicarbonate,500,'sodium_bicarbonate');


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
