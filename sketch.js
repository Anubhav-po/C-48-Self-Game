const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var enemy1,enemy2;
var enemy0;
var Player;
var trophy;
var b1,b2,b3,b4;
var shot =[] ;
var j = 0;

function preload(){
  PlayerImg = loadImage("sprites/sprite1.gif");
  bulletImg = loadImage("Sprites/bullet.jpg");
  EnemyImg = loadImage("Sprites/Enemy.webp")
}

function setup() {
  //createCanvas(windowWidth-20,windowHeight-60);
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;
  
  Player =  createSprite(50,50,20,40);
  Player.addImage(PlayerImg);
  Player.scale = 0.5;
  Player.velocityX = 0;
  Player.velocityY = 0;

  trophy = createSprite(1250,600,10,20);

  enemy0 = createSprite(500,300,20,10);
  enemy0.addImage(EnemyImg);
  enemy0.scale = 0.25;
  randomEnemy = Math.round(random(0,5))
  switch(randomEnemy){
    case 0 : enemy0.velocityX = -3; 
    enemy0.velocityY = -3;  
    break;   
    case 1 : enemy0.velocityX = 5;
    break;
    case 2 : enemy0.velocityX = -5;  
    break;   
    case 3 : enemy0.velocityY = -5;  
    break;  
    case 4 : enemy0.velocityY = 5;  
    break; 
    case 5 : enemy0.velocityX = 3; 
    enemy0.velocityY = 3;  
    break;   
    default : 
    break;
  }

  enemy1 = new Enemy(250,150,10,20,15);
  enemy1.scale = 0.5;

  b1 = new Barrier(250,150,20,350);
  b2 = new Barrier(680,150,280,20); 
  b3 = new Barrier(870,150,20,350);
  b4 = new Barrier(450,350,200,20);
  b5 = new Barrier(780,550,200,20);
  //b6 = new Barrier();
}



function draw() {
  background(220,200,280);
  Engine.update(engine);

  edges=createEdgeSprites();
  Player.bounce(edges[0]);
  Player.bounce(edges[1]);
  Player.bounce(edges[2]);
  Player.bounce(edges[3]);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
 
  enemy1.display();

  enemy0.display();
  
  

 if(keyDown("right")){
   Player.x = Player.x+5;
 }  
 if(keyDown("left")){
  Player.x =Player.x -5;
}  
 if(keyDown("up")){
  Player.y = Player.y-5;
}  
 if(keyDown("down")){
  Player.y = Player.y+5;
}  

 if(Player.isTouching(trophy)){
  textSize(82);
  fill ("orange")
   text("Victory",500,600);
 }

 if(b1.x-Player.x<=(Player.width+b1.width)/2){
   Player.x -= 5;
 }



 if(keyDown("SPACE")){
      //Shot
      
for (var i = 0; i < 9; i++) {
    shot[i] = createSprite(150, 390);
    shot[i].visible = false
    shot[i].x = Player.x;
    shot[i].y = Player.y;
    shot[i].addImage(bulletImg);
    shot[i].scale = 0.05;
              
     }
    shot[j].velocityX = 8;
    shot[j].visible = true
}

 
  drawSprites();
}