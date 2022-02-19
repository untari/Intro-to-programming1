function Particle(x, y, xSpeed, ySpeed, size, colour)
{
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	this.colour = colour;
	this.age = 0;

	this.drawPraticle = function()
	{
		fill(this.colour)
		ellipse(this.x, this.y, this.size);
	}
	this.updateParticles = function()
	{
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.age++;
	}
}

function Emitter(x, y,xSpeed, ySpeed, size, colour)
{
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	this.colour = colour;
	
	this.startParticles = 0;
	this.lifetime = 0;
	this.particles = [];

	this.startEmitter = function(startParticles, lifetime){
		this.startParticles = startParticles;
		this.lifetime = lifetime; 

		//start emitter with initial particles
		for(var i = 0; i < startParticles; i++ )
		{
			var p = new Particle(
				random(this.x-10, this.x + 10),
				random(this.y - 10, this.y + 10),
				random(this.xSpeed - 1, this.xSpeed + 1),
				random(this.ySpeed - 1, this.ySpeed + 1),
				random(this.size -4, this.size + 4),
				this.colour);
			this.particles.push(p);
		}
	}
	this.updateParticles = function()
	{
		//iterate through particles and draw to the screen
		for(var i = 0; i < this.particles.length; i++)
		{
			this.particles[i].drawPraticle();
			this.particles[i].updateParticles();
		}
	}
}
 
var emit;

function setup()
{
	createCanvas(800, 600);
	emit = new Emitter(width/2, height-100, 0, -1, 10, color(200, 0, 200));
	emit.startEmitter(200, 100);
}

function draw()
{
	background(10);
	emit.updateParticles();
}