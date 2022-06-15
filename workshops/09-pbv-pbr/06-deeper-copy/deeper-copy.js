// YOUR CODE BELOW
function deeperCopy(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    // if the current element is another array...
    if (Array.isArray(element)) {
      inner = [];
      for (let j = 0; j < element.length; j++) {
        innerValue = element[j];
        inner.push(innerValue);
      }
      result.push(inner);
    } else {
      result.push(element);
    }
  }
  return result;
}
