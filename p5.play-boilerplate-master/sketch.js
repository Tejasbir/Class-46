var mainMenu
var gameState = 0
var game
var bg, bgi;
var PlSS, PlSSI
var ESS,ESS2,ESS3,ESS4
var button

function preload() {
bgi = loadImage("Pictures/Space Planet.jpg")
PlSSI = loadImage("Pictures/Alien shooter v.2 main spaceship.png")
}



function setup() {
  createCanvas(displayWidth, displayHeight - 111);
  bg = createSprite(600, 530, displayWidth, displayHeight)
  bg.addImage(bgi)
  bg.scale = 3
  
  //Player Spaceship
  PlSS = createSprite(600, 600, 30, 50) 
  PlSS.addImage(PlSSI)
  PlSS.scale = 0.5

  var r = Math.round(random(100,800))
  //Enemy Spaceship
  ESS = new Spaceship(r, 0, 160, 180)
  ESS.depth = bg.depth + 1
  ESS2 = new Spaceship(r + 100, 0, 160, 180)
  ESS2.depth = bg.depth + 1
  ESS3 = new Spaceship(r + 200, 0, 160, 180)
  ESS3.depth = bg.depth + 1
  ESS4 = new Spaceship(r + 300, 0, 160, 180)
  ESS4.depth = bg.depth + 1
  button = new Button()
}

function draw() {
  background(0,0,0);

  PlSS.x = mouseX
  PlSS.y = mouseY


  
  drawSprites();
  button.display();
  ESS.display();
  ESS2.display();
  ESS3.display();
  ESS4.display();
}