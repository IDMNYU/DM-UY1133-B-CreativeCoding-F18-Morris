import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer myPlayer;

void setup(){
  
  //Set up minim object to load file
  minim = new Minim(this);
  
  //load file into audio player
  myPlayer = minim.loadFile("doorbell.mp3");
  
}

void draw(){
  
    if( myPlayer.isPlaying() == false ){
      myPlayer.rewind();
    }
  
    myPlayer.play();

  
}
