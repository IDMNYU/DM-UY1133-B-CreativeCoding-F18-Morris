//Create variables for DOM objects
var canvas;

var myPara;
var myDiv;

var image;

var button;

var slider;
var input;
var inputButton;

// Variables for canvas animation
var xPos = 0;
var xStep = 1;
var diam = 20;

function setup() {

	//CANVAS ELEMENT
	canvas = createCanvas(200,200);
	canvas.position(400,200);

	//DIV ELEMENT
	myDiv = createDiv("This is a div tag");
	myDiv.position(200,300);

	//P ELEMENT
    myPara = createP("This is paragraph text");
    myPara.position(100,100);

    //BUTTON ELEMENT
    button = createButton("Click me");
    button.position(50,50);

    //event listener for "mousePressed" action on button
    //This calls the "changeSize()" function when the action happens
    button.mousePressed(changeSize);

    //SLIDER ELEMENT
    slider = createSlider(0, 255, 50);
    slider.position(50, 100);
    slider.style('width','150px');

    //INPUT ELEMENT
    input = createInput("What's your name");
    input.position(50, 200);
    input.style('width', '150px');

    //We need a button to capture the completed input text
    inputButton = createButton("Enter");
    inputButton.position(220,200);
    inputButton.mousePressed(printName);


    //IMG ELEMENT
    image = createImg("https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg");
    image.position(100,300);
    image.size(250,200);

    //Event listeners on the canvas control image display 
    canvas.mouseOut(showImage);
	canvas.mouseOver(hideImage);

}

function draw() {

	var sliderVal = slider.value();
	//console.log(sliderVal);

	background(100);

	xPos += xStep;
	if(xPos > width) {
		xPos = 0;
	}

	fill(sliderVal);

	ellipse(xPos, height/2, diam, diam);

}

function hideImage(){
	image.hide();
}

function showImage(){
	image.show();
}

function changeSize(){
	diam += 5;
}

function printName(){

	var result = input.value(); //get value of text field
	console.log(result);
	input.value(""); //clear out text input so it doesn't display the last input

}
