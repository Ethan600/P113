function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(430, 160)
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 50, 50, 300, 300);

    fill(0, 255, 0);
    stroke(0, 255, 0);

    rect(50, 50, 20, 300);
    rect(350, 50, 20, 300);
    rect(50, 50, 300, 20);
    rect(50, 350, 300, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle(60, 60, 70 );
    circle(360, 60, 70);
    circle(60, 360, 70);
    circle(360, 360, 70);   
}

function takeSnapshot(){
    save("Pic_with_frame.jpg")
}