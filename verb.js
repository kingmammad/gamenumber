"use strict";
const numberguess = Number(document.querySelector(".guess").value);
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const heightscore = document.querySelector(".highscore");

score.textContent = 20;
let scorenumber = 20;
let guess = Math.trunc(Math.random() * 20) + 1;

console.log(numberguess);

check.addEventListener("click", function () {
  const numberguess = Number(document.querySelector(".guess").value);
  console.log(numberguess);
  if (!numberguess) {
    message.textContent = "No number";
  } else if (numberguess === guess) {
    message.textContent = "congoration you win";
  } else if (numberguess > guess) {
    message.textContent = "Too height ";
    scorenumber--;
    score.textContent = scorenumber;
  } else if (numberguess < guess) {
    message.textContent = "Too low ";
    scorenumber--;
    score.textContent = scorenumber;
  }
});
