function setup() {

	createCanvas(800,500);
	background(200);
    
}

function draw() {

	
	push();
		translate(300,200); //first change the local origin
		rotate(PI/8); //rotate relative to the new local origin
		scale(2.0, 0.75); //scale along the rotated new axis
		fill(0,0,255);
		rect(0,0,60,60);
	pop();

	push();
		translate(400,100); //first change the local origin
		rotate(PI/4); //rotate relative to the new local origin
		fill(0,255,0);
		rect(0,0,60,60);
	pop();

}