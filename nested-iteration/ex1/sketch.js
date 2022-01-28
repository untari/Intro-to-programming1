

function setup() 
{
    createCanvas(800,800);
}

function draw() 
{

    background(0);
    fill(255,0,255);

    for(var h = 0; h < 3; h++)
    {
        for(var i = 0; i < 10; i++)
        {
            ellipse(30 + i * 60, 30 + h * 40, 30);
        }
    }

    // for(var j = 0; j < mouseY/30; j ++)
    // {
    //     for(var i = 0; i < mouseX/30; i++)
    //     {
    //           ellipse(i * 30,j * 30,30,30);
    //     }
    // }

 
}
