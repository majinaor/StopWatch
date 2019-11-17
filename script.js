let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

function stopWatch(){

    milliseconds++;

    if (milliseconds === 99) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minutes === 60){
        minutes = 0;
        hours++;
    }

    displaySeconds = seconds.toString().length === 1 ? "0" + seconds.toString() : seconds.toString();
    displayMinutes = minutes.toString().length === 1 ? "0" + minutes.toString() : minutes.toString();
    displayHours = hours.toString().length === 1 ? "0" + hours.toString() : hours.toString();

    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + milliseconds;
}

function startStop(){

if(status === "stopped"){

    interval = window.setInterval(stopWatch, 10);

    document.getElementById("startStop").innerHTML = "Stop";
status = "started";
}
else{

window.clearInterval(interval);
document.getElementById("startStop").innerHTML = "Start";
status = "stopped";

}

}

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";



}

