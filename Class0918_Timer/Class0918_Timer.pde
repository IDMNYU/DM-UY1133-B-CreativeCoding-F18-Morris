int captureTime; //variable to start our "stopwatch"

void setup(){
  
  //initialize with the program start time
  captureTime = millis();
  
}

void draw(){
  
  int myTime = millis();
  
  //take the difference between the running time and the captured time
  if( myTime - captureTime > 3000 ){
    //3 seconds are up
    println("time's up!");
    background(255,0,127);
    captureTime = millis(); //continue resetting timer
  }
    
}

void keyPressed(){
  
  captureTime = millis();
  println(captureTime);
  
}
