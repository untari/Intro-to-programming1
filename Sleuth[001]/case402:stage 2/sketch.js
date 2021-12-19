/*
402 - The case of the Why Gang ruby heist
Stage 2 - Katz

Officer: 2816450
CaseNum: 402-1-36530468-2816450

There are still three more Why gang members to catch. The gang member Katz was
seen heading in this direction. If you’re quick enough you might just catch her.

I'm suspicious that the gang are listening in on our wireless channel, so lets
avoid the compass points and stick to the following code to direct your
movements.

North: detSpeedX = 0 and detSpeedY = -1
East: detSpeedX = 1 and detSpeedY  = 0
South: detSpeedX = 0 and detSpeedY = 1
West: detSpeedX = -1 and detSpeedY = 0

I'll point you in the right direction to get started.
*/


var currentRoad;
var direction;
var mapImage;
var overlayImage;

var det = {
	"speedX": 0,
	"speedY": 0,
	"locationX": 889,
	"locationY": 634,
	"currentStreet": "Crowther Road",
	"image": "./det.png"
};

function preload()
{
	perp.image = loadImage(perp.image);
	det.image = loadImage(det.image);
	mapImage = loadImage("./map.png");
	overlayImage = loadImage("./overlay.png")
}

function setup()
{
	createCanvas(1024, 768);
	currentRoadObj = getCurrentRoad();

}






function draw()
{
	///////////////////ADD YOUR CODE HERE///////////////////
	if (currentRoad == "Crowther Road" || currentRoad == "Packard Avenue")
	{	//north
		det.speedX = 0;
		det.speedY = -1;
	}
	if(currentRoad == "Gosling Road" || currentRoad == "Adele Street")
	{
		// west
		// detSpeedY = 0;
		// North: detSpeedX = 0 and detSpeedY = -1
		// East: detSpeedX = 1 and detSpeedY  = 0
		// South: detSpeedX = 0 and detSpeedY = 1
		// West: detSpeedX = -1 and detSpeedY = 0
		det.speedX = -1;
		det.speedY = 0;
	}
	if(currentRoad == "Meyers Way")
	{	//south
		det.speedX = 0;
		det.speedY = 1;
	}
	if(currentRoad == "Dijkstra Street")
	{	//east
		det.speedX = 1;
		det.speedY = 0;
	}


	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////
	background(50);

	det.locationX += det.speedX;
	det.locationY += det.speedY;

	currentRoadObj = getCurrentRoad();

	//draw the images of the map perp and the detective
	image(mapImage, 0, 0);
	image(overlayImage, 0, 0);
	image(perp.image, perp.locationX - roadWidth, perp.locationY - roadWidth, roadWidth * 2, roadWidth * 2);

	push();
	translate(det.locationX, det.locationY);
	if (det.speedX != 0) rotate((det.speedX - 1.5) * PI);
	else if (det.speedY < 0) rotate(PI);
	image(det.image, -roadWidth, -roadWidth, roadWidth * 2, roadWidth * 2);
	pop();

	push();
	textAlign(CENTER);
	textSize(32);
	noStroke();

	//the perp has been caught
	if (dist(det.locationX, det.locationY, perp.locationX, perp.locationY) < 3)
	{
		//display message to the player
		fill(0, 220, 0);
		text("Just in the nick of time! \nYou caught " + perp.name, width / 2, height / 2);
		perp.caught = 1;
		noLoop();
	}

	//not on any roads, therefore the game is lost.
	if (currentRoadObj == null || (det.speedX == 0 && det.speedY == 0))
	{
		fill(255, 0, 0);
		text("You let " + perp.name + " get away.\n Better luck next time.", width / 2, height / 2);
		perp.caught = -1;
		noLoop();
	}

	pop();

	hud();

}

function hud()
{
	push();
	fill(250);
	noStroke();
	textAlign(LEFT, TOP);
	text("detective location - x: " + det.locationX + " y: " + det.locationY + "\tstreet: " + currentRoad, 5, 5);
	pop();
}

function getCurrentRoad()
{
	var road = null;
	for (var i = 0; i < roads.length; i++)
	{
		if (mapImage.get(det.locationX, det.locationY)[0] == roads[i].strokeC)
		{
			road = roads[i];
		}
	}

	if (road && currentRoad != road.name)
	{
		currentRoad = road.name;
		det.locationX = road.start.x;
		det.locationY = road.start.y;
	}

	return road;
}

var roadWidth = 25;

var roads = [
{
	"start":
	{
		"x": 889,
		"y": 633
	},
	"end":
	{
		"x": 889,
		"y": 259
	},
	"name": "Crowther Road",
	"strokeC": 170
},
{
	"start":
	{
		"x": 889,
		"y": 259
	},
	"end":
	{
		"x": 575,
		"y": 259
	},
	"name": "Gosling Road",
	"strokeC": 171
},
{
	"start":
	{
		"x": 575,
		"y": 259
	},
	"end":
	{
		"x": 575,
		"y": 509
	},
	"name": "Meyers Way",
	"strokeC": 172
},
{
	"start":
	{
		"x": 575,
		"y": 509
	},
	"end":
	{
		"x": 136,
		"y": 509
	},
	"name": "Adele Street",
	"strokeC": 173
},
{
	"start":
	{
		"x": 136,
		"y": 509
	},
	"end":
	{
		"x": 136,
		"y": 135
	},
	"name": "Packard Avenue",
	"strokeC": 174
},
{
	"start":
	{
		"x": 136,
		"y": 135
	},
	"end":
	{
		"x": 700,
		"y": 135
	},
	"name": "Dijkstra Street",
	"strokeC": 175
}];
var perp = {
	"caught": 0,
	"name": "Katz",
	"image": "./perp.png",
	"locationX": 701,
	"locationY": 135
};