# Code Quiz
 
User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers



Acceptance Criteria

GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question

WHEN I answer a question

THEN I am presented with another question

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and my score





var guess1 = document.getElementById("guess1");
var guess2 = document.getElementById("guess2");
var guess3 = document.getElementById("guess3");
var guess4 = document.getElementById("guess4");


// Variables to get elements off of the HTML index.
var startButton = document.getElementById('startButton')
var nextButton = document.getElementById('nextButton')
var questionContainerEl = document.getElementById('question-container')
var readyEl = document.getElementById('readyText')
var timeEl = document.getElementById('timerText')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')
var scoreText = document.getElementById('scoreText')
var highScoresEl = document.getElementById('highscore-btn')

// create variables in order to shuffle questions and have a constant question number to keep it for random 
var shuffledQuestions, currentQuestionNumber

// Timer and Score Counter
var secondsLeft = 15;
var score = 0;

console.log(score)

// Array for the question answer and which one would be correct true or false
var questions = [
    {
        question: 'What does HTML Stand for?',
        answers: [
            {answer1: 'Hyper Text Markup Language', correct: true},
            {answer2: 'Javascript', correct: false},
            {answer3: 'File Explorer', correct: false},
            {answer4: 'CSS', correct: false}
        ],
        correct: 'Hyper Text Markup Language'
    },
    {
        question: 'What Does Ctrl + C do?',
        answers: [
            {answer1: 'Cut', correct: false},
            {answer2: 'Paste', correct: false},
            {answer3: 'Copy', correct: true},
            {answer4: 'Close', correct: false}
        ],
        correct: 'Copy'
    },
    {
        question: 'What is Bootstrap good for',
        answers: [
            {answer1: 'To practice your classes and id selections', correct: false},
            {answer2: 'Make HTML more descriptive', correct: false},
            {answer3: 'Help you design websites faster and easier', correct: true},
            {answer4: 'It isnt Useful', correct: false}
        ],
        correct: 'Help you design websites faster and easier'
    },
    {
        question: 'What is an IDE',
        answers: [
            {answer1: 'Integrated Development Environment', correct: true},
            {answer2: 'Internal Donut Eater', correct: false},
            {answer3: 'VS Code', correct: false},
            {answer4: 'Google Docs', correct: false}
        ],
        correct: 'Integrated Development Environment'
    },
    {
        question: 'What does Console.log("Hello Word") Return',
        answers: [
            {answer1: '("Hello Word")', correct: false},
            {answer2: 'Console.log("Hello World)"', correct: false},
            {answer3: 'Hello World', correct: false},
            {answer4: 'Hello Word', correct: true}
        ],
        correct: 'Hello Word'
    },
    {
        question: 'Is the Earth Round?',
        answers: [
            {answer1: 'Yes', correct: true},
            {answer2: 'No', correct: false},
            {answer3: 'Sometimes', correct: false},
            {answer4: 'What is Earth?', correct: false}
        ],
        correct: 'Yes'
    },
    {
        question: 'How many heading tags are in HTML?',
        answers: [
            {answer1: '7', correct: false},
            {answer2: '5', correct: false},
            {answer3: '6', correct: true},
            {answer4: '4', correct: false}
        ],
        correct: '6'
    },

]


// When button start quiz is selected, it will start the timer, and call startQuiz function
startButton.addEventListener("click", function () {
    setTime();
    startQuiz();
  });
  
  function setTime() {
    var timer = setInterval(() => {
      secondsLeft--;
      timeEl.textContent = `${secondsLeft} seconds remaining`;
      if (secondsLeft == 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  
  function startQuiz() {
    // when the start quiz button is clicked, all of the original content on the page is being hidden
    questionContainerEl.classList.add("hidden");
    highScoresEl.classList.add("hidden");
    scoreText.classList.remove("hidden");
    scoreText.innerHTML = "Current Score: 0";
  
  
    question1();
  }


  
  // This function is called after clicking on the next question button
  function question1() {
    // This is displaying the first question from the questions array of objects
    questionEl.innerText = questions[0].question;
    // below, all of my guess buttons are getting their hidden class removed
    answerButtonsEl.classList.remove("hidden");
    guess1.classList.remove("hidden");
    guess2.classList.remove("hidden");
    guess3.classList.remove("hidden");
    guess4.classList.remove("hidden");
  
    // all of my guess buttons are being filled with answers from the questions array
    guess1.innerText = questions[0].answers[0];
    guess2.innerText = questions[0].answers[1];
    guess3.innerText = questions[0].answers[2];
    guess4.innerText = questions[0].answers[3];
    // this is calling the validateAnswer function, and passing in the answer as a parameter
    validateQ1();
  }
  
  guessArr = [guess1, guess2, guess3, guess4];
  
  function validateQ1() {
    for (let i = 0; i < guessArr.length; i++) {
      guessArr[i].addEventListener("click", function (e) {
        // if the innerText of the clicked button (target) matches the answer, this will run as true 
        if (e.target.innerText === questions[0].answer) {
          correctFeedback();
          score++;
          scoreEl.textContent = "Current Score: " + score;
          question2();
        } else {
          timeLeft -= 10;
          incorrectFeedback();
        }
      })
    }
  }
  
  function question2() {
    questionEl.innerText = questions[1].question;
    guess1.innerText = questions[1].answers[0];
    guess2.innerText = questions[1].answers[1];
    guess3.innerText = questions[1].answers[2];
    guess4.innerText = questions[1].answers[3];
  
    validateQ2();
  }
  
  function validateQ2() {
    for (let i = 0; i < guessArr.length; i++) {
      guessArr[i].addEventListener("click", function (e) {
        // if the innerText of the clicked button (target) matches the answer, this will run as true 
        if (e.target.innerText === questions[1].answer) {
          correctFeedback();
          score++;
          scoreEl.textContent = "Current Score: " + score;
          question3();
        } else {
          timeLeft -= 10;
          incorrectFeedback();
        }
      })
    }
  }
  
  function question3() {
    questionEl.innerText = questions[2].question;
    guess1.innerText = questions[2].answers[0];
    guess2.innerText = questions[2].answers[1];
    guess3.innerText = questions[2].answers[2];
    guess4.innerText = questions[2].answers[3];
    validateQ3();
  }
  
  function validateQ3() {
    for (let i = 0; i < guessArr.length; i++) {
      guessArr[i].addEventListener("click", function (e) {
        // if the innerText of the clicked button (target) matches the answer, this will run as true 
        if (e.target.innerText === questions[2].answer) {
          correctFeedback();
          score++;
          scoreEl.textContent = "Current Score: " + score;
          question4();
        } else {
          timeLeft -= 10;
          incorrectFeedback();
        }
      })
    }
  }
  
  function question4() {
    questionEl.innerText = questions[3].question;
    guess1.innerText = questions[3].answers[0];
    guess2.innerText = questions[3].answers[1];
    guess3.innerText = questions[3].answers[2];
    guess4.innerText = questions[3].answers[3];
    validateQ4();
  }
  
  function validateQ4() {
    for (let i = 0; i < guessArr.length; i++) {
      guessArr[i].addEventListener("click", function (e) {
        // if the innerText of the clicked button (target) matches the answer, this will run as true 
        if (e.target.innerText === questions[3].answer) {
          correctFeedback();
          score++;
          scoreEl.textContent = "Current Score: " + score;
          question5();
        } else {
          timeLeft -= 10;
          incorrectFeedback();
        }
      })
    }
  }
  
  function question5() {
    questionEl.innerText = questions[4].question;
    guess1.innerText = questions[4].answers[0];
    guess2.innerText = questions[4].answers[1];
    guess3.innerText = questions[4].answers[2];
    guess4.innerText = questions[4].answers[3];
    validateQ5();
  }
  
  function validateQ5() {
    for (let i = 0; i < guessArr.length; i++) {
      guessArr[i].addEventListener("click", function (e) {
        // if the innerText of the clicked button (target) matches the answer, this will run as true 
        if (e.target.innerText === questions[4].answer) {
          correctFeedback();
          score++;
          scoreEl.textContent = "Current Score: " + score;
          endGame();
        } else {
          timeLeft -= 10;
          incorrectFeedback();
        }
      })
    }
  }
  
  function correctFeedback() {
    var correctMessage = "You answered the last question correct! +1 point.";
    feedbackEl.innerText = correctMessage;
  }
  
  function incorrectFeedback() {
    var incorrectMessage = "Incorrect! Removing 10 seconds.";
    feedbackEl.innerText = incorrectMessage;
  }
  
  function endGame(){
  
  }