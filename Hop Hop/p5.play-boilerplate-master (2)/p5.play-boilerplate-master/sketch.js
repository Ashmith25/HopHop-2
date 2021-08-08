var backgroundImage,ground;

function preload(){
 backgroundImage=loadImage("Images/BG 2.jpg"); 
 BirdImage=loadAnimation("Images/Bird1.0.png","Images/Bird2.0.png","Images/Bird3.0.png");
}

function setup() {
  createCanvas(1200,600);
  ground=createSprite(600, 200, 1500, 400);
  ground.addImage(backgroundImage);
  ground.velocityX=-3;
  ground.scale=1.2;
  Hop=createSprite(100,100,20,20);
  Hop.addAnimation("Hop",BirdImage);
}

function draw() {
  background(0);  
  if(ground.x<400){
    ground.x=600;
  }
  drawSprites();
}