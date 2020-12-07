const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella;
var maxDrops = 100;
var drops = [];
var lightning;
var lightning1;
function preload(){
    lightning = loadAnimation("lightning1.png", "lightning2.png", "lightning3.png", "lightning4.png"); 
}

function setup(){
    createCanvas(800, 1200);

    engine = Engine.create();
	world = engine.world;
    Engine.run(engine); 
    
    umbrella = new Umbrella(400, 850, 600);
    
    lightning1 = createSprite(400, 50, 30, 30);
     lightning1.addAnimation("light", lightning);

    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }

}

function draw(){
    background("black");
    umbrella.display();

    lightning1.display();
    for(i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }


}   

