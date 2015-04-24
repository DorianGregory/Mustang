//this is the code for the menu

//the width and height so we can reference them more efficiently
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

//the menubutton class; takes all the inputs and makes it a child w/ that junk
//function menuButton(fileName, xPos, yPos, width, height){
//    this.buttonChild = new Child(fileName, xPos, yPos, width, height);
//    this.buttonAnimation; //is not anything as of yet
//}


var background, playButton, soundButton, muteButton, unmuteButton, lastScoreLabel, highScoreLabel, sound;

function startMenu(lastScore, highScore, byrdQuote) {
    
    //the background, stretching across the entire screen; to be replaced with scrolling thing
    background = new Child("background.png", 0, 0, canvas.width, canvas.height);
    
    //the playbutton, an instantiated menubutton; its function when tapped is to start the game
    //it's one fifth the width of the thing, found in the center near the top
    playButton = new Child("playbutton.png", 2 * (canvasWidth / 5),  2 * (canvasHeight / 7), canvasWidth / 5, canvasWidth / 5);
        
    playButton.onclick = function(){
            startGame();
    }
    
    sound = true;
    
    //the mutebutton child, to be changed to when the sound is on
    muteButton = new Child("mutebutton.png", 17 * (canvasWidth / 20), 11 * (canvasHeight / 14), 2 * (canvasHeight / 14), 2 * (canvasHeight / 14));
    
    muteButton.onclick = function(){
        
        if (sound) {
            //here is where the sound will be turned off
            
            //we change the child
            soundButton = unmuteButton;
            
            sound = false;
            
        } else {
            //here is where the sound will be turned on
            
            //then we change the child back
            soundButton = muteButton;
            
            sound = true;
            
        } //note to potential bugcatchers: I am so sorry. I am new to javascript, please forgive me
        
    }
    
    //the unmutebutton child, to be changed to when the sound is off
    unmuteButton = new Child("unmutebutton.png", 17 * (canvasWidth / 20), 11 * (canvasHeight / 14), 2 * (canvasHeight / 14), 2 * (canvasHeight / 14));
    
    unmuteButton.onclick = muteButton.onclick;
    
    //the soundbutton, an instantiated child; its function when tapped WILL BE to mute or unmute
    //we're still working on the sound code (we haven't started it)
    //it has to change the child, so there's a little fiddling we do in the onclick method
    soundButton = muteButton;
    
    lastScoreLabel = new Text('Last score: ' + lastScore, '24pt Helvetica', 'Black', canvasWidth / 5, 5 * (canvasHeight / 7)); //I don't have the vaguest idea if that's the right thing for color, otherwise
                            //000000
    
    highScoreLabel = new Text('Hi score: ' + highScore, '12pt Helvetica', 'Black', 2 * (canvasWidth / 7), 6 * (canvasHeight / 7));
    

}

//update function that runs with each new frame
function menuUpdate(){
    scene.clear();
    scene.drawChild(background);
    scene.drawChild(playButton);
    scene.drawChild(soundButton);
    scene.drawText(lastScoreLabel);
    scene.drawText(highScoreLabel);
}