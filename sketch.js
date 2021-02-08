
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
var mConstraint;

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.

	bob1 = new Bob(340,450,"#00b0ff");
	bob2 = new Bob(400,450,"#e91e63");
	bob3 = new Bob(460,450,"#ffc107");
	bob4 = new Bob(520,450,"#e91e63");
	bob5 = new Bob(580,450,"#00b0ff");
	sling1 = new Sling(bob1.body,{x: 340,y: 200});
	sling2 = new Sling(bob2.body,{x: 400,y: 200});
	sling3 = new Sling(bob3.body,{x: 460,y: 200});
	sling4 = new Sling(bob4.body,{x: 520,y: 200});
	sling5 = new Sling(bob5.body,{x: 580,y: 200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x: mouseX,y: mouseY});
}




