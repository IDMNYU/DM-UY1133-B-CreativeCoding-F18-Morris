var stateIndex = 0; //variable to store the current state index

function setup() {

	createCanvas(800,500);
    
  // put setup code here
}

function draw() {

	//use logic statements to only call one state at a time

	if(stateIndex == 0){
		stateZero();
	}
	else if(stateIndex == 1){
		stateOne();
	}

}

function stateZero() {

	fill(255,0,0);
	rect(100,100,600,300);

	if(mouseIsPressed){
		stateIndex++;
	}

}

function stateOne(){

	fill(0,0,255);
	rect(100,100,600,300);
}