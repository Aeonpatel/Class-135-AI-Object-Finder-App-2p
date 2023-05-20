Status="";
input_text="";

function setup(){
    canvas=createCanvas(300,290);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}

function start(){
    object_detector=ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("Name_object").innerHTML="Status : Detecting Objects"
    text=document.getElementById("Name_object").ariaValueMax;
}

function model_loaded(){
    console.log("model loaded");
    status=true;
}

function draw(){
    img(video,0,0,300,290);
}