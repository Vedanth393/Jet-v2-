var bgImg, bg
var jet, jetImg
var enemyJet,enemyjetImg
var enemyjetGroup
var heart1, heart2, heart3
var heart1Img, heart2Img, heart3Img
var life=3;
var gameState = "fight"
var PLAY,END;
var gameover
var gameoverImg

function preload(){
bgImg = loadImage("Sky.png")
jetImg = loadImage("jet.png")
enemyjetImg = loadImage("enemyJet.png")

heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
  gameoverImg = loadImage("Gameover.jpg");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 5

  jet = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 jet.addImage(jetImg)
   jet.scale = 0.3
   jet.debug = true
   jet.setCollider("rectangle",0,0,300,300)

   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   
enemyjetGroup = new Group()
}

function draw() {
  background(0);
  
  if( gameState === "fight"){

    if(life ===3){

      heart3.visible = true
      heart2.visible =false
      heart1.visible = false
    }

if(life===2){
  heart3.visible = false
  heart2.visible = true
heart1.visible = false
}
    if(life===1){
      heart3.visible = false
      heart2.visible = false
      heart1.visible = true
    }

    if(life===0){
      gameState='lost'
      heart3.visible = false
      heart2.visible = false 
      heart1.visible = false
      gameover = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
gameover.addImage(gameoverImg);
enemyJet.destroy()
jet.destroy()
    }
  }
  if(keyDown("UP_ARROW")||touches.length>0){
    jet.y = jet.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   jet.y = jet.y+30
  }
  if(enemyjetGroup.isTouching(jet)){
 


    for(var i=0;i<enemyjetGroup.length;i++){     
         
     if(enemyjetGroup[i].isTouching(jet)){
      enemyjetGroup[i].destroy()
          life = life -1
          
   
          } 
    }
  }
  drawSprites();
  enemy();
}

function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    enemyJet = createSprite(random(500,1100),random(100,500),40,40)

    enemyJet.addImage(enemyjetImg)
    enemyJet.scale = 0.3
    enemyJet.velocityX = -3
    enemyJet.debug= true
    enemyJet.setCollider("rectangle",0,0,400,400)
   
    enemyJet.lifetime = 400
   enemyjetGroup.add(enemyJet)
  }

}
