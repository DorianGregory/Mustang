//this is the code for the menu

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//start the variable with frames per second
scene.start(60)

//the thing that activates when you click on it
playButton.onClick = function(){
    startGame();
}

var menu{};

var startMenu = function(){
    //the background
    menu.background = new Child("background.png", 0, 0, canvas.width, canvas.height);
    
    //play button which goes to start playing
    menu.playButton = new Child("playbutton.jpg", canvasWidth / 2, canvasHeight / 3, canvasWidth / 3, canvasHeight / 5);

}

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(menu.background);
    scene.drawChild(playButton);
}