function drawBorder(){
    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext('2d');
    var size = { x: canvas.width, y: canvas.height };
    context.strokeRect(0,0, size.x, size.y);
}
drawBorder();

//Iteration One: Drawing Rectangles

// function drawRectangle(){
//   var fillStyle = ('green');
//   context.fillRect(0,0, size.x, size.y);
// }
// drawRectangle();