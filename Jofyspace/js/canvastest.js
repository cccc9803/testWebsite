/*--
    logo 
        起始點 50 50
        最左點 起始點 - 10
        圖寬  120
        圖高  100
        
--*/
var middleStartX = 120;
var middleStartY = middleStartX - 60;
var middleFirstiX = middleStartX + 30;
var middleFirstiY = middleStartY + 30;

var middleSecondX = middleStartX + 30;
var middleSecondY = middleStartY + 35;

var middleThirdX = middleStartX + 30;
var middleThirdY = middleStartY + 150;

var angle = 0;
var bodyAndgle = 0;
var iterator = 0;
var size = 1;
var speed = 2; 
var moveSpeed = 1;
var loopId, canvas, ctx;

var moveAngle = 20;
var moveY = 0.08;
var moveX = 0.04;


window.onload = function() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    startAnimation();
}

function animationLoop(timeStamp) {
  // 1 - Clear & resize
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  size = Math.min(window.innerWidth, window.innerHeight) / 50;
  // 2 Draw
  drawLogo();
  // 3 Move
  updateTailAngle();
  fishMotion();
  // call again mainloop after 16.6ms (corresponds to 60 frames/second)
  id = requestAnimationFrame(animationLoop);
}

function updateTailAngle() {
  iterator += speed;
  angle = Math.sin(iterator * Math.PI / 180) * 2.5;
  bodyAndgle = moveAngle;
  moveAngle = moveAngle - moveY;
  if(moveAngle <= 0) {
      moveY = -0.08;
  }
  else {
      moveY = 0.08;
  }
  console.log(moveAngle);
  /*if (iterator >= 180 || iterator <= 0){
		speed = -speed;
	}*/
}

function fishMotion() {
    middleStartX += moveY * moveSpeed;
    middleStartY += 0.4 * moveSpeed;
    if (middleStartX > window.height) {
        middleStartX = 120;
        middleStartY = middleStartX-60;
    }
}

function startAnimation() {
  loopId = requestAnimationFrame(animationLoop);
}

function stopAnimation() {
  if (loopId) {
    cancelAnimationFrame(loopId);
  }
}

function drawLogo() {
    ctx.save();
    ctx.translate(middleSecondX, middleSecondY);
    ctx.rotate(bodyAndgle * Math.PI / 180);
    // ctx.stroke();
    drawTail();
    drawHead();
}

function drawHead() {
    ctx.save();
    ctx.beginPath();
    var startPointX = middleStartX + 30;
    var startPointY = middleStartY + 35;

    ctx.translate(startPointX, startPointY);
    ctx.rotate(-angle * Math.PI / 180);

    middleStartHeadX = -30;
    middleStartHeadY = -35;
    middleFirstHeadX = 0;
    middleFirstHeadY = 115;

    ctx.moveTo(0, 0);
    ctx.lineTo(-60, + 55);
    ctx.lineTo(0, 115);
    ctx.lineTo(60, 55);
    ctx.lineTo(0, 0);
    ctx.moveTo(-40, 35);
    ctx.lineTo(20, middleFirstHeadY -20);
    ctx.stroke();
    ctx.restore();
}

function drawTail() {
    ctx.save();
    var startPointX = middleStartX + 30;
    var startPointY = middleStartY + 35;
    ctx.translate(startPointX, startPointY);
    ctx.rotate(2 * angle * Math.PI / 180);

    middleStartTailX = -30;
    middleStartTailY = -35;
    middleFirstTailX = middleStartTailX + 30;
    middleFirstTailY = middleStartTailY + 30;
    middleSecondTailX = middleStartTailX + 30;
    middleSecondTailY = middleStartTailY + 35;

    ctx.moveTo(middleStartTailX, middleStartTailY);
    ctx.lineTo(middleStartTailX + 60, middleStartTailY);
    ctx.lineTo(middleFirstTailX, middleFirstTailY);
    ctx.lineTo(middleStartTailX, middleStartTailY);
    ctx.lineTo(middleStartTailX - 2.5, middleStartTailY + 2.5);
    ctx.lineTo(middleSecondTailX, middleSecondTailY);
    ctx.moveTo(middleSecondTailX + 20, middleSecondTailY - 20);
    ctx.lineTo(middleSecondTailX, middleSecondTailY);
    ctx.moveTo(middleSecondTailX + 20, middleSecondTailY - 20);
    ctx.lineTo(middleSecondTailX + 17.5, middleSecondTailY - 22.5);
    ctx.stroke();
    ctx.restore();
}
