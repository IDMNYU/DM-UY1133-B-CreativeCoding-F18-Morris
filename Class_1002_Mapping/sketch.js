var mappedPos = 200;

function setup() {

	createCanvas(600,600);
	background(200);
    
}

function draw() {

	background(200);

	line(200,0,200,height);
	line(400,0,400,height);

	//map mouse position to limits of 200,400
	mappedPos = map(mouseX, 0, 600, 200, 400);

	//constrain mapped position to avoid going beyond limits
	mappedPos = constrain(mappedPos, 200, 400);

	fill(255,0,127);
	ellipse(mappedPos, height/3, 15, 15);

	//constrain mouse position without remapping
	var constrainPos = constrain(mouseX, 200, 400);

	fill(0, 200, 200);
	ellipse(constrainPos, height*(2/3), 15, 15);

}