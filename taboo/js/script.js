const quiz = [
  {
    question: "Air Force",
    answers: ["1982", "Basket", "Best seller"],
    color:"red"
  },
  {
    question: "Pagasus",
    answers: ["Cavallo", "Reattività", "Running/Corsa"],
    color:"blue"
  },
  {
    question: "Waffle 1",
    answers: ["Bowerman", "Piastra", "Ispirazione running"],
    color:"red"
  },
  {
    question: "Alphafly",
    answers: ["Scarpa da gara", "Zoom x", "Maratona"],
    color:"blue"
  },
  {
    question: "Air max 270",
    answers: ["Air", "Flyknit", "Air max93"],
    color:"red"
  },
  {
    question: "Dragonfly",
    answers: ["Pista", "Chiodata", "Atletica"],
    color:"blue"
  },
  {
    question: "Mercurial",
    answers: ["Ronaldo", "Brasile", "Velocità"],
    color:"red"
  },
  {
    question: "Sabrina 1",
    answers: ["Basket", "React/zoom", "Romania"],
   color:"blue"
  },
];

let currentIndex = 0;
let time = 60; // tempo per ogni parola
let timerInterval;

const questionEl = document.getElementById("question");
const listEl = document.getElementById("list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");

function showItem() {
  clearInterval(timerInterval);
  startTimer();

  const current = quiz[currentIndex];

  // testo
  questionEl.textContent = current.question;

  // colore dinamico
  document.body.className = current.color;

  // lista
  listEl.innerHTML = "";
  current.answers.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function startTimer() {
  time = 60;
  timerEl.textContent = "Tempo: " + time;

  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = "Tempo: " + time;

    if (time <= 0) {
      clearInterval(timerInterval);
      nextItem(); // passa automaticamente
    }
  }, 1000);
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= quiz.length) currentIndex = 0;
  showItem();
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = quiz.length - 1;
  showItem();
}

// bottoni
nextBtn.onclick = nextItem;
prevBtn.onclick = prevItem;

// start
showItem();
