// YOUR CODE BELOW
function timesTable(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
let ninesTable = timesTable(9);
console.log(ninesTable(8)); // => 72

let twelvesTable = timesTable(12);
console.log(twelvesTable(100)); // => 1200
