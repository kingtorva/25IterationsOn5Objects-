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

// STEP 2 classify the video!
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


    r = random(500);

    // Pick an emoji, the "default" is train


    if (label == "Dragon") {


    } else if (label == "Lion") {

        // color(255, 221, 25);
        //rect(r, r, r, 55);

    } else if (label == "Shoe") {




    } else if (label == "Call") {
        tint(99, 209, 62, 90);
        // Set colors
        fill(99, 209, 62, 50);
        noStroke();

        //rectangle make the dragon shoot fire
        rect(-1, r, 5011, 40);
        rect(-1, r * 2, 5011, 40);
        rect(-1, r + 5, 5011, 40);
        rect(-1, r + r, 5011, 40);

        text("e/1rr010//e-10101r10-101/-", width / 2, height - 16);
    } else if (label == "Card") {

    } else {
        noTint();
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
