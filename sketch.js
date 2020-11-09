
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var stone;
var boy, boyImg;

function preload(){
  boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1200,20);

  tree = new Tree(900,680,30,30);

  stone = new Stone(130,600,30,30);

  mango1 = new Mango(950,300,30,30);
  mango2 = new Mango(830,250,30,30);
  mango3 = new Mango(900,200,30,30);
  mango4 = new Mango(1050,350,30,30);
  mango5 = new Mango(1100,250,30,30);
  mango6 = new Mango(700,350,30,30);
  mango7 = new Mango(850,350,30,30);

  stretch = new Stretch(stone.body,{x:150,y:550})
  
  boy = createSprite(200,615,50,50);
  boy.addImage(boyImg);
  boy.scale = 0.1;


	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);
  background("lightblue");

  textSize(25);
  stroke("purple");
  fill("purple");
  text("Press Space to get a second Chance to Play!!",50 ,50);

  //Engine.update(Engine);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stretch.display()
  stone.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  
  drawSprites();
 
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,  mangoBodyPosition.x,  mangoBodyPosition.y);

  if (distance<=lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stretch.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:80, y:550}) 
	  stretch.attach(stone.body);
	}
  }

