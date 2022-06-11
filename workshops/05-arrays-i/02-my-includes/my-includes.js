// YOUR CODE BELOW
function myIncludes(array, searchV) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchV) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes([10, 15, 30], 20));
