const quizData = [
    {
        Question: "What is your name?",
        a: "Janvi",
        b: "Anamika",
        c: "Mahak",
        d: "Raghav",
        correct: "a",
    },
    {
        Question: "What is your age?",
        a: "18",
        b: "19",
        c: "20",
        d: "21",
        correct: "b",
    },
    {
        Question: "In which city do you live?",
        a: "Sagar",
        b: "Satna",
        c: "Ashoknagar",
        d: "Gwalior",
        correct: "a",
    },
    {
        Question: "What do you like to do in free time?",
        a: "Listening music",
        b: "Painting",
        c: "Sleeping",
        d: "Walking",
        correct: "c",
    }
];

// DOM elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("Question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Load first question
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const data = quizData[currentQuiz];

    // little animation feel
    questionEl.style.opacity = 0;
    setTimeout(() => {
        questionEl.innerText = `Q${currentQuiz + 1}. ${data.Question}`;
        a_text.innerText = data.a;
        b_text.innerText = data.b;
        c_text.innerText = data.c;
        d_text.innerText = data.d;
        questionEl.style.opacity = 1;
    }, 200);
}

function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

function getSelectedAnswer() {
    let selected;
    answerEls.forEach(el => {
        if (el.checked) selected = el.id;
    });
    return selected;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelectedAnswer();

    if (!answer) {
        alert("Please select an option ");
        return;
    }

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>Quiz Completed!</h2>
            <h3>Your Score: ${score} / ${quizData.length}</h3>
            <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
});
