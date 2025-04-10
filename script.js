// script.js

let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "Who was the first president of the United States?",
        options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Theodore Roosevelt"],
        correctAnswer: "George Washington",
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.15", "3.16", "3.13"],
        correctAnswer: "3.14",
    },
    {
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1914", "1960"],
        correctAnswer: "1945",
    },
    {
        question: "What is the largest country by land area?",
        options: ["Russia", "Canada", "China", "United States"],
        correctAnswer: "Russia",
    },
    {
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "J.K. Rowling", "F. Scott Fitzgerald", "Mark Twain"],
        correctAnswer: "George Orwell",
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
    },
    {
        question: "Which band released the album 'Abbey Road'?",
        options: ["The Beatles", "The Rolling Stones", "Pink Floyd", "Queen"],
        correctAnswer: "The Beatles",
    },
    {
        question: "Who is known as the father of modern computing?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        correctAnswer: "Alan Turing",
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Brazil", "United States", "China", "Australia"],
        correctAnswer: "Brazil",
    },
    {
        question: "Who directed the movie 'Inception'?",
        options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
        correctAnswer: "Christopher Nolan",
    }
];

// Function to load the current question
function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionObj.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });

    // Hide Next button initially
    document.getElementById('next-button').style.display = 'none';
}

// Function to check if the selected answer is correct
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedbackContainer = document.getElementById('feedback');

    if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "Correct!";
        feedbackContainer.style.color = 'green';
        score++;
    } else {
        feedbackContainer.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
        feedbackContainer.style.color = 'red';
    }

    // Show next button after an answer is selected
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('score').textContent = `Score: ${score}`;
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('feedback').textContent = '';
    } else {
        // End of quiz
        document.getElementById('quiz-container').innerHTML = `<h1>Quiz Completed!</h1><p>Your final score is: ${score}/${questions.length}</p>`;
    }
}

// Initialize the quiz
loadQuestion();

// Event listener for the next button
document.getElementById('next-button').onclick = nextQuestion;
