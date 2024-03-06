nose_x=0;
nose_y=0;

function preload() {

image1=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup() {
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.size(600,500);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}

  


function modelloaded() {
    console.log("posenet is initialized heheehe");
}

function gotposes(results) {

    console.log(results);
    nose_x=results[0].pose.nose.x -15;
    nose_y=results[0].pose.nose.y +5;
    console.log("Nose X = " + nose_x)
    console.log("Nose Y = " + nose_y)

}


function draw() {
    image(video, 0,0,600,500);
    image(image1, nose_x, nose_y, 30,30);    
    }