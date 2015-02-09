
//main character
var mustang = new Child("Gogh.jpg", 10, 200, 200, canvas.height/6);
mustang.track = 1;
mustang.speed = 1;
var background = new Child("background.jpg", 0, 0, canvas.width, canvas.height);
//menu or game
var isPlaying = true;
//mustang.transitioning = {};
//mustang.transitioning =
//to call when starting game from menu

//game object
var game = {};
//container of obstacles
var sceneObstacles = {};
var obstacles = [];
var obstacle1 = new Child("Gogh.jpg",100,0, 200,canvas.height/6);
var obstacle2 = new Child("Gogh.jpg",canvas.width+2*canvas.width/3,0, 200,canvas.height/6);
var obstacle3 = new Child("Gogh.jpg",canvas.width+3*canvas.width/3,0, 200,canvas.height/6);

function startGame(){
    game.score = 0;
    mustang.track = 1;
    isPlaying = true;
    obstacles = [];
    obstacles.push(obstacle1);
    obstacles.push(obstacle2);
    obstacles.push(obstacle3);
}
function startMenu(){
    isPlaying = false;
    mustang.track = 1;
}
function gameUpdate(){
    scene.drawChild(background);
    mustang.y = mustang.track*canvas.height/3 + canvas.height/6;
    scene.drawChild(mustang);
    obstacleSpawn();
    mustang.speed = getSpeed(game.score);
    
    for(var i=0; i<obstacles.length;i++){
        obstacles[i].x-= mustang.speed;
        scene.drawChild(obstacles[i]);
    }
}
//function to decide whether or not to make new obstacle
//return true/false
function obstacleSpawn(){
    for(var i=0; i<obstacles.length; i++){
        if(obstacles[i].x<0){
            game.score++;
            obstacles[i].x = canvas.width;
            obstacles[i].track= Math.floor(Math.random()*3);
            obstacles[i].y= obstacles[i].track*canvas.height/3 + canvas.height/6;
        }
    }
}

function getSpeed(score){
    var speed = Math.sqrt(score)+1;
    return speed;
}

function transition(from, to){
    
}