const textArea = document.getElementById("txtid");
const wordCount = document.getElementById("count");
const textDisplay = document.getElementById("text");
let len = 0;
let time = 0;

textArea.addEventListener("keyup", () => {
  wordCount;
});

textArea.addEventListener("paste", () => {
  wordCount;
});

const giveFact = () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
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

giveFact();

const wordsCount = () => {
  let numberOfWords = 0;
  textArea.value.split(" ").forEach((element) => {
    element !== "" ? numberOfWords++ : null;
  });
  wordCount.textContent = numberOfWords;
};

const setTime = () => {
  setInterval((time += 1), 1000);
};
