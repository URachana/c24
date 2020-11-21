const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3,log4;

function setup() {
createCanvas(1200,400);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new createGround(width/2,height-10,width,20);

box1 = new createBox(700,240,50,50);
box2 = new createBox(920,240,50,50);
box3 = new createBox(700,200,50,50);
box4 = new createBox(920,200,50,50);
box5 = new createBox(810,160,50,50);
pig1 = new createPig(810,240);
pig2 = new createPig(810,200);
log1 = new createLog(810,220,300,PI/2);
log2 = new createLog(810,180,300,PI/2);
log3 = new createLog(760,120,150,PI/7);
log4 = new createLog(860,120,150,-PI/7);

}

function draw() {
  background(0);  
  
  Engine.update(myEngine);
  rectMode(CENTER);
 
  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}