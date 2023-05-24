import { input, interpret, setBFProgrammCode } from "./interpret.js";

const inputCodeElem = document.querySelector("#code"),
  inputElem = document.querySelector("#input"),
  outputElem = document.querySelector("output");

/*
  
  
  canv = document.querySelector("canvas"),
  ctx = canv.getContext("2d");
canv.height = window.innerHeight;
canv.width = 700;
ctx.font = "50pt Arial";

function wrapText(text) {
  ctx.clearRect(0, 0, canv.width, canv.height);
  const marginLeft = 20,
    marginTop = 50,
    words = text.split(" "),
    countWords = words.length,
    lineHeight = 140;
  let line = "";
  for (var n = 0; n < countWords; n++) {
    var testLine = line + words[n] + " ";
    var testWidth = ctx.measureText(testLine).width;
    if (testWidth > canv.width) {
      ctx.fillText(line, marginLeft, marginTop);
      line = words[n] + " ";
      marginTop += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, marginLeft, marginTop);
}





*/

function output(text) {
  outputElem.innerText = text;
}

document.querySelector(".inputs").addEventListener("keyup", () => {
  setBFProgrammCode(inputCodeElem.value);
  input(inputElem.value);
  output(interpret("lol") ?? "");
});

console.log("interpret------RUN");
