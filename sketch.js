// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// var engine,world
// var ground,ball;
// var binImg,bin


// function preload(){
//   
// }
// function setup() {
//   createCanvas(800, 400);
//   rectMode(CENTER);

//   engine = Engine.create();
//   world = engine.world;
//   Engine.run(engine);

//   ground = new Ground();
//   paper = new Paper();

//   bin = createSprite(600,590,10,120);
//  

//   binPart1 = new DustBin(902,505,10,120);
//   binPart2 = new DustBin(962,565,130,10);
//   binPart3 = new DustBin(1024,505,10,120);

// }

// function draw() {
//     background(0);
//     Engine.update(engine);
//     binPart1.display();
//     binPart2.display();
//     binPart3.display();
//     paper.display();

//     drawSprites();
//   }



// function keyPressed(){
//   if (keyCode === UP_ARROW) {
//     Matter.Body.applyForce(paper.body, paper.body.position, {
//       x: 12,
//       y: -13
//     });
//   }
// }

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 200, 10);
  paper = new Paper(100,300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world,ground);
}

function draw() {
  if (gameState === "start") {
    background("black");
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}