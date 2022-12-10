var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 1;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 5;
var dy = -5;




function drawBall() {
    // ctx.beginPath()
    ctx.arc(x, y, ballRadius, 1, Math.PI*1); 
    // ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

}

 function draw() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx+1;
    } 
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
 
}
// // Animate the color of the ball
// setInterval(function() {
//     // Generate a random color
//     var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  
//     // Update the color of the ball
//     ctx.fillStyle = color;
//   }, 250); // Update the color every 100 milliseconds



   
function start(){
    setInterval(draw);
    $(".epi").css({
        'display':'none'
     });
}


    
    function doSomething() {}

    (function loop() {
        var rand = Math.round(Math.random() * (5000 - 500)) + 500;
        var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        setTimeout(function() {
                 //alert('A');
                 ctx.fillStyle = color;
                 ctx.beginPath();
                loop();  
        }, rand);
    }());