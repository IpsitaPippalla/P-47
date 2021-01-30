var bg_img, bg, crystal_img;
var coins_img, coinsGroup;
var girl, girl_img;
var invisible_ground;
var obstacle_img;  
var crystal_img;
var danger_img
var gameState=1;
var heart_img, heart1;
var Score;
var crystalGroup

function preload(){
bg_img = loadImage("images/crystalbg.png")



coins_img = loadAnimation("images/coin-0.png", "images/coin-1.png", "images/coin-2.png", "images/coin-3.png", "images/coin-4.png")

girl_img = loadAnimation("images/moving girl-0.png", "images/moving girl-1.png", "images/moving girl-2.png",
 "images/moving girl-3.png","images/moving girl-4.png","images/moving girl-5.png","images/moving girl-6.png",
 "images/moving girl-7.png", "images/moving girl-8.png","images/moving girl-9.png","images/moving girl-10.png",
 "images/moving girl-11.png")

 obstacle_img = loadAnimation("images/obstacle-1.png","images/obstacle-2.png", "images/obstacle-3.png", 
 "images/obstacle-4.png", "images/obstacle-5.png" )

 crystal_img = loadImage("images/marbel_ball.png")

 heart_img = loadImage("images/heart.png")

 danger_img = loadImage("images/danger ball.png")

}

function setup(){
  createCanvas (1200,500)

  bg = createSprite(600,0,1200,600)
  bg.addImage(bg_img)
  bg.velocityX = -3;
  bg.scale = 8

  girl = createSprite(100,380,50,50)
  girl.addAnimation("girl",girl_img)
  girl.setCollider("circle", 0, 0, 80)
  girl.debug = false

  invisible_ground = createSprite(600,490,1200,20)
  invisible_ground.visible = false;

  coinsGroup = createGroup();
  obstaclesGroup1 = createGroup();
  obstaclesGroup2 = createGroup();
  obstaclesGroup3 = createGroup();
  obstaclesGroup4 = createGroup();
  obstaclesGroup5 = createGroup();

   heart1 = createSprite(1000,40,50,50)
   heart1.addImage("heart1", heart_img)
   heart1.scale = 0.2 

   heart2 = createSprite(1050,40,50,50)
   heart2.addImage("heart1", heart_img)
   heart2.scale = 0.2 

   heart3 = createSprite(1100,40,50,50)
   heart3.addImage("heart1", heart_img)
   heart3.scale = 0.2 

   crystalGroup =  createGroup();
   dangerGroup = createGroup();
   Score = 0
  
}


function draw(){
  background(0)

 if(gameState===1){
    if(bg.x<0){
    bg.x = bg.width/2
  }

 if(keyDown("space")){
  girl.velocityY = -10;
 }

 girl.velocityY = girl.velocityY+0.5;

  spawnCoins()
 
  spawnCrystal()

  spawnDanger()

  if(coinsGroup.isTouching(girl)){
    Score = Score+20
        coinsGroup.destroyEach();

     }


     var select_obstacles = Math.round(random(1,4));
     if (frameCount % 200 == 0) {
      if (select_obstacles == 1) {
        spawnObstacles1();
      } else if (select_obstacles == 2) {
        spawnObstacles2()
      } else if (select_obstacles == 3) {
        spawnObstacles3()
      } else {
        spawnObstacles4()
      } 
    }

         if(obstaclesGroup1.isTouching(girl)){
          heart1.destroy()
          
        obstaclesGroup1.destroyEach()
      
        }
      
    
 
  if(obstaclesGroup2.isTouching(girl)){
    heart2.destroy()
    
  obstaclesGroup2.destroyEach()

  }


  if(obstaclesGroup3.isTouching(girl)){
    heart3.destroy()
    
  obstaclesGroup3.destroyEach()

  }

  if(Score==500){
    gameState =2
  }



  
  }
  else if (gameState === 2) {
   //set velcity of each game object to 0
    bg.velocityX = 0;
    girl.velocityY = 0;
    obstaclesGroup1.setVelocityXEach(0);
    obstaclesGroup2.setVelocityXEach(0);
    obstaclesGroup3.setVelocityXEach(0);
    obstaclesGroup4.setVelocityXEach(0);
     coinsGroup.setVelocityXEach(0);
    coinsGroup.setLifetimeEach(-1);
    crystalGroup.destroyEach()

    girl.destroy()

    heart1.destroy()
    heart2.destroy()
    heart3.destroy()

    }
  
  girl.collide(invisible_ground)
drawSprites()
 fill ("white")
 textSize(30)
text("Score:" + Score, 100,100);


if(gameState ==2){
  fill ("white")
 textSize(30)
text("Game Over",600,200);
}

} 


function spawnCoins(){
 if (frameCount % 150 === 0) {
 var coins = createSprite(600,120,40,10);
 coins.y = Math.round(random(80,400));
 coins.x = Math.round(random(80,1200));
 coins.addAnimation("coins",coins_img);
 coins.scale = 0.2;
 coins.velocityX = -3;
 //assign lifetime to the variable
 coins.lifetime = 400;
 //add each cloud to the group
 coinsGroup.add(coins);
  }
  }
  
function spawnObstacles1(){
 var obstacles1 = createSprite(Math.round(random(1000,1100)),420,40,10);
 obstacles1.setCollider("circle", 0, 0, 40)
 obstacles1.debug = true
 obstacles1.addAnimation("obstacles",obstacle_img);
 obstacles1.scale = 0.5;
 obstacles1.velocityX = -3;
 //assign lifetime to the variable
 obstacles1.lifetime = 400;
 obstaclesGroup1.add(obstacles1)
 }
  
 function spawnObstacles2(){
 var obstacles2 = createSprite(Math.round(random(1000,1100)),420,40,10);
 obstacles2.setCollider("circle", 0, 0, 40)
 obstacles2.debug = true
 obstacles2.addAnimation("obstacles",obstacle_img);
 obstacles2.scale = 0.5;
 obstacles2.velocityX = -3;
 //assign lifetime to the variable
 obstacles2.lifetime = 400;
 obstaclesGroup2.add(obstacles2)
 }
      
 function spawnObstacles3(){
 var obstacles3 = createSprite(Math.round(random(1000,1100)),420,40,10);
 obstacles3.setCollider("circle", 0, 0, 40)
 obstacles3.debug = true
 obstacles3.addAnimation("obstacles",obstacle_img);
 obstacles3.scale = 0.5;
 obstacles3.velocityX = -3;
 //assign lifetime to the variable
 obstacles3.lifetime = 400;
 obstaclesGroup3.add(obstacles3)
 }
        
function spawnObstacles4(){
 var obstacles4 = createSprite(Math.round(random(1000,1100)),420,40,10);
 obstacles4.setCollider("circle", 0, 0, 40)
 obstacles4.debug = true
 obstacles4.addAnimation("obstacles",obstacle_img);
 obstacles4.scale = 0.5;
 obstacles4.velocityX = -3;
 //assign lifetime to the variable
 obstacles4.lifetime = 400;
 obstaclesGroup4.add(obstacles4)
 }
         
            
function spawnCrystal(){
if(frameCount % 300 === 0){
 var crystal = createSprite(900,420,40,10)
 crystal.addImage("crystal", crystal_img)
 crystal.velocityX = -3;
 crystal.lifetime = 400;
 crystalGroup.add(crystal)
 crystal.scale = 0.5;
 if(crystalGroup.isTouching(girl)){
 var heart4 = createSprite(1150,40,50,50)
 heart4.addImage("heart4", heart_img)
 heart4.scale = 0.2;
 crystalGroup.destroyEach()
 }
 }
 }
 function spawnDanger(){
 if(frameCount % 350 === 0){
 var danger_ball = createSprite(900,420,40,10)
 danger_ball.addImage("danger", danger_img)
 danger_ball.velocityX = -3;
 danger_ball.lifetime = 400;
 dangerGroup.add(danger_ball)
 danger_ball.scale = 0.5;
 if(dangerGroup.isTouching(girl)){
 Score = Score-20; 
 dangerGroup.destroyEach()
   }
   }
   }  
 
