
var myPoint;


function setup()
{
    
    createCanvas(500,500);
    
    myPoint = createVector(0,-100);
    
    myPoint.mult(0.5);
    
}

function draw()
{
    
    background(0,0,0);
    fill(255);
    stroke(255);

    translate(width/2,height/2);
    
    var v = p5.Vector.mult(myPoint, 2);

    ellipse(v.x, v.y, 50); 

    line(0, 0, myPoint.x, myPoint.y);
    
    myPoint.rotate(0.01);
    
}

function keyPressed()
{
    
}


