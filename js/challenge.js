const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const input = document.getElementById("comment-input");
const list = document.getElementById("list");

const submitButton = document.getElementById("submit");

let num = 0;
function increment() {
  num++;
  counter.innerText = num;
}

function decrement() {
  num--;
  counter.innerText = num;
}

function pauseFunction() {
  if (pause.textContent === "pause") {
    document.querySelectorAll("button").disabled = true;
    clearInterval(interValid);
    pauseButton.innerText = "resume";
  } else {
  }
}

function commentUpdate(e) {
  e.preventDefault();
  let paragraph = document.createElement("p");
  paragraph.textContent = input.value;
  list.appendChild(paragraph);
}
document.addEventListener("DOMContentLoaded", (event) => {
  preventDefault();
  submitButton.addEventListener("click");
  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  pause.addEventListener("click", pauseFunction);
});
