var database
var form,player,game,playerCount
var gameState=0
var allplayers
var car1,car2,car3,car4,cars

function preload(){
  car1i=loadImage("images/car1.png");
  car2i=loadImage("images/car2.png");
  car3i=loadImage("images/car3.png");
  car4i=loadImage("images/car4.png");
  groundi=loadImage("images/ground.png");
  tracki=loadImage("images/track.jpg");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-20, displayHeight-30);
  game=new Game()
  game.start()

  game.getState()
}

function draw(){
if(playerCount===4){
  game.update(1);
} 
if(gameState===1){
 clear();
 game.play();
}
if(gameState===2){
  game.end();
}

}
