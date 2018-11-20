//EXERCISE: Take text input from a DOM input element.
//Display the text as an HTML element, a canvas text object, and a console statement.

var button;
var input;
var canvas;
var p;

//Create variables for string
var inputText;
var baseOutputString;


function setup() {

	canvas = createCanvas(300,300);
	canvas.position(200,200);

	inputText = "start";

	input = createInput('What are your weekend plans?');
	input.position(50,100);
	input.style('width','400px');

	button = createButton('Submit');
	button.position(460,100);

	button.mousePressed(updateText);

	baseOutputString = "This weekend my plans are ";

	p = createP(inputText);
	p.position(50,150);
    
}

function draw() {
	background(200);
	text(inputText,50,50);
}

function updateText(){
	inputText = input.value();

	var totalOutput = baseOutputString + inputText;
	console.log(totalOutput);
	input.value("");

	//update the value of the 'p' element
	p.html(inputText);

}