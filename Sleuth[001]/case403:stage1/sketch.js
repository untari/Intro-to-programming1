/*

Officer: 2816450
CaseNum: 403-0-10074148-2816450

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading east on Reynolds Street.
I need you to sound the alarm if he crosses Meyers Way.

Shiffman's position is signified by the mouse. To sound the alarm - draw a MediumTurquoise rectangle covering the entire map from Meyers Way to the east.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

  if(mouseX > 621)
  {
    fill(250, 235, 215)
    rect(0, 0, 661, img.height);
  }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
