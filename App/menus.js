// JavaScript Document

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//background Child
var background = new Child(“background.jpg”, 0, 0, canvas.width, canvas.height)

//start the variable with frames per second
scene.start(60)

//play button which goes to start playing
var playButton = new Child(“playbutton.jpg”, canvasWidth / 2, canvasHeight / 3, canvasWidth / 3,
                           canvasHeight / 5);

//the thing that activates when you click on it
playButton.onClick = function(){
    //here will be animation code but we don't have that yet
}

//update function that runs with each new frame
function sceneUpdate(){
    scene.clear();
    scene.drawChild(background);
    scene.drawChild(dude);
    dude.y++;
}