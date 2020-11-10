var Ground, GroundImg;

var player, edges;

var playerRightImg, playerLeftImg;

var platfoarm;
function preload() {

  GroundImg = loadImage("platfoarm/ground.png");
  playerRightImg = loadImage("charecters/sprite-0007.gif");
  playerLeftImg = loadImage("charecters/sprite-0008.gif");
  platfoarmImg = loadImage("platfoarm/small.png")
}
function setup() {

  createCanvas(displayWidth, displayHeight - 140);

  //GroundSprite for player.....
  Ground = createSprite(200, displayHeight - 90, displayWidth - 800, 70);

  Ground.scale = 0.7;
  Ground.addImage(GroundImg);
  Ground.setCollider("rectangle", -40, 0, Ground.width, Ground.height + 100);
  //Ground.debug = true;


  //playerSprite.....
  player = createSprite(200, displayHeight - 360, 40, 70);
  player.addImage(playerRightImg);
  player.scale = 0.7
  player.debug= true
  player.setCollider("rectangle",-6,-3,50,160)


}

function draw() {
  background("lightblue");
  //console.log(player.x);
  camera.position.x = player.x
  camera.position.y = player.y
  platfoarms()
  //left Movement.....
  if (keyDown("right")) {

    player.x = player.x + 24
    player.addImage(playerRightImg)
  }

  //rightMovement....
  if (keyDown("left")) {

    player.x = player.x - 24
    player.addImage(playerLeftImg)

  }

  //jumpMovement....
  if (keyDown("space")) {

    player.velocityY = -20

  }

  if (player.x < 0) {

    player.x = 200
    player.y = displayHeight - 360

  }

  if(player.y < -168){

  player.velocityY= 0

  }

  //gravity for player.......
  player.velocityY = player.velocityY + 1.2

  drawSprites();

  player.collide(Ground)
  player.collide(platfoarm)
  player.collide(platfoarm2)
  player.collide(platfoarm3)

}

function platfoarms() {

  platfoarm = createSprite(640, 500, 400, 100)
  platfoarm.addImage(platfoarmImg);
  platfoarm.scale = 0.7

  platfoarm.setCollider("rectangle", 10, 20, 380, 160);
  platfoarm2 = createSprite(1300, 600, 400, 100)
  platfoarm2.addImage(platfoarmImg);
  platfoarm2.scale = 0.7
  platfoarm2.setCollider("rectangle", 10, 20, 380, 160)


  platfoarm3 = createSprite(889, 500, 400, 100)
  platfoarm3.addImage(platfoarmImg);
  platfoarm3.scale = 0.7
  platfoarm3.setCollider("rectangle", 10, 20, 380, 160)


}

