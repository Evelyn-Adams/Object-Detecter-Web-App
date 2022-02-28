img="";
status="";

function preload(){
img=loadImage('Desk.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";

}
function draw(){
    image(img,0,0,640,420);
    fill("#ff0066");
    text("Desk",45,75);
    noFill();
    stroke("#ff0066");
    rect(40,50,500,350);
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