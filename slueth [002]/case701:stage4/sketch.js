/*

Officer: 2816450
CaseNum: 701-3-37237825-2816450

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from drusilla goodbury.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
It's so hard to remember right now. Their expression seemed nerveous.
They brobably weigh between 52 and 76 kg. 
They seemed to be between the age of 30 and 50 years old.
They were fairly tall, I think between a height of 151 and 200 cm. 
It's so hard to remember right now. They were wearing a red parka. 
I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual.
They were carrying a plastic box. It's so hard to remember right now.
They wore red glasses. The person I saw was female. That's all I can remember about them. 

*/

var allSuspects = [
	{ 
		"name": "LARRAINE ADVERSANE",
		"gender": "male",
		"glasses": "white",
		"coat": "black hoodie",
		"expression": "blank",
		"weight": 73,
		"age": 42,
		"height": 184
	},
	{ 
		"name": "LINETTE SILVEIRA",
		"gender": "female",
		"glasses": "thin metallic",
		"coat": "black overcoat",
		"expression": "depressed",
		"weight": 79,
		"age": 36,
		"height": 171
	},
	{ 
		"name": "BRIDGET JENI",
		"gender": "male",
		"glasses": "very thick",
		"coat": "blue overcoat",
		"expression": "angry",
		"weight": 75,
		"age": 33,
		"height": 175
	},
	{ 
		"name": "SUMMER COURTWOOD",
		"gender": "male",
		"glasses": "very thin",
		"coat": "white fur coat",
		"expression": "sad",
		"weight": 59,
		"age": 23,
		"height": 199
	},
	{ 
		"name": "NELSON MOHWAWK",
		"gender": "female",
		"glasses": "cheap plastic",
		"coat": "green army coat",
		"expression": "menacing",
		"weight": 80,
		"age": 32,
		"height": 177
	},
	{ 
		"name": "ERMELINDA JOYER",
		"gender": "female",
		"glasses": "light tan",
		"coat": "green jacket",
		"expression": "menacing",
		"weight": 76,
		"age": 52,
		"height": 177
	},
	{ 
		"name": "HANG THAXTER",
		"gender": "female",
		"glasses": "red",
		"coat": "red parka",
		"expression": "nerveous",
		"weight": 67,
		"age": 42,
		"height": 195
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

// Declare both your functions here
function checkSuspect(suspectObj){
	var counter = 0;
	if(suspectObj.expression == "nerveous")
	{
		counter++;
	}
	if(suspectObj.weight < 52 && suspectObj.weight > 76)
	{
		counter++;
	}
	if(suspectObj.age < 30 && suspectObj.age > 50)
	{
		counter++;
	}
	if(suspectObj.height < 151 && suspectObj.height > 200)
	{
		counter++;
	}
	if(suspectObj.coat == "red parka")
	{
		counter++;
	}
	if(suspectObj.glasses == "red")
	{
		counter++;
	}
	if(suspectObj.gender == "female")
	{
		counter++;
	}
	return counter;
}


function traverseSuspects(){
	// var heighestValue = 0; 
	// var suspect = {}

	// for(var i = 0; i < allSuspects.length; i++)
	// {
	// 	if(checkSuspect(allSuspects[i]) > heighestValue )
	// 	{
	// 		heighestValue = checkSuspect(allSuspects[i]);
	// 		suspect = allSuspects[i];
	// 	}

	// }
	// return suspect;
	for(var i = 0; i < allSuspects.length; i++)
	{
		if(checkSuspect(allSuspects[i]) == 7);
		return allSuspects[i];
	}
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
