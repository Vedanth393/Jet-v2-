
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var button,button2,button3,button4,button5,button6,button7,button8,button9,button10;
var explosion,explosionImg;
var score=0

function preload(){
  bgImg = loadImage("brickbuilding.jpg")

  explosionImg = loadAnimation("explosion1.png","explosion2.jpg","explosion3.jpg","explosion4.jpg","explosion5.jpg","explosion6.jpg","explosion7.jpg")

  explosion.playing=true
  explosion.loop = false
}


function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  button = createImg('red_button.jpg')
  button.position(20,400)
  button.size(50,50)
button.mouseClicked(good_button)

  button2 = createImg('red_button.jpg')
  button2.position(100,400)
  button2.size(50,50)
 button2.mouseClicked(good_button2)

  button3 = createImg('red_button.jpg')
  button3.position(180,400)
  button3.size(50,50)
  button3.mouseClicked(good_button3)

  button4 = createImg('red_button.jpg')
  button4.position(260,400)
  button4.size(50,50)
button4.mouseClicked(bad_button)

  button5 = createImg('red_button.jpg')
  button5.position(340,400)
  button5.size(50,50)
button5.mouseClicked(good_button4)

  button6 = createImg('red_button.jpg')
  button6.position(420,400)
  button6.size(50,50)
button6.mouseClicked(good_button5)

  button7 = createImg('red_button.jpg')
  button7.position(500,400)
  button7.size(50,50)
  button7.mouseClicked(good_button8)
  
  button8 = createImg('red_button.jpg')
  button8.position(580,400)
  button8.size(50,50)
button8.mouseClicked(good_button6)

  button9 = createImg('red_button.jpg')
  button9.position(660,400)
  button9.size(50,50)
button9.mouseClicked(good_button7)

  button10 = createImg('red_button.jpg')
  button10.position(740,400)
  button10.size(50,50)
  button10.mouseClicked(bad_button2)
}


function draw() 
{
  background(51);
  image(bgImg,0,0,width,height)
  
  text("Score: "+ score,750,25)

  Engine.update(engine);
  
  drawSprites()
}

function good_button(){
  score+=1
 button.remove()
 }

 function good_button2(){
   score+=1
   button2.remove()
 }

 function good_button3(){
   score+=1
   button3.remove()
 }

 function bad_button(){
   explosion.addAnimation(explosionImg);
   button4.remove()
 }

 function good_button4(){
  score+=1
  button5.remove()
}

function good_button5(){
  score+=1
  button6.remove()
}

function good_button6(){
  score+=1
  button8.remove()
}

function good_button7(){
  score+=1
  button9.remove()

}

function good_button8(){
  score+=1
  button7.remove()
}

function bad_button2(){
  explosion.addAnimation(explosionImg);
  button10.remove()
}