// YOUR CODE BELOW
function evenAndOdd(array) {
  let newArray = [[], []];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray[0].push(array[i]);
    } else {
      newArray[1].push(array[i]);
    }
  }
  return newArray;
}
console.log(evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8]));
