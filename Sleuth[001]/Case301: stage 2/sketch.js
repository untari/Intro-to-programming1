/*
The case of the Python Syndicate
Stage 2


Officer: 2816450
CaseNum: 301-1-98803157-2816450

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var lina_lovelace_img;
var pawel_karpinski_img;
var anna_karpinski_img;
var cecil_karpinski_img;
var rocky_kray_img;
var robbie_kray_img;


var lina_lovelac_position_x = 15;
var lina_lovelac_position_y = 50;
var pawel_karpinski_position_x = 408;
var pawel_karpinski_position_y = 40;
var anna_karpinski_position_x = 201;
var anna_karpinski_position_y = 50;
var cecil_karpinski_position_x = 15;
var cecil_karpinski_position_y = 319;
var rocky_kray_position_x = 208;
var rocky_kray_position_y = 319;
var robbie_kray_position_x = 501;
var robbie_kray_position_y = 319;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	lina_lovelace_img = loadImage("lina.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	robbie_kray_img = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_img, lina_lovelac_position_x + 100, lina_lovelac_position_y -10);
	image(pawel_karpinski_img, pawel_karpinski_position_x, pawel_karpinski_position_y);
	image(anna_karpinski_img, anna_karpinski_position_x + 500, anna_karpinski_position_y - 10);
	image(cecil_karpinski_img, cecil_karpinski_position_x + 100, cecil_karpinski_position_y - 10);
	image(rocky_kray_img, rocky_kray_position_x + 200, rocky_kray_position_y - 10);
	image(robbie_kray_img,robbie_kray_position_x + 200, robbie_kray_position_y - 10);
	//image(lina_lovelace_img, 115, 40);
	//image(anna_karpinski_img, 701, 40);
	//image(cecil_karpinski_img, 115, 309);
	//image(rocky_kray_img, 408, 309);
	//image(robbie_kray_img, 701, 309);

}