
//main character
var mustang = new Child("Gogh.jpg", 10, 200, 200, 100);
mustang.track = 0;
var background = new Child("background.jpg", 0, 0, canvas.width, canvas.height);
//menu or game
var isPlaying = false;

//to call when starting game from menu

//game object
var game = {};
//container of obstacles
var sceneObstacles = {};

function startGame(){
    game.score = 0;
    game.track = 1;
    isPlaying = true;
}
function startMenu(){
    isPlaying = true;
}
function gameUpdate(){
    scene.drawChild(background);
    mustang.height = mustang.track*canvas.height + canvas.height/6;
    scene.drawChild(mustang)
}