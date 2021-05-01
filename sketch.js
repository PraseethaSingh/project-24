const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ironblock,stone1,rubberball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ironblock = new iron(200,200,90,90)
    stone1 = new stone(400,200,70,70)
    rubberball = new rubber(650,200,20)
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ironblock.display();
    stone1.display();
    rubberball.display();

    
 
}