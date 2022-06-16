// YOUR CODE BELOW
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    currValue = array[i];
    callback(currValue, i);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6
