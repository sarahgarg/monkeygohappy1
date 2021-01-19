
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2;
  monkey.Lifetime=150;
  
  ground=createSprite(400,390,800,10);
  ground.velocityX=-4;
  
 bananasGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw()
{
  background(220);
  ground.x=ground.width/2;
  
  if(keyDown("space")&& monkey.y>=100)
    {
      monkey.velocityY=-12;
    }
      monkey.velocityY = monkey.velocityY + 0.8; 
      monkey.collide(ground);
  
  
   bananas(); 
  obstacles();
  
  if (bananasGroup.isTouching(monkey))
    {
     bananasGroup.destroyEach();
    }
  
drawSprites();
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival time:"+survivalTime,150,50);
}

function bananas()
{
  if (frameCount%80===0)
  {
banana=createSprite(340,Math.round(random(80,220),10,10));
   banana.addImage("b",bananaImage);
    banana.scale=0.2;
    banana.velocityX=-4;
    banana.Lifetime=250;
    bananasGroup.add(banana);
  }
}
function obstacles()
{
  if (frameCount%300===0)
    {
    obstacle=createSprite(390,370,10,10);
      obstacle.addImage("obs",obstacleImage);
      obstacle.velocityX=-4;
      obstacle.scale=0.1;
      obstacle.Lifetime=250;
      obstaclesGroup.add(obstacle);
    }
}




