// YOUR CODE BELOW
function reverseArray(array) {
  let originalElements = [];

  // pop all of the elements from the original array, and store them in a new array
  while (array.length) {
    originalElements.push(array.pop());
  }

  // pop all of the elements out of new array, unshift them back into the original array
  while (originalElements.length) {
    array.unshift(originalElements.pop());
  }

  return array;
}

// function reverseArray(array) {
//   let myArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     myArray.push(array[i]);
//   }
//   while (array.length) {
//     array.pop();
//   }

//   for (let i = 0; i < myArray.length; i++) {
//     array.push(myArray[i]);
//   }
//   return myArray;
// }
