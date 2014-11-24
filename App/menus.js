// JavaScript Document

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//background Child
var background = new Child(“background.png”, 0, 0, canvas.width, canvas.height)

//start the variable with frames per second
scene.start(60)

//play button which goes to start playing
var playButton = new Child(“playbutton.jpg”, canvasWidth / 2, canvasHeight / 3, canvasWidth / 3,
                           canvasHeight / 5);

//the thing that activates when you click on it
playButton.onClick = function(){
    startGame();
}

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(background);
    scene.drawChild(playButton);
}