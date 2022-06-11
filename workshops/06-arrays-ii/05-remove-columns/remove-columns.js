// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
  let result = [];
  for (let i = 0; i < originalGrid.length; i++) {
    let currentValue = originalGrid[i];
    let innerRes = [];
    for (let j = 0; j < currentValue.length - numColumns; j++) {
      innerRes.push(currentValue[j]);
    }
    result.push(innerRes);
  }
  return result;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
