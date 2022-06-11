// YOUR CODE BELOW
function oddCouple(num) {
  let res = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
      res.push(num[i]);
    }
    if (res.length === 2) {
      return res;
    }
  }
  return res;
}
console.log(oddCouple([1, 2, 3, 4, 5]));
console.log(oddCouple([1]));
