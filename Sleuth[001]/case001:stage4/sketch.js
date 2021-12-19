/*

Officer: 2816450
CaseNum: 101-3-90017222-2816450

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Gold filled rectangle with a Tomato outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Orange Red filled
rectangle with a Royal Blue outline around him.

Identify the man reading the newspaper by drawing a Cornflower Blue filled rectangle
with a Turquoise outline around him.

Identify the woman with the dog by drawing a Deep Sky Blue filled rectangle with a
Medium Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(255, 215, 0);
	stroke(255, 99, 71);
	rect(50, 94, 93, 187);

	fill(255, 69, 0);
	stroke(65, 105, 225);
	rect(435, 190, 110, 155);

	fill(100, 149, 237);
	stroke(64, 224, 208);
	rect(630, 128, 120, 217);

	fill(0, 191,255);
	stroke(0, 0, 205);
	rect(810, 88, 171, 363);

}
