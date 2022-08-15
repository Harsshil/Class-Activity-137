video = "";
status = "";
object1 = [];
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(500,280);
}
function draw(){
    image(video, 0, 0, 500, 500);
    if(status != ""){
        object.detect(video, gotResults);
        for(i = 0; i <object1.length; i++){
            document.getElementById("Statusbtn").innerHTML = "Status : Objects Detected";
            document.getElementById("Counter").innerHTML = "Number of Objects Detected : " + object1.length;
            stroke("red");
            noFill();
            rect(object1[i].x, object1[i].y, object1[i].width, object1[i].height);
            calculation = Math.floor(object1[i].confidence*100);
            text(object1[i].label+" "+calculation+"%", object1[i].x, object1[i].y);
        }
    }
}
function modeLoaded(){
    console.log("ModelLoaded!");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function BtnStart(){
    object = ml5.objectDetector("cocossd", modeLoaded);
    document.getElementById("Statusbtn").innerHTML = "Status : Detecting Objects";
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        object1 = results;
}