// Create a grades object that stores a set of student grades in an object. Provide a function for displaying the students' grade average

const GRADES = {
  1: [72, 64, 89],
  2: [56, 89, 22],
  3: [43, 78, 69],
  4: [34, 67, 36],
};

function sum(runningTotal, currentTotal) {
  return runningTotal + currentTotal;
}

(function averages() {
  for (let key in GRADES) {
    let total = GRADES[key].reduce(sum);
    console.log(total / GRADES[key].length);
  }
})();
