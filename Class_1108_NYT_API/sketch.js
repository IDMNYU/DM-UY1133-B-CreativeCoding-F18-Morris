var myData;

var url;
var baseUrl;
var apiKey;

var query;

function setup() {

	baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
	apiKey = "YOUR_API_KEY_HERE"; //change this to your API key!

	query = "cats"; //article search term

	url = baseUrl + "q=" + query + "&api-key=" + apiKey;

	console.log(url);
    
}

function draw() {
  // put drawing code here
}

function gotData(myData){ //callback function from loadJSON
	console.log(myData);

	//find a specific headline
	var headline = myData.response.docs[2].headline.print_headline;
	console.log(headline);
}

function mouseClicked(){
	myData = loadJSON(url, gotData);
}