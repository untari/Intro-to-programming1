
var worldCloud;
var currentWord;
var wordsX;
var wordsY;

function setup() 
{
    createCanvas(500,500);
    wordCloud = [];
    wordsX = [];
    wordsY = [];

    currentWord = "";
}

function draw() 
{

    background(0);
    fill(255);

    text(currentWord, 20, 20);

    for(var i = 0; i < wordCloud.length; i++)
    {
        text(wordCloud[i], wordsX[i], wordsY[i]);
    }
}

function keyPressed()
{
    console.log(keyCode);

    if(keyCode == 13)
    {
        worldCloud.push(currentWord);
        currentWord = "";
        wordsX.push(random(width/4, width * 3/4));
        wordsY.push(random(height/4, height * 3/4));
    }
    else{
        currentWord += key;
    }
}
