var hr, min, sec;

var hourAngle, minuteAngle, secondAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  
  translate(200, 200);
  rotate(-110);

  hr = hour();
  min = minute();
  sec = second();
  hourAngle = map(hr%12, 0, 12, 0, 360);
  minuteAngle = map(min, 0, 60, 0, 360);
  secondAngle = map(sec, 0, 60, 0, 360);

  //hour hand
  push();
  rotate(hourAngle);
  stroke("red");
  line(0, 0, 40, 0);
  strokeWeight(6);
  pop();

  //minute hand
  push();
  rotate(minuteAngle);
  stroke("blue");
  line(0, 0, 65, 0);
  strokeWeight(6);
  pop();

  //second hand
  push();
  rotate(secondAngle);
  stroke("yellow");
  line(0, 0, 90, 0);
  strokeWeight(6);
  pop();

  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0, 0, 260, 260, 0, hourAngle);

  stroke("yellow");
  arc(0,0,300,300,0,secondAngle);

  stroke("blue")
  arc(0,0,280,280,0,minuteAngle);
}