
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftSide;
var rightSide;
let world;
let engine;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
	
	engine = Engine.create();
  	world = engine.world;
	ball_options = {
		isStatic: false,
		restitution : 0.3,
		friction: 0,
		density : 1.2,
	}
	ball = Bodies.circle(200, 100, 20, ball_options);
  	World.add(world,ball)
	  
	
   
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    fill("yellow");
	groundObj = new Ground(width/2, 670, width, 20);
	fill("yellow");
	rightSide = new Ground(1100, 600, 20, 120);
	fill("yellow");
   leftSide = new Ground(900, 600, 20, 120);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x, ball.position.y, 20);
 // Engine.update(engine);
  
 

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 10, y: 5})
	}
}




