
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
                var v = createVector(0, random(0.75, 1));
                //rotate the vector
                var a = incr * i;
                v.rotate(a);
                this.points.push(v);
            }
        },
        draw: function(){
            // console.log("draw");
            fill(128, 0, 128);
            beginShape();
            for(var i = 0; i < this.points.length; i++)
            {
                var v = p5.Vector.mult(this.points[i], this.size);

                curveVertex(
                    v.x,
                    v.y   
                )
            }
            endShape();

            fill(255);
            ellipse(this.size * 0.1, 0, this.size * 0.1);
            ellipse(-this.size * 0.1, 0, this.size * 0.1);

            fill(0);

            var v = createVector(0,1);

            v.mult(this.size * 0.02);

            ellipse(this.size * 0.1 + v.x, v.y, this.size * 0.05);
            ellipse(-this.size * 0.1 + v.x, v.y, this.size * 0.05);
        },
        grow: function()
        {
            this.size *= random(1, 1.005);
            this.size = min(220, this.size);
        },
        shrink: function()
        {   
            this.size *= random(1, 0.9995);
            this.size = max(30, this.size);
        }
    }

    tamagotchi.setup();
    
    
}

function draw()
{
    
    background(0,0,0);
    translate(width/2,height/2);

    tamagotchi.draw();
    tamagotchi.shrink();
    
}

function mouseDragged()
{
    // var v = createVector(mouseX - width/2, mouseY - height/2);
    // v.normalize();
    tamagotchi.grow();
}



