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

var clouds;
var mountains;
var trees_x;
var collectables;
var canyon;

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
	clouds = [
		{pos_x: 100, pos_y: 200},
		{pos_x: 500, pos_y: 100},
		{pos_x: 1000, pos_y: 100},
	];

	mountains = [
		{pos_x: 300, height: 400},
		{pos_x: 500, height: 200},
		{pos_x: 800, height: 200},
		{pos_x: 1000, height: 300},
		{pos_x: 1300, height: 400},
		{pos_x: 1500, height: 200},
		{pos_x: 1800, height: 200},
		{pos_x: 2000, height: 300}
	];

	trees_x = [200, 300, 800, 1200, -500];

	collectables = [
		{x_pos: 100, y_pos: floorPos_y, size: 50, isFound: false},
		{x_pos: 1000, y_pos: floorPos_y, size: 30, isFound: false},
		{x_pos: 1800, y_pos: floorPos_y, size: 40, isFound: false}
	];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

	// Draw clouds.
	drawClouds();

	// Draw mountains.
	drawMountains();

	// Draw trees.
	drawTrees();
	
	// Draw collectable items.
	for(var i = 0; i < collectables.length; i++)
	{
		if(collectables[i].isFound == false)
		{
			drawCollectable(collectables[i]);
		}
	}
	// Draw canyons.

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
function drawClouds()
{
	for(var i = 0; i < clouds.length; i++)
	{
		fill(255);
		{
			ellipse(clouds[i].pos_x, clouds[i].pos_y, 55, 55);
			ellipse(clouds[i].pos_x + 25, clouds[i].pos_y, 35, 35);
			ellipse(clouds[i].pos_x + 45, clouds[i].pos_y, 25, 25);
		}
	}
}

// Function to draw mountains objects.
function drawMountains()
{
	for(var i = 0; i < mountains.length; i++)
	{
		fill(100);
		triangle(mountains[i].x_pos - mountains[i].height/2, floorPos_y,
			mountains[i].pos_x, floorPos_y - mountains[i].height, 
			mountains[i].x_pos + mountains[i].height/2, floorPos_y);
	}
}

// Function to draw trees objects.
function drawTrees()
{
	for(let i = 0; i < trees_x.length; i++)
	{
		fill(100, 50, 0);
		rect(75 + trees_x[i], -200/2 + floorPos_y, 50, 200/2);
		fill(0, 100, 0);
		triangle(
			trees_x[i] + 25, -200/2 + floorPos_y, 
			trees_x[i] + 100, -200 + floorPos_y,
			trees_x[i] + 175, -200/2 + floorPos_y
		);
		triangle(
			trees_x[i], -200/4 + floorPos_y, 
			trees_x[i] + 100, -200 * 3/4 + floorPos_y,
			trees_x[i] + 200, -200/4 + floorPos_y
		);
	}
}

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
	noFill();
	strokeWeight(6);
	stroke(220, 185, 0);
	ellipse(t_collectable.x_pos, t_collectable.y_pos -20, t_collectable.size);
	fill(255, 0, 255);
	stroke(255);
	strokeWeight(1);
	quad(
		t_collectable.x_pos -5, t_collectable.y_pos - t_collectable.size,
		t_collectable.x_pos -10, t_collectable.y_pos - (t_collectable.size + 15),
		t_collectable.x_pos + 10, t_collectable.y_pos - (t_collectable.size + 15),
		t_collectable.x_pos + 5, t_collectable.y_pos - t_collectable.size
	);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

}
