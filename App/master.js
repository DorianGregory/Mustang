//the most important part; controls everything else

var isPlaying = false;
initiate();
//set up the scene variable
var scene = new Scene();
//global variable


//start the variable with frames per second
scene.start(60)

//update function that runs with each new frame
function update(){
    scene.clear();
    if(isPlaying == true){
        gameUpdate();
    }
    else{
        menuUpdate();
    }
}

/*function gameUpdate(){
    scene.drawChild(background);
    mustang.y = mustang.track*canvas.height/3 + canvas.height/6;
    scene.drawChild(mustang);
    obstacleSpawn();
    mustang.speed = getSpeed(game.score);
    
    for(var i=0; i<obstacles.length;i++){
        obstacles[i].x-= mustang.speed;
        scene.drawChild(obstacles[i]);
    }
}*/