left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500);
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("grey");
    document.getElementById("text_size").innerHTML = "Size of the text is = "+ difference +"px";
    fill("white");
    text("Rianna", 250, 250, difference);
    textSize(difference);

}

function modelLoaded(){
    console.log('PoseNet Is Intialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        right_wrist_x = reslts[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left_wrist_x = "+ left_wrist_x +" right_wrist_x =" + right_wrist_x +" difference = "+ difference);
    }
    }
