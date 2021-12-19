/*
The case of the Python Syndicate
Stage 1

Officer: 2816450
CaseNum: 301-0-30163698-2816450

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var cecilKarpinskiImg;
var countessHamiltonImg;
var bonesKarpinskiImg;
var pawelKarpinskiImg;
var rockyKrayImg;
var linaLovelaceImg;



//declare your new variables below
var countessHamiltonXCoord = 408;
var countessHamiltonYCoord = 40;
var cecilKarpinskiXCoord = 115;
var cecilKarpinskiYCoord = 40;
var bonesKarpinskiXCoord= 701;
var bonesKarpinskiYCoord = 40;
var pawelKarpinskiXCoord = 115;
var pawelKarpinskiYCoord = 309;
var rockyKrayXCoord = 408;
var rockyKrayYCoord = 309;
var linaLovelaceXCoord = 701;
var linaLovelaceYCoord = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	linaLovelaceImg = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(countessHamiltonImg, countessHamiltonXCoord, countessHamiltonYCoord);
	image(cecilKarpinskiImg, cecilKarpinskiXCoord, cecilKarpinskiYCoord);
	image(bonesKarpinskiImg, bonesKarpinskiXCoord, bonesKarpinskiYCoord);
	image(pawelKarpinskiImg, pawelKarpinskiXCoord, pawelKarpinskiYCoord);
	image(rockyKrayImg, rockyKrayXCoord, rockyKrayYCoord);
	image(linaLovelaceImg, linaLovelaceXCoord, linaLovelaceYCoord);
	//image(cecilKarpinskiImg, 115, 40);
	//image(bonesKarpinskiImg, 701, 40);
	//image(pawelKarpinskiImg, 115, 309);
	//image(rockyKrayImg, 408, 309);
	//image(linaLovelaceImg, 701, 309);

}