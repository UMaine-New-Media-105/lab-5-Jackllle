let x
let y
let speedoX
let speedoY
let spriteSize = 100

function setup() {
  createCanvas(400, 400);
  
  x = random(spriteSize, width - spriteSize);
   y = random(spriteSize, height - spriteSize) ;
   speedoX = 4;
  speedoY = 4;
  
}

function draw() {
  background(220);

  x += speedoX;
  y += speedoY;
  
  if (x + spriteSize / 2 > width){ 
   x = width - spriteSize / 2;
    speedoX *= -1;
     } else if (x - spriteSize / 2 < 0) {
    x = spriteSize / 2;
    speedoX *= -1;
}
  if (y + spriteSize / 2 > height) {
    y = height - spriteSize / 2;
    speedoY *= -1;
    } else if (y - spriteSize / 2 < 0) {
    y = spriteSize / 2;
    speedoY *= -1;
  }

  addLemurs(x,y);
}
    
// console.log("The value of x is: " + x)
// console.log("The value of speedoX is : " + speedoX)
function addLemurs(x,y){
  push();
  translate(x,y)
  scale(2)
  noStroke()
  fill("gold");
  beginShape();
  fill("white")
   rect(10,0,25,22)
   rect(68,0,25,22)
   fill("grey")
    rect(15,5,10,10)
   rect(75,5,10,10)
   
   //outerhead
   fill("grey")
   ellipse(50,45,80,100) 
   fill("white")
ellipse(50,50,75,95)
   ellipse(35,70,50,50)
   ellipse(65,70,50,50)
   //mouth
 fill("rgb(45,44,44)")   
ellipse(50,65,40,30)
  ellipse(50,80,30,20)
   fill("black")
   ellipse(50,78,20,5)
   ellipse(45,65,5,10)
   ellipse(55,65,5,10)
   //outereyes
    ellipse(32,40,20,20)
   ellipse(68,40,20,20)
//innereyes
fill("#FFC107")
 ellipse(30,40,10,10) 
 ellipse(70,40,10,10)
   fill("black")
  ellipse(32,40,5,5) 
 ellipse(68,40,5,5) 
   
 fill("grey")
   rect(29,2,42,11)    

}
