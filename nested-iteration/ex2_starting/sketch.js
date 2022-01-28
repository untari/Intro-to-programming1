
var worldCloud;
var currentWorld;

function setup() 
{
    createCanvas(500,500);
    worldCloud = [];

    //push method
    worldCloud.push("first");
    worldCloud.push("second");
    worldCloud.push("third");
    worldCloud.push("fourth");


    currentWorld = "";
}

function draw() 
{

    background(0);
    fill(255);

    for(var i = 0; i < 4; i++)
    {
        text(worldCloud[i], 20, 40 + i * 30);
    }
}

function keyPressed()
{
    console.log(keyCode);
}
