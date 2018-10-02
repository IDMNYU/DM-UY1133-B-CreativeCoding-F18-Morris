var x1 = 200;
var y1 = 100;

var x2 = 400;
var y2 = 360;

var pct = 0.0;

function setup() {
    
    createCanvas(500,500);
    background(200);
}

function draw() {

	background(200);

	if(pct < 1){
		pct+= 0.05;
	}

	fill(255);
	ellipse(x1, y1, 5, 5);
	ellipse(x2, y2, 5, 5);

	// interpolate X position first
	var lerpedX = lerp(x1, x2, pct);

	// interpolate Y position
	var lerpedY = lerp(y1, y2, pct);

	fill(0);
	//combine X and Y interpolated positions into one point
	ellipse(lerpedX, lerpedY, 7, 7);

}