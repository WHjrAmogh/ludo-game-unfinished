var database
var gameState=0
var playerCount
var allPlayers
var startImg,titleImg
var game
var form
var player

function preload (){
  startImg=loadImage("Images/Ludo start screen.png")
  titleImg=loadImage("Images/Title image.png")

}

function setup() {
  createCanvas(displayWidth-100,displayHeight-250)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
// background("red")





  drawSprites();
}