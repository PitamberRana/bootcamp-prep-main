// YOUR CODE BELOW
function onlyOdds(num) {
  if (num < 1) return 0;
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
}
