/*

Officer: 2816450
CaseNum: 502-1-90530678-2816450

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Paper = [
	{Bit_0: "fence", Bit_1: "succeed", Bit_2: "a donation"}, 
	{Bit_0: "mend", Bit_1: "bake", Bit_2: "protect"}, 
	{Bit_0: "protect", Bit_1: "start", Bit_2: "mend"}, 
	{Bit_0: "stuff", Bit_1: "sneeze", Bit_2: "mend"}, 
	{Bit_0: "Edsger", Bit_1: "she has", Bit_2: "fence"}, 
	{Bit_0: "rejoice", Bit_1: "bake", Bit_2: "consider"}, 
	{Bit_0: "start", Bit_1: "clip", Bit_2: "charge"}, 
	{Bit_0: "fence", Bit_1: "mend", Bit_2: "capital"}, 
	{Bit_0: "clip", Bit_1: "radiate", Bit_2: "smile"}, 
	{Bit_0: "stuff", Bit_1: "sneeze", Bit_2: "delicate"}
];

var B_Paper = [
	{Bit_0: "meddle", Bit_1: "charge", Bit_2: "protect"}, 
	{Bit_0: "tug", Bit_1: "sneeze", Bit_2: "Governor Zuckerberg"}, 
	{Bit_0: "charge", Bit_1: "romantic", Bit_2: "consider"}, 
	{Bit_0: "fence", Bit_1: "syndicate", Bit_2: "sneeze"}, 
	{Bit_0: "clip", Bit_1: "sail", Bit_2: "Hopper’s"}, 
	{Bit_0: "radiate", Bit_1: "consider", Bit_2: "COBOL"}, 
	{Bit_0: "play", Bit_1: "smile", Bit_2: "smile"}, 
	{Bit_0: "plug", Bit_1: "radiate", Bit_2: "stuff"}, 
	{Bit_0: "bake", Bit_1: "fence", Bit_2: "tug"}, 
	{Bit_0: "succeed", Bit_1: "bake", Bit_2: "radiate"}
];

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

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  var newArray = [A_Paper[4].Bit_0, B_Paper[4].Bit_2, A_Paper[4].Bit_1, B_Paper[2].Bit_1, B_Paper[5].Bit_2,
	B_Paper[3].Bit_1, A_Paper[9].Bit_2, A_Paper[7].Bit_2, A_Paper[0].Bit_2, B_Paper[1].Bit_2];

  redactedText = "My dearest "+ newArray[0] +", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ newArray[1] +" intervention. I suspect that "+ newArray[2] +" a "+ newArray[3] +" interest at the "+ newArray[4] +". I and the "+ newArray[5] +" appreciate your many contributions over the years. However, this is a most "+ newArray[6] +" matter which would require significant "+ newArray[7]+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+ newArray[8] +" to my forthcoming campaign would help. Yours sincerely, "+ newArray[9]+"";

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
