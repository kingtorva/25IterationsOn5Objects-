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
let buttD, buttC, buttB, buttS, buttL;


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


    // Pick an emoji, the "default" is train
    //let emoji = "🔒";
    //    text("Locked", width / 2, height - 16);
    fill(0);
    rect(0, height - 40, windowWidth, 50);



    if (label == "Dragon") {

        buttD = createButton('Lock in');
        buttD.position(0, 0);
        buttD.mousePressed(Dragon);

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Lock in Dragon", width / 2, height - 16);

    } else if (label == "Lion") {

        buttL = createButton('Lock in');
        buttL.position(0, 0);
        buttL.mousePressed(Lion);

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Lock in Lion", width / 2, height - 16);

    } else if (label == "Shoe") {

        buttS = createButton('Lock in');
        buttS.position(0, 0);
        buttS.mousePressed(Shoe);

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Lock in Clog", width / 2, height - 16);

    } else if (label == "Call") {

        buttC = createButton('Lock in');
        buttC.position(0, 0);
        buttC.mousePressed(Call);

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Lock in Cthulhu", width / 2, height - 16);

    } else if (label == "Card") {

        buttB = createButton('Lock in');
        buttB.position(0, 0);
        buttB.mousePressed(Bolis);
        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Lock in Bolis", width / 2, height - 16);
    }

    // Draw the emoji

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

function Dragon() {

}

function Lion() {

}

function Shoe() {

}

function Call() {

}

function Bolis() {
    let emoji = "😊";
    let ran;

    ran = random(5);

    if (ran == 1) {
        emoji = "🐉";
        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("win", width / 2, height - 16);

    } else if (ran == 2) {
        emoji = "🦁";
        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("loss", width / 2, height - 16);

    } else if (ran == 3) {
        emoji = "👟";

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Win", width / 2, height - 16);
    } else if (ran == 4) {
        emoji = "☎️";

        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("loss", width / 2, height - 16);
    } else if (ran == 5) {
        emoji = "🃏";
        fill(0);
        rect(0, height - 40, windowWidth, 50);
        fill(255);
        text("Draw", width / 2, height - 16);
    }

    textSize(100);
    text(emoji, width / 2, height / 5);





}
