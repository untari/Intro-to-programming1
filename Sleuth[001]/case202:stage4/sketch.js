/*

Officer: 2816450
CaseNum: 202-3-94874179-2816450

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Dark Orange filled text with a Midnight Blue outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(634,541);
	textSize(31);
}

function draw()
{
	background(255);

	fill(0,139,139);
	stroke(0,0,128);
	textFont(Diggity);
	// text("of", 522,193);
	fill(147,112,219);
	stroke(50,205,50);
	textFont(RonsFont);
	// text("times.", 278,157);
	fill(255,69,0);
	stroke(154,205,50);
	textFont(Ballpointprint);
	// text("If", 110,228);
	fill(238,232,170);
	stroke(75,0,130);
	// text("ing", 172,93);
	fill(199,21,133);
	stroke(46,139,87);
	// text("much", 501,93);
	fill(139,0,139);
	stroke(0,255,0);
	textFont(Melissa);
	// text("so,", 164,228);
	fill(160,82,45);
	stroke(46,139,87);
	textFont(Diggity);
	// text("money", 18,228);
	push();
	fill(139,0,0);
	stroke(139,69,19);
	textFont(Ballpointprint);
	// text("can", 236,228);
	pop();
	fill(240,230,140);
	stroke(255,69,0);
	textFont(Melissa);
	// text("Are", 362,193);
	fill(0,255,255);
	stroke(128,0,0);
	textFont(RonsFont);
	// text("nore", 33,193);
	fill(255,127,80);
	stroke(107,142,35);
	// text("Bob,", 125,31);
	push();
	fill(72,209,204);
	stroke(75,0,130);
	// text("silence.", 449,125);
	pop();
	stroke(0,0,255);
	// text("so", 71,157);
	fill(0,128,128);
	stroke(153,50,204);
	textFont(Diggity);
	// text("all", 443,260);
	push();
	fill(34,139,34);
	stroke(0,0,139);
	textFont(Ballpointprint);
	// text("how", 448,93);
	pop();
	stroke(0,100,0);
	// text("not", 344,93);
	fill(176,224,230);
	stroke(0,255,127);
	textFont(Ballpointprint);
	// text("ed", 167,157);
	fill(139,69,19);
	stroke(154,205,50);
	textFont(Melissa);
	// text("sec", 315,125);
	fill(165,42,42);
	stroke(255,140,0);
	textFont(Ballpointprint);
	// text("Is", 520,260);
	fill(65,105,225);
	stroke(128,0,0);
	textFont(RonsFont);
	// text("break", 204,260);
	fill(210,105,30);
	stroke(218,165,32);
	textFont(Ballpointprint);
	// text("?", 270,93);
	stroke(0,191,255);
	// text("The", 248,125);
	fill(152,251,152);
	stroke(139,69,19);
	textFont(RonsFont);
	// text("short", 448,193);
	fill(0,139,139);
	stroke(127,255,0);
	textFont(Ballpointprint);
	// text("?", 240,292);
	fill(255,105,180);
	stroke(0,128,0);
	// text("Are", 11,93);
	push();
	fill(0,0,255);
	stroke(107,142,35);
	textFont(Melissa);
	// text("can", 109,125);
	pop();
	fill(128,0,0);
	stroke(128,0,0);
	textFont(Diggity);
	// text("away", 60,260);
	fill(219,112,147);
	stroke(160,82,45);
	// text("send", 285,228);
	fill(255,140,0);
	stroke(25,25,112);
	textFont(Ballpointprint);
	text("safe", 171,292);
	text("guard", 108,157);
	fill(0,255,255);
	stroke(255,165,0);
	textFont(Diggity);
	// text("our", 567,260);
	fill(178,34,34);
	stroke(255,69,0);
	textFont(RonsFont);
	// text("delays.", 273,193);
	fill(153,50,204);
	stroke(184,134,11);
	textFont(Melissa);
	// text("longer", 490,157);
	fill(30,144,255);
	stroke(160,82,45);
	textFont(RonsFont);
	// text("My", 7,31);
	fill(64,224,208);
	stroke(127,255,0);
	textFont(Diggity);
	// text("continual", 180,193);
	push();
	fill(219,112,147);
	stroke(139,69,19);
	// text("darling", 53,31);
	pop();
	fill(238,232,170);
	stroke(255,215,0);
	textFont(Ballpointprint);
	// text("we", 480,228);
	fill(255,99,71);
	stroke(75,0,130);
	textFont(RonsFont);
	// text("hese", 122,193);
	fill(106,90,205);
	stroke(139,0,139);
	// text("atio", 50,292);
	push();
	fill(0,250,154);
	stroke(139,0,0);
	// text("t", 103,193);
	pop();
	fill(148,0,211);
	stroke(139,0,0);
	textFont(Ballpointprint);
	// text("Daisy", 7,416);
	fill(75,0,130);
	stroke(50,205,50);
	textFont(RonsFont);
	// text("take", 145,125);
	fill(127,255,0);
	stroke(210,105,30);
	// text("ig", 15,193);
	fill(0,100,0);
	stroke(220,20,60);
	// text("?", 88,228);
	fill(210,105,30);
	stroke(255,0,0);
	textFont(Melissa);
	// text("yours,", 87,354);
	fill(154,205,50);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("no", 453,157);
	fill(128,0,128);
	stroke(160,82,45);
	// text("me", 221,93);
	fill(147,112,219);
	stroke(0,0,128);
	textFont(Diggity);
	// text("this", 395,260);
	fill(135,206,235);
	stroke(199,21,133);
	textFont(RonsFont);
	// text("nship", 98,292);
	fill(152,251,152);
	stroke(0,191,255);
	textFont(Ballpointprint);
	// text("a", 176,260);
	fill(128,128,0);
	stroke(75,0,130);
	textFont(RonsFont);
	// text("more", 16,125);
	fill(0,206,209);
	stroke(220,20,60);
	textFont(Ballpointprint);
	// text("sure", 388,93);
	push();
	fill(135,206,250);
	stroke(154,205,50);
	textFont(RonsFont);
	// text("are", 15,157);
	pop();
	fill(0,100,0);
	stroke(178,34,34);
	textFont(Diggity);
	// text("x", 87,416);
	push();
	fill(153,50,204);
	stroke(0,139,139);
	textFont(Melissa);
	// text("rets,", 345,125);
	pop();
	fill(138,43,226);
	// text("out.", 472,260);
	fill(218,112,214);
	stroke(0,0,205);
	textFont(RonsFont);
	// text("should", 527,228);
	push();
	fill(219,112,147);
	stroke(0,0,255);
	// text("rel", 13,292);
	pop();
	fill(255,140,0);
	stroke(25,25,112);
	textFont(Ballpointprint);
	text("avoid", 118,93);
	text("I", 366,157);
	fill(255,255,0);
	stroke(128,0,128);
	textFont(Melissa);
	// text("You", 543,125);
	fill(255,140,0);
	stroke(25,25,112);
	textFont(Ballpointprint);
	text("you", 69,93);
	fill(255,0,255);
	stroke(124,252,0);
	// text("?", 214,125);
	fill(255,165,0);
	stroke(0,100,0);
	// text("I", 198,228);
	push();
	fill(255,140,0);
	stroke(25,25,112);
	text("go", 20,260);
	text("the", 395,125);
	text("for", 126,260);
	pop();
	fill(255,140,0);
	stroke(25,25,112);
	text("can", 404,157);
	fill(135,206,235);
	stroke(0,255,255);
	textFont(Melissa);
	// text("Forever", 17,354);
	fill(100,149,237);
	stroke(0,128,128);
	// text("cash.", 341,228);
	fill(173,255,47);
	stroke(0,0,128);
	textFont(Diggity);
	// text("Perhaps", 392,228);
	push();
	fill(240,230,140);
	stroke(255,0,255);
	textFont(Ballpointprint);
	// text("you", 399,193);
	pop();
	fill(127,255,0);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("and", 285,260);
	fill(25,25,112);
	stroke(50,205,50);
	textFont(Diggity);
	// text("I", 94,125);
	push();
	fill(240,128,128);
	stroke(0,250,154);
	// text("sort", 340,260);
	pop();
	fill(139,0,0);
	stroke(255,255,0);
	// text("I'm", 304,93);
	fill(176,224,230);
	stroke(0,206,209);
	textFont(RonsFont);
	// text("some", 216,157);



}
