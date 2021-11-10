const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




var backgroundImg;
var bk
var snow1, snowDrops=[]
function preload(){
backgroundImg=loadImage('snow1.jpg')

}




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  

  
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine);
  
 snowFall();
 for(var i=0;i<snowDrops.length;i++){
   snowDrops[i].display()
 }
  

}

function snowFall(){
  snow1=new Snow(100,20, 20, 20);
  snowDrops.push(snow1)
}