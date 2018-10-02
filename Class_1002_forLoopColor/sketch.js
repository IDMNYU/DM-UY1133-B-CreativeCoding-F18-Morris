function setup() {

	createCanvas(600,600);
	background(255);
    
}

function draw() {

	for(var j = 0; j < 10; j++){

		var yOffset = (50 * j) + 50;

		var green = map(j, 0, 9, 255, 150);

		for(var i = 0; i < 10; i++){

			var xOffset = (50*i) + 50;

			// i ranges from 0 to 9
			// output color ranges from 0 to 255

			var red = map(i, 0, 9, 255, 150);

			fill(red,green,0);

			rect(xOffset, yOffset, 20, 20);
		}
	}

}