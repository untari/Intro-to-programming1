/*

Officer: 2816450
CaseNum: 701-2-63764104-2816450

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from gayla durants. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a black duffle bag. 
They seemed to be between the age of 32 and 56 years old. They wore very thick glasses.
They were fairly tall, I think between a height of 155 and 192 cm.
It was very dark and I could barely see, They were wearing a black overcoat.
They had ginger hair. Their expression seemed menacing. They brobably weigh between 70 and 100 kg. 
I'm not quite sure. I hope I never have to go through that again. 

*/


var suspectList = [
	{ 
		"name": "RANDEE MYRLE",
		"accessory": "metal briefcase",
		"coat": "red parka",
		"glasses": "very thin",
		"expression": "empty",
		"weight": 75,
		"age": 48,
		"height": 186
	},
	{ 
		"name": "LAVERNE MOHWAWK",
		"accessory": "glass bottle",
		"coat": "blue overcoat",
		"glasses": "white",
		"expression": "depressed",
		"weight": 78,
		"age": 30,
		"height": 194
	},
	{ 
		"name": "GAYLA ZETLAND",
		"accessory": "red backpack",
		"coat": "green army coat",
		"glasses": "light tan",
		"expression": "blank",
		"weight": 77,
		"age": 38,
		"height": 175
	},
	{ 
		"name": "JESUS OORIN",
		"accessory": "plastic box",
		"coat": "white fur coat",
		"glasses": "dark brown",
		"expression": "sad",
		"weight": 55,
		"age": 47,
		"height": 154
	},
	{ 
		"name": "LARRAINE MONKSFORD",
		"accessory": "big black envelope",
		"coat": "yellow poncho",
		"glasses": "cheap plastic",
		"expression": "menacing",
		"weight": 73,
		"age": 33,
		"height": 177
	},
	{ 
		"name": "LOUISE DAVISWOOD",
		"accessory": "black duffle bag",
		"coat": "black overcoat",
		"glasses": "very thick",
		"expression": "menacing",
		"weight": 73,
		"age": 47,
		"height": 179
	},
	{ 
		"name": "DRUSILLA ASHELY",
		"accessory": "laptop bag",
		"coat": "green jacket",
		"glasses": "blue",
		"expression": "confused",
		"weight": 75,
		"age": 38,
		"height": 182
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
// It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. They were carrying a black duffle bag. 
// They seemed to be between the age of 32 and 56 years old. They wore very thick glasses.
// They were fairly tall, I think between a height of 155 and 192 cm.
// It was very dark and I could barely see, They were wearing a black overcoat.
// They had ginger hair. Their expression seemed menacing. They brobably weigh between 70 and 100 kg. 
// I'm not quite sure. I hope I never have to go through that again. 
// Declare your function here
function matchSuspect(suspectObj){
	var count = 0;
	if(suspectObj.accessory == "black duffle bag")
	{
		count ++;
	}
	if(suspectObj.age >= 32 && suspectObj.age <= 56)
	{
		count ++;
	}
	if(suspectObj.glasses == "very thick"){
		count ++;
	}
	if(suspectObj.height >= 155 && suspectObj.height <= 192)
	{
		count ++;
	}
	if(suspectObj.coat == "black overcoat"){
		count ++;
	}
	if(suspectObj.expression == "menacing")
	{
		count ++;
	} 
	if(suspectObj.weight >= 70 && suspectObj.weight <= 100)
	{
		count ++;
	}

	return count;
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    let matchingProperties = matchSuspect(suspectList[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
  }
}
