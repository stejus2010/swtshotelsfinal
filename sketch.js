var HOMEPAGE = 2;
var LEARNMORE = 1;
var PACKAGES = 0;
var gameState = HOMEPAGE;
var LEARNMOREBUTTON;
var READMOREBUTTON;
var HOMEBUTTON;




function preload(){
  backgroundImg = loadImage("homepage.jpg")
  learnmoreImg = loadImage("learnmore.jpg")
  packagesImg = loadImage("packages.jpg")
  learnmoreButttonImg = loadImage("learnmoreButton.jpg")
  readMoreButtonImg = loadImage("ReadMoreButton.jpg")
  homeButtonImg = loadImage("homeButton.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  LEARNMOREBUTTON = createSprite(width/2,height/1.3,180,50);
  LEARNMOREBUTTON.scale = 0.7;
  LEARNMOREBUTTON.addImage(learnmoreButttonImg);

  READMOREBUTTON = createSprite(width/10.3,height/1.07,150,50);
  READMOREBUTTON.addImage(readMoreButtonImg);
  READMOREBUTTON.scale=0.5;

  HOMEBUTTON = createSprite(width/10.3,height/1.1,150,50);
  HOMEBUTTON.addImage(homeButtonImg);



}




function draw() {
  if (gameState == HOMEPAGE){
  background(backgroundImg);

  LEARNMOREBUTTON.visible=true;
  HOMEBUTTON.visible = false;
  READMOREBUTTON.visible=false;
  

  if (mousePressedOver(LEARNMOREBUTTON)){
    gameState = "LEARNMORE"
  }
}

if (gameState == "LEARNMORE"){
  background(learnmoreImg); 
  LEARNMOREBUTTON.visible=false;
  READMOREBUTTON.visible=true;
  READMOREBUTTON.x = width/2.5;
  READMOREBUTTON.y = height/1.1
  HOMEBUTTON.visible = true;
  HOMEBUTTON.x = width/10.3;
  HOMEBUTTON.y = height/1.1;

  if (mousePressedOver(READMOREBUTTON)){
    gameState = "PACKAGES";
    
  }

  if(mousePressedOver(HOMEBUTTON)){
  gameState = HOMEPAGE
  }
}

if (gameState == "PACKAGES"){
  background(packagesImg);
  LEARNMOREBUTTON.visible = false;
  HOMEBUTTON.visible = true;
  READMOREBUTTON.visible = false;
  HOMEBUTTON.x = width/5;
  HOMEBUTTON.y = height/1.05;

  if(mousePressedOver(HOMEBUTTON)){
    gameState = HOMEPAGE
    }


}

drawSprites();
}
  
  

