var myShape1;
var myShape2;
var myShape3;
var myShape4;

function setup() {

	createCanvas(600,600);

	myShape1 = new Shape(100, 100, 3, 25, color(200,5,220));
	myShape2 = new Shape(200, 200, 2,35, color(100,0,50));
	myShape3 = new Shape(300, 100, 4, 20, color(200,200,100));
	myShape4 = new Shape(400, 50, 5, 30, color(60,60,200));
    
}

function draw() {
	background(200);

	myShape1.move();
	myShape1.display();

	myShape2.move();
	myShape2.display();

	myShape3.move();
	myShape3.display();

	myShape4.move();
	myShape4.display();
}

function Shape(myX, myY, myVel, mySize, myColor){

	this.x = myX;
	this.y = myY;

	this.vel = myVel;

	this.size = mySize;
	this.sizeStep = 1;

	this.color = myColor; 

	this.move = function(){

		this.y += this.vel;

		//reset position to top if it hits zero
		if(this.y >= height){
			// momentary toggle to change random color
			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r, this.g, this.b);

			this.y = 0;
		}

		//scale up and down in size
		this.size += this.sizeStep;
		if(this.size >= 40 || this.size <= 15){
			this.sizeStep *= -1;
		}

	}

	this.display = function(){

		fill(this.color);
		rect(this.x, this.y, this.size, this.size);

	}


};