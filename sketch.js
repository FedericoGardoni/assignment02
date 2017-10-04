function setup() {
  createCanvas(500,500)
  background(220)
  angleMode(DEGREES)
  frameRate(24);

}

function draw() {
stroke(lerpColor(color(230,45,45), color(145,76,90), frameCount/45));
strokeWeight(1.2)
noFill()
arc(width/2, height/2, 300, 300, 0, frameCount*16, CHORD);
stroke(lerpColor(color(30,220,80), color(80,250,90), frameCount/45));
arc(width/2, height/2, 300, 300, 180, -frameCount*16+180, CHORD);
  if (frameCount == 45) {
    noLoop();
    noFill();
  }
stroke(220)
strokeWeight(3)
ellipse(width/2,height/2, 300,300)

}