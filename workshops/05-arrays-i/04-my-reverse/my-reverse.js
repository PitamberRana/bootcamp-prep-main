// YOUR CODE BELOW
function myReverse(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}
console.log(myReverse([1, 2, 3]));
