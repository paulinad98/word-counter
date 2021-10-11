const textArea = document.getElementById("txtid");
const wordCount = document.getElementById("count");
const textDisplay = document.getElementById("text");
const wordCounterBtn = document.getElementById("word-counter-mode");
const wordGameBtn = document.getElementById("game-mode");
const timerDisplay = document.querySelector(".timer");
const timeDisplay = document.getElementById("time");
const wordCountDisplay = document.querySelector(".word-count");
const startBtn = document.getElementById("start-btn");

let len = 0;
let time;

textArea.addEventListener("keyup", () => {
  wordsCount();
});

textArea.addEventListener("paste", () => {
  wordsCount();
});

wordCounterBtn.addEventListener("click", () => {
  wordCounterBtn.disabled = true;
  wordGameBtn.disabled = false;
});

wordGameBtn.addEventListener("click", () => {
  wordCounterBtn.disabled = false;
  wordGameBtn.disabled = true;
  wordCountDisplay.classList.add("off");
  timerDisplay.classList.remove("off");
  startBtn.classList.remove("off");
  textDisplay.classList.remove("off");
});

startBtn.addEventListener("click", () => {
  giveFact();
  textArea.focus();
  setTime();
});

const giveFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      textDisplay.textContent = "Loading...";
      if (data.length > 100 || data.length < 65) {
        giveFact();
      } else {
        textDisplay.textContent = data.fact;
        console.log(data.length);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const wordsCount = () => {
  let numberOfWords = 0;
  textArea.value.split(" ").forEach((element) => {
    element !== "" ? numberOfWords++ : null;
  });
  wordCount.textContent = numberOfWords;
};

const setTime = () => {
  time = 0;
  setInterval(() => {
    time += 1;
    timeDisplay.textContent = time;
  }, 1000);
};
