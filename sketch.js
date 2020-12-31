var stormImage;
var boy, boyImage;
var playButton, play;
var instructionsButton, instructions;
var gameState = "home";
var backArrow, backArrowImage;
var background, backgroundImage;
var boyRunning, boyRunningAnimation;
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
var feedbackBackground1;
var nextLevel, nextLevelSprite;
//var sampleBackground, sampleBackgroundImage;

// var gameState = "play";
// var gameSate = "instructions";

function preload() {
  // we will load the images with a variable

  // stormImage = loadImage("Images/backgrounds/download.jpg");
  boyImage = loadImage("Images/basic images/Idle (8).png");
  playButton = loadImage("Images/basic images/th.png");
  instructionsButton = loadImage("Images/basic images/instructions.png");
  backArrowImage = loadImage("Images/basic images/back arrow.png");
  backgroundImage = loadImage("Images/backgrounds/fffBackground.jpg");
  backgroundLevel2 = loadImage("Images/backgrounds/backgron(level2).png");
  boyRunningAnimation = loadAnimation(
    "Images/boyRunning/Run (1).png",
    "Images/boyRunning/Run (2).png",
    "Images/boyRunning/Run (3).png",
    "Images/boyRunning/Run (4).png",
    "Images/boyRunning/Run (5).png",
    "Images/boyRunning/Run (6).png",
    "Images/boyRunning/Run (7).png",
    "Images/boyRunning/Run (8).png",
    "Images/boyRunning/Run (9).png",
    "Images/boyRunning/Run (10).png",
    "Images/boyRunning/Run (11).png",
    "Images/boyRunning/Run (12).png",
    "Images/boyRunning/Run (13).png",
    "Images/boyRunning/Run (14).png",
    "Images/boyRunning/Run (15).png"
  );

  boy_dead = loadAnimation(
    "Images/boyDead/Dead (1).png",
    "Images/boyDead/Dead (2).png",
    "Images/boyDead/Dead (3).png",
    "Images/boyDead/Dead (4).png",
    "Images/boyDead/Dead (5).png",
    "Images/boyDead/Dead (6).png",
    "Images/boyDead/Dead (7).png",
    "Images/boyDead/Dead (8).png",
    "Images/boyDead/Dead (10).png",
    "Images/boyDead/Dead (11).png",
    "Images/boyDead/Dead (12).png",
    "Images/boyDead/Dead (13).png",
    "Images/boyDead/Dead (14).png",
    "Images/boyDead/Dead (15).png"
  );
  barrierImage = loadImage("Images/obstacles/BARRIER.png");
  coinsImage = loadImage("Images/basic images/COINS.png");
  destroyedCycleImage = loadImage("Images/obstacles/DESTROYED CIRCLE.png");
  destroyedCarImage = loadImage("Images/obstacles/DESTROYES CAR.png");
  backgroundSound = loadSound("sounds/BACKGROUND.mp3");
  dieSound = loadSound("sounds/DIE.mp3");
  stormGif = loadImage("Images/backgrounds/stormImage.jpg");
  treeLog = loadImage("Images/obstacles/tree log2.png");
  gameOverImage = loadImage("Images/basic images/gameOverImage.png");
  returnImage = loadImage("Images/basic images/reloadIcon.png");
  feedbackBackground1 = loadImage("Images/backgrounds/level1FeedbackBackground.jpg");
  nextLevel = loadImage("Images/basic images/next level.png");
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
  boyRunning.addAnimation("running", boyRunningAnimation);
  boyRunning.addAnimation("dead", boy_dead);
  boyRunning.scale = 0.4;
  boyRunning.debug = true;
  boyRunning.setCollider("rectangle", -200, 0, 500, 10, 90);

  backgroundSprite = createSprite(width / 2, height / 2);
  backgroundSprite.addImage(backgroundImage);
  
  backgroundSprite.scale = 2;

  invisibleGround = createSprite(width / 2, height / 2 + 150, windowWidth, 20);
  invisibleGround.visible = false;

  gameOverSprite = createSprite(width / 2 + 50, height / 2 - 125);
  gameOverSprite.addImage(gameOverImage);
  //gameOverSprite.scale = 1.5;

  returnPage = createSprite(width / 2 + 50, height / 2);
  returnPage.addImage(returnImage);
  returnPage.scale = 0.5;

  nextLevelSprite = createSprite(width/2,height/2+100);
  nextLevelSprite.addImage(nextLevel);
  nextLevelSprite.scale = 0.5;

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

     nextLevelSprite.visible = false;
    backArrow.visible = false;
    boyRunning.visible = false;
    gameOverSprite.visible = false;
    backgroundSprite.visible = false;
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
    gameState = "Level1";
  }

  if (gameState == "Level1") {
    background(0);

    backgroundSprite.velocityX = -10;

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

    if (boyRunning.isTouching(coinsGroup)) {
      score = score + 5;
      coinsGroup.destroyEach();
    }

    // obstaclesGroup.setCollider("rectangle",0, 0, 500, 10, 90)

    if (keyDown("space") && boyRunning.y >= height / 2 + 10) {
      boyRunning.velocityY = -10;
    }

    boyRunning.velocityY = boyRunning.velocityY + 0.3;
    boyRunning.collide(invisibleGround);

    textSize(50);
    text("Score: ", width / 2, height / 2);

    if (boyRunning.isTouching(obstaclesGroup)) {
      gameState = "gameOver";
    }
   
    if(score == 10){
      gameState = "Level1Feedback";

    }
    //  if(score = 200){

    //  }
  }

  if (gameState == "gameOver") {
    backgroundSprite.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    
    coinsGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);

    boyRunning.changeAnimation("dead", boy_dead);
    gameOverSprite.visible = true;
    returnPage.visible = true;

    backgroundSprite.depth = returnPage.depth;
    returnPage.depth = returnPage.depth + 1;

    backgroundSprite.depth = gameOverSprite.depth;
    gameOverSprite.depth = gameOverSprite.depth + 1;

    boyRunning.velocityY = 0;

    if (mousePressedOver(returnPage)) {
      gameState = "Level1";
      obstaclesGroup.destroyEach();
      coinsGroup.destroyEach();
      //Level1.visible = true;
      //instructions.visible = true;
      //boy.visible = true;
     // backgroundSprite.velocityX = -10;

     gameOverSprite.visible = false;
     returnPage.visible = false;
      score = 0;
      boyRunning.changeAnimation("running", boyRunningAnimation);
    }
  }

  drawSprites();

  if (gameState == "Level1" || gameState == "gameOver") {
    fill("red");
    textFont("algerian");
    textSize(50);
    text("Score: " + score, width / 2 + 220, height / 2 - 220);

   
  }

  if(gameState == "Level1Feedback"){
    background(feedbackBackground1);

    textSize(45);
    textFont("Comic Sans MS");
    fill("yellow");
    text("Congratulations you have completed the 1st level",width/2-500,height/2);

    nextLevelSprite.visible = true;

    feedbackBackground1.depth = nextLevelSprite.depth;
    nextLevelSprite.depth = nextLevelSprite.depth + 1;
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
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;
      case 2:
        obstacle.addImage(barrierImage);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width - 200,
          obstacle.height - 200
        );
        break;
      case 3:
        obstacle.addImage(destroyedCarImage);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;
      case 4:
        obstacle.addImage(treeLog);
        obstacle.setCollider(
          "rectangle",
          0,
          0,
          obstacle.width,
          obstacle.height
        );
        break;

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
