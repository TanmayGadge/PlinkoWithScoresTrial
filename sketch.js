const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var divisionHeight = 300;
//var particles = [];
var plinkos = [];
var divisions = [];
var particle, gameState = "play";
var turn = 0, yGround;

var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20, 0);

  yGround = new Ground(400, 500, 800, 5, 1);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }



  Engine.run(engine);
}


function mousePressed() {
  if (gameState != "end") {
    particle = new Particle(mouseX, 10, 10, 10);
  }
  turn += 1;
}

function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);

  yGround.display();

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  /*if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
    score++;
  }*/

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 300) {
        score += 500;
        particle = null;
        if (turn >= 5) {
          gameState = "end";
        }
      }
    }
  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}
