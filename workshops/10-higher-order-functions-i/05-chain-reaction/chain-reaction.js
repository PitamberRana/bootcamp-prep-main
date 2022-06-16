// YOUR CODE BELOW
function chainReaction(value, array) {
  debugger;
  array.forEach((element) => {
    value = element(value);
  });
  return value;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); // => -15
