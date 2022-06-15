// YOUR CODE BELOW
let myArray = [1, 2, 3];

function mySplice(array, startIdx, deleteCount, repWord) {
  let removedElement = [];
  let keptElement = [];
  // keep all the elements before the start index
  for (let i = 0; i < startIdx; i++) {
    let element = array[i];
    keptElement.push(element);
  }
  // now we're at the startIdx; add the newValue to the keptElements array
  if (repWord !== undefined) {
    keptElement.push(repWord);
  }

  // add the correct number of elements to remove to the removedElements array
  for (let j = startIdx; j < startIdx + deleteCount; j++) {
    let element = array[j];
    removedElement.push(element);
  }
  // add the remaining elements to the keptElements array
  for (let k = startIdx + deleteCount; k < array.length; k++) {
    let element = array[k];
    keptElement.push(element);
  }
  // remove all elements from the original array
  while (array.length) {
    array.pop();
  }
  // push only those element to keep back into array
  for (let l = 0; l < keptElement.length; l++) {
    let element = keptElement[l];
    array.push(element);
  }
  return removedElement;
}

mySplice(myArray, 1, 1); // => [2]

console.log(myArray); // [1,'apples', 3]
