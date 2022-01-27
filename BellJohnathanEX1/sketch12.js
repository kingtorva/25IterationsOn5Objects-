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

    //https://www.thebulwark.com/the-dragon-rises/
    img1 = loadImage('img/china.png');

    //https://articles.starcitygames.com/premium/whats-the-best-bolass-citadel-deck-in-historic/
    img2 = loadImage('img/BolisCid.png');

    //https://www.insider.com/the-netherlands-holland-difference-official-name-2020-1
    img3 = loadImage('img/Holland.png');

    //https://en.frenchpaperartclub.com/collections/lovecraft
    img4 = loadImage('img/Relaya.png');

    //https://rabbidunner.com/finding-your-buried-treasure/
    img5 = loadImage('img/tesure.png');
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
    // text("Locked", width / 2, height - 16);
    fill(0);
    rect(0, height - 40, windowWidth, 50);



    if (label == "Dragon") {

        image(img1, 0, 0, windowWidth, windowHeight);
    } else if (label == "Lion") {

        image(img2, 0, 0, windowWidth, windowHeight);

    } else if (label == "Shoe") {
        image(img3, 0, 0, windowWidth, windowHeight);
    } else if (label == "Call") {
        image(img4, 0, 0, windowWidth, windowHeight);
    } else if (label == "Card") {
        image(img5, 0, 0, windowWidth, windowHeight);
    }

    // Draw the emoji
    textSize(100);
    //text(emoji, width / 2, height / 5);
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
