const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine,world,flagim,flag1,flag2;

function preload(){
flagim=loadImage("flagima.jpg");
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  

  flag1=createSprite(307,120,10,10);
  flag1.addImage(flagim);
  flag1.scale=0.1;
  flag2=createSprite(967,120,10,10);
  flag2.addImage(flagim);
  flag2.scale=0.1;
  wall1=new Rectangle(150,500,100,300);
  wall2=new Rectangle(1050,500,100,300);
  wall5=new Rectangle(360,530,80,260);
  wall6=new Rectangle(840,530,80,260);
  wall3 =new Ground(260,550,170,200);
  wall4=new Ground(940,550,170,200);
  wall7=new Ground(600,550,350,200);
  ground = new Ground(600,670,1200,40);
  top1=new Rectangle(125,325,120,50);
  top2=new Rectangle(1075,325,120,50);
  top3=new Rectangle(815,370,100,40);
  top4=new Rectangle(385,370,100,40);
  top5=new Rectangle(600,170,240,60);
  brick1=new Rectangle(75,300,20,20);
  brick2=new Rectangle(107.5,300,20,20);
  brick3=new Rectangle(140,300,20,20);
  brick4=new Rectangle(175,300,20,20);
  brick5=new Rectangle(1025,300,20,20);
  brick6=new Rectangle(1060,300,20,20);
  brick7=new Rectangle(1095,300,20,20);
  brick8=new Rectangle(1125,300,20,20);
  brick9=new Rectangle(855,330,17,17);
  brick10=new Rectangle(775,330,17,17);
  brick11=new Rectangle(827,330,17,17);
  brick12=new Rectangle(800,330,17,17);
  brick13=new Rectangle(344,330,17,17);
  brick14=new Rectangle(372,330,18,18);
  brick15=new Rectangle(398,330,18,18);
  brick16=new Rectangle(425,330,18,18);
  brick17=new Rectangle(640,160,30,30);
  brick18=new Rectangle(705,140,30,30);
  brick19=new Rectangle(570,160,30,30);
  brick20=new Rectangle(495,140,30,30);
  wall8=new Rectangle(600,322,200,260);
  wall9=new Rectangle(270,420,60,230);
  wall10=new Rectangle(930,420,60,230);
  brick21= new circle();
  
}

function draw() {
  background(135,206,235);  
  Engine.update(engine);
  
  wall1.display();
  wall3.display();
  wall2.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  
  ground.display();
  top1.display();
  top2.display();
  top3.display();
  top4.display();
  top5.display();
  brick1.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  brick6.display();
  brick7.display();
  brick8.display();
  brick11.display();
  brick12.display();
  brick13.display();
  brick14.display();
  brick15.display();
  brick16.display();
  brick9.display();
  brick10.display();
  brick21.display();
  brick20.display();
  brick19.display();
  brick17.display();
  brick18.display();
  fill("pink");
  triangle(240,220,270,160,300,220);
  triangle(960,220,930,160,900,220);
  drawSprites();
}