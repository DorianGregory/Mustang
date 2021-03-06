//Global variables
var canvas;
var context;

//LOAD JS FILE
ejecta.include('game.js');
ejecta.include('menus.js');
ejecta.include('animations.js');
ejecta.include('master.js');
//LOAD JS FILE

//gets canvas, sets size, gets context
function initiate(){
	canvas = document.getElementById("canvas");
	context=canvas.getContext('2d');
}
//hello this is leon. testing commit and brach

//scene to draw
function Scene(){
    //variables
	this.background;
    this.children = new Array();
    this.touch={x:0, y:0};
    this.interval;
    //methods
    
    //clears the scene
	this.clear  = function(){
		context.clearRect(0,0,canvas.width,canvas.height);
        this.children = [];
	}
    //draws the actual child
	this.drawChild = function (child){
		context.drawImage(child.image, child.x, child.y, child.width, child.height);
        this.children.push(child);
	}
    //draw a text child
    this.drawText = function (text){
        context.font = text.font;
        context.fillStyle = text.color;
        context.fillText(text.text, text.x, text.y);
        this.children.push();
    }
    //start the scene animations (frames per second)
	this.start = function(fps){
		this.fps = fps;
		this.interval = setInterval(update, 1000/fps);
	}
    //stop animations
	this.pause = function(){
		clearInterval(scene.interval);
	}
    //tests if point is inside child
    this.isPointInChild = function(x,y,child){
        console.log(child);
        if(x >= child.x &&
           x <= child.x + child.width &&
           y <= child.y + child.height &&
           y >= child.y)
        {return true}
        else
        {return false}
    }
    //window.scene instead of this problem
    //don't worry
    this.touchHandler = function(event){
        
        window.scene.touch.x = event.changedTouches[0].pageX;
        window.scene.touch.y = event.changedTouches[0].pageY
    }
    this.click = function(){
        var x = window.scene.touch.x;
        var y = window.scene.touch.y;
        for(var i = 0; i<window.scene.children.length; i++)
        if(window.scene.children[i].onclick && window.scene.isPointInChild(x,y,window.scene.children[i])){
            window.scene.children[i].onclick();
        }
    }
    document.addEventListener('touchstart', this.touchHandler, false);
    document.addEventListener('touchend', this.click, false);
    //stop not worrying
}
//images or children to draw
function Child(img, x, y, width, height){
	this.image = new Image();
	this.image.src = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}
//text to draw
function Text(text, font, color, x, y){
    this.text = text;
    this.font= font;
    this.color = color;
    this.x = x;
    this.y = y;
}
