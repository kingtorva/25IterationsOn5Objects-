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
const lang = 'en-GB'
const voiceIndex = 1

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


    fill(255);
    if (label == "Dragon") {
        //https://www.chinahighlights.com/travelguide/chinese-dragon-facts.htm#:~:text=Chinese%20dragons%20control%20the%20weather,%2C%20floods%2C%20and%20harsh%20storms.
        image(img1, 0, 0, windowWidth, windowHeight);
        speak('Legend says that carp that are able to leap over the mythical Dragon Gate will become dragons.');

        text("Legend says that carp that are able to leap over the mythical Dragon Gate will become dragons.-Candice Song", width / 2, height - 100);
    } else if (label == "Lion") {

        image(img2, 0, 0, windowWidth, windowHeight);
        speak('This artifact was found in an archeology dig in the backyard');

        text("This artifact was found in an archeology dig in the backyard-John Bell", width / 2, height - 100);

        // https://superiorclogs.com/7-fun-facts-about-clogs/
    } else if (label == "Shoe") {
        image(img3, 0, 0, windowWidth, windowHeight);
        speak('During the 1970’s and early 1980’s Swedish clogs invaded the fashion scene. They were popular with both males and females. During this time, platform clogs became popular, especially with women who were into the flower-child and boho fashion looks.');

        text("During the 1970’s and early 1980’s Swedish clogs invaded the fashion scene. They were popular with both males and females. During this time, platform clogs became popular, especially with women who were into the flower-child and boho fashion looks.-Superior Swedish Clogs", width / 2, height - 100);

        //https://hellhorror.com/article/10040/amazing-cthulhu-facts-about-hp-lovecrafts-greatest-evil-cthulhu.html
    } else if (label == "Call") {
        image(img4, 0, 0, windowWidth, windowHeight);
        speak('The pray to summon Cthulhu is Ph’nglui mglw’nath Cthulhu Rl’yeh whah’nagl Bieber fhtagrl. This prayer translates as "When Cthulhu comes, he will first be known as Bieber, and his tentacles will be as bangs.');

        text("The pray to summon Cthulhu is Ph’nglui mglw’nath Cthulhu Rl’yeh whah’nagl Bieber fhtagrl’. This prayer translates as When Cthulhu comes, he will first be known as Bieber, and his tentacles will be as bangs.-hellhorror", width / 2, height - 100);

    } else if (label == "Card") {
        image(img5, 0, 0, windowWidth, windowHeight);
        speak('At one point, Bolas was the most powerful planeswalker of the Multiverse. Along with his twin Ugin, they are possibly the oldest beings alive. He was said to be old before Dominaria was even born. He sired whole races, populated entire planes, and then hunted them to extinction for his amusement.');

        text("At one point, Bolas was the most powerful planeswalker of the Multiverse. Along with his twin Ugin, they are possibly the oldest beings alive. He was said to be old before Dominaria was even born. He sired whole races, populated entire planes, and then hunted them to extinction for his amusement.-mtg.fandom", width / 2, height - 16);
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
const speak = async text => {
    if (!speechSynthesis) {
        return
    }
    const message = new SpeechSynthesisUtterance(text)
    message.voice = await chooseVoice()
    speechSynthesis.speak(message)
}

const getVoices = () => {
    return new Promise(resolve => {
        let voices = speechSynthesis.getVoices()
        if (voices.length) {
            resolve(voices)
            return
        }
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices()
            resolve(voices)
        }
    })
}

const chooseVoice = async () => {
    const voices = (await getVoices()).filter(voice => voice.lang == lang)

    return new Promise(resolve => {
        resolve(voices[voiceIndex])
    })
}
