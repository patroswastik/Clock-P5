var hh,mm,ss,ms;
var hh_angle,mm_angle,ss_angle;

function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  hh = hour();
  mm = minute();
  ss = second();
  if(hh > 12) hh = hh - 12;
  hh_angle = map(hh,0,11,0,360);
  mm_angle = map(mm,0,59,0,360);
  ss_angle = map(ss,0,59,0,360);

  fill(123,244,123);

  translate(width/2,height/2);
  push();
  rotate(-90);

  noFill();
  strokeWeight(7);
  stroke(225,225,0);
  arc(0,0,300,300,0,hh_angle);

  noFill();
  strokeWeight(7);
  stroke(225,0,225);
  arc(0,0,280,280,0,mm_angle);

  noFill();
  strokeWeight(7);
  stroke(0,225,225);
  arc(0,0,260,260,0,ss_angle);
  pop();

  push();
  rotate(hh_angle);
  strokeWeight(3);
  stroke(225,225,0);
  line(0,0,0,-50);
  pop();

  push();
  rotate(mm_angle);
  strokeWeight(3);
  stroke(225,0,225);
  line(0,0,0,-80);
  pop();

  push();
  rotate(ss_angle);
  strokeWeight(3);
  stroke(0,225,225);
  line(0,0,0,-100);
  pop();
}
