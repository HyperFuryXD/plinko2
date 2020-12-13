const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var canvas;

var plinkos = [];
var particles = [];



function setup() {  
  canvas = createCanvas(440,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790,480 , 20);
  division1 = new Division(10,730,10,300);
  division2 = new Division(80,730,10,300);
  division3 = new Division(150,730,10,300);
  division4 = new Division(220,730,10,300);
  division5 = new Division(290,730,10,300);
  division6 = new Division(360,730,10,300);
  division7 = new Division(430,730,10,300);

  
}

function draw() {
  background("black");
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

 }
 for(var j = 0;j<particles.length;j++){
  particles[j].display();
  }

 for(var j=40;j<=this.width;j=j+50){
  plinkos.push(new Plinko(j,75));
  plinkos[j].display();
}

for(var j=15;j<=this.width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
  plinkos[j].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
 

