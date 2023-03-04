const canvas    = document.querySelector("#cw");
const container = document.querySelector("#container");
const ctx = canvas.getContext("2d");

console.log({ctx})

let dimensions = { }

let screenWidth  = window.innerWidth;
let screenHeight = window.innerHeight;

let rectX = 0;
let rectY = 0;

ctx.fillStyle = "green";
ctx.fillRect(rectX, rectY, 40, 40);

/* // Tangential lines
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "gray";
ctx.moveTo(200, 20);
ctx.lineTo(200, 130);
ctx.lineTo(50, 20);
ctx.stroke();
 */

/* // Arc
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.moveTo(200, 20);
ctx.arcTo(200, 130, 50, 20, 40);
ctx.stroke(); */

const determineContainer = (div) => {
     dimensions = {
        ancho: div.offsetWidth,
        alto: div.offsetHeight
    }
    console.log(dimensions)
    return dimensions;
}

const changeHeight = (e, dimensions) => {
    e.height = dimensions.alto;
    e.width  = dimensions.ancho + 15;
    console.log(e);
}

const changed =  new ResizeObserver(( ) => {
    changeHeight(canvas, dimensions);
});

const animate = () =>{
    console.log('animated');
    requestAnimationFrame(animate);
};

//animate();

determineContainer(container);
changeHeight(canvas, dimensions);

changed.observe(container);

/*
canvas.addEventListener("mousemove", (event) => {
    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasRect.left;
    const mouseY = event.clientY - canvasRect.top;
    
    rectX = mouseX - 20;
    rectY = mouseY - 20;
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the rectangle in its new position
    ctx.fillStyle = "green";
    ctx.fillRect(rectX, rectY, 40, 40);
});
  //This code listens for mousemove events on the canvas, calculates the mouse position relative to the canvas, updates the position of the rectangle, clears the canvas, and then draws the rectangle in its new position. Note that we subtract 50 from the mouse coordinates to ensure that the mouse is positioned at the center of the rectangle rather than its top-left corner.
  
 */

  console.log({ctx})