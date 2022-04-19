/*
Officer: 2816450
CaseNum: 601-0-24392258-2816450

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing MidnightBlue stroke vertexes at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke()
- beginShape(), endShape(), vertex()


*/

var countyMap;

//Sightings of Casey Fry.

var murderer_data_Coordinate_X = [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637];
var murderer_data_Coordinate_Y = [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280];

function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below 
	stroke(25, 25, 112);
	noFill();
	beginShape();
	for(var i = 0; i < murderer_data_Coordinate_X.length; i++)
	{
		vertex(murderer_data_Coordinate_X[i], murderer_data_Coordinate_Y[i]);
	}
	endShape();


}

//We are not using the draw function this time
