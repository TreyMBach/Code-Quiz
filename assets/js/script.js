var startButton = document.getElementById('startButton')
var nextButton = document.getElementById('nextButton')
var questionContainerEl = document.getElementById('question-container')
var readyEl = document.getElementById('readyText')
var timeEl = document.getElementById('timerText')
var questionEl = document.getElementById('question')
var answerButtonsEl = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionNumber

var secondsLeft = 15;
var score = 0;
console.log(score)

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



nextButton.addEventListener('click', () =>{
    currentQuestionNumber++
    nextQuestion()
});
startButton.addEventListener("click", () => {
    startQuiz();
    setTime();
});

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

function nextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionNumber]);
}

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

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }

}


function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionNumber + 1){
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hidden')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        score = score + 1;
        console.log(score)
    } else {
        element.classList.add('wrong')
    }
}

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
    }
    if (secondsLeft < .5) {
        endTime();
    }

  }, 1000);
}

function endTime(){

}


  