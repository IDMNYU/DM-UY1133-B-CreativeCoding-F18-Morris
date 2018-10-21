var img0;
var img1;
var img2;

var imageState = 0;

function preload(){

	img0 = loadImage("assets/img00.jpg");
	img1 = loadImage("assets/img01.jpg");
	img2 = loadImage("assets/img02.jpg");
}


function setup() {

	createCanvas(600,500);
    
}

function draw() {

	drawSprite();
}

function drawSprite() {

	var count = frameCount % 30;
	if(count == 0){  //every 30 frames, this happens
		imageState++;
		if(imageState > 2){
			imageState=0;
		}
	}

	switch(imageState){
		case 0:
			image(img0, 0, 0);
			break;
		case 1:
			image(img1, 0, 0);
			break;
		case 2:
			image(img2, 0, 0);
			break;
		default:
			break;
	}

}