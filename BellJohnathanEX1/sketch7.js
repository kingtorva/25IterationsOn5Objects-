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


    } else if (label == "Card") {
        text("Nico Boals, Dragon-God", width / 2, height - 600);
        text("Legendary Planeswalker - Bolas", width / 2, height - 500);
        text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum finibus nunc, et bibendum libero ullamcorper in.", width / 2, height - 400);
        text("tortor scelerisque a. Aliquam bibendum, dui ut fermentum eleifend, ligula dui pretium mi,", width / 2, height - 300);
        text("itae lorem volutpat bibendum. In magna lectus, iaculis in dictum non", width / 2, height - 200);
        text("1 island 3 swamp 1 mountin                  4 loalty", width / 2, height - 100);

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
