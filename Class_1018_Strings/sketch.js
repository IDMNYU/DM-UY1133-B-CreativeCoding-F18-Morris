var inputString = ""; //initialize an empty string

function setup() {
    
    createCanvas(400,400);
}

function draw() {

	background(255);

	//draw string to the screen at X,Y position
	text(inputString, 100, 100);

	//compare to target string
	if(inputString == "hello"){
		console.log("STRING MATCH");
		inputString = "";
	}
}

function keyPressed(){
	//add characters into the string
	inputString += key;
	console.log(inputString);
}

function mouseClicked(){
	inputString = ""; // clear string
}