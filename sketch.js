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

  //yGround = new Ground(400, 500, 800, 5, 1);


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



  
}

function draw() {
  background("black");
  textSize(20)
  text("Score : " + score, 20, 30);
  fill("white");
  text("500", 20, 550);
  text("500", 100, 550);
  text("500", 180, 550);
  text("500", 260, 550);
  
  text("100", 340, 550);
  text("100", 420, 550);
  text("100", 500, 550);
  
  text("200", 580, 550);
  text("200", 660, 550);
  text("200", 740, 550);
  //yGround.display();
  fill("yellow");
  strokeWeight(3);
  rect(400, 450, 800, 5);
  Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
    
    plinkos[i].display();
    
  }
  /*if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
    score++;
  }*/
  console.log(particle);
  
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
      else if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score += 100;
        particle = null;
        if (turn >= 5) {
          gameState = "end";
        }
      }
      else if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score += 200;
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

  if(gameState === "end"){
    textSize(100);
    text("Game Over", 100, 400);
  }
}

function mousePressed() {
  console.log("Iscalled");
  if (gameState !== "end") {
    turn += 1;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
