// YOUR CODE BELOW

// function myUnshift(array, value) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   if (value !== undefined) newArray.push(value);
//   return newArray.reverse();
// }
// console.log(myUnshift([1, 2, 4, 3], 5));

function myUnshift(array, value) {
  let newArray = [value];
  //   newArray.push(value);
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(myUnshift([1, 2, 8, 3], 5));
