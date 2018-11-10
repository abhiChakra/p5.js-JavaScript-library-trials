
var circle = {
    x: 45,
    y: 55,
    speedX: 0,
    speedY: 4

}

var bat = {
    y:450,
    wid:250,
    hei:20
}


function setup() {
    createCanvas(windowWidth, windowHeight);
  }


function draw() {
    background(0);
    fill(255);
    ellipse(circle.x, circle.y, 55, 55);


    rect(mouseX, bat.y, bat.wid, bat.hei);

    circle.x+=circle.speedX;
    circle.y+=circle.speedY;

    if(circle.x>width){
        circle.speedX=-1*circle.speedX;
        //circle.speedY = random(1,4);
    }

    if(circle.x<0){
        circle.speedX=-1*circle.speedX;
        //circle.speedY = random(1,4);
    }

    if(circle.y+27.5>=450){
        if(circle.x<=mouseX+250 && circle.x>=mouseX){
            if(circle.speedX<1){
                circle.speedX -= 1;
            }
            else if(circle.speedX>1){
                circle.speedX += 1;
            }
            
            circle.speedX = random(-1*circle.speedY,circle.speedY);
            circle.speedY= -1*(circle.speedY + 0.5);

       

        }
    }

    if(circle.y<0){
        circle.speedX = random(-1*circle.speedY,circle.speedY);
        circle.speedY=-1*(circle.speedY);
    }

}