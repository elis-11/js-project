console.log("tralala");
const engWord = document.getElementById("eng"),
  rusWord = document.getElementById("rus"),
  inputs = document.getElementsByClassName("input"),
  addButton = document.getElementById("add-word-btn"),
  table = document.getElementById("table");

let words;
let btnDelete;

localStorage.length < 1
  ? (words = [])
  : (words = JSON.parse(localStorage.getItem("words")));

addButton.addEventListener("click", () => {
  if (
    engWord.value.lenght < 1 ||
    rusWord.value.lenght < 1 ||
    !isNaN(engWord.value) ||
    !isNaN(rusWord.value)
  ) {
    for (let key of inputs) {
      key.classList.add("error");
    }
  } else {
    for (let key of inputs) {
      key.classList.remove("error");
    }
    words.push(new CreateWord(engWord.value, rusWord.value))
    localStorage.setItem("words",JSON.stringify(words));
  }
});

const CreateWord = (english, russian) => {
  this.english = english;
  this.russian = russian;
};
