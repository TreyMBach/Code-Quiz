
// Variables to get elements off of the HTML index.
var startButton = document.getElementById('startButton')
var nextButton = document.getElementById('nextButton')
var questionContainerEl = document.getElementById('question-container')
var readyEl = document.getElementById('readyText')
var timeEl = document.getElementById('timerText')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

// Array of questions along with guess and whether the guess is correct or not.
var questions = [
    {
        question: 'What does HTML Stand for?',
        answers: [
            {text: 'Hyper Text Markup Language', correct: true},
            {text: 'Javascript', correct: false},
            {text: 'File Explorer', correct: false},
            {text: 'CSS', correct: false}
        ]
    },
    {
        question: 'What Does Ctrl + C do?',
        answers: [
            {text: 'Cut', correct: false},
            {text: 'Paste', correct: false},
            {text: 'Copy', correct: true},
            {text: 'Close', correct: false}
        ]
    },
    {
        question: 'What is Bootstrap good for',
        answers: [
            {text: 'To practice your classes and id selections', correct: false},
            {text: 'Make HTML more descriptive', correct: false},
            {text: 'Help you design websites faster and easier', correct: true},
            {text: 'It isnt Useful', correct: false}
        ]
    },
    {
        question: 'What is an IDE',
        answers: [
            {text: 'Integrated Development Environment', correct: true},
            {text: 'Internal Donut Eater', correct: false},
            {text: 'VS Code', correct: false},
            {text: 'Google Docs', correct: false}
        ]
    },
    {
        question: 'What does Console.log("Hello Word") Return',
        answers: [
            {text: '("Hello Word")', correct: false},
            {text: 'Console.log("Hello World)"', correct: false},
            {text: 'Hello World', correct: false},
            {text: 'Hello Word', correct: true}
        ]
    },
    {
        question: 'Is the Earth Round?',
        answers: [
            {text: 'Yes', correct: true},
            {text: 'No', correct: false},
            {text: 'Sometimes', correct: false},
            {text: 'What is Earth?', correct: false}
        ]
    },
    {
        question: 'How many heading tags are in HTML?',
        answers: [
            {text: '7', correct: false},
            {text: '5', correct: false},
            {text: '6', correct: true},
            {text: '4', correct: false}
        ]
    },

]

// create variables in order to shuffle questions and have a constant question number to keep it for random 
var shuffledQuestions, currentQuestionNumber

// Timer and Score Counter
var secondsLeft = 15;
var score = 0;

console.log(score)


// Initially had a Next Button which would end up being scrapped kept just incase I needed during debugging process.
nextButton.addEventListener('click', () =>{
    currentQuestionNumber++
    nextQuestion()
});
// Start button to start the quiz and timer.
startButton.addEventListener("click", () => {
    startQuiz();
    setTime();
});

// This would start everything included randomizing the questions into random order and displaying the first question
function startQuiz(){
    console.log('started')
    console.log(secondsLeft)
    startButton.classList.add('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionNumber = 0;
    readyEl.classList.add('hidden')
    questionContainerEl.classList.remove('hidden')
    nextQuestion()
}

// Would reset the state so it wouldnt have any color propierty from previous guess then show the next question from the randomizing index.
function nextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionNumber]);
}

// This would show the question through the question element along with making a button and giving it a data set to be a correct answer and would be made a button with answers inside.
function showQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
        
    })
}

// Would reset the status so the next question would be ready and no color from previous question.
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }

}

// Selecting the buttons and if its correct it will add a point and from each array and each button it will find if its true or not.
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct

    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionNumber + 1){
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hidden')
    }
    if (correct){
        score++;
    }

}


// Will determine if correct and will move to the next question
function setStatusClass(element, correct){
    clearStatusClass(element)

    if (correct) {
        element.classList.add('correct')
        scoreText.innerText = "Your score is: " + score;
        console.log(score)
        currentQuestionNumber++;
        nextQuestion();
    } else if (wrong) {
        element.classList.add('wrong')
    }
}

// will clear if the button had the class correct or wrong.
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function setTime() {
  // Sets interval in variable
  
  var secondsLeft = 15;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endQuiz();
    }

  }, 1000);
}

// Would try to end the quiz and show the score list along as attempt to store local.
function endQuiz(){
    startButton.classList.remove('hidden')
    answerButtonsEl.classList.add('hidden')
    questionContainerEl.classList.add('hidden')
    clearInterval(secondsLeft);
    var playerName = prompt('Please enter your name:');
    var playerList = document.createElement('li');
    playerList.innerHTML = '${playerName} Score: ${time}';
    document.getElementById('scoreList').appendChild(playerList);
    document.getElementById('startPage').style.display = 'flex';
}

  