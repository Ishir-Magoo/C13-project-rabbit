var garden,rabbit;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png");
  leafIMG = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=mouseX
  spawn_apples_leaves();

  drawSprites();
}

function spawn_apples_leaves(){
  
  if (frameCount%60===0) {
  var spawn = createSprite(Math.round(random(50,350)),0,40,60);

    spawn.velocityY=3;
    var ran = Math.round(random(1,2));

    switch(ran){
      case 1:spawn.addImage(leafIMG);
      break;
      case 2:spawn.addImage(appleIMG);
      break;
      
      default:break;
    }
    spawn.scale=0.1;
    }
    }