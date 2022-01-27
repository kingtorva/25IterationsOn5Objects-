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

let r;
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

    r = random(500);

    // Pick an emoji, the "default" is train


    if (label == "Dragon") {

        // Set colors
        fill(204, 0, 0, r);
        stroke(127, 63, 120);

        //rectangle make the dragon shoot fire
        rect(r, r, 120, r);
        rect(r + 10, r + r, r, 40);

        rect(r + r, r + r, 100, r);
        fill(255, 221, 25, r);
        rect(r - 10, r + r, r, 40);
        fill(255, 215, 0, r);
        rect(r + r, r - 10, 120, r);
    } else if (label == "Lion") {

        // color(255, 221, 25);
        //rect(r, r, r, 55);

    } else if (label == "Shoe") {




    } else if (label == "Call") {




    } else if (label == "Card") {

    } else {

    }

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
