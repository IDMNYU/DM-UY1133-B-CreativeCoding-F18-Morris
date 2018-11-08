var myData;
var url;

var lat;

function setup() {

	createCanvas(600,600);

	url = "http://api.open-notify.org/iss-now.json";

	//poll the data loading function on a constant interval of 8 seconds
	setInterval(queryNewData, 8000);
    
}

function draw() {

	background(100);

	//latitude ranges from -80 to 80
	var mappedPos = map(lat, -80, 80, 0, width);

	fill(220);
	ellipse(mappedPos, height/2, 40, 40);

}

//callback function from loadJSON
function callBack(myData){

	//print the entire data object
	console.log(myData);

	//find a specific piece of data
	lat = myData.iss_position.latitude;
	console.log(lat);

}

function queryNewData(){
	//use loadJSON with a callback method for asynchronous data loading
	//callBack() will be called when a valid data object is received.
	myData = loadJSON(url, callBack);

}
