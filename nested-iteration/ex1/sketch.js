

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);
    fill(255,0,255);

    for(var h = 0; h < 3; h++) //rows
    {
        for(var i = 0; i < 10; i++) //columns
        {   
            fill(255, 0, 255);
            ellipse(30 + i * 60, 30 + h * 60, 30, 30);
            fill(225);
            text("h=" + h + ", i=" + i, 30 + i * 60, 30 + h * 60 );
        }
    }
 
}
