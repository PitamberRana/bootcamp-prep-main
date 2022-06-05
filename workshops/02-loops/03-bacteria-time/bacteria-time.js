// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }
  let time = 0;
  for (let i = currentNum; i < targetNum; i = i * 2) {
    time += 20;
  }
  return time;
}
