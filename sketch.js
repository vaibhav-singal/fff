var stormImage;
var boy, boyImage;
var playButton, play;
var instructionsButton, instructions;
var gameState = "home";
var backArrow, backArrowImage;
var background, backgroundImage;
var boyRunning, boyRunningAnimation;
var boy_jumping;
var boy_dead;
var barrier, barrierImage;
var coins, coinsImage;
var destroyedCycle, destroyedCycleImage;
var destroyedCar, destroyedCarImage;
var treeCut, treeCutImage;
var backgroundSound, dieSound;
var stormGif;
var backgroundSprite;
var obstaclesGroup;
var treeLog, treeLog2;
var invisibleGround;
var stones;
var score = 0;
var blackScreen;
var gameOverImage, gameOverSprite;
var returnPage, returnImage;
var backgroundLevel2, backgroundLevel2Sprite;
//var sampleBackground, sampleBackgroundImage;

// var gameState = "play";
// var gameSate = "instructions";

function preload() {
  // we will load the images with a variable

  stormImage = loadImage("download.jpg");
  boyImage = loadImage("Idle (8).png");
  playButton = loadImage("th.png");
  instructionsButton = loadImage("instructions.png");
  backArrowImage = loadImage("back arrow.png");
  backgroundImage = loadImage("fffBackground.jpg");
  backgroundLevel2 = loadImage("backgron(level2).png");
  boyRunningAnimation = loadAnimation(
    "Run (1).png",
    "Run (2).png",
    "Run (3).png",
    "Run (4).png",
    "Run (5).png",
    "Run (6).png",
    "Run (7).png",
    "Run (8).png",
    "Run (9).png",
    "Run (10).png",
    "Run (11).png",
    "Run (12).png",
    "Run (13).png",
    "Run (14).png",
    "Run (15).png"
  );
  boy_jumping = loadAnimation(
    "Jump (1).png",
    "Jump (2).png",
    "Jump (3).png",
    "Jump (4).png",
    "Jump (5).png",
    "Jump (6).png",
    "Jump (7).png",
    "Jump (8).png",
    "Jump (9).png",
    "Jump (10).png",
    "Jump (11).png",
    "Jump (12).png",
    "Jump (13).png",
    "Jump (14).png",
    "Jump (15).png"
  );
  boy_dead = loadAnimation(
    "Dead (1).png",
    "Dead (2).png",
    "Dead (3).png",
    "Dead (4).png",
    "Dead (5).png",
    "Dead (6).png",
    "Dead (7).png",
    "Dead (8).png",
    "Dead (10).png",
    "Dead (11).png",
    "Dead (12).png",
    "Dead (13).png",
    "Dead (14).png",
    "Dead (15).png"
  );
  barrierImage = loadImage("BARRIER.png");
  coinsImage = loadImage("COINS.png");
  destroyedCycleImage = loadImage("DESTROYED CIRCLE.png");
  destroyedCarImage = loadImage("DESTROYES CAR.png");
  backgroundSound = loadSound("BACKGROUND.mp3");
  dieSound = loadSound("DIE.mp3");
  stormGif = loadImage("stormImage.jpg");
  treeLog = loadImage("tree log2.png");
  blackScreen = loadImage("maxresdefault.jpg");
  gameOverImage = loadImage("gameOver.png");
  returnImage = loadImage("Homepage button.png");
  
}

function setup() {
  createCanvas(displayWidth, displayHeight - 140);

  boy = createSprite(width / 2 - 300, height / 2, 10, 10);
  boy.addImage(boyImage);
  boy.scale = 0.8;

  play = createSprite(width / 2 + 350, height / 2 - 150, 150, 10, 10);
  play.addImage(playButton);
  play.scale = 0.8;

  instructions = createSprite(width / 2 + 350, height / 2 + 150, 10, 10);
  instructions.addImage(instructionsButton);
  instructions.scale = 0.8;

  backArrow = createSprite(width / 2 - 725, height / 2 - 325);
  backArrow.addImage(backArrowImage);
  backArrow.scale = 0.1;

  boyRunning = createSprite(width / 2 - 325, height / 2 + 10);
  boyRunning.addAnimation("test", boyRunningAnimation);
  boyRunning.scale = 0.4;
  boyRunning.debug = true;
  boyRunning.setCollider("rectangle", -200, 0, 500, 10, 90);

  backgroundSprite = createSprite(width / 2, height / 2);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.velocityX = -10;
  backgroundSprite.scale = 2;

  invisibleGround = createSprite(width / 2, height / 2 + 150, windowWidth, 20);
  invisibleGround.visible = false;

  gameOverSprite = createSprite(width/2+200,height/2);
  gameOverSprite.addImage(gameOverImage);
  gameOverSprite.scale = 1.5;

  returnPage = createSprite(width/2 + 50, height/2 -125);
  returnPage.addImage(returnImage);
  returnPage.scale = 0.5;

  //barrierImage.setCollider("rectangle",-200, 0, 500, 10, 90);
  

  //backgroundSprite.scale = 0.5;

  obstaclesGroup = new Group();
  coinsGroup = new Group();

  

  //boyRunning.velocityX = 2;
}

function draw() {
  // we will make the background moving
  background(stormGif);

  if (gameState == "home") {
    backArrow.visible = false;
    boyRunning.visible = false;
    backgroundSprite.visible = false;
    gameOverSprite.visible = false;
    returnPage.visible = false;
  }
  
  if (mousePressedOver(instructions)) {
    gameState = "Instructions";
  }

  if (gameState == "Instructions") {
    background("blue");
    play.visible = false;
    instructions.visible = false;
    backArrow.visible = true;

    textSize(80);
    textFont("Comic Sans MS");
    fill("yellow");

    text("Instructions", width / 2 + 25, height / 2 - 250);

    textSize(30);
    textFont("Arial Black");
    fill("red");

    text(
      "1) Rakesh is a boy who had collected a lot of food for ",
      width / 2 - 200,
      height / 2 - 150
    );

    text(
      "him but suddenly a storm occurred and all his food ",
      width / 2 - 200,
      height / 2 - 100
    );

    text("was destroyed.", width / 2 - 200, height / 2 - 50);

    text(
      "2) Now help him collect 20 coins 3 times so ",
      width / 2 - 200,
      height / 2 + 50
    );

    text(
      "that he can buy food for himself for all the 3 meals: ",
      width / 2 - 200,
      height / 2 + 100
    );

    text(
      "Breakfast, lunch and dinner by clearing all the ",
      width / 2 - 200,
      height / 2 + 150
    );

    text("obstacles on the way.", width / 2 - 200, height / 2 + 200);

    text(
      "3) Press “space” button to jump over the obstacles ",
      width / 2 - 200,
      height / 2 + 300
    );
  }

  if (mousePressedOver(backArrow)) {
    gameState = "home";
    play.visible = true;
    instructions.visible = true;
    backArrow.visible = false;
    boy.visible = true;
  }

  if (mousePressedOver(play)) {
    gameState = "play";
  }

  if (gameState == "play") {
    background(0);

    if (backgroundSprite.x < 250) {
      backgroundSprite.x = backgroundSprite.width / 2;
    }


    backgroundSprite.visible = true;
    //sampleBackground.visible = true;
    play.visible = false;
    instructions.visible = false;
    boy.visible = false;
    backArrow.visible = false;
    boyRunning.visible = true;

    backgroundSprite.depth = boy.depth;
    boy.depth = backgroundSprite.depth - 1;

    spawnObstacles();
    spawnCoins();

    if(boyRunning.isTouching(coinsGroup)){
      score = score + 5;
      coinsGroup.destroyEach();
    }

   // obstaclesGroup.setCollider("rectangle",0, 0, 500, 10, 90)

    if (keyDown("space") && boyRunning.y >= height / 2 + 10) {
      boyRunning.velocityY = -10;
      boyRunning.changeAnimation("jumping", boy_jumping);
    }

    boyRunning.velocityY = boyRunning.velocityY + 0.3;
    boyRunning.collide(invisibleGround);

    textSize(50);
    text("Score: ", width / 2, height / 2);

    if (boyRunning.isTouching(obstaclesGroup)) {
      gameState = "gameOver";
    }

    
  //  if(score = 200){

  //  }
    
  }

  if (gameState == "gameOver") {
   
    backgroundSprite.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);

    obstaclesGroup.setLifetimeEach(-1);
    
    boyRunning.changeAnimation("Image",boyImage);
    gameOverSprite.visible = true;
    returnPage.visible = true;

    backgroundSprite.depth = returnPage.depth;
    returnPage.depth = backgroundSprite.depth - 1;

    backgroundSprite.depth = gameOverSprite.depth;
    gameOverSprite.depth = backgroundSprite.depth - 1;

    boyRunning.velocityY = 0;

    if (mousePressedOver(returnPage)) {
      gameState = "home";
      obstaclesGroup.destroyEach();
      coinsGroup.destroyEach();
      play.visible = true;
      instructions.visible = true;
      boy.visible = true;
      backgroundSprite.velocityX = -10;
    }

    score = 0;

    //boyRunning.changeAnimation("change",boy);
  }



  drawSprites();

  if(gameState=="play" || gameState=="gameOver"){
    fill("red");
    textFont("algerian");
    textSize(50);
    text("Score: "+score, width/2+220, height/2-220);
  }
}
function spawnObstacles() {
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(width, height / 2 + 100);
    obstacle.debug = true;

    obstacle.velocityX = -15;

    //generate random obstacles
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1:
        obstacle.addImage(destroyedCycleImage);
        break;
      case 2:
        obstacle.addImage(barrierImage);
        break;
      case 3:
        obstacle.addImage(destroyedCarImage);
        break;
      case 4:
        obstacle.addImage(treeLog);
        break;
      // case 4: obstacle.addImage(treeLog2);
      //         break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle
    obstacle.scale = 0.4;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstaclesGroup.collide(invisibleGround);
    
    
  }
}

function spawnCoins() {
  if (frameCount % 75 == 0) {
    var coins = createSprite(width, height / 2);
    coins.velocityX = -15;

    coins.y = Math.round(random(height / 2, height / 2 - 20));
    coins.addImage(coinsImage);
    coins.scale = 0.3;
    //coins.lifetime = 100;

    coinsGroup.add(coins);
  }
}
