var myBall; // object variable
var myBall2;
var myBall3;

function setup() {

	createCanvas(500,500);

	var myColor = color(255,100,10);
	var myColor2 = color(20, 100, 240);

	// initializes the new object from the class Ball
	myBall = new Ball(250, 100, 2, 3, 30, myColor);

	myBall2 = new Ball(50, 300, 3, 1, 50, myColor2);

	myBall3 = new Ball(100,400, 1, 4, 10, myColor);
    
}

function draw() {

	background(200);

	myBall.animate();
	myBall2.animate();
	myBall3.animate();

	myBall.displayBall();
	myBall2.displayBall();
	myBall3.displayBall();
}

// definition of the Ball class
function Ball(xVal, yVal, velXVal, velYVal, size, thisColor){ //Class constructor

	this.x = xVal;
	this.y = yVal;
	this.xVel = velXVal;
	this.yVel = velYVal;
	this.size = size;
	this.color = thisColor;

	// Create a function as a property of the Ball class
	this.animate = function(){
		this.x += this.xVel;
		this.y += this.yVel;

		if(this.x <= 0 || this.x >= width){
			this.xVel *= -1;
		}
		if(this.y <= 0 || this.y >= height){
			this.yVel *= -1;
		}
	}

	this.displayBall = function(){
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}

};
