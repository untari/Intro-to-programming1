/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	x_pos_canyon = 0;
	width_canyon = 100;

	collectable_x_poss = 100;
	collectable_y_poss = 100;
	collectable_size = 50;

	mountain_xPos = 100;
	mountain_yPos = 100;

	cloud_xPos = 100;
	cloud_yPos = 100;
	cloud_size = 50;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//draw mountain

	fill(192, 192, 192 );
	triangle(mountain_xPos - 30, mountain_yPos + 330, mountain_xPos + 190, 
		mountain_yPos - 30, mountain_xPos + 470, mountain_yPos + 333);

	//draw cloud
	fill(255, 255, 255);
	ellipse(cloud_xPos - 15, cloud_yPos + 95, cloud_size - 100);
	ellipse(cloud_xPos - 45, cloud_yPos + 65, cloud_size - 101);
	ellipse(cloud_xPos - 55, cloud_yPos + 95, cloud_size - 101);
	

	//draw the game character
	fill(255, 255, 0);
	ellipse(gameChar_x, gameChar_y - 55, 35);

	fill(0);
	ellipse(gameChar_x + 9, gameChar_y - 56, 5, 5);
	fill(0);
	ellipse(gameChar_x - 5, gameChar_y - 56, 5, 5);

	fill(0, 0, 255);
	rect(gameChar_x - 13, gameChar_y - 35, 25, 30);

	fill(0);
	rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
	rect(gameChar_x + 5, gameChar_y - 5, 10, 10);

	//draw tree
	fill(120, 100, 40);
	rect(treePos_x, treePos_y, 60, 150);

	//branches
	fill(0, 155, 0);
	// tringle(850, 332, 930, 232, 1010, 232);
	triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 110,
		 treePos_y + 50);
	// triangle(850, 282, 930, 182, 1010, 282);
	triangle(treePos_x - 50, treePos_y, treePos_x + 30, treePos_y - 100, treePos_x + 110, treePos_y);

	//draw canyon
	fill(176,224,230);
	rect(x_pos_canyon + 20, width_canyon + 330, 40, 180);

	//draw collectable item
	fill(255,165, 0);
	ellipse(collectable_x_poss + 200, collectable_y_poss + 305, collectable_size + 5, 55);






}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
