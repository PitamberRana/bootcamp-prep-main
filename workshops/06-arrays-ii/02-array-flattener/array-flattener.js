// YOUR CODE BELOW
function arrayFlattener(array) {
  // return array.flat();
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element))
      for (let j = 0; j < element.length; j++) {
        newArray.push(element[j]);
      }
    else {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(arrayFlattener([1, [2, 3], 4]));
