const textArea = document.getElementById("txtid");
const wordCount = document.getElementById("count");
const textDisplay = document.getElementById("text");
const wordCounterBtn = document.getElementById("word-counter-mode");
const wordGameBtn = document.getElementById("game-mode");
const timerDisplay = document.querySelector(".timer");
const timeDisplay = document.getElementById("time");
const wordCountDisplay = document.querySelector(".word-count");
const startBtn = document.getElementById("start-btn");
var catText;

let len = 0;
let time;

wordCounterBtn.addEventListener("click", () => {
  wordCounterBtn.disabled = true;
  wordGameBtn.disabled = false;
  wordCountDisplay.classList.remove("off");
  timerDisplay.classList.add("off");
  startBtn.classList.add("off");
  textDisplay.classList.add("off");

  startBtn.removeEventListener("click", () => {
    startGame();
  });

  textAreaCount();
});

wordGameBtn.addEventListener("click", () => {
  wordCounterBtn.disabled = false;
  wordGameBtn.disabled = true;
  wordCountDisplay.classList.add("off");
  timerDisplay.classList.remove("off");
  startBtn.classList.remove("off");
  textDisplay.classList.remove("off");
  textAreaGame();
  startBtn.addEventListener("click", () => {
    startGame();
  });
});

const giveFact = () => {
  fetch("https://catfact.ninja/fact?max_length=60")
    .then((response) => response.json())
    .then((data) => {
      textDisplay.textContent = "Loading...";
      textDisplay.textContent = data.fact;
      catText = data.fact;
      gaming();
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

const textAreaCount = () => {
  textArea.addEventListener("keyup", () => {
    wordsCount();
  });

  textArea.addEventListener("paste", () => {
    wordsCount();
  });
};

const textAreaGame = () => {
  textArea.removeEventListener("keyup", () => {
    wordsCount();
  });

  textArea.removeEventListener("paste", () => {
    wordsCount();
  });
};

const startGame = () => {
  giveFact();
};

const ifInputIsGood = ([word, text]) => {
  let good = "";
  let bad = "";
  console.log(text);
  for (let i = 0; i < text.length; i++) {
    if (word[i] === text[i]) {
      good += word[i];
    } else {
      bad = text.slice(i);
      break;
    }
  }
  return [good, bad];
};

function gaming() {
  textArea.value = "";
  textArea.focus();
  setTime();
  console.log(catText);
  textArea.addEventListener("keyup", () => {
    const [goodText, badText] = ifInputIsGood([textArea.value, catText]);
    textDisplay.innerHTML = `<span class="good">${goodText}</span>${badText}`;
  });
}

textAreaCount();
