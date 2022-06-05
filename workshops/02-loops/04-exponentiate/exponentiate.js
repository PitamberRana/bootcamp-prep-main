// YOUR CODE BELOW
function exponentiate(base, power) {
  // return base ** power;
  let num = 1;
  for (let i = 1; i <= power; i++) {
    num = num * base;
  }
  return num;
}
