/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 2816450
CaseNum: 802-1-35968423-2816450

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

* Write a function called buildShuffleArray.
* Declare an empty array in the function.
* Using a for loop fill the array with 52 random integers between 3 and 82.
* Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
* Return the array at the end of the function.
* Call buildShuffleArray in setup.
* Call Shuffle deck using the return value from buildShuffleArray as the argument.

*/

var playingCards = [{"cardSuit":"Spades","n":"A"},{"cardSuit":"Spades","n":"2"},{"cardSuit":"Spades","n":"3"},{"cardSuit":"Spades","n":"4"},{"cardSuit":"Spades","n":"5"},{"cardSuit":"Spades","n":"6"},{"cardSuit":"Spades","n":"7"},{"cardSuit":"Spades","n":"8"},{"cardSuit":"Spades","n":"9"},{"cardSuit":"Spades","n":"10"},{"cardSuit":"Spades","n":"J"},{"cardSuit":"Spades","n":"Q"},{"cardSuit":"Spades","n":"K"},{"cardSuit":"Clubs","n":"A"},{"cardSuit":"Clubs","n":"2"},{"cardSuit":"Clubs","n":"3"},{"cardSuit":"Clubs","n":"4"},{"cardSuit":"Clubs","n":"5"},{"cardSuit":"Clubs","n":"6"},{"cardSuit":"Clubs","n":"7"},{"cardSuit":"Clubs","n":"8"},{"cardSuit":"Clubs","n":"9"},{"cardSuit":"Clubs","n":"10"},{"cardSuit":"Clubs","n":"J"},{"cardSuit":"Clubs","n":"Q"},{"cardSuit":"Clubs","n":"K"},{"cardSuit":"Hearts","n":"A"},{"cardSuit":"Hearts","n":"2"},{"cardSuit":"Hearts","n":"3"},{"cardSuit":"Hearts","n":"4"},{"cardSuit":"Hearts","n":"5"},{"cardSuit":"Hearts","n":"6"},{"cardSuit":"Hearts","n":"7"},{"cardSuit":"Hearts","n":"8"},{"cardSuit":"Hearts","n":"9"},{"cardSuit":"Hearts","n":"10"},{"cardSuit":"Hearts","n":"J"},{"cardSuit":"Hearts","n":"Q"},{"cardSuit":"Hearts","n":"K"},{"cardSuit":"Diamonds","n":"A"},{"cardSuit":"Diamonds","n":"2"},{"cardSuit":"Diamonds","n":"3"},{"cardSuit":"Diamonds","n":"4"},{"cardSuit":"Diamonds","n":"5"},{"cardSuit":"Diamonds","n":"6"},{"cardSuit":"Diamonds","n":"7"},{"cardSuit":"Diamonds","n":"8"},{"cardSuit":"Diamonds","n":"9"},{"cardSuit":"Diamonds","n":"10"},{"cardSuit":"Diamonds","n":"J"},{"cardSuit":"Diamonds","n":"Q"},{"cardSuit":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your buildShuffleArray function here. Followed by a call to shuffleDeck with the return value of buildShuffleArray as an argument.
	buildShuffleArray();
	shuffleDeck(buildShuffleArray);
}
//write your buildShuffleArray function here
function buildShuffleArray()
{
	emptyShuffle = [];
	for(var i = 0; i < 52; i++)
	{
		emptyShuffle.push(round(random(3, 82)));
	}
	return emptyShuffle;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (playingCards[i].marked)
		{
			drawCard(playingCards[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(playingCards[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.n == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
