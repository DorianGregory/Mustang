//this is the code for the menu

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//the menu object
var menu = {};

//the menubutton class within the menu object
menu.menuButton = function(buttChild){
    this.buttonChild = buttChild;
    this.buttonAnimation;
}

var startMenu = function(){
    
    //the background
    menu.background = new Child("background.png", 0, 0, canvas.width, canvas.height);
    
    //the playbutton, an instantiated menubutton
    menu.playButton = new menuButton(new Child("playbutton.jpg", canvasWidth / 2, canvasHeight / 3, canvasWidth / 3, canvasHeight / 5));
    
    menu.playButton.onClick = function() {
        startGame();
    }
    
}

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(menu.background);
    scene.drawChild(playButton);
}