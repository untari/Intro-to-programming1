/*

Officer: 2816450
CaseNum: 701-0-68113048-2816450

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist deedee pegord and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They wore light tan glasses. 
It was very dark and I could barely see, They were carrying a red backpack. It's hard to say. They were wearing a green army coat. I can't remember anything else about them.

*/

var lineupLog = [
	{ 
		"name": "JULIANA CROME",
		"accessory": "red backpack",
		"glasses": "light tan",
		"coat": "green army coat"
	},
	{ 
		"name": "DEEDEE GOODBURY",
		"accessory": "laptop bag",
		"glasses": "white",
		"coat": "white fur coat"
	},
	{ 
		"name": "TAMICA JACQUELIN",
		"accessory": "glass bottle",
		"glasses": "blue",
		"coat": "black hoodie"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function checkSuspect(suspectObj)
{
	if(suspectObj.glasses == "light tan" && 
	suspectObj.accessory == "red backpack" &&
	suspectObj.coat == "green army coat")
	{
		return true;
	}
	return false;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < lineupLog.length; i++){
    if(checkSuspect(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
