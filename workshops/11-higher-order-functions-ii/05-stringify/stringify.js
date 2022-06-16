// YOUR CODE BELOW
function stringify(callback) {
  return function newFunction() {
    return String(callback());
  };
}
function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
console.log(newFunction()); // => '100'
