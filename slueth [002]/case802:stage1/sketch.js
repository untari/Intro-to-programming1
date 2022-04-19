/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 2816450
CaseNum: 802-0-16368892-2816450

Time to pull on your best threads kid, grab a martini prepare for an evening at the
 Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. T
hey maintain an air of respectability as the board of Rossling Polling, 
a company used by the shady politicians of Console City to make them seem
 more popular than they really are. They’re prepared to give up the dirt on their 
 techniques if we can beat them in a game of 5 card stud poker. We can’t go in and
  gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence 
  room to compete with these card sharks. Let’s stack the odds in our favour.
   First let’s learn how to mark cards.

* Write a function called  pickCards.
* Using a for loop to set the marked property of the card_deck array elements
 to true when the suit is Diamonds or the value is J
* Call the function from within setup

*/

var card_deck = [{"marked":false,"card_suit":"Spades","number":"A"},{"marked":false,"card_suit":"Spades","number":"2"},{"marked":false,"card_suit":"Spades","number":"3"},{"marked":false,"card_suit":"Spades","number":"4"},{"marked":false,"card_suit":"Spades","number":"5"},{"marked":false,"card_suit":"Spades","number":"6"},{"marked":false,"card_suit":"Spades","number":"7"},{"marked":false,"card_suit":"Spades","number":"8"},{"marked":false,"card_suit":"Spades","number":"9"},{"marked":false,"card_suit":"Spades","number":"10"},{"marked":false,"card_suit":"Spades","number":"J"},{"marked":false,"card_suit":"Spades","number":"Q"},{"marked":false,"card_suit":"Spades","number":"K"},{"marked":false,"card_suit":"Clubs","number":"A"},{"marked":false,"card_suit":"Clubs","number":"2"},{"marked":false,"card_suit":"Clubs","number":"3"},{"marked":false,"card_suit":"Clubs","number":"4"},{"marked":false,"card_suit":"Clubs","number":"5"},{"marked":false,"card_suit":"Clubs","number":"6"},{"marked":false,"card_suit":"Clubs","number":"7"},{"marked":false,"card_suit":"Clubs","number":"8"},{"marked":false,"card_suit":"Clubs","number":"9"},{"marked":false,"card_suit":"Clubs","number":"10"},{"marked":false,"card_suit":"Clubs","number":"J"},{"marked":false,"card_suit":"Clubs","number":"Q"},{"marked":false,"card_suit":"Clubs","number":"K"},{"marked":false,"card_suit":"Hearts","number":"A"},{"marked":false,"card_suit":"Hearts","number":"2"},{"marked":false,"card_suit":"Hearts","number":"3"},{"marked":false,"card_suit":"Hearts","number":"4"},{"marked":false,"card_suit":"Hearts","number":"5"},{"marked":false,"card_suit":"Hearts","number":"6"},{"marked":false,"card_suit":"Hearts","number":"7"},{"marked":false,"card_suit":"Hearts","number":"8"},{"marked":false,"card_suit":"Hearts","number":"9"},{"marked":false,"card_suit":"Hearts","number":"10"},{"marked":false,"card_suit":"Hearts","number":"J"},{"marked":false,"card_suit":"Hearts","number":"Q"},{"marked":false,"card_suit":"Hearts","number":"K"},{"marked":false,"card_suit":"Diamonds","number":"A"},{"marked":false,"card_suit":"Diamonds","number":"2"},{"marked":false,"card_suit":"Diamonds","number":"3"},{"marked":false,"card_suit":"Diamonds","number":"4"},{"marked":false,"card_suit":"Diamonds","number":"5"},{"marked":false,"card_suit":"Diamonds","number":"6"},{"marked":false,"card_suit":"Diamonds","number":"7"},{"marked":false,"card_suit":"Diamonds","number":"8"},{"marked":false,"card_suit":"Diamonds","number":"9"},{"marked":false,"card_suit":"Diamonds","number":"10"},{"marked":false,"card_suit":"Diamonds","number":"J"},{"marked":false,"card_suit":"Diamonds","number":"Q"},{"marked":false,"card_suit":"Diamonds","number":"K"}];
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


	//call your pickCards function here
	pickCards();

}

//write your pickCards function here
function pickCards()
{
	for(var i = 0; i < card_deck.length; i++)
	{
		if(card_deck[i].card_suit == "Diamonds" || card_deck[i].number == "J")
		{
			card_deck[i].marked = true;
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
		if (card_deck[i].marked)
		{
			drawCard(card_deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(card_deck[i], 400 + i * 18, 250);
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
			if (card.number == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
