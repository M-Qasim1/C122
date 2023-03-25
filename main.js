x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "system is listening please speak.";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized  as: "+content;



    if(content=="apple"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "started drawing rectangle.";
        draw_rect = "set";
    }

}

function setup(){
    canvas = createCanvas(900,600);
}


    if(draw_apple=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rect = "";
    }
