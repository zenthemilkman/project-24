const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function setup() {
	createCanvas(1500, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,400,40);
	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1240,510,20,160);  //right one
	dustbin2=new Dustbin(960,510,20,160);	//Left one
	dustbin3=new Dustbin(1100,600,300,20);  // down one

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  groundObject.display();
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-20});

  
	}
}