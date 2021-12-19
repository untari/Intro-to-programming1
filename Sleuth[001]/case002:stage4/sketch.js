/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 2816450
CaseNum: 201-3-83448138-2816450

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(375, 345);
    vertex(340,420);
    vertex(338, 422);
    vertex(304, 439);
    vertex(303, 440);
    vertex(330, 468);
    vertex(427, 340);
    vertex(670, 543);
    vertex(734, 398);
    vertex(510, 260);
    vertex(554, 229);
    vertex(506, 150);
    vertex(488, 163);
    vertex(522, 220);
    vertex(497, 230);
    vertex(421, 214);
    vertex(354, 276);
    vertex(373, 346);
    endShape();

}
