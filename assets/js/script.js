

var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timerText");

var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function(){

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!"

        if(secondsLeft === 0){
            clearInterval(timerInterval);

            // sendMessage();
        }

    }, 1000);
};


startButton.addEventListener("click", function(){
    setTime();

    if(secondsLeft <= 30){
        startButton.disabled = true;
    }

    if(secondsLeft == 0){
        startButton.disabled = false;
    }

    console.log("Time has been set:");
});
