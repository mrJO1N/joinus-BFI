const MEMORYsize = 30_000,
  MEMORY = Array(MEMORYsize).fill(0);
let programmStr = "",
  inputStr = "",
  outputStr = "";

function setBFProgrammCode(localProgrammCodeStr) {
  programmStr = localProgrammCodeStr;
}

function input(localInputStr) {
  inputStr = localInputStr;
}

function interpret(BFCodeStr) {
  outputStr = programmStr;
  return outputStr;
  console.log(outputStr);
}

export { setBFProgrammCode, input, interpret };
