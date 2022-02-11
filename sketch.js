
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Dragon, dragon;
var metor, mettor;
var rock;
var rock_options;
var rock2;
var rock2_options;
var rock3;
var rock3_options;
var rock4;
var rock4_options;
var rock5;
var rock5_options;
var rock6;
var rock6_options;
var bk, bck;
var ground, ground_options;


function preload(){
  mettor = loadImage("metor (1).png")
  bk = loadImage("bk_image.png")
}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  dragon = createImg('572-5720887_dragon-png-flying-dragon-transparent-background-clipart (1).png');
  dragon.position(0, 250);
  dragon.size(100, 100);


    rock = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock2 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock3 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock4 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock5 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock6 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock7 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock8 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock9 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock10 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    rock11 = Bodies.circle(Math.round(random(10, 400)), 0, 200, 200, rock_options);
    World.add(world, rock);
    
    rock_options = {
      restitution : 0.8
    } 
}


function draw() 
{
  background(0)
  image(bk,0,0,width,height);
  Engine.update(engine);
  ellipse(rock.position.x, rock.position.y, 50, 50);
  rect(0, 350, 400, 50);
  meteorDrop(1000);
  movement();
}
function meteorDrop(o){
  if(rock.position.y >= o) {
    World.add(world, rock2);
    ellipse(rock2.position.x, rock2.position.y, 50, 50);
  }
  if(rock2.position.y >= o) {
    World.add(world, rock3);
    ellipse(rock3.position.x, rock3.position.y, 50, 50);
  }
  if(rock3.position.y >= o) {
    World.add(world, rock4);
    ellipse(rock4.position.x, rock4.position.y, 50, 50);
  }
  if(rock4.position.y >= o) {
    World.add(world, rock5);
    ellipse(rock5.position.x, rock5.position.y, 50, 50);
  }
  if(rock5.position.y >= o) {
    World.add(world, rock6);
    ellipse(rock6.position.x, rock6.position.y, 50, 50);
  }
  if(rock6.position.y >= o) {
    World.add(world, rock7);
    ellipse(rock7.position.x, rock7.position.y, 50, 50);
  }
  if(rock7.position.y >= o) {
    World.add(world, rock8);
    ellipse(rock8.position.x, rock8.position.y, 50, 50);
  }
  if(rock8.position.y >= o) {
    World.add(world, rock9);
    ellipse(rock9.position.x, rock9.position.y, 50, 50);
  }
  if(rock9.position.y >= o) {
    World.add(world, rock10);
    ellipse(rock10.position.x, rock10.position.y, 50, 50);
  }
  if(rock10.position.y >= o) {
    World.add(world, rock11);
    ellipse(rock11.position.x, rock11.position.y, 50, 50);
  }
 }
 function movement(){
   if(keyCode === 39){
    dragon.position.x += 10
   }
 }


