function setup() {

	createCanvas(600,600);
	background(30);
    
  }

function draw() {

	background(30);

	//map(value, inMin, inMax, outMin, outMax);
	var mappedScalar = map(mouseY, 0, 600, 0.25, 5);

	push(); //enter a new drawing matrix

	scale(mappedScalar);
	grid();

	pop(); //exit the drawing matrix

	stroke(255,0,0);
	rect(50,50,60,60);

	// General sketch needs:
	//	scale( some factor )
	// factor ranges from 0.5 (half size) to 5 (5x size)
	// mouseY controls the scale factor
	// mouseY ranges from 0 to 600

}

function grid(){

	// our repeated geometry

	stroke(255);
		for(var j=0; j < 10; j++){
		for(var i=0; i < 10; i++){
			var lineX = (i*10);
			var lineY = (j*10);

			line(lineX,lineY,lineX + 10,lineY+10);
		}
	}
}