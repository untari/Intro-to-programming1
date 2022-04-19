/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 2816450
CaseNum: 802-2-46356930-2816450

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone!
 I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in 
 hand_to_win from the deck and store it in the hand array.

*Write a function called setWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and 
the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in hand_to_win add it 
to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random
 integers but set the random value to start at 7 and end at 89.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var card_deck = [{"cardSuit":"Spades","number":"A"},{"cardSuit":"Spades","number":"2"},{"cardSuit":"Spades","number":"3"},{"cardSuit":"Spades","number":"4"},{"cardSuit":"Spades","number":"5"},{"cardSuit":"Spades","number":"6"},{"cardSuit":"Spades","number":"7"},{"cardSuit":"Spades","number":"8"},{"cardSuit":"Spades","number":"9"},{"cardSuit":"Spades","number":"10"},{"cardSuit":"Spades","number":"J"},{"cardSuit":"Spades","number":"Q"},{"cardSuit":"Spades","number":"K"},{"cardSuit":"Clubs","number":"A"},{"cardSuit":"Clubs","number":"2"},{"cardSuit":"Clubs","number":"3"},{"cardSuit":"Clubs","number":"4"},{"cardSuit":"Clubs","number":"5"},{"cardSuit":"Clubs","number":"6"},{"cardSuit":"Clubs","number":"7"},{"cardSuit":"Clubs","number":"8"},{"cardSuit":"Clubs","number":"9"},{"cardSuit":"Clubs","number":"10"},{"cardSuit":"Clubs","number":"J"},{"cardSuit":"Clubs","number":"Q"},{"cardSuit":"Clubs","number":"K"},{"cardSuit":"Hearts","number":"A"},{"cardSuit":"Hearts","number":"2"},{"cardSuit":"Hearts","number":"3"},{"cardSuit":"Hearts","number":"4"},{"cardSuit":"Hearts","number":"5"},{"cardSuit":"Hearts","number":"6"},{"cardSuit":"Hearts","number":"7"},{"cardSuit":"Hearts","number":"8"},{"cardSuit":"Hearts","number":"9"},{"cardSuit":"Hearts","number":"10"},{"cardSuit":"Hearts","number":"J"},{"cardSuit":"Hearts","number":"Q"},{"cardSuit":"Hearts","number":"K"},{"cardSuit":"Diamonds","number":"A"},{"cardSuit":"Diamonds","number":"2"},{"cardSuit":"Diamonds","number":"3"},{"cardSuit":"Diamonds","number":"4"},{"cardSuit":"Diamonds","number":"5"},{"cardSuit":"Diamonds","number":"6"},{"cardSuit":"Diamonds","number":"7"},{"cardSuit":"Diamonds","number":"8"},{"cardSuit":"Diamonds","number":"9"},{"cardSuit":"Diamonds","number":"10"},{"cardSuit":"Diamonds","number":"J"},{"cardSuit":"Diamonds","number":"Q"},{"cardSuit":"Diamonds","number":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var hand_to_win = [{"s":"Diamonds","n":"Q"},{"s":"Hearts","n":"K"},{"s":"Spades","n":"K"},{"s":"Diamonds","n":"10"},{"s":"Spades","n":"Q"}];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed);
	//call your setWinningHand function here
	setWinningHand();
}
//write your setWinningHand function here
function setWinningHand(){
	for(var i = 0; i < card_deck.length; i++)
	{
		for(var j = 0; j < hand_to_win.length; j++)
		{
			if(card_deck[i].cardSuits == hand_to_win[j].cardSuits && 
				card_deck[i].values == hand_to_win[j].number)
			{
				hand.push(card_deck[i]);	
				break;
			}	
		}
	}
}

//write your shuffleSeed() function here. {
function shuffleSeed(){
	var emptyShuffle = [];
	for(var i = 0; i <  52; i++)
	{
		emptyShuffle.push(round(random(7, 89)));
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
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) 
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
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
			if (card.number == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
