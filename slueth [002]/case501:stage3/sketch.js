/*

Officer: 2816450
CaseNum: 501-2-16275225-2816450

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the itemImg variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImg = loadImage("Dice.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(var i = 0; i < 10; i++)
    {
        image(itemImg, 485 + i * 66, 390);
    }
    for(var j = 0; j < 10; j++)
    {
        image(itemImg, 485 + j * 66, 468);
    }
    for(var k = 0; k < 10; k++)
    {
        image(itemImg, 485 + k * 66, 543);
    }
}
