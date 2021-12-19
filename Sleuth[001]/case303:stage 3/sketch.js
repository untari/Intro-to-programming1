/*

Officer: 2816450
CaseNum: 303-2-80391635-2816450

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is released:
	- Make crypticLockerCombA equal to the value of mouseX
	- Use the 'constrain' function to prevent crypticLockerCombA from falling below 1 and going above 10

	Whilst the mouse is moving:
	- Increment crypticLockerCombB by 2
	- Use the 'constrain' function to prevent crypticLockerCombB from falling below 5 and going above 19

	When the mouse button is released:
	- Make crypticLockerCombC equal to the value of mouseX
	- Use the 'max' function to prevent crypticLockerCombC from falling below 3

	When any key is pressed:
	- Decrement crypticLockerCombD by 1
	- Use the 'max' function to prevent crypticLockerCombD from falling below 4

	When the mouse button is released:
	- Make crypticLockerCombE equal to the value of mouseY
	- Use the 'min' function to prevent crypticLockerCombE from going above 70



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var crypticLockerCombA;
var crypticLockerCombB;
var crypticLockerCombC;
var crypticLockerCombD;
var crypticLockerCombE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	crypticLockerCombA = 0;
	crypticLockerCombB = 0;
	crypticLockerCombC = 0;
	crypticLockerCombD = 0;
	crypticLockerCombE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
// - Make crypticLockerCombA equal to the value of mouseX
// 	- Use the 'constrain' function to prevent crypticLockerCombA from falling below 1 and going above 10

// 	Whilst the mouse is moving:
// 	- Increment crypticLockerCombB by 2
// 	- Use the 'constrain' function to prevent crypticLockerCombB from falling below 5 and going above 19

// 	When the mouse button is released:
// 	- Make crypticLockerCombC equal to the value of mouseX
// 	- Use the 'max' function to prevent crypticLockerCombC from falling below 3

// 	When any key is pressed:
// 	- Decrement crypticLockerCombD by 1
// 	- Use the 'max' function to prevent crypticLockerCombD from falling below 4

// 	When the mouse button is released:
// 	- Make crypticLockerCombE equal to the value of mouseY
// 	- Use the 'min' function to prevent crypticLockerCombE from going above 70




function mouseReleased()
{
	crypticLockerCombA = mouseX;
	crypticLockerCombA  = constrain(crypticLockerCombA, 1, 10);

	crypticLockerCombC = mouseX;
	crypticLockerCombC = max(crypticLockerCombC, 3)

	crypticLockerCombE = mouseY;
	crypticLockerCombE = min(crypticLockerCombE, 70);
}
function mouseMoved()
{
	crypticLockerCombB += 2;
	crypticLockerCombB = constrain(crypticLockerCombB, 5, 19);
}

function keyPressed()
{
	crypticLockerCombD -= 1;
	crypticLockerCombD = max(crypticLockerCombD, 4);
}
///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,crypticLockerCombA, 13);
	pop();

	push();
	translate(120,380);
	drawDial(140,crypticLockerCombB, 26);
	pop();

	push();
	translate(280,170);
	drawDial(140,crypticLockerCombC, 18);
	pop();

	push();
	translate(280,380);
	drawDial(140,crypticLockerCombD, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(crypticLockerCombE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
