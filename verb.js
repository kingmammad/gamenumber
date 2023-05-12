"use strict";
const numberguess = Number(document.querySelector(".guess").value);
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");

score.textContent = 20;
let scorenumber = 20;
let guess = Math.trunc(Math.random() * 20) + 1;

console.log(numberguess);
let heightscore = 0;

check.addEventListener("click", function () {
  const numberguess = Number(document.querySelector(".guess").value);
  console.log(numberguess);
  if (!numberguess) {
    message.textContent = "No number";
  } else if (numberguess === guess) {
    message.textContent = "congoration you win";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess;
    if (scorenumber > heightscore) {
      document.querySelector(".highscore").textContent = scorenumber;
    }
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
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".highscore").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  score.textContent = 0;
  message.textcontent = "Start guessing...";
  document.querySelector(".guess").value = 0;
});
