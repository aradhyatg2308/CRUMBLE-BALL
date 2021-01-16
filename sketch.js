
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,dustbin,ground



function setup() {
	createCanvas(1500, 650);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.

	paper = new paper(100,300,10)
   
	
  
	boxPosition=width/2+250
	
	boxY=610;


	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);
	ground = new Ground(750,640,1500,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER)
  drawSprites();
 
  paper.display();
  ground.display();
 
}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paper.body,paper.body.position,
		{
	  x : 83,
	  y : - 30
		}
	  );
	}
}



