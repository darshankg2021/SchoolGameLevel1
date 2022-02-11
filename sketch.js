var input1;

var gameState;

var player;

var backgroundImg;

var playerBlue, playerGreen, playerRed, playerPurple, playerBlack;

var laser1 , laser2; 
var laserStarter1, laserStarter2;

var bTop, bBottom, bLeft, bRight;

function preload(){
    backgroundImg = loadImage("./assets/bg.png.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    input1 = new Form();

    player = createSprite(400,400, 20, 20);
    player.shapeColor = "green";
    player.visible = false;

    laser1 = createSprite(width/4, height/2 , width/2 , 10);
    laser1.shapeColor = "red";
    laser1.visible = false;

    laserStarter1 = createSprite(laser1.position.x - width/4, laser1.position.y, 30, 50);
    laserStarter1.shapeColor = "blue";
    laserStarter1.visible = laser1.visible;

    laser2 = createSprite(width - width/4, height/2 , width/2 , 10);
    laser2.shapeColor = "red";
    laser2.visible = false;

    laserStarter2 = createSprite(laser2.position.x + width/4, laser2.position.y, 30, 50);
    laserStarter2.shapeColor = "blue";
    laserStarter2.visible = laser2.visible;

}

function draw(){
    background("lightBlue");

    input1.display();

    if(gameState === "start"){
        input1.hide();
    }

    if(gameState = "play"){
                
    }

    drawSprites();
}