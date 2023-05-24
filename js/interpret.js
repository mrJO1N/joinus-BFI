/** Interpreter variables */
// Create a new 30,000 size array, with each cell initialized with the value of 0. Memory can expand.
const MEMORY_SIZE = 30_000,
  memory = new Array(MEMORY_SIZE).fill(0);
// Address stack. Used to track addresses (index) of left brackets

let programmStr = "",
  astack = [],
  inputStr = "",
  outputStr = "",
  //Instruction pointer (Points to the current INSTRUCTION)
  ipointer = 0,
  // Memory pointer (Points to a cell in MEMORY)
  mpointer = 0;

function setBFProgrammCode(localProgrammCodeStr) {
  programmStr = localProgrammCodeStr;
}

function input(localInputStr) {
  inputStr = localInputStr;
}

function getInput() {
  // Set a default value to return in case there is no input to consume
  let val = 0;

  // If input isn't empty
  if (inputStr) {
    // Get the character code of the first character of the string
    val = inputStr.charCodeAt(0);
    // Remove the first character from the string as it is "consumed" by the program
    inputStr = inputStr.substring(1);
  }

  return val;
}

function sendOutput(value) {
  // if (value == 0) value = "0";
  outputStr += String.fromCharCode(value);
}

function resetState() {
  // Clear memory, reset pointers to zero.
  memory.fill(0);
  ipointer = 0;
  mpointer = 0;
  outputStr = "";
  inputStr = "";
  programmStr = "";
  astack = [];
}

function interpret() {
  let end = false;

  while (!end) {
    switch (programmStr[ipointer]) {
      case ">":
        if (mpointer == memory.length - 1)
          /* If we try to access memory beyond what is currently available, expand array */
          memory.push(0, 0, 0, 0, 0);
        mpointer++;
        break;
      case "<":
        if (mpointer > 0) mpointer--;
        break;
      case "+":
        memory[mpointer]++;
        break;
      case "-":
        memory[mpointer]--;
        break;
      case ".":
        sendOutput(memory[mpointer]);
        break;
      case ",":
        memory[mpointer] = getInput();
        break;
      case "[":
        if (memory[mpointer]) {
          // If non-zero
          astack.push(ipointer);
        } else {
          // Skip to matching right bracket
          let count = 0;
          while (true) {
            ipointer++;
            if (!programmStr[ipointer]) break;
            if (programmStr[ipointer] === "[") count++;
            else if (programmStr[ipointer] === "]") {
              if (count) count--;
              else break;
            }
          }
        }
        break;
      case "]":
        //Pointer is automatically incremented every iteration, therefore we must decrement to get the correct value
        ipointer = astack.pop() - 1;
        break;
      case undefined: // We have reached the end of the programmStr
        end = true;
        break;
      default: // We ignore any character that are not part of regular Brainfuck syntax
        break;
    }
    ipointer++;
  }
  console.log(outputStr);
  return outputStr;
}

function getOutput() {
  return outputStr;
}

export { setBFProgrammCode, input, interpret, getOutput, resetState };
