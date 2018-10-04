var stateIndex = 0; //variable to store your current state

function setup() {

	createCanvas(800,500);
    
}

function draw() {

	switch( stateIndex ){
		case 0: //same as "if(stateIndex==0)"
			stateZero();
			break; //exit this case after stateZero() is finished
		case 1: //same as "else if(stateIndex == 1)"
			stateOne();
			break;
		default: //default condition for any other value
			break;

	}

}

function stateZero() {

	fill(255,0,0);
	rect(100,100,600,300);

	//need to advance the state index variable
	if(mouseIsPressed){
		stateIndex++;
	}

}

function stateOne(){

	fill(0,0,255);
	rect(100,100,600,300);
}