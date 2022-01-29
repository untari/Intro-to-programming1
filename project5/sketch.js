/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.

	// Draw mountains.

	// Draw trees.

	// Draw canyons.

	// Draw collectable items.

	// Draw game character.
	
	drawGameChar();

	// Logic to make the game character move or the background scroll.
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

	// Logic to make the game character rise and fall.
	if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2;
		isFalling = true;
	}
	else{
		isFalling = false;
	}

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

	// console.log("press" + keyCode);
	// console.log("press" + key);
	if(key == "A" || keyCode == 37)
	{
		isLeft = true;
	}
	if(key == "D" || keyCode == 39)
	{
		isRight = true;
	}
	if(key == "" || key == "W")
	{
		if(!isFalling)
		{
			gameChar_y -= 100;
		}
	}
}

function keyReleased()
{

	// console.log("release" + keyCode);
	// console.log("release" + key);
	if(key == "A" || keyCode == 37)
	{
		isLeft = false;
	}
	if(key == "D" || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
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
}


// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

// Function to draw mountains objects.

// Function to draw trees objects.


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

}
