// Global varriables
var currentScore = 0;
var time = 60;
var timer = null;

// Created Functions

// Functions for high score list
function scoreButton() {
    document.getElementById(`highScores`).style.display = `flex`;
};
function scoreHide() {
    document.getElementById(`highScores`).style.display = `none`;
};

// Functions for timer
function timeStart() {
    time = 60;
    timer = setInterval(function(){
        document.getElementById(`timer`).innerHTML = `Seconds remaining: ${time}`;
        time--;
        if (time < .5) {
            timesUp();
        }
    }, 1000);
};
function timesUp() {
    time = 0;
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    end();
}
// Functions for score
function startScore() {
    document.getElementById(`playerScore`).innerHTML = `Your Score: ${currentScore}`;
};

// Functions for questionuestion display
function startquestionuestion() {
    document.getElementById(`startContain`).style.display = `none`;
    document.getElementById(`questionuestion1`).style.display = `flex`;
    currentScore = 0;
};
function question2() {
    document.getElementById(`question1`).style.display = `none`;
    document.getElementById(`question2`).style.display = `flex`;
};
function question3() {
    document.getElementById(`question2`).style.display = `none`;
    document.getElementById(`question3`).style.display = `flex`;
};
function question4() {
    document.getElementById(`question3`).style.display = `none`;
    document.getElementById(`question4`).style.display = `flex`;
};
function question5() {
    document.getElementById(`question4`).style.display = `none`;
    document.getElementById(`question5`).style.display = `flex`;
};
function question6() {
    document.getElementById(`question5`).style.display = `none`;
    document.getElementById(`question6`).style.display = `flex`;
};
function question7() {
    document.getElementById(`question6`).style.display = `none`;
    document.getElementById(`question7`).style.display = `flex`;
};
function question8() {
    document.getElementById(`question7`).style.display = `none`;
    document.getElementById(`question8`).style.display = `flex`;
};
function question9() {
    document.getElementById(`question8`).style.display = `none`;
    document.getElementById(`question9`).style.display = `flex`;
};
function question10() {
    document.getElementById(`question9`).style.display = `none`;
    document.getElementById(`question10`).style.display = `flex`;
};
// Function for start of evaluation
function start() {
    timeStart();
    startquestionuestion();
    startScore();
}

// Functions for correct responses
function correct() {
    currentScore += 5;
    startScore();
    document.getElementById(`correctAlert`).style.display = `flex`;
    document.getElementById(`incorrectAlert`).style.display = `none`;
};
function question2C() {
    question2();
    correct();
};
function question3C() {
    question3();
    correct();
};
function question4C() {
    question4();
    correct();
};
function question5C() {
    question5();
    correct();
};
function question6C() {
    question6();
    correct();
};
function question7C() {
    question7();
    correct();
};
function question8C() {
    question8();
    correct();
};
function question9C() {
    question9();
    correct();
};
function question10C() {
    question10();
    correct();
};
function endC() {
    correct();
    end();
};

// Functions for incorrect responses
function incorrect() {
    time -= 10;
    if (time < 0) {
        time = 0;
    };
    document.getElementById(`incorrectAlert`).style.display = `flex`;
    document.getElementById(`correctAlert`).style.display = `none`;
};
function question2I() {
    question2();
    incorrect();
};
function question3I() {
    question3();
    incorrect();
};
function question4I() {
    question4();
    incorrect();
};
function question5I() {
    question5();
    incorrect();
};
function question6I() {
    question6();
    incorrect();
};
function question7I() {
    question7();
    incorrect();
};
function question8I() {
    question8();
    incorrect();
};
function question9I() {
    question9();
    incorrect();
};
function question10I() {
    question10();
    incorrect();
};
function endI() {
    incorrect();
    end();
};

// Function for ending evaluation and recording name and score
function end() {
    document.getElementById(`correctAlert`).style.display = `none`;
    document.getElementById(`incorrectAlert`).style.display = `none`;
    clearInterval(timer);
    currentScore += time;
    var name = prompt(`Please enter your name:`);
    var list = document.createElement(`li`);
    list.innerHTML = `${name} - ${currentScore}`;
    document.getElementById(`playerList`).appendChild(list);
    document.getElementById(`question10`).style.display = `none`;
    document.getElementById(`startContain`).style.display = `flex`;
    scoreButton();
    startScore();
    document.getElementById(`timer`).innerHTML = `Seconds remaining: ${time}`;
};


// Declared Functions
// Functions for score list
document.getElementById(`scoreButton`).onclick = scoreButton;
document.getElementById(`scoreHide`).onclick = scoreHide;

// Function to start evaluation
document.getElementById(`startButton`).onclick = start;

// Functions for each questionuestion and response
// questionuestion 1
document.getElementById(`correct1`).onclick = question2C;
document.getElementById(`wrong11`).onclick = question2I;
document.getElementById(`wrong12`).onclick = question2I;
document.getElementById(`wrong13`).onclick = question2I;

// questionuestion 2
document.getElementById(`correct2`).onclick = question3C;
document.getElementById(`wrong21`).onclick = question3I;
document.getElementById(`wrong22`).onclick = question3I;
document.getElementById(`wrong23`).onclick = question3I;

// questionuestion 3
document.getElementById(`correct3`).onclick = question4C;
document.getElementById(`wrong31`).onclick = question4I;
document.getElementById(`wrong32`).onclick = question4I;
document.getElementById(`wrong33`).onclick = question4I;

// questionuestion 4
document.getElementById(`correct4`).onclick = question5C;
document.getElementById(`wrong41`).onclick = question5I;
document.getElementById(`wrong42`).onclick = question5I;
document.getElementById(`wrong43`).onclick = question5I;

// questionuestion 5
document.getElementById(`correct5`).onclick = question6C;
document.getElementById(`wrong51`).onclick = question6I;
document.getElementById(`wrong52`).onclick = question6I;
document.getElementById(`wrong53`).onclick = question6I;

// questionuestion 6
document.getElementById(`correct6`).onclick = question7C;
document.getElementById(`wrong61`).onclick = question7I;
document.getElementById(`wrong62`).onclick = question7I;
document.getElementById(`wrong63`).onclick = question7I;

// questionuestion 7
document.getElementById(`correct7`).onclick = question8C;
document.getElementById(`wrong71`).onclick = question8I;
document.getElementById(`wrong72`).onclick = question8I;
document.getElementById(`wrong73`).onclick = question8I;

// questionuestion 8
document.getElementById(`correct8`).onclick = question9C;
document.getElementById(`wrong81`).onclick = question9I;
document.getElementById(`wrong82`).onclick = question9I;
document.getElementById(`wrong83`).onclick = question9I;

// questionuestion 9
document.getElementById(`correct9`).onclick = question10C;
document.getElementById(`wrong91`).onclick = question10I;
document.getElementById(`wrong92`).onclick = question10I;
document.getElementById(`wrong93`).onclick = question10I;

// questionuestion 10
document.getElementById(`correct10`).onclick = endC;
document.getElementById(`wrong101`).onclick = endI;
document.getElementById(`wrong102`).onclick = endI;
document.getElementById(`wrong103`).onclick = endI;