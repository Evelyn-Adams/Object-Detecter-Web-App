img="";
status="";

function preload(){
img=loadImage('Tv&Ac.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function draw(){
    image(img,0,0,640,420);
    fill("#FFFFFF");
    text("AC",250,20);
    noFill();
    stroke("#ff0066");
    rect(240,5,300,150);

        fill("#ff0066");
        text("TV",240,200);
        noFill();
        stroke("#ff0066");
    rect(240,180,300,150);
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error();
    }
console.log(results);

}
