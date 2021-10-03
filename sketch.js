var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var obstacleGroup,obstacles;

var cactus_img, scorpion_img, gameOver;

var player1_img, player2_img, player3_img, gameBg;
var player1, player2, player3;
var cars;

function preload(){
  gameBg= loadImage("images/gameBackground.jpg");
  gameOver = loadImage("images/gameOver.png");
  player1_img = loadImage("images/player1.png");
  player2_img = loadImage("images/player2.png");
  player3_img = loadImage("images/player3.png");
  scorpion_img = loadImage("images/scorpion.png");
  cactus_img = loadImage("images/cactus.png");
  obstacleGroup = new Group();
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
