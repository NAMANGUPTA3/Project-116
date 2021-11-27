noseX=0;
noseY=0;
function preload() {
   mustaches_nose = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet Is Intialize');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        nosesY = results[0].pose.nose.Y;
        console.log("nose x = " + noseX);
        console.log("noses Y = " + nosesY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustaches_nose, noseX, noseY, 30, 30);
    }
    
    function take_snapshot() {
        save('MyFilterImage.png');
    }