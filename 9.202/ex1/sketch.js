
var tamagotchi;

function setup()
{
    
    createCanvas(500,500);
    noStroke();
    
    tamagotchi = {

        points: [],
        size: 200,

        setup: function(){
            // console.log("setup");
            for(var i = 0; i < 36; i++)
            {
                var incr = PI * 2/36;
                var v = createVector(0, 1);
                //rotate the vector
                var a = incr * i;
                v.rotate(a);
                this.points.push(v);
            }
        },
        draw: function(){
            // console.log("draw");
            fill(255);
            beginShape();
            for(var i = 0; i < this.points.length; i++)
            {
                var v = p5.Vector.mult(this.points[i], this.size);

                vertex(
                    v.x,
                    v.y   
                )
            }
            endShape();
        }
    }

    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);

    tamagotchi.draw();
    
    
}

function mouseDragged()
{
  

}



