import {
  input,
  interpret,
  setBFProgrammCode,
  getOutput,
  resetState,
} from "./interpret.js";

const inputCodeElem = document.querySelector("#code"),
  inputElem = document.querySelector("#input"),
  outputElem = document.querySelector("output");

document.querySelector(".inputs").addEventListener("keyup", () => {
  resetState();
  setBFProgrammCode(inputCodeElem.value);
  input(inputElem.value);
  interpret();
  outputElem.innerText = getOutput();
});

console.log("interpret------RUN");
