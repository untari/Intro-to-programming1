/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyon;
var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	mountains = [700, 850, 3000, 4000];

	treePos_x = [100, 300, 500, 1000];

	clouds = [
		{pos_x: 100, pos_y: 200},
		{pos_x: 600, pos_y: 100},
		{pos_x: 800, pos_y: 200}
	]

	canyon = [20, 300, 40, 180];

	collectable = [
		{pos_x: 50, pos_y: 100},
	]

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
	
	push();
	translate(scrollPos, 0);
	 
	// Draw clouds.
	for(var i = 0; i < clouds.length; i++)
	{	
		fill(255);
		ellipse(clouds[i].pos_x, clouds[i].pos_y, 55, 55);
		ellipse(clouds[i].pos_x + 25, clouds[i].pos_y, 33, 35);
		ellipse(clouds[i].pos_x + 45, clouds.pos_y, 25, 25);
	}

	// Draw mountains.
	for(var i = 0; i < mountains.length; i++ )
	{
		fill(93,138,168);
		triangle(mountains[i], floorPos_y); 
			mountains[i] + 100, -200  + floorPos_y,
			mountains[i] + 175,  floorPos_y,
		triangle(mountains[i], floorPos_y,
			mountains[i] + 100, -200 + floorPos_y,
			mountains[i] + 175,  floorPos_y);
	}

	// Draw trees.
	for(var i = 0; i < treePos_x.length; i++)
	{
		console.log(treePos_x[i]);
		fill(120, 100, 40);
		rect(75 + treePos_x[i], -200/2 +floorPos_y, 50, 200/2);
		fill(0,100,0);
		triangle(treePos_x[i] + 25, -200/2 + floorPos_y, 
			treePos_x[i] + 100, -200 + floorPos_y,
			treePos_x[i] + 175, -200/2 + floorPos_y);
		triangle(treePos_x[i], -200/4 + floorPos_y,
			treePos_x[i] + 100, -200*3/4 + floorPos_y,
			treePos_x[i] + 200, -200/4 + floorPos_y);

	}

	// Draw canyons
	for(var i = 0; i < canyon.length; i++)
	{
		fill(176,224,230);
		rect(canyon[i] + 50, 430, 50, 200);
	}

	// Draw collectable items
	for(var i = 0; i < collectable.length; i++)
	{
		fill(255,126,0);
		ellipse(collectable[i].pos_x + 630, collectable[i].pos_y + 310, 50, 50);
		ellipse(collectable[i].pos_x + 830, collectable[i].pos_y + 310, 40, 40);

	}

	pop();
	// Draw the game character - this must be last
	// add your standing front facing code
	fill(255, 255, 0);
	ellipse(gameChar_x, gameChar_y - 55, 35);

	fill(0);
	ellipse(gameChar_x - 8, gameChar_y - 57, 5, 5);
	ellipse(gameChar_x + 9, gameChar_y - 57, 5, 5);

	fill(0, 128, 0);
	rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

	fill(0);
	rect(gameChar_x - 30, gameChar_y - 35, 20, 10);
	rect(gameChar_x + 10, gameChar_y - 35, 20, 10);

	fill(0);
	rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
	rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
