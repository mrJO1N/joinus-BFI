import { input, interpret, setBFProgrammCode } from "./interpret.js";

const inputCodeElem = document.querySelector("#code"),
  inputElem = document.querySelector("#input"),
  outputElem = document.querySelector("output");

document.querySelector(".inputs").addEventListener("keyup", () => {
  setBFProgrammCode(inputCodeElem.value);
  input(inputElem.value);
  outputElem.innerText = interpret("lol") ?? "";
});

console.log("interpret------RUN");
