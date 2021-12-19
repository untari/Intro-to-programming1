/*

Officer: 2816450
CaseNum: 202-0-60404906-2816450

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Khaki text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(593,492);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

	fill(173,216,230);
	// text("I", 145,162);
	fill(218,112,214);
	// text("your", 362,75);
	fill(0,0,128);
	// text("Bob", 14,375);
	fill(127,255,0);
	// text("ing,", 187,219);
	fill(210,105,30);
	// text("must", 176,162);
	fill(135,206,250);
	// text("gr", 231,219);
	fill(127,255,0);
	// text("were", 410,104);
	fill(0,0,139);
	// text("only", 523,191);
	fill(176,224,230);
	// text("p.", 265,275);
	fill(0,139,139);
	// text("een", 249,219);
	fill(0,128,128);
	// text("ly", 442,75);
	fill(100,149,237);
	// text("sses,", 129,325);
	fill(147,112,219);
	// text("darl", 154,219);
	fill(34,139,34);
	// text("It", 361,219);
	fill(32,178,170);
	// text("that", 210,248);
	fill(139,69,19);
	// text("face,", 471,75);
	// text("I", 485,219);
	// text("Ever", 204,191);
	fill(250,128,114);
	// text("of", 160,275);
	fill(0,191,255);
	// text("b", 18,275);
	fill(153,50,204);
	// text("music", 103,275);
	// text("I", 532,75);
	fill(255,0,255);
	// text("saw", 319,75);
	fill(128,0,128);
	// text("ckiest", 320,162);
	fill(128,128,0);
	// text("I", 256,248);
	fill(255,105,180);
	// text("Oh", 14,25);
	fill(255,69,0);
	// text("make", 507,132);
	fill(107,142,35);
	// text("knew", 21,104);
	fill(240,230,140);
	text("day", 298,132);
	text("a", 552,132);
	fill(128,128,0);
	// text("I", 476,132);
	// text("eyes.", 298,219);
	fill(255,255,0);
	// text("Dai", 115,25);
	fill(0,128,0);
	// text("alive", 451,162);
	fill(0,255,255);
	// text("s", 302,104);
	fill(139,69,19);
	// text("love", 409,75);
	fill(139,0,139);
	// text("person", 385,162);
	fill(124,252,0);
	// text("your", 87,191);
	// text("when", 426,219);
	fill(178,34,34);
	// text("and", 68,325);
	fill(0,139,139);
	// text("alone", 21,248);
	fill(244,164,96);
	// text("the", 106,248);
	fill(255,127,80);
	// text("moment", 167,75);
	fill(233,150,122);
	// text("t", 133,104);
	fill(255,99,71);
	// text("rst", 132,75);
	fill(205,133,63);
	// text("I", 20,191);
	// text("am", 516,219);
	fill(0,0,128);
	// text("that", 506,162);
	fill(199,21,133);
	// text("that", 324,104);
	fill(106,90,205);
	// text("be", 225,162);
	fill(144,238,144);
	// text("I", 288,75);
	// text("hear", 287,248);
	fill(139,0,0);
	// text("confessi", 15,162);
	fill(127,255,212);
	// text("can", 483,191);
	// text("of", 73,219);
	fill(0,0,255);
	// text("like", 445,248);
	fill(176,224,230);
	// text("on", 87,162);
	fill(0,255,0);
	// text("in", 77,248);
	// text("sunny", 239,132);
	fill(154,205,50);
	// text("your", 107,219);
	// text("x", 62,375);
	fill(100,149,237);
	// text("one", 507,104);
	fill(238,232,170);
	// text("is", 398,219);
	fill(0,128,0);
	// text("ki", 113,325);
	fill(0,255,255);
	// text("since", 262,191);
	fill(255,69,0);
	// text("our", 320,191);
	fill(64,224,208);
	// text("sed", 55,275);
	fill(50,205,50);
	// text("true", 16,132);
	// text("quiet", 150,248);
	fill(75,0,130);
	// text("love.", 64,132);
	fill(0,255,127);
	// text("May", 427,132);
	fill(148,0,211);
	// text("think", 17,219);
	fill(0,128,0);
	// text("from", 79,104);
	fill(0,100,0);
	// text("am", 51,191);
	fill(165,42,42);
	// text("last", 356,191);
	fill(255,0,0);
	// text("?", 117,162);
	fill(72,209,204);
	// text("my", 201,132);
	fill(186,85,211);
	// text("fi", 113,75);
	fill(219,112,147);
	// text("lu", 308,162);
	fill(0,250,154);
	// text("hose", 139,104);
	fill(0,0,205);
	// text("the", 69,75);
	fill(0,255,0);
	// text("lovely", 53,25);
	fill(165,42,42);
	// text("les", 30,275);
	fill(222,184,135);
	// text("that", 242,75);
	fill(240,230,140);
	text("second", 244,104);
	fill(176,224,230);
	// text("I", 452,191);
	fill(0,255,0);
	// text("you", 370,104);
	fill(160,82,45);
	// text("your", 341,248);
	fill(65,105,225);
	// text("the", 264,162);
	// text("the", 194,275);
	fill(255,127,80);
	// text("sy,", 149,25);
	fill(72,209,204);
	// text("You", 115,132);
	fill(222,184,135);
	// text("Love", 14,325);
	fill(127,255,212);
	// text("From", 14,75);
	fill(176,224,230);
	// text("voice", 388,248);
	fill(186,85,211);
	// text("few", 192,104);
	fill(173,255,47);
	// text("har", 238,275);
	// text("the", 492,248);
	fill(30,144,255);
	// text("my", 469,104);
	fill(240,230,140);
	text("in", 345,132);
	text("date", 397,191);
	text("chosen", 134,191);
	text("April", 374,132);
	fill(30,144,255);
	// text("are", 158,132);



}
