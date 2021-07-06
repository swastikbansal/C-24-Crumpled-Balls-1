
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400,645,25);

	ground = new Ground(400,615,800,10);

	//Create the Bodies Here.
	binb = new Dustbin(600,600,250,20);
	binl = new Dustbin(485,485,20,250);
	binr = new Dustbin(720,485,20,250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  binb.display();
  binl.display();
  binr.display();

  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-140});
	}
}
