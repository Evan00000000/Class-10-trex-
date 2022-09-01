
var trex ,trex_running;
var edges;
var ground, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width / 2;
 
  //to create the edges
  edges = createEdgeSprites();
}

function draw(){
  //set the background color to white
  background("white");

  ground.velocityX = -2; 
  console.log(ground.x);

  if (ground.x < 0){
    ground.x = ground.width / 2;
  }

  //to make the trex jump
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //for gravity
  trex.velocityY = trex.velocityY + 0.8;

  //to stop trex from falling down
  trex.collide(ground);
  
  drawSprites();
}
