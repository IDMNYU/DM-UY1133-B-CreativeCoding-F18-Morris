int x; //declaration of a variable

int ellipseX;
int ellipseY;

void setup(){
  
  size(500,500);
 // frameRate(60);
  x = width; // definition of the variable
  
  ellipseX = 200;
  ellipseY = 300;
  
}

void draw(){
  
  background(50);
  
  ellipse(200, 300, 40, 40);
  
  // Create a local variable to store the result of 
  // dist() function which calculates pixel distance
  // between two (X,Y) pairs
  float distFromTarget = dist(mouseX, mouseY, ellipseX, ellipseY);
  
  if(distFromTarget < 40){
    background(255,0,0);
  }
  
  //println(distFromTarget);
  
  
}
