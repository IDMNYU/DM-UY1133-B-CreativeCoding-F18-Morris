var myData;
var url;

var baseUrl;
var apiKey;

var temp;

var myLocations = [];
var locationIndex = 0;

function setup() {

	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var cityID = "4277241"; //from a table in the documentation
	apiKey = "YOUR_API_KEY_HERE"; //update this with your API key!

	url = baseUrl + "id=" + cityID + "&APPID=" + apiKey;

	myLocations[0] = "4277241"; //Pittsburgh
	myLocations[1] = "5019330"; //Brooklyn
	myLocations[2] = "5386053"; //San Diego

	console.log(url); //test that the URL is working first

 }

function draw() {
  // put drawing code here
}

function gotData(myData){ //callback function from loadJSON

	console.log(myData);

	temp = myData.main.temp;

	//convert from Kelvin to Fahrenheit (formula found online)
	var tempF = (temp-273.15)*(9/5)+32;
	console.log(tempF);

}

function mouseClicked(){

	url = baseUrl + "id=" + myLocations[locationIndex] + "&APPID=" + apiKey;
	locationIndex++; //cycle through locations in an array
	if(locationIndex > 2) locationIndex = 0;

	myData = loadJSON(url, gotData);

}