/*
The case of the Python Syndicate
Stage 3


Officer: 2816450
CaseNum: 301-2-53657166-2816450

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Cecil karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var anna_karpinski_img;
var rocky_kray_img;
var pawel_karpinski_img;
var bones_karpinski_img;
var cecil_karpinski_img;
var countess_hamilton_img;

var cecil_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	countess_hamilton_img = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecil_karpinski_object = {
		x: 408,
		y: 309,
		image: cecil_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_object.image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(anna_karpinski_img,  cecil_karpinski_object.x - 293, cecil_karpinski_object.y - 269);
	image(rocky_kray_img,  cecil_karpinski_object.x, cecil_karpinski_object.y - 269);
	image(pawel_karpinski_img, cecil_karpinski_object.x + 293, cecil_karpinski_object.y - 269);
	image(bones_karpinski_img, cecil_karpinski_object.x - 293, cecil_karpinski_object.y);
	image(countess_hamilton_img, cecil_karpinski_object.x + 293, cecil_karpinski_object.y);
	//image(anna_karpinski_img, 115, 40);
	//image(rocky_kray_img, 408, 40);
	//image(pawel_karpinski_img, 701, 40);
	//image(bones_karpinski_img, 115, 309);
	//image(countess_hamilton_img, 701, 309);

}