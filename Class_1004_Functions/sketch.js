var xPos;
var yPos;
var myColor;

function setup() {

	createCanvas(600,600);
	rectMode(CENTER);
		background(30);


}

function draw() {


}

function mouseClicked(){

	// draw with a new color and position on each click
	var randomGray = random(0,255);
	grid(randomGray, mouseX, mouseY);
}

function grid(myColor, xPos, yPos){

	stroke(myColor);

	for(var j=0; j < 10; j++){
		for(var i=0; i < 10; i++){

			// use addition to translate to the xPos, yPos positions
			var lineX = (i*10)+xPos;
			var lineY = (j*10)+yPos;

			line(lineX,lineY,lineX + 10,lineY+10);

		}
	}
}