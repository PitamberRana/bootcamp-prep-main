// YOUR CODE BELOW
function callCount() {
  let counter = 0;
  // callCount must return a new function
  return function () {
    counter++;
    return counter;
  };
}
let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2

console.log(newFunction2()); // => 1
console.log(newFunction2()); // => 2
