/*

Officer: 2816450
CaseNum: 501-1-13706502-2816450

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the itemImg variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImg;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImg = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(var i = 0; i < 14; i++)
    {
        image(itemImg , 463 + i * 38, 264 + i * 24  );
    }
    for(var j = 0; j < 7; j++)
    {
        image(itemImg, 810 - j * 32, 325 + j * 30);
    }


}
