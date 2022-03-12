var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/Cops.png");
  car1_img = loadImage("assets/Run (1).png");
  car2_img = loadImage("assets/Run (2).png");
  track = loadImage("assets/roadd.webp");
  fuelImage = loadImage("assets/money.png");
  powerCoinImage = loadImage("assets/gun.png");
  obstacle1Image = loadImage("assets/donut.png");
  obstacle2Image = loadImage("assets/hand.png");
  lifeImage = loadImage("assets/bank.png");
  blastImage = loadImage("assets/gun1.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  bank=createSprite(450,height-200,20,20)
  bank.addImage(lifeImage)
  bank.scale=0.5
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
