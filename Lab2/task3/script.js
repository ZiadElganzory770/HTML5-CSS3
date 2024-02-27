var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//------------------------------------------------ Draw Triangle -----------------------------------------
context.beginPath();
context.moveTo(100, 200);
context.lineTo(200, 200);
context.lineTo(200, 30);
context.closePath();

context.strokeStyle = "green";
context.stroke();
context.fillStyle = "green";
context.fill();

//-------------------------------------------------- a,b,c letters -----------------------------------------
context.font = "30px Arial";
context.fillStyle = "black";
context.fillText("c", 120, 130);

context.font = "30px Arial";
context.fillStyle = "black";
context.fillText("b", 210, 130);

context.font = "30px Arial";
context.fillStyle = "black";
context.fillText("a", 150, 220);

//-----------------------------------------------------------------------------------------------------------
