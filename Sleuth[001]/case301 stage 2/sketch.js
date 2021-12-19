/*
The case of the Python Syndicate
Stage 2


Officer: 2816450
CaseNum: 301-1-40494147-2816450

 Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Lina lovelace

- The variables for Lina lovelace have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Lina lovelace for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbieKrayImage;
var cecilKarpinskiImage;
var linaLovelaceImage;
var rockyKrayImage;
var pawelKarpinskiImage;
var annaKarpinskiImage;


var linaLovelaceXCoord = 701;
var linaLovelaceYCoord = 40;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(linaLovelaceImage, linaLovelaceXCoord, linaLovelaceYCoord);
	image(robbieKrayImage, linaLovelaceXCoord - 586, linaLovelaceYCoord);
	image(cecilKarpinskiImage, linaLovelaceXCoord - 293, linaLovelaceYCoord);
	image(rockyKrayImage, linaLovelaceXCoord - 586, linaLovelaceYCoord + 269);
	image(pawelKarpinskiImage, linaLovelaceXCoord - 293, linaLovelaceYCoord + 269);
	image(annaKarpinskiImage, linaLovelaceXCoord, linaLovelaceYCoord + 269);
	//image(robbieKrayImage, 115, 40);
	//image(cecilKarpinskiImage, 408, 40);
	//image(rockyKrayImage, 115, 309);
	//image(pawelKarpinskiImage, 408, 309);
	//image(annaKarpinskiImage, 701, 309);

}