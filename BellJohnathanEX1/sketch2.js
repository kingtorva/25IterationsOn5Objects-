// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v
let playing = false;
// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/iMU1x1k4Y/';
let song;
let song2;
let shuffle = 0;
let shuffle2 = 0;
// STEP 1: Load the model!
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {

    song = loadSound('music/bensound-epic.mp3');
    song2 = loadSound('music/bensound-sunny.mp3');
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
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 50);

    // Pick an emoji, the "default" is train
    let emoji = "😊";

    if (label == "Dragon") {

        shuffle++;
        emoji = "🐉";
        shuffle2 = 0;
    } else if (label == "Lion") {
        emoji = "🦁";

        shuffle = 0;
        shuffle2 = 0;
    } else if (label == "Shoe") {
        emoji = "👟";

        shuffle = 0;
        shuffle2++;
    } else if (label == "Call") {
        emoji = "☎️";

        shuffle = 0;
        shuffle2 = 0;
    } else if (label == "Card") {
        emoji = "🃏";

        shuffle = 0;
        shuffle2 = 0;
    }

    //song playlist
    if (shuffle == 1) {
        song.play();
    } else {
        song.stop();

    }
    if (shuffle2 == 1) {
        song2.play();
    } else {
        song2.stop();

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
