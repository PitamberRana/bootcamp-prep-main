// YOUR CODE BELOW
function functionLogger(fun, arg) {
  console.log("Function starting");
  let result = fun(arg);
  console.log("Function complete");
  return result;
}

function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour); // 16
