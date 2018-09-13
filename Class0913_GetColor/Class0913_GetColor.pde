color rectColor; //create a color variable

void setup(){
  
  size(600,600);
  background(0);
  
  // initialize the variable with data that's specified as color
  rectColor = color(100, 220, 50);
}

void draw(){
  
  fill(rectColor);
  rect(100, 200, 50, 70);
  
}

void mouseClicked(){
  
  // create a local variable to store the 
  // color value at the mouse position
  color mouseColor;
  // "get()" function retrieves the color value at an X,Y coordinate
  mouseColor = get(mouseX, mouseY);
   
  if( mouseColor == rectColor ) {
    println("green!");
  }
  else {
    println("not green :( ");
  }
 
}
