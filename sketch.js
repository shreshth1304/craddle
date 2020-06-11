
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,roof1; 

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	 bob1 = new Bob(300,300,20,20);
	 roof1 = new Roof(200,100,100,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  roof1.display();
  drawSprites();

 
}



