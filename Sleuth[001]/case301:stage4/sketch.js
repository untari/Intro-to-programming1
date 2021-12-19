/*
The case of the Python Syndicate
Stage 4

Officer: 2816450
CaseNum: 301-3-60815093-2816450

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var robbie_kray_image;
var anna_karpinski_image;
var lina_lovelace_image;
var cecil_karpinski_image;
var countess_hamilton_image;
var pawel_karpinski_image;

var anna_karpinski_object;


//declare your new objects below
var robbie_kray_object;
var lina_lovelace_object;
var cecil_karpinski_object;
var countess_hamilton_object;
var pawel_karpinski_object;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_object = {
		x: 408,
		y: 40,
		image: anna_karpinski_image
	};

	robbie_kray_object = {
		x: 115,
		y: 40,
	};

	lina_lovelace_object = {
		x: 701,
		y: 40,
	};

	cecil_karpinski_object = {
		x: 115,
		y: 309,
	};
	
	countess_hamilton_object = {
		x: 408,
		y: 309,
	} ;

	pawel_karpinski_object = {
		x: 701,
		y: 309,
	};

	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbie_kray_image, robbie_kray_object.x, robbie_kray_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
	image(lina_lovelace_image, lina_lovelace_object.x, lina_lovelace_object.y);
	image(cecil_karpinski_image, cecil_karpinski_object.x, cecil_karpinski_object.y);
	image(countess_hamilton_image, countess_hamilton_object.x, countess_hamilton_object.y);
	image(pawel_karpinski_image, pawel_karpinski_object.x, pawel_karpinski_object.y);


}