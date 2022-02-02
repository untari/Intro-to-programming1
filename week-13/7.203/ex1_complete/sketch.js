

function setup()
{
    createCanvas(500,500);

    textSize(40);

    console.log(sayHello());
    
}

function draw()
{
    background(0);
    noStroke();
    fill(255);
    text(sayHello(), width/2, height/2);
}


function sayHello()
{
    if(random() > 0.5)
    {
        return "hello world"; 
    } else{
        return "goodbye world"; 
    }

}