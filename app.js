const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');


const question = [
    {
        quizz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'asssee'],
        correct: 2
    },
    {
        quizz: ['muscle', 'protein', 'bar'],
        options: ['bodybuilder', 'oiseau'],
        correct: 1
    },
    {
        quizz: ['feminin', 'ongle', 'regle'],
        options: ['femme', 'homme'],
        correct: 1
    },
    {
        quizz: ['ballon', 'jordan', 'bird'],
        options: ['basket', 'foot'],
        correct: 1
    },

];

let score = 0;

let clicked = [];
scoreDisplay.textContent = score;

function populateQuestions() {
    question.forEach(question => {
       const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');
        
        const logoDisplay = document.createElement('h1');
        logoDisplay.textContent = '❓';
        questionBox.append(logoDisplay);

        const questionButtons = document.createElement('div');
        questionButtons.classList.add('question-buttons');
        questionBox.append(questionButtons);

        question.quizz.forEach(tip => {
            const tipText =  document.createElement('p');
            tipText.textContent = tip;
            questionBox.appendChild(tipText);
        });
        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button');
            questionButton.classList.add('question-button');
            questionButton.textContent = option;
        
        
            questionButtons.append(questionButton);

            questionButton.addEventListener('click',() => checkAnswer(questionBox,questionButton,option, optionIndex,  question.correct));
        })

       const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('answer-display');
        questionBox.append(answerDisplay);

        questionDisplay.appendChild(questionBox);
        
    })
}

populateQuestions()

function checkAnswer(questionBox,questionButton, option, optionIndex, correctAnswer) {
    console.log(option, optionIndex + 1);
    console.log(correctAnswer);
    if (optionIndex +1 === correctAnswer) {
        score++
        scoreDisplay.textContent = score;
        addResult(questionBox, "correct!", 'correct');
    } else {
        score--;
        scoreDisplay.textContent = score;
        addResult(questionBox, "wrong!", 'wrong');
    }
    clicked.push(option);
    questionButton.disabled = clicked.includes(option);
    
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display');
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.remove('correct');
    answerDisplay.classList.add(className);

    // answerDisplay.textContent = "";
    answerDisplay.textContent = answer;

}