/*
Officer: 2816450
CaseNum: 601-2-96901256-2816450

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, BlueViolet fill ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Fuchsia fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 30 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- fill
- ellipse()

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var criminalRecord = {
	loc_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	loc_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var incidentLog_Pos_X = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var incidentLog_Pos_Y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var incidentLog_Murdered_ = ['JENIFFER DEAUVILLE', 'LAKESHA SYMMES', 'NELSON TINTLE', 'ERMELINDA OORIN', 'LOUISE ZETLAND', 'NICOLE ASHELY', 'KITTY THAXTER', 'LIANNE COURTWOOD', 'DEEDEE PHINNEY', 'GAYLA WILLMAR', 'BRAD SILVEIRA', 'JAUNITA JOYER', 'MAJORIE JENI', 'PIERRE DORCEY'];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
	for(var i= 0; i < criminalRecord.loc_x.length; i++)
	{
		var criminalRecord_x = criminalRecord.loc_x;
		var criminalRecord_y = criminalRecord.loc_y;
		fill(138, 43, 226);
		noStroke();
		ellipse(criminalRecord_x[i], criminalRecord_y[i], 5, 5);
	}

	for (var i = 0; i < incidentLog_Pos_X.length; i++)
	{
		fill(255, 0, 255);
		noStroke();
		triangle(incidentLog_Pos_X[i] + 5, incidentLog_Pos_Y[i] + 5, incidentLog_Pos_X[i] - 5,
			 incidentLog_Pos_Y[i] + 5, incidentLog_Pos_X[i], incidentLog_Pos_Y[i] - 5);

		for(var t = 0; t < criminalRecord.loc_x.length; t++)
		{
			if(dist(
				criminalRecord.loc_x[t],
				criminalRecord.loc_y[t],
				incidentLog_Pos_X[i],
				incidentLog_Pos_Y[i]
			) < 30){
				possibleMatches = possibleMatches.concat([{
					crime: {
						x: incidentLog_Pos_X[i],
						y: incidentLog_Pos_Y[i],
						victimName: incidentLog_Murdered_[i]
					},
					suspect: {
						x: criminalRecord.loc_x[t],
						y: criminalRecord.loc_y[t]
					}
				}])
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
