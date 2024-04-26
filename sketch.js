var dict;

function preload() {
  dict = loadTable("country capitals.csv", "csv");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0, 0, 255, 100);
}
