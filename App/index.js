//Global variables
var canvas;
var context;

//LOAD JS FILE
ejecta.include('script.js');
//LOAD JS FILE

//gets canvas, sets size, gets context
function initiate(){
	canvas = document.getElementById("canvas");
	context=canvas.getContext('2d');
}

//scene to draw
function Scene(){
    //variables
	this.background;
    this.children = new Array();
    this.touch={x:0, y:0};
    this.interval;
    //methods
	this.clear  = function(){
		context.clearRect(0,0,canvas.width,canvas.height);
        this.children = [];
	}
	this.drawChild = function (child){
		context.drawImage(child.image, child.x, child.y, child.width, child.height);
        this.children.push(child);
	}
    this.drawText = function (text){
        context.font = text.font;
        context.fillStyle = text.color;
        context.fillText(text.text, text.x, text.y);
        this.children.push();
    }
	this.start = function(fps){
		this.fps = fps;
		this.interval = setInterval(update, 1000/fps);
	}
	this.pause = function(){
		clearInterval(scene.interval);
	}
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
}

function Child(img, x, y, width, height){
	this.image = new Image();
	this.image.src = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

function Text(text, font, color, x, y){
    this.text = text;
    this.font= font;
    this.color = color;
    this.x = x;
    this.y = y;
}
