// YOUR CODE BELOW

function veryOddMutant(allTheNums) {
  let result = [];
  let count = 0;
  for (let i = 0; i < allTheNums.length; i++) {
    let currValue = allTheNums[i];
    if (currValue % 2 === 0) {
      allTheNums[i] = "normie";
      count++;
    }
    result.push(allTheNums[i]);
  }
  return count;
}
let countRemoved = veryOddMutant([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(countRemoved);
