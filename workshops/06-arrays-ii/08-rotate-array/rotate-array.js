// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum = 0) {
  let result = [];
  for (let i = 0; i < originalArray.length; i++) {
    result.push(
      originalArray[
        (i + originalArray.length - rotateNum) % originalArray.length
      ]
    );
  }

  return result;
}
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], -1));
