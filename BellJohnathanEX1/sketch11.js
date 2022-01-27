// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/iMU1x1k4Y/';
var x, y;
var dx, dy;
let r, g, b;
// STEP 1: Load the model!
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create the video
    video = createCapture(VIDEO);
    video.hide();
    // STEP 2: Start classifying
    classifyVideo();
    fill(0, 0, 0, 255);
    noStroke();
    x = width / 2;
    y = height / 2;
    dx = 0;
    dy = 0;

}

// STEP 2 classify the videeo!
function classifyVideo() {
    classifier.classify(video, gotResults);
}

function draw() {
    background(0);

    // Draw the video
    image(video, 0, 0, windowWidth, windowHeight);

    // STEP 4: Draw the label
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 16);
    fill(r, g, b);
    ellipse(x, y, 50, 50);
    x += dx;
    y += dy;
    if (x < 0) x = width;
    if (y < 0) y = height;
    if (x > width) x = 0;
    if (y > height) y = 0;

    if (label == "Dragon") {
        r = 255;
        g = 0;
        b = 0;

        dx = 1;
        dy = 0;
    } else if (label == "Lion") {
        r = 221;
        g = 181;
        b = 21;

        dx = 0;
        dy = -1;
    } else if (label == "Call") {
        r = 0;
        g = 0;
        b = 255;
        dx = -1;
        dy = 0;
    } else if (label == "Shoe") {
        r = 255;
        g = 255;
        b = 0;

    } else if (label == "Card") {
        r = 255;
        g = 0;
        b = 255;

        dx = 0;
        dy = 1;

    }
    fill(255);
    text("draw: up:Dragon, down: Lion,", 250, 20);
    text("left:Cthulhu, right: Card", 250, 60);

}

// STEP 3: Get the classification!
function gotResults(error, results) {
    // Something went wrong!
    if (error) {
        console.error(error);
        return;
    }
    // Store the label and classify again!
    label = results[0].label;
    classifyVideo();
}
