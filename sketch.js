
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	tree1 = new TREE(725,450,550,650);
	floor = new ground(500,690,1000,15);
	boy1 = new BOY(150,600,350,350);
	mango1 = new MANGO(950,325,50,50);
	mango2 = new MANGO(575,375,50,50);
	mango3 = new MANGO(750,225,50,50);
	mango4 = new MANGO(700,325,50,50);
	mango5 = new MANGO(825,375,50,50);
	rock1 = new ROCK(50,600,50,50);
	chain1 = new CHAIN(rock1,{x:60,y:550});
	
}


function draw() {
	background(255);
	rectMode(CENTER);
  Engine.update(engine);
  tree1.display();
  floor.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rock1.display();
  chain1.display();
  drawSprites();
 
}



