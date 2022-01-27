// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
let img;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/iMU1x1k4Y/';

// STEP 1: Load the model!
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
    img = loadImage('img/Desktop.png');
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


    // Pick an emoji, the "default" is train
    let emoji = "🔒";
    text("Locked", width / 2, height - 16);
    fill(0);
    rect(0, height - 40, windowWidth, 50);



    if (label == "Dragon") {

    } else if (label == "Lion") {
        emoji = "🔓";
        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Unlocked", width / 2, height - 16);
        image(img, 0, 0, windowWidth, windowHeight);

    } else if (label == "Shoe") {

    } else if (label == "Call") {

    } else if (label == "Card") {

    }

    // Draw the emoji
    textSize(100);
    text(emoji, width / 2, height / 5);
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
