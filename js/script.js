import { input, interpret, setBFProgrammCode } from "./interpret.js";

const inputCodeElem = document.querySelector("#code"),
  InputElem = document.querySelector("#input"),
  canv = document.querySelector("canvas"),
  ctx = canv.getContext("2d");
canv.height = window.innerHeight;
canv.width = 700;

function output(text) {
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.font = "italic 30pt Arial";
  console.log(ctx.measureText(text));
}

document.querySelector(".inputs").addEventListener("keyup", () => {
  setBFProgrammCode(inputCodeElem.value);
  input(InputElem.value);
  output(interpret() ?? "");
});

console.log("interpret------RUN");
