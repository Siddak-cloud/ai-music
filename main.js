song_1 = "";
song_2 = "";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;

function preload() {
    song_1 = loadSound("1.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500 , 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized!");
}

function gotPoses() {
    if (result.length > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video , 0 , 0 , 500 , 400);
}