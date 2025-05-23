const questions = {
  python: [
  {
    question: "What is the output of print(2 ** 3)?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question: "Which keyword is used for function in Python?",
    answers: [
      { text: "func", correct: false },
      { text: "def", correct: true },
      { text: "function", correct: false },
      { text: "define", correct: false }
    ]
  },
  {
    question: "Which data type is immutable in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Dictionary", correct: false },
      { text: "Tuple", correct: true },
      { text: "Set", correct: false }
    ]
  },
  {
    question: "What is the output of: print(type([]))?",
    answers: [
      { text: "<class 'list'>", correct: true },
      { text: "<class 'tuple'>", correct: false },
      { text: "<class 'dict'>", correct: false },
      { text: "<class 'set'>", correct: false }
    ]
  },
  {
    question: "Which of the following is a correct variable name in Python?",
    answers: [
      { text: "2var", correct: false },
      { text: "var_2", correct: true },
      { text: "var-2", correct: false },
      { text: "var 2", correct: false }
    ]
  }
],

 java: [
  {
    question: "Which keyword is used to create a class in Java?",
    answers: [
      { text: "define", correct: false },
      { text: "class", correct: true },
      { text: "object", correct: false },
      { text: "new", correct: false }
    ]
  },
  {
    question: "Which method is the entry point in a Java program?",
    answers: [
      { text: "start()", correct: false },
      { text: "init()", correct: false },
      { text: "main()", correct: true },
      { text: "run()", correct: false }
    ]
  },
  {
    question: "Which of the following is not a Java primitive type?",
    answers: [
      { text: "int", correct: false },
      { text: "float", correct: false },
      { text: "String", correct: true },
      { text: "boolean", correct: false }
    ]
  },
  {
    question: "What is the size of int in Java?",
    answers: [
      { text: "4 bytes", correct: true },
      { text: "2 bytes", correct: false },
      { text: "8 bytes", correct: false },
      { text: "1 byte", correct: false }
    ]
  },
  {
    question: "Which of the following is used to create an object in Java?",
    answers: [
      { text: "class", correct: false },
      { text: "object", correct: false },
      { text: "new", correct: true },
      { text: "create", correct: false }
    ]
  }
],
 dsa: [
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false }
    ]
  },
  {
    question: "What is the time complexity of binary search on a sorted array?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false }
    ]
  },
  {
    question: "Which of the following data structures uses LIFO (Last In First Out)?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked List", correct: false },
      { text: "Heap", correct: false }
    ]
  },
  {
    question: "Which traversal method visits nodes in Left-Root-Right order in a binary tree?",
    answers: [
      { text: "Preorder", correct: false },
      { text: "Inorder", correct: true },
      { text: "Postorder", correct: false },
      { text: "Level-order", correct: false }
    ]
  },
  {
    question: "Which sorting algorithm is considered the fastest in most practical cases?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Selection Sort", correct: false },
      { text: "Merge Sort", correct: false },
      { text: "Quick Sort", correct: true }
    ]
  }
],
  html: [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Trainer Marking Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Marketing Language", correct: false },
      { text: "HyperTool Markup Language", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hyper>", correct: false }
    ]
  },
  {
    question: "Which attribute is used to provide an image source?",
    answers: [
      { text: "src", correct: true },
      { text: "href", correct: false },
      { text: "img", correct: false },
      { text: "source", correct: false }
    ]
  },
  {
    question: "How do you create a numbered list in HTML?",
    answers: [
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: true },
      { text: "<list>", correct: false },
      { text: "<li>", correct: false }
    ]
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<line>", correct: false }
    ]
  }
],
  css: [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Colorful Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false }
    ]
  },
  {
    question: "Which property is used to change the text color in CSS?",
    answers: [
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "Which symbol is used for ID selector in CSS?",
    answers: [
      { text: ".", correct: false },
      { text: "#", correct: true },
      { text: "*", correct: false },
      { text: "$", correct: false }
    ]
  },
  {
    question: "Which property controls the font size?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "font", correct: false },
      { text: "size", correct: false }
    ]
  },
  {
    question: "What is the default position value of an element?",
    answers: [
      { text: "fixed", correct: false },
      { text: "relative", correct: false },
      { text: "absolute", correct: false },
      { text: "static", correct: true }
    ]
  }
],
  dbms: [
  {
    question: "What does DBMS stand for?",
    answers: [
      { text: "Database Management System", correct: true },
      { text: "Data Backup and Management System", correct: false },
      { text: "Database Marketing Software", correct: false },
      { text: "Data Business Management System", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of DBMS?",
    answers: [
      { text: "Hierarchical", correct: true },
      { text: "Sequential", correct: false },
      { text: "Modular", correct: false },
      { text: "Parallel", correct: false }
    ]
  },
  {
    question: "Which command is used to retrieve data from a database?",
    answers: [
      { text: "GET", correct: false },
      { text: "FETCH", correct: false },
      { text: "SELECT", correct: true },
      { text: "DISPLAY", correct: false }
    ]
  },
  {
    question: "Which language is used to define database structure?",
    answers: [
      { text: "DML", correct: false },
      { text: "DDL", correct: true },
      { text: "SQL", correct: false },
      { text: "DCL", correct: false }
    ]
  },
  {
    question: "Which key uniquely identifies each record in a table?",
    answers: [
      { text: "Foreign Key", correct: false },
      { text: "Candidate Key", correct: false },
      { text: "Primary Key", correct: true },
      { text: "Alternate Key", correct: false }
    ]
  }
]

};

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const scoreDisplay = document.getElementById("score");
const topicTitle = document.getElementById("topic-title");

let currentQuestionIndex = 0;
let score = 0;
let topic = localStorage.getItem("quizTopic") || "python";

let currentQuestions = questions[topic];
topicTitle.textContent = topic.toUpperCase() + " Quiz";

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  scoreBox.classList.add("hide");
  document.getElementById("quiz-box").classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextButton.classList.remove("hide");
}

function showScore() {
  document.getElementById("quiz-box").classList.add("hide");
  scoreBox.classList.remove("hide");
  scoreDisplay.innerText = `You scored ${score} out of ${currentQuestions.length}`;
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();