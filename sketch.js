
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1; 
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper1= new Paper(500,200 ,40);
	 ground1 = new Ground(600,400,1200,80);

	 dustbin1=new Dustbin(890 ,350,200,20);
	dustbin2=new Dustbin(980,320,20,80);

	dustbin3=new Dustbin(790,320,20,80);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:132});
}}


