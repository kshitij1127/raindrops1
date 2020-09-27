const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 

var engine,world 

function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(800,400);

}

function draw() {
  Engine.update(engine)
  for(var i = 100 ; i < 800 ; i = i + 50){
     var droplet1 = new Droplet(i,100,20,20)


     if(droplet1.y === 300){
       for(var j = 50 ; j < 800 ; j  = j + 50){
        var droplet2 = new Droplet()
        droplet2.display()
       }  
     }

  }
  
  background(255,255,255);  
droplet1.display()

}