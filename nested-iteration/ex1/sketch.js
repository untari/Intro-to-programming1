
function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);
    fill(255,0,255);
    noStroke();

    for(var j = 0; j < 20; j++) //rows
    {
        for(var i = 0; i < 20; i++) //columns
        {   
            var r = i + j * 2;
            ellipse(50 + i * 30, 50 + j * 30, r , r);
        }
    }
 
}
