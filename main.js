function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    
    canvas = createCanvas(550,550);
    canvas.position(560,130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is initialized!');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y; 
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX" + rightWristX + "difference =" + difference);
    }
}

function draw() {
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
   textSize(difference);
    text("nand",50,400);
}

noseX = 0;
noseY = 0; 
difference = 0;
rightWristX = 0;
rightWristY = 0;