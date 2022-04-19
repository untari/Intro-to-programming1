/*
Officer: 2816450
CaseNum: 601-3-51839533-2816450

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Olive stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SeaGreen stroke triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 99 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- rect() NB. Draw each rectangle with the point at its center.

- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var FryLog = {
	location_x: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	location_y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordedDay: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var CrimeLog = [ 
  { pos_x : 438, pos_y : 420, day : 11, fatality_name : 'BRIDGET BROADVIEW'},
  { pos_x : 408, pos_y : 451, day : 11, fatality_name : 'JENIFFER DEAUVILLE'},
  { pos_x : 408, pos_y : 377, day : 13, fatality_name : 'LAKESHA SYMMES'},
  { pos_x : 642, pos_y : 289, day : 16, fatality_name : 'RANDEE CROME'},
  { pos_x : 623, pos_y : 279, day : 16, fatality_name : 'JACQUELINE DURANTS'},
  { pos_x : 95, pos_y : 488, day : 17, fatality_name : 'JESSIA PORTOS'},
  { pos_x : 75, pos_y : 522, day : 18, fatality_name : 'LARRAINE PEGORD'},
  { pos_x : 269, pos_y : 597, day : 26, fatality_name : 'NELSON TINTLE'},
  { pos_x : 389, pos_y : 554, day : 28, fatality_name : 'LOUISE ZETLAND'},
  { pos_x : 484, pos_y : 549, day : 2, fatality_name : 'LESLEY MONKSFORD'},
  { pos_x : 496, pos_y : 484, day : 9, fatality_name : 'LINETTE MOHWAWK'},
  { pos_x : 546, pos_y : 463, day : 14, fatality_name : 'DARBY MYRLE'},
  { pos_x : 538, pos_y : 359, day : 12, fatality_name : 'JULIANA ADVERSANE'},
  { pos_x : 702, pos_y : 412, day : 17, fatality_name : 'SUMMER CASIMERE'},
  { pos_x : 817, pos_y : 474, day : 18, fatality_name : 'BRAD SILVEIRA'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here

  stroke(128, 128, 0);
  noFill();
  for(var i = 0; i < FryLog.location_x.length; i++)
  {
    rect(FryLog.location_x[i] - 2, FryLog.location_y[i] -2, 5, 5);
  }

  stroke( 46, 139, 87);
  noFill();
  for(var j = 0; j < CrimeLog.length; j++)
  {
    triangle(CrimeLog[j].pos_x + 5, CrimeLog[j].pos_y + 5,CrimeLog[j].pos_x -5, CrimeLog[j].pos_y + 5, CrimeLog[j].pos_x, CrimeLog[j].pos_y -5 );
  }


  for(var i = 0; i < FryLog.location_x.length; i++)
  {
    for(var j = 0; j < CrimeLog.length; j++)
    {
      if(dist(
        FryLog.location_x[i],
        FryLog.location_y[i],
        CrimeLog[j].pos_x, 
        CrimeLog[j].pos_y
      ) < 99 && abs(FryLog.recordedDay[i] - CrimeLog[j].day) < 2)
      {
        possibleMatches.push(
          {
            crime: {
              x: CrimeLog[j].pos_x,
              y: CrimeLog[j].pos_y,
              victimName: CrimeLog[j].fatality_name
            },
            suspect: {
              x: FryLog.location_x[i],
              y: FryLog.location_y[i]
            }
          }
        )
      }
    }
  }
  
	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
