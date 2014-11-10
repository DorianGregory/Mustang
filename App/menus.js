// JavaScript Document
initiate();
//creates the scene object
var scene = new Scene();

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//background Child, playbutton Child (may consider making a Button which inherits from Child)
var background = new Child(“background.jpg”, 0, 0, canvas.width, canvas.height)
var playButton = new Child(“playbutton.jpg”, canvasWidth / 2, canvasHeight / 3, canvasWidth / 3,
                           canvasHeight / 5);

//start the variable with frames per second
scene.start(60)

//update function that runs with each new frame
function update(){
    scene.clear();
    scene.drawChild(background);
    scene.drawChild(dude);
    dude.y++;
    
}