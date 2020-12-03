const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25
var polygon, sling
var gameState = "on sling"
var score =0,backgroundImg

function preload(){
  getBackgroundIMG()
}

function setup() {

  createCanvas(1200, 400)

  engine = Engine.create();
  world = engine.world

  ground = new Ground(600, 395, 1200, 20)
  stand1 = new Ground(325, 350, 200, 20)
  stand2 = new Ground(624, 251, 170, 20)
  block1 = new Box(250, 330, 30, 30)
  block2 = new Box(285, 330, 30, 30)
  block3 = new Box(320, 330, 30, 30)
  block4 = new Box(355, 330, 30, 30)
  block5 = new Box(390, 330, 30, 30)
  block6 = new Box(268, 300, 30, 30)
  block7 = new Box(305, 300, 30, 30)
  block8 = new Box(340, 300, 30, 30)
  block9 = new Box(375, 300, 30, 30)
  block10 = new Box(285, 265, 30, 30)
  block11 = new Box(320, 265, 30, 30)
  block12 = new Box(355, 265, 30, 30)
  block13 = new Box(300, 235, 30, 30)
  block14 = new Box(335, 235, 30, 30)
  block15 = new Box(315, 210, 30, 30)
  block16 = new Box(570, 235, 30, 30)
  block17 = new Box(605, 235, 30, 30)
  block18 = new Box(640, 235, 30, 30)
  block19 = new Box(675, 235, 30, 30)
  block20 = new Box(585, 200, 30, 30)
  block21 = new Box(620, 200, 30, 30)
  block22 = new Box(655, 200, 30, 30)
  block23 = new Box(600, 160, 30, 30)
  block24 = new Box(638, 160, 30, 30)
  block25 = new Box(620, 130, 30, 30)
  polygon = new Polygon(1000, 193, 6, 25)
  sling = new Slingshot(polygon.body, { x: 1000, y: 193 })
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
} 
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  sling.display();
  polygon.display();

  text(mouseX + "," + mouseY, mouseX, mouseY)
  text("SCORE: " + score,10,10)
}
function mouseDragged() {
  if (gameState === "on sling") {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
  }
}
function mouseReleased() {
  sling.fly();
  gameState = "Launchified"
}
function keyPressed() {
  if (gameState === "Launchified") {
    if (keyCode === 32) {
      Matter.Body.setPosition(polygon.body, { x: 1000, y: 193 })
      sling.attach(polygon.body);
      Matter.Body.setAngle(polygon.body, 0)
      gameState = "on sling"
    }
  }
  
}
async function getBackgroundIMG(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

  var responseJSON = await response.json();
  //console.log(responseJSON)

  var DatetoTime= responseJSON.datetime
  //console.log(DatetoTime)

  var hour = DatetoTime.slice(11,13)
  console.log(hour)
  if(hour>=06 && hour<18){
     bg =  "sprites/day.jpg"
  }else{
      bg = "sprites/night.jpg"
  }
  backgroundImg = loadImage(bg);
}
