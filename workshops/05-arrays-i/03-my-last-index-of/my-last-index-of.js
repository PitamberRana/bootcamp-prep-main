// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx = array.length - 1) {
  for (let i = startIdx; i >= 0; i--) {
    if (array[i] === searchValue) return i;
  }
  return -1;
}
console.log(myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"));
console.log(
  myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2)
);
