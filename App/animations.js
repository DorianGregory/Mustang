/*
 var mustang= the player-currently gogh.jpg
 
 give mustang an array of sprites
 */
/*
 //adds sprites to an object
function loadSprite(objspritename,filenames,Obj){
    var filelength=filenames.length;
    var arr=[];
    for(var a=0;a<filelength;a++){
        var img=new Image(filenames[a]);
        arr.push(img);
    }
    Obj.sprites[objspritename]=arr;
}
mustang.animationState="running";       //current state
mustang.animationCounter=0;             //current frame
 
 //excecutes current animation
mustang.animate=function(){
    //runs the animation, do not call
    var imgarr=mustang.sprites[mustang.animationState];
    var img=imgarr[animationCounter];
    animationCounter++;
    if(animationCounter>=imgarr.length){
        animationCounter=0;
    }
    mustang.image=img;
}
    //only use this function for changing animations
mustang.changeAnimation=function(newState){
    animationCounter=0;
    animationState=newState;
}*/
/*mustang.speed=5;        //maximum speed
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
        moveObj.ySpeed=0;}*/
