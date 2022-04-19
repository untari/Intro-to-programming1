/*

Officer: 2816450
CaseNum: 502-2-82034331-2816450

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Record = {
	Fragment_0: [ "sneeze", "tug", "start"], 
	Fragment_1: [ "play", "fence", "consider"], 
	Fragment_2: [ "a donation", "sneeze", "play"], 
	Fragment_3: [ "sneeze", "rejoice", "bake"], 
	Fragment_4: [ "protect", "$200,000", "charge"], 
	Fragment_5: [ "succeed", "rejoice", "sail"], 
	Fragment_6: [ "syndicate", "sail", "plug"], 
	Fragment_7: [ "fence", "bake", "bake"], 
	Fragment_8: [ "stuff", "meddle", "protect"], 
	Fragment_9: [ "ALGOL", "radiate", "bake"]
};

var B_Record = {
	Fragment_0: [ "rejoice", "consider", "charge"], 
	Fragment_1: [ "sail", "clip", "charge"], 
	Fragment_2: [ "play", "plug", "hurry"], 
	Fragment_3: [ "hit", "bake", "smile"], 
	Fragment_4: [ "charge", "tug", "hurry"], 
	Fragment_5: [ "Hopper", "bake", "succeed"], 
	Fragment_6: [ "mend", "fence", "campaign"], 
	Fragment_7: [ "Edsger", "charge", "Governor Zuckerberg"], 
	Fragment_8: [ "succeed", "hurry", "mend"], 
	Fragment_9: [ "rejoice", "consider", "clip"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  newArray = [
	  B_Record.Fragment_7[2], A_Record.Fragment_2[0], B_Record.Fragment_6[2],
	  A_Record.Fragment_4[1], B_Record.Fragment_5[0], A_Record.Fragment_6[0],
	  B_Record.Fragment_3[0], A_Record.Fragment_9[0], B_Record.Fragment_7[0]
  ];
  redactedText = "Dear "+ newArray[0] +", I am sure that something could be worked out in terms of "+ newArray[1] +" for your "+ newArray[2] +". How does "+ newArray[3] +" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+ newArray[4] +" needs to be out of the picture. She’s caused enough trouble. Get the "+ newArray[5] +" to organise the "+ newArray[6] +" but I’d prefer it you don’t mention me or "+ newArray[7] +". I owe them enough favours already. Your old friend, "+ newArray[8] +"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
