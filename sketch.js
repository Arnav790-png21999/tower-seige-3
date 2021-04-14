const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var world;
var box1;

var connection;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15, 
    box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,
    box29;

var stand1,stand2;
var ball;
var score;
var ground1;


function preload() {
     
}

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(500,500,450,10);
    stand2 = new Ground(1000,250,450,10);

    box  = new Box(430,490,50,50);
    box2 = new Box(450,490,50,50);
    box3 = new Box(470,490,50,50);
    box4 = new Box(490,490,50,50);
    box5 = new Box(510,490,50,50);
    box6 = new Box1(445,450,40,40);
    box7 = new Box1(465,450,40,40);
    box8 = new Box1(485,450,40,40);
    box9 = new Box1(505,450,40,40);
    box10 = new Box2(460,430,30,30);
    box11 = new Box2(480,430,30,30);
    box12 = new Box2(500,430,30,30);
    box13 = new Box3(465,410,20,20);
    box14 = new Box3(485,410,20,20);
    box15 = new Box4(475,360,20,20);
score=0;
    box16 = new Box5(900,240,40,40);
    box17 = new Box5(860,240,40,40);
    box18 = new Box5(940,240,40,40);
    box19 = new Box5(820,240,40,40);
    box20 = new Box5(980,240,40,40);
    box21 = new Box6(920,200,40,40);
    box22 = new Box6(890,200,40,40);
    box23 = new Box6(950,200,40,40);
    box24 = new Box6(860,200,40,40);
    box25 = new Box7(890,160,40,40);
    box26 = new Box7(930,160,40,40);
    box27 = new Box7(880,160,40,40);
    box28 = new Box8(930,120,40,40);
    box29 = new Box8(890,120,40,40);

    ball = new Ball(150,400,44);

    connection = new slingshot({x:150,y:400},ball.body);
  }
function draw(){
    background("blue");    
    Engine.update(engine);

    stand1.display();
    stand2.display();
    text ("Score "+score,width-300,50);

   box.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score(); 
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
 box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
      box27.score();
  
  
 
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display(); 
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box28.display();
  box27.display();
    
    box29.display();
    connection.display();
    
    ball.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  connection.fly();
}

