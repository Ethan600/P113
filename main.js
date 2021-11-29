function preload(){}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();


    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function Tinter(){
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
    save("Tint color " + tint_color + ".png");
}

function draw(){
    image(video, 0 , 0, 400, 400);
    tint(tint_color);
}