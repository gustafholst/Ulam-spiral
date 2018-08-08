


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  count = 0;
  steps = 1;
  dot = new Dot();
};

function Dot() {
  this.pos = createVector(0,0);
  this.up = createVector(0,-1);
  this.down = createVector(0, 1);
  this.left = createVector(-1, 0);
  this.right = createVector(1, 0);
  this.dir = this.right;

  this.drawDot = function() {
    stroke(0);
    point(this.pos.x, this.pos.y);
  }

  this.turn = function() {
    //determine direction
    if (this.dir.equals(this.down))
      this.dir = this.right;
    else if (this.dir.equals(this.right))
      this.dir = this.up;
    else if (this.dir.equals(this.up))
      this.dir = this.left;
    else if (this.dir.equals(this.left))
      this.dir = this.down;
  }

  this.move = function() {
    this.pos.add(this.dir);
  }

};

function isPrime(num) {
  let limit = Math.sqrt(num);
  for (var i = 2; i <= limit; i++) {
    if (num % i == 0)
      return false;
  }
  //console.log(num);
  return num > 1;
};

function draw() {
  translate(windowWidth/2, windowHeight/2);

  for (let k = 0; k < steps; k++) {
    count++;
    //console.log(count);
    if (isPrime(count))
      dot.drawDot();

    dot.move();
  }

  //console.log("Turn!!!")
  dot.turn();

  if (frameCount % 2 == 0 && frameCount != 0)
    steps++;

  if (dot.pos.x > 300) {
    noLoop();
    console.log("Done!");
  }

};
