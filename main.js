noseX=0;
noseY=0;
DIFF=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969a97');
    textSize(DIFF);
    fill('blue');
    text('OKYT',noseX ,noseY );
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY)
        
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        DIFF = floor(LeftWristX - RightWristX);
        console.log("RightWristX = " + RightWristX + "LeftWristX = " + LeftWristX + "difference = " + DIFF);
    }
}