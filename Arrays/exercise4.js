// Create an object that stores individual letters in an array and has a function for displaying the letters as a simple word
const MIN = 65; //A
const MAX = 90; //Z
const ARR_LENGTH = 8;
let arr = [];

function randomLetterGenerator() {
  return String.fromCharCode(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN);
}

(function arrayToWord() {
  for (let i = 0; i < ARR_LENGTH; i++) {
    arr.push(
      i == 0 ? randomLetterGenerator() : randomLetterGenerator().toLowerCase()
    );
  }
  console.log(arr.join(""));
})();
