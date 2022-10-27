
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fan1, fan2, fan3, fan4;


var btn2;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  /*ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);*/

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  fan1 = new Ground(20,250,60,10, 10);
  fan2 = new Ground(100,280,60,20,-120);
  fan3 = new Ground(180,250,60,30,-360);
  fan4 = new Ground(250,300,60,5,0);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  fan1.display();
  fan2.display();
  fan3.display();
  fan4.display();

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  