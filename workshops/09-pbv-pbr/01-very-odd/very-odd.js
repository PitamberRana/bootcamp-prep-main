// YOUR CODE BELOW
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
function veryOdd(allTheNums) {
  let oddNums = [];
  for (let i = 0; i < allTheNums.length; i++) {
    let currValue = allTheNums[i];
    if (currValue % 2 === 1) {
      oddNums.push(currValue);
    }
  }
  return oddNums;
}
let oddNums = veryOdd(allTheNums);
console.log(oddNums);
console.log(allTheNums);
