/*

Officer: 2816450
CaseNum: 701-1-96126442-2816450

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet.
 They wore light tan glasses. I remember they had a chinese lettering tattoo.
  The person I saw was male. It's hard to say.
 They definately weigh less than 74 Kg. It's so hard to remember right now.
  I would say they were shorter than 200 cm. They were wearing a blue overcoat. 
  That's all I can remember about them. 

*/

var lineupLog = [
	{ 
		"name": "LARRAINE MOHWAWK",
		"glasses": "dark brown",
		"gender": "male",
		"tattoo": "facial",
		"height": 192,
		"weight": 80
	},
	{ 
		"name": "LIANNE CASIMERE",
		"glasses": "very thick",
		"gender": "female",
		"tattoo": "big arrow",
		"height": 171,
		"weight": 62
	},
	{ 
		"name": "JACQUELINE JENI",
		"glasses": "black",
		"gender": "female",
		"tattoo": "bull",
		"height": 172,
		"weight": 78
	},
	{ 
		"name": "ERMELINDA NIEMELA",
		"glasses": "light tan",
		"gender": "male",
		"tattoo": "chinese lettering",
		"height": 190,
		"weight": 70
	},
	{ 
		"name": "DEEDEE TINTLE",
		"glasses": "blue",
		"gender": "female",
		"tattoo": "sword",
		"height": 175,
		"weight": 69
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
function testProperties(suspectObj){
	if(suspectObj.glasses == "light tan" && 
	suspectObj.tattoo == "chinese lettering"&&
	suspectObj.gender == "male" &&
	suspectObj.weight < 74 &&
	suspectObj.height < 200)
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
    if(testProperties(lineupLog[i]) == true){
      fill(255,0,0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
