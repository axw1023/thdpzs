var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 5632;
canvas.height = 1024;
var w = canvas.width;
var h = canvas.height;

var part_count = 600;
var P = [];
var X, Y;
var angle = 0.01;
var centerX = w * 0.5,
    centerY = h * 0.5;

var part = function(x,y,ix,iy,vx,vy,a,dist) {
  this.x = x;
  this.y = y;
    this.ix = ix;
  this.iy = iy;
  this.vx = vx;
  this.vy = vy;
  this.a = a;
  this.dist = dist;
}

function init(){
  var x,y,ix,iy,vx,vy,a,dist;
  for(var i=0; i<part_count;i++){
    ix = x;
    iy = y;
    vx = random(-1,1);
    vy = random(-1,1);
    rand = random(-80,100);
    dist = part_count/10+i;
    a = 1;
    
    P.push(new part(x,y,ix,iy,vx,vy,a,dist));
  }
}
init();

function bg(){
    ctx.fillStyle = 'rgba(255,255,255,0)';
 // ctx.fillStyle = '#000000';
  ctx.globalAlpha=0.25;
  //ctx.fillRect(0,0,canvas.width,canvas.height,1);
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function distance(dx,dy){
  return Math.sqrt(dx * dx + dy * dy);
}

function draw(){
  for(var i=0; i<P.length;i++){
    var p = P[i];
    
    p.a += 0.008;
    p.x = centerX + Math.cos(i+p.a) * (p.dist*i*0.1);
    p.y = centerY + Math.sin(i+p.a) * (p.dist);
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,360,false);
      ctx.fillStyle="#156fed";//填充颜色,默认是黑色
      ctx.fill();//画实心圆
      ctx.closePath();
  //  ctx.fillStyle = '#fff'
   // ctx.fillRect(p.x, p.y,6, 6);
  }
}


function loop(){
  bg();
  draw();
  //window.requestAnimationFrame(loop);
    window.setTimeout(loop,150);
}
loop();

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerX = window.innerWidth * 0.5;
  centerY = window.innerHeight * 0.5;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

window.onresize = resize;