// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let result = "";
  for (let i = 0; i < array.length - 1; i++) {
    let val = array[i];
    if (!val) {
      val = "";
    }
    result += val + separator;
  }
  result += array[array.length - 1];

  return result;
}

console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin(["hello", undefined, "world"], "-"));
