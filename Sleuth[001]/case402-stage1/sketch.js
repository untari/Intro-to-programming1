/*
402 - The case of the Why Gang ruby heist
Stage 1 - Matz

Officer: 2816450
CaseNum: 402-0-85517874-2816450

The criminal gang going by the name ‘Why’ has raided the Gates Jewel Repository
and gotten away with a sizeable stash of Rubies. The Console City police gave
chase but the gang scattered across the city, and so it’s up to us to apprehend
them. The first of the gang to catch is Matz. He’s a fast runner but he’s
weighed down by Rubies. Your speedy legs should be up to the job.

Using if statements set your direction to either north, east, south or west
depending on which road you are on. The currentRoad variable stores your
location. I've done the first one to get you started but the rest is up
to you kid!

*/


var currentRoad;
var direction;
var mapImage;
var overlayImage;

var det = {
	"speedX": 0,
	"speedY": 0,
	"locationX": 73,
	"locationY": 73,
	"currentStreet": "Turing Place",
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
	if (currentRoad == "Turing Place" || currentRoad == "Gosling Road")
	{
		direction = "east";
	}
	if(currentRoad == "Dijkstra Street" || currentRoad == "Romero Avenue")
	{
		direction = "south"
	}
	if(currentRoad == "Huffman Street")
	{
		direction = "west"
	}

	///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

	background(50);

	currentRoadObj = getCurrentRoad();
	updateDirection();

	det.locationX += det.speedX;
	det.locationY += det.speedY;



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

function updateDirection()
{
	if (direction != undefined)
	{
		direction = direction.toLowerCase();

		if (direction == "north")
		{
			det.speedX = 0;
			det.speedY = -1;
		}
		else if (direction == "south")
		{
			det.speedX = 0;
			det.speedY = 1;
		}
		else if (direction == "west")
		{
			det.speedX = -1;
			det.speedY = 0;
		}
		else if (direction == "east")
		{
			det.speedX = 1;
			det.speedY = 0;
		}
		else
		{
			det.speedX = 0;
			det.speedY = 0;
		}
	}
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
		"x": 73,
		"y": 72
	},
	"end":
	{
		"x": 763,
		"y": 72
	},
	"name": "Turing Place",
	"strokeC": 170
},
{
	"start":
	{
		"x": 763,
		"y": 72
	},
	"end":
	{
		"x": 763,
		"y": 446
	},
	"name": "Dijkstra Street",
	"strokeC": 171
},
{
	"start":
	{
		"x": 763,
		"y": 446
	},
	"end":
	{
		"x": 261,
		"y": 446
	},
	"name": "Huffman Street",
	"strokeC": 172
},
{
	"start":
	{
		"x": 261,
		"y": 446
	},
	"end":
	{
		"x": 261,
		"y": 633
	},
	"name": "Romero Avenue",
	"strokeC": 173
},
{
	"start":
	{
		"x": 261,
		"y": 633
	},
	"end":
	{
		"x": 512,
		"y": 633
	},
	"name": "Gosling Road",
	"strokeC": 174
}];
var perp = {
	"caught": 0,
	"name": "Matz",
	"image": "./perp.png",
	"locationX": 512,
	"locationY": 634
};