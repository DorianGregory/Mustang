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