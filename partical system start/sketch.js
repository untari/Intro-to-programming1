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
		fill(colour)
		ellipse(x, y, size);
	}
	this.updateParticle = function()
	{
		this.x += xSpeed;
		this.y += ySpeed;
		this.age++;
	}
}

function emitter(x, y)
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
	}
}
 
function setup()
{
	createCanvas(800, 600);
}

function draw()
{

}