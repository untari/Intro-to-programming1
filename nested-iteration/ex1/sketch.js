var maxDist;
function setup() 
{
    createCanvas(800,800);
    maxDist = dist(0, 0, width/2, height/2);
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
            if(i%2 == 0) //modulo
            {
                fill(255);
            }
            else {
                fill(255, 0 , 255);
            }
            var d = dist(mouseX, mouseY, 50 + i * 30, 50 + j * 30 );
            var r = d/maxDist;
            ellipse(50 + i * 30, 50 + j * 30, r * 30, r * 30);
        }
    }
 
}
