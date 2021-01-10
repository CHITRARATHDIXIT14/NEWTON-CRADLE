
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var box1
var ball1,ball2,ball3,ball4,ball5
var chain1,chain2,chain3,chain4,chain5
function preload()
{
	


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1=new box(400,200,500,70)
	ball2=new ball(600,600,100)
	ball3=new ball(500,600,100)
	ball4=new ball(400,600,100)
	ball5=new ball(300,600,100)
	ball1=new ball(200,600,100)

	chain1 = new chain(ball1.body,{x:200,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
box1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
chain1.display();
  drawSprites();
 
}



