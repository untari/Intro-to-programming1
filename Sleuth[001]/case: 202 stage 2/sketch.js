/*

Officer: 2816450
CaseNum: 202-1-66937942-2816450

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Blue filled text with a Spring Green outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(577,591);
	textFont(letterFont);
	textSize(33);
}

function draw()
{
	background(255);

	fill(139,0,0);
	stroke(0,128,0);
	// text("Bob,", 111,33);
	fill(255,0,0);
	stroke(255,255,0);
	// text("lo", 9,290);
	fill(240,128,128);
	stroke(0,0,128);
	// text("I", 53,99);
	fill(238,232,170);
	// text("x", 67,463);
	fill(199,21,133);
	stroke(0,0,139);
	// text("since", 57,136);
	fill(65,105,225);
	stroke(255,0,255);
	// text("the", 142,169);
	fill(255,0,255);
	stroke(127,255,0);
	// text("How", 385,99);
	fill(240,230,140);
	stroke(128,0,128);
	// text("your", 522,290);
	fill(123,104,238);
	stroke(128,128,0);
	// text("at", 46,249);
	fill(0,100,0);
	stroke(107,142,35);
	// text("longing", 300,290);
	fill(255,255,0);
	stroke(124,252,0);
	// text("to", 167,290);
	fill(0,206,209);
	stroke(0,0,128);
	// text("my", 75,249);
	fill(218,165,32);
	stroke(255,165,0);
	// text("I", 8,169);
	fill(255,127,80);
	stroke(128,0,128);
	// text("to", 336,136);
	fill(139,0,139);
	stroke(220,20,60);
	// text("nk", 398,169);
	fill(240,230,140);
	stroke(255,69,0);
	// text("How", 447,249);
	fill(135,206,235);
	stroke(0,128,128);
	// text("and", 280,169);
	fill(255,255,0);
	stroke(107,142,35);
	// text("miss", 71,99);
	fill(107,142,35);
	stroke(255,0,255);
	// text("banking", 422,290);
	fill(0,255,255);
	stroke(0,128,0);
	// text("small", 197,249);
	fill(255,165,0);
	stroke(139,0,139);
	// text("the", 370,208);
	fill(255,140,0);
	stroke(107,142,35);
	// text("nger", 24,290);
	fill(0,139,139);
	stroke(160,82,45);
	// text("in", 349,208);
	fill(173,216,230);
	stroke(0,0,139);
	// text("Even", 300,208);
	fill(238,130,238);
	stroke(0,255,127);
	// text("you", 185,99);
	fill(107,142,35);
	stroke(255,0,0);
	// text("I", 318,169);
	fill(154,205,50);
	stroke(139,0,139);
	// text("rever", 29,397);
	fill(244,164,96);
	stroke(25,25,112);
	// text("you.", 498,169);
	fill(218,165,32);
	stroke(220,20,60);
	// text("mont", 484,99);
	fill(160,82,45);
	stroke(165,42,42);
	// text("ving", 143,99);
	fill(176,224,230);
	stroke(255,165,0);
	// text("can", 336,169);
	fill(255,127,80);
	stroke(107,142,35);
	// text("my", 467,136);
	fill(173,216,230);
	stroke(139,0,0);
	// text("we", 107,208);
	fill(222,184,135);
	stroke(255,215,0);
	// text("darling", 45,33);
	fill(138,43,226);
	stroke(107,142,35);
	// text("How", 8,99);
	fill(240,128,128);
	stroke(255,0,0);
	// text("you", 408,136);
	fill(65,105,225);
	stroke(107,142,35);
	// text("have", 118,290);
	fill(32,178,170);
	stroke(0,0,139);
	// text("stare", 26,169);
	fill(34,139,34);
	stroke(218,165,32);
	// text("ha", 122,99);
	fill(255,127,80);
	stroke(178,34,34);
	// text("long", 293,136);
	fill(238,232,170);
	stroke(0,0,139);
	// text("I'm", 385,290);
	fill(255,69,0);
	stroke(0,255,255);
	// text("this", 153,249);
	fill(0,0,128);
	stroke(124,252,0);
	// text("this", 256,290);
	fill(244,164,96);
	stroke(32,178,170);
	// text("only", 426,169);
	fill(176,224,230);
	stroke(139,69,19);
	// text("return.", 70,331);
	fill(255,255,0);
	stroke(0,206,209);
	// text("the", 289,99);
	fill(255,105,180);
	stroke(0,0,205);
	// text("you", 8,249);
	fill(165,42,42);
	stroke(160,82,45);
	// text("?", 367,290);
	fill(128,128,0);
	stroke(0,206,209);
	// text("many", 430,99);
	fill(0,255,255);
	stroke(139,0,139);
	// text("I", 275,136);
	fill(0,128,128);
	stroke(184,134,11);
	// text("do", 71,290);
	fill(127,255,212);
	stroke(75,0,130);
	// text("yours,", 85,397);
	fill(186,85,211);
	stroke(199,21,133);
	// text("without", 472,208);
	fill(128,0,128);
	stroke(0,255,0);
	// text("swift", 8,331);
	fill(127,255,0);
	stroke(75,0,130);
	// text("Daisy", 8,463);
	fill(147,112,219);
	stroke(25,25,112);
	// text("My", 8,33);
	fill(176,224,230);
	stroke(0,0,205);
	// text("is", 11,136);
	fill(135,206,235);
	stroke(218,165,32);
	// text("night", 180,169);
	fill(0,139,139);
	stroke(0,0,255);
	// text("Fo", 8,397);
	fill(233,150,122);
	stroke(0,128,128);
	// text("?", 282,208);
	fill(0,128,0);
	stroke(160,82,45);
	// text("in", 446,136);
	fill(176,224,230);
	stroke(127,255,0);
	// text("will", 69,208);
	fill(238,130,238);
	stroke(0,206,209);
	// text("of", 469,169);
	fill(0,0,139);
	stroke(0,255,127);
	text("hold", 365,136);
	text("up", 86,169);
	fill(0,191,255);
	stroke(255,0,255);
	// text("we", 110,136);
	fill(139,69,19);
	stroke(255,215,0);
	// text("united", 169,208);
	fill(255,0,0);
	stroke(0,255,255);
	// text("much", 492,249);
	fill(0,100,0);
	stroke(0,206,209);
	// text("it", 35,136);
	fill(210,105,30);
	stroke(139,0,0);
	// text("be", 142,208);
	fill(72,209,204);
	stroke(148,0,211);
	// text("desolate.", 357,249);
	fill(205,133,63);
	stroke(154,205,50);
	// text("thi", 374,169);
	fill(240,230,140);
	stroke(0,128,0);
	// text("arms.", 501,136);
	fill(0,255,0);
	stroke(0,100,0);
	// text("sky,", 232,169);
	fill(0,128,128);
	stroke(0,139,139);
	// text("When", 12,208);
	fill(75,0,130);
	stroke(154,205,50);
	// text("town", 251,249);
	fill(147,112,219);
	stroke(0,128,128);
	// text("kissed", 190,136);
	fill(160,82,45);
	stroke(107,142,35);
	// text("I", 100,290);
	fill(0,0,205);
	// text("last", 145,136);
	fill(222,184,135);
	stroke(75,0,130);
	// text("feels", 303,249);
	fill(219,112,147);
	stroke(255,165,0);
	// text("around", 223,99);
	fill(75,0,130);
	stroke(0,100,0);
	// text("on", 494,290);
	fill(25,25,112);
	stroke(255,215,0);
	// text("again", 228,208);
	stroke(255,0,255);
	// text("hs", 529,99);
	fill(199,21,133);
	stroke(50,205,50);
	// text("place.", 327,99);
	fill(0,191,255);
	stroke(154,205,50);
	// text("?", 257,136);
	fill(0,0,139);
	stroke(0,255,127);
	text("spring", 408,208);
	text("store", 196,290);
	text("side", 109,249);
	text("at", 113,169);



}
