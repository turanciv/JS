let timerBtn = document.getElementById("timerBtn");
let alarm = new Audio("/Assets/sound's/alarm.mp3");
let timer_started = false;

function startTimer(){
    if(!timer_started){
        let startTime = new Date().getTime(); // aktuelle Zeit in milisekunden
        let five = 1000 * 60 * 5; //5 min. in milisekunden
        let end = startTime + five;
        
        setInterval(function() {
            let timeLeft = end - new Date().getTime();
            if(timeLeft > 0){
                let min = timeLeft / (1000 * 60);
                min = Math.floor(min);
                let sec = (timeLeft / 1000) % 60;
                sec = Math.round(sec);
                sec = ('0' + sec).slice(-2);
                let text = '0' + min + ' : ' + sec;
                let timer = document.getElementById("timer");
                timer.innerHTML = text;
            }else{
                alarm.play();
                window
                timer.innerHTML = '00 : 00'
                let info = document.createElement("p");
                info.style.fontSize = "60px";
                info.innerText = "READY!!";
            }
        }, 1000)
        timer_started = true;
    }
}

