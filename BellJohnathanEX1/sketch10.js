//Grab body part x,y locations from Posenet, put into an array, call a function to draw those points, to make trails   


let video;
let pose;
let label = "waiting...";
//let img1;
//let img2;
let skeleton;
let angle = 0;
let history = [];
let r = 100;
let g = 200;
let b = 50;
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/iMU1x1k4Y/';
// STEP 1: Load the model!
function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');

}

function setup() {
    //b = new Ball();
    /////////////////////////////////send to pnet 

    frameRate(10);
    createCanvas(windowWidth, windowHeight);
    noStroke();
    video = createCapture(VIDEO);
    //    video.size(width, height);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    //img1 = loadImage('images/hand2.svg');
    //img2 = loadImage('images/face.svg');    
    video.hide();
    classifyVideo();
    /////////////////////////////////


    rectMode(CENTER);
    angleMode(DEGREES);


}
// STEP 2 classify the videeo!
function classifyVideo() {
    classifier.classify(video, gotResults);
}
////////////////////////////////////////////

function modelLoaded() {
    console.log("modelLoaded function has been called so this work!!!!");
};



function gotPoses(poses) {
    //console.log(poses);
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }

}



function draw() {

    image(video, 0, 0, windowWidth, windowHeight);
    //set colour

    if (label == "Dragon") {
        r = 255;
        g = 0;
        b = 0;


    } else if (label == "Lion") {
        r = 221;
        g = 181;
        b = 21;


    } else if (label == "Call") {
        r = 0;
        g = 0;
        b = 255;

    } else if (label == "Shoe") {
        r = 255;
        g = 255;
        b = 0;

    } else if (label == "Card") {
        r = 255;
        g = 0;
        b = 255;



    }
    ////////////////////////////////////////////////

    //TRESHOLD 0 is white - 1 is black
    filter(THRESHOLD, 1);


    if (pose) {
        //noStroke();
        fill(255, 255, 255, 50);
        stroke(255, 255, 255);




        let d = dist(pose.leftEye.x, pose.leftEye.y, pose.rightEye.x, pose.rightEye.y);

        ellipse(pose.nose.x, pose.nose.y, d * 3);

        let v = createVector(pose.nose.x, pose.nose.y);

        history.push(v);
        //console.log("history.length " + history.length);
        let head = history[history.length - 1].copy();
        history.push(head);
        //console.log("head " + );
        //head.x += pose.nose.x;
        //head.y += pose.nose.y;
        history.shift();

        for (let i = 0; i < history.length - 1; i++) {
            //console.log("history[i].y " + history[i].y);
            //ellipse(history[i].x, history[i].y, d*3);
            //console.log("i");

            drawHeadSpace(history[i].x, history[i].y);

        }



        //image(img2,pose.nose.x, pose.nose.y, -150,-150 );    

        //image(img1, ((pose.leftWrist.x)-50),pose.leftWrist.y , 150, 150);

        //rectangles on hands
        stroke(255, 255, 255);
        rect(pose.leftWrist.x, pose.leftWrist.y, 50, 50);

        rect(pose.rightWrist.x, pose.rightWrist.y, 50, 50);

        let v2 = createVector(pose.leftWrist.x, pose.leftWrist.y);

        history.push(v2);
        //console.log("history.length " + history.length);
        let Rhand = history[history.length - 1].copy();
        history.push(Rhand);
        //console.log("head " + );
        //head.x += pose.nose.x;
        //head.y += pose.nose.y;
        history.shift();

        for (let i = 0; i < history.length - 1; i++) {
            //console.log("history[i].y " + history[i].y);
            //ellipse(history[i].x, history[i].y, d*3);
            //console.log("i");

            drawRhandSpace(history[i].x, history[i].y);

        }
        let v3 = createVector(pose.rightWrist.x, pose.rightWrist.y);

        history.push(v3);
        //console.log("history.length " + history.length);
        let Lhand = history[history.length - 1].copy();
        history.push(Lhand);
        //console.log("head " + );
        //head.x += pose.nose.x;
        //head.y += pose.nose.y;
        history.shift();

        for (let i = 0; i < history.length - 1; i++) {
            //console.log("history[i].y " + history[i].y);
            //ellipse(history[i].x, history[i].y, d*3);
            //console.log("i");

            drawLhandSpace(history[i].x, history[i].y);

        }
        //////////////////////////////////////////////////////////////    
        for (let i = 0; i < pose.keypoints.length; i++) {
            //for(let i=0; i < 5;i++){
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;

            //push();
            //console.log("keypoints");
            //translate(x,y);    
            //rotate(angle);   
            //fill(0,255,0);
            //rect(x,y,25,25);
            //angle+=0.01;  

            //pop();
            //ellipse(x,y,120,120);
            //box(x,y,50);  

            for (let i = 0; i < skeleton.length; i++) {

                let a = skeleton[i][0];
                let b = skeleton[i][1];
                strokeWeight(5);
                stroke(255);
                line(a.position.x, a.position.y, b.position.x, b.position.y);
                fill(127);
                //rect((a.position.x)/2, (a.position.y)/2,(b.position.x)/2, (b.position.y)/2 );
                //rect(a.position.x,b.position.y,10,10);
            }
        }
    }


}
//head
function drawHeadSpace(x, y) {

    fill(r, g, b, 50);
    noStroke();
    ellipse(x, y, 100);
    //console.log("drawHeadSpace " + x);

}
//right hand
function drawRhandSpace(x, y) {
    fill(b, g, r, 50);
    noStroke();
    rect(x, y, 50, 50);
    //console.log("drawHeadSpace " + x);
}
//left hand
function drawLhandSpace(x, y) {
    fill(g, r, b, 50);
    noStroke();
    rect(x, y, 50, 50);
    //console.log("drawHeadSpace " + x);
}
/////////////////////////////////////////////////////////////
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
