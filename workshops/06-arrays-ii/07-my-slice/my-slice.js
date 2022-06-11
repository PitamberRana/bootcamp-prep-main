// YOUR CODE BELOW
function mySlice(array, start = 0, end = array.length) {
  let result = [];

  if (start < 0) start = array.length + start;
  if (end < 0) end = array.length + end;

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}
console.log(mySlice([1, 2, 3], 1, 2));
console.log(mySlice([1, 2, 3], 1));
