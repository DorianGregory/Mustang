//this is the code for the menu

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//the menubutton class within the menu object; takes all the inputs and makes it a child w/ that junk
menu.menuButton = function(var fileName, var xPos, var yPos, var width, var height){
    this.buttonChild = new Child(fileName, xPos, yPos, width, height);
    this.buttonAnimation;
}

//the menu object
var menu = {
    var starterMenu = function() {
        
        //the background, stretching across the entire screen; to be replaced with scrolling thing
        var background = new Child("background.png", 0, 0, canvas.width, canvas.height);
        
        //the playbutton, an instantiated menubutton; its function when tapped is to start the game
        //it's one fifth the width of the thing, found in the center near the top
        var playButton = new menuButton("playbutton.png", 2 * (canvasWidth / 5),  2 * (canvasHeight / 7), canvasWidth / 5, canvasWidth / 5) {
            
            buttonChild.onClick = function(){
                startGame();
            }
            
        }
        
        //the mutebutton, an instantiated menubutton; its function when tapped WILL BE to mute or unmute
        //it has to change the image of the child, so there's a little fiddling we do in the onclick method
        var soundButton = new menuButton("mutebutton.png", 17 * (canvasWidth / 20), 11 * (canvasHeight / 14), 2 * (canvasHeight / 14), 2 * (canvasHeight / 14)){
            
            var sound = true;
            
            buttonChild.onClick = function(){
                
                //we store the onClick method
                var tempClick = buttonChild.onClick;
                
                if (sound) {
                    //here is where the sound will be turned off
                    
                    sound = false;
                    
                    buttonChild.image = new Image();
                    buttonChild.image.src = "unmutebutton.png";
                } else {
                    //here is where the sound will be turned on
                    
                    sound = true;
                    
                    //then we change the child back
                    buttonChild.image = new Image();
                    buttonChild.image.src = "mutebutton.png";
                } //note to potential bugcatchers: I am so sorry. I am new to javascript, please forgive me
                
            }
            
        }
    
    
    }
}

var startMenu = menu.starterMenu; //maaaay not work

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(menu.background);
    scene.drawChild(menu.playButton.buttonChild);
    scene.drawChild(menu.soundButton.buttonChild);
}