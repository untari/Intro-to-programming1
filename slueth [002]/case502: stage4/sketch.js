/*

Officer: 2816450
CaseNum: 502-3-77459362-2816450

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var evidence_A = [
{
	token_0: ["mend", "ALGOL", "mend", "rejoice"], 
	token_1: ["clip", "fence", "bake", "ALGOL fish wholesalers"], 
	token_2: ["protect", "mend", "mend", "tug"]
},
{
	token_0: ["$200,000", "start", "consider", "fence"], 
	token_1: ["plug", "radiate", "consider", "plug"], 
	token_2: ["start", "clip", "tug", "consider"]
},
{
	token_0: ["development", "play", "charge", "radiate"], 
	token_1: ["radiate", "charge", "consider", "hurry"], 
	token_2: ["consider", "clip", "rejoice", "rejoice"]
},
{
	token_0: ["sail", "sail", "sail", "clip"], 
	token_1: ["play", "play", "rejoice", "charge"], 
	token_2: ["tug", "protect", "rejoice", "Edsger"]
},
{
	token_0: ["you", "fence", "mend", "smile"], 
	token_1: ["sail", "stuff", "fence", "sail"], 
	token_2: ["clip", "donation", "sneeze", "mend"]
}];

var evidence_B = [
{
	token_0: ["mend", "COBOL", "fence", "bake"], 
	token_1: ["mend", "protect", "bake", "syndicate"], 
	token_2: ["succeed", "protect", "mend", "tug"]
},
{
	token_0: ["hurry", "start", "rejoice", "sail"], 
	token_1: ["charge", "stuff", "tug", "charge"], 
	token_2: ["sail", "fence", "clip", "protect"]
},
{
	token_0: ["mend", "mend", "plug", "smile"], 
	token_1: ["sail", "play", "rejoice", "tug"], 
	token_2: ["Governor Zuckerberg", "succeed", "charge", "rejoice"]
},
{
	token_0: ["stuff", "charge", "protect", "hurry"], 
	token_1: ["stuff", "stuff", "tug", "rejoice"], 
	token_2: ["play", "bake", "sneeze", "sneeze"]
},
{
	token_0: ["protect", "protect", "plug", "consider"], 
	token_1: ["clip", "meddle", "fence", "sneeze"], 
	token_2: ["consider", "charge", "consider", "plug"]
}];


var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";
	var newArray = [
		evidence_A[3].token_2[3], evidence_A[4].token_2[1], evidence_A[1].token_0[0],
		evidence_A[0].token_0[1], evidence_A[4].token_0[0], evidence_A[0].token_1[3],
		evidence_B[0].token_1[3], evidence_A[2].token_0[0], evidence_B[0].token_0[1],
		evidence_B[2].token_2[0]
	];
  redactedText = "My dearest "+ newArray[0] +", I have just received your very generous "+ newArray[1] +" of "+ newArray[2] +". Thank you. This will be invaluable to our campaign. "+ newArray[3] +" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+ newArray[4] +" or "+ newArray[5] +" to the "+ newArray[6] +". Your new "+ newArray[7] +" at the "+ newArray[8] +" can now proceed without impediment. Yours sincerely, "+ newArray[9] +"";

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
