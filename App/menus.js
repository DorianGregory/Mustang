//this is the code for the menu

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//the menubutton class; takes all the inputs and makes it a child w/ that junk
function menuButton(fileName, xPos, yPos, width, height){
    this.buttonChild = new Child(fileName, xPos, yPos, width, height);
    this.buttonAnimation; //is not anything as of yet
}

//the menu object
var menu = {
    
    var background, playButton, soundButton, lastScoreLabel, highScoreLabel;
    
    function starterMenu(lastScore, highScore, byrdQuote) {
        
        //the background, stretching across the entire screen; to be replaced with scrolling thing
        background = new Child("background.png", 0, 0, canvas.width, canvas.height);
        
        
        
        //the playbutton, an instantiated menubutton; its function when tapped is to start the game
        //it's one fifth the width of the thing, found in the center near the top
        playButton = new menuButton("playbutton.png", 2 * (canvasWidth / 5),  2 * (canvasHeight / 7), canvasWidth / 5, canvasWidth / 5) {
            
            buttonChild.onclick = function(){
                startGame();
            }
            
        }
        
        //the mutebutton, an instantiated menubutton; its function when tapped WILL BE to mute or unmute
        //we're still working on the sound code (we haven't started it)
        //it has to change the image of the child, so there's a little fiddling we do in the onclick method
        soundButton = new menuButton("mutebutton.png", 17 * (canvasWidth / 20), 11 * (canvasHeight / 14), 2 * (canvasHeight / 14), 2 * (canvasHeight / 14)){
            
            var sound = true;
            
            buttonChild.onclick = function(){
                
                //we store the onclick method
                var tempClick = buttonChild.onclick;
                
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
        
        lastScoreLabel = new Text('Last score: ' + lastScore, '24pt Helvetica', 'Black', canvasWidth / 5, 5 * (canvasHeight / 7)); //I don't have the vaguest idea if that's the right thing for color, otherwise
                                //000000
        
        highScoreLabel = new Text('Hi score: ' + highScore, '12pt Helvetica', 'Black', 2 * (canvasWidth / 7), 6 * (canvasHeight / 7));
        
    }
}

var startMenu = menu.starterMenu; //maaaay not work

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(menu.background);
    scene.drawChild(menu.playButton.buttonChild);
    scene.drawChild(menu.soundButton.buttonChild);
    scene.drawText(menu.lastScoreLabel);
    scene.drawText(menu.highScoreLabel);
}