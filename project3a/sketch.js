/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isJumping;
var isFalling;
var isPlummeting;
var collectable;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;
	isPlummeting = false;


	collectable = {x_pos: 100, y_pos: floorPos_y, size: 40, isFound: false};

}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	

	//collectable item
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
	{
		collectable.isFound = true;
	}
	if(collectable.isFound == false)
	{
		fill(255,0,0)
		rect(collectable.x_pos + 92, collectable.y_pos - 30, collectable.x_pos - 60, collectable.y_pos - 400 );
	}

	//gravity
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 5;
		isFalling = true;
	} 
	else {
		isFalling = false;
	}
	if(gameChar_x < floorPos_y)
	{
		gameChar_x += 1;
		isPlummeting = true;
	} 

	//draw the canyon
	fill(100,155,255)
	rect(300, 430, 150, 180);
	
	fill(162, 235, 231)
	rect(300, 520, 150, 140);

	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
	
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 55, 35);

		fill(0);
		ellipse(gameChar_x -8, gameChar_y -57, 5, 5);
		ellipse(gameChar_x +9, gameChar_y -57, 5, 5);
	
		fill(0, 128, 0);
		rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

		fill(0);
		rect(gameChar_x - 30, gameChar_y - 35, 20, 10);
		rect(gameChar_x + 10, gameChar_y - 35, 20, 10);
	
		fill(0);
		rect(gameChar_x - 20, gameChar_y - 10, 15, 10);
		rect(gameChar_x + 5, gameChar_y - 7, 10, 10);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 55, 35);

		fill(0);
		ellipse(gameChar_x -8, gameChar_y -57, 5, 5);
		ellipse(gameChar_x +9, gameChar_y -57, 5, 5);
	
	
		fill(0, 128, 0);
		rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

		fill(0);
		rect(gameChar_x - 30, gameChar_y - 35, 20, 10);
		rect(gameChar_x + 10, gameChar_y - 35, 20, 10);
	
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 7, 10, 10);
		rect(gameChar_x + 5, gameChar_y - 10, 15, 10);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 55, 35);

		fill(0);
		ellipse(gameChar_x -8, gameChar_y -57, 5, 5);
		ellipse(gameChar_x +9, gameChar_y -57, 5, 5);
	
		fill(0, 128, 0);
		rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

		fill(0);
		rect(gameChar_x - 30, gameChar_y - 35, 20, 10);
		rect(gameChar_x + 10, gameChar_y - 35, 20, 10);
	
		fill(0);
		rect(gameChar_x - 22, gameChar_y - 7, 14, 10);
		rect(gameChar_x - 2, gameChar_y - 7, 15, 10);
		// gameChar_x -= 5;

	}
	else if(isRight)
	{
		// add your walking right code
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 55, 35);

		fill(0);
		ellipse(gameChar_x -8, gameChar_y -57, 5, 5);
		ellipse(gameChar_x +9, gameChar_y -57, 5, 5);
	
		fill(0, 128, 0);
		rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

		fill(0);
		rect(gameChar_x - 30, gameChar_y - 35, 20, 10);
		rect(gameChar_x + 10, gameChar_y - 35, 20, 10);
	
		fill(0);
		rect(gameChar_x - 13, gameChar_y - 8, 14, 10);
		rect(gameChar_x + 5, gameChar_y - 8, 15, 10);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
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
		rect(gameChar_x - 19, gameChar_y - 10, 14, 10);
		rect(gameChar_x + 5, gameChar_y - 6, 10, 10);


	}
	else
	{
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

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	if(isPlummeting == true)
	{
		gameChar_y += 10;
	}
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 5;
		isFalling = true;
	} else {
		isFalling = false;
	}
	if(isLeft == true)
	{
		gameChar_x -= 5;

	}
	if(isRight == true)
	{
		gameChar_x += 5;
	}
	// if(isJumping == true)
	// {
	// 	isJumping = false;
	// }
	// if(isFalling == true)
	// {
	// 	gameChar_y += 6;
	// }

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	if(keyCode == 37)
	{
		console.log("left arrow");
		isLeft = true;
	}
	else if(keyCode == 39)
	{
		console.log("right arrow");
		isRight = true;
	}
	if(keyCode == 32)
	{
		console.log("space-bar");
		isPlummeting == true;
		gameChar_y -= 95;

	}
	
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if(keyCode == 37)
	{
		console.log("left arrow");
		isLeft = false;
	}
	else if(keyCode == 39)
	{
		console.log("right arrow");
		isRight = false;
	}
	if(keyCode == 35)
	{
		console.log("space-bar");
		isJumping == false;

	}
}
