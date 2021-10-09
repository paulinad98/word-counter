// Tasks:

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const textArea = document.getElementById("txtid");
const wordCount = document.getElementById("count");

textArea.addEventListener("keyup", () => {
  console.log(textArea.value.split(" "));
  let numberOfWords = textArea.value.split(" ").length;
  console.log(numberOfWords);
  if (textArea.value.split(" ").slice(-1) === "") {
    numberOfWords -= 1;
  }
  console.log(numberOfWords);
  wordCount.textContent = numberOfWords;
});
