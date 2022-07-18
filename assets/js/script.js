

var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector("#timerText");
var questionEl = document.querySelector("#questionText");
var answerButtons = document.querySelector(".answerList")


var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")




var secondsLeft = 5;

var questionList = [
    {
        question: "Test 1",

        answers: {
            a: 'false', isCorrect: false,
 
            b: 'true', isCorrect: true, 

            c: 'false', isCorrect: false, 

            d: 'false', isCorrect: false,

        },

        correctAnswer: 'b'
    },
    {
        question: "Test 2",

        answers: {
            a: 'false', isCorrect: false, 

            b: 'false', isCorrect: false,

            c: 'true', isCorrect: true, 

            d: 'false', isCorrect: false

        },

        correctAnswer: 'c'
    },
    {
        question: "Test 3",

        answers: {
            a: 'false', isCorrect: false,

            b: 'false', isCorrect: false,

            c: 'false', isCorrect: false, 

            d: 'true', isCorrect: true

        },

        correctAnswer: 'd'
    },
    {
        question: "Test 4",

        answers: {

            a: 'true', isCorrect: true,

            b: 'false', isCorrect: false,

            c: 'false', isCorrect: false,

            d: 'false', isCorrect: false

        },

        correctAnswer: 'a'
    },
    {
        question: "Test 5",

        answers: {
            a: 'false', isCorrect: false,

            b: 'true', isCorrect: true,

            c: 'false', isCorrect: false,

            d: 'false', isCorrect: false

        },

        correctAnswer: 'b'
    },
]

var correctAnswer = questionList.correctAnswer;

function setTime() {
    var timerInterval = setInterval(function(){

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!"

        if(secondsLeft === 0){
            
            clearInterval(timerInterval);

            document.getElementById("timerText").innerHTML = "Time is UP!";

            console.log("time is up")

        }

    }, 1000);
};


startButton.addEventListener("click", function(){

    setTime();
    randomQuestion();

    if(secondsLeft >= 1){

        startButton.disabled = true;

    }

    console.log("Time has been set:");

});

function randomQuestion(){

    var questionEl = document.querySelector("#questionText");

    var question = questionList[Math.floor(Math.random() * questionList.length)];

    questionEl.textContent = question.question;

    console.log(question.answers);

    console.log(question);

    answer1.innerHTML = question.answers.a;

    answer2.innerHTML = question.answers.b;

    answer3.innerHTML = question.answers.c;

    answer4.innerHTML = question.answers.d;


}

answerButtons.addEventListener("click", function(){

    console.log("clicked.");

    var correctAnswer = questionList.correctAnswer;
    

    var answers = questionList.answers;

    if (answers.isCorrect) {
        console.log("correct");
    }


});


