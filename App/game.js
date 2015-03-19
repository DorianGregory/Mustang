
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

mustang.speed=5;        //maximum speed
mustang.x=50;               //current position
mustang.y=50;
mustang.xSpeed=0;           //current speed
mustang.ySpeed=0;
mustang.moveX=mustang.x;            //move orders, not currently used so ignore for now.
mustang.moveY=mustang.y;
var trackYValues={50,150,200};      //y values of the track
function updatePosition(movingobj){
	movingobj.x=movingobj.x+movingobj.xSpeed;
	movingobj.y=movingobj.y+movingobj.ySpeed;
}
function moveHorse(){
	//lerps the horse to the current track.
	//The objects new position must be calculated every update.
	moveTo(mustang.x,trackYValues[mustang.track],mustang);
	updatePosition(mustang);
}

function moveTo( newX, newY,moveObj){
	//sets x and y movespeeds to move to the (x,y) coords, does not mess with rotations
	
	var distance=Math.sqrt(Math.pow(newX-moveObj.x,2)+Math.pow(newY-moveObj.y,2));
	if(distance>3){
		var xDistance=newX-moveObj.x;
		var yDistance=newY-moveObj.y;
		
		moveObj.xSpeed = (xDistance / (distance / moveObj.speed));
		moveObj.ySpeed =  (yDistance / (distance / moveObj.speed));
	}
	else{
		moveObj.xSpeed=0;
		moveObj.ySpeed=0;}
