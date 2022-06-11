// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let result = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let currValue = str[i];
    if (currValue in result) {
      result[currValue] += 1;
    } else {
      result[currValue] = 1;
    }
  }
  return result;
}
console.log(frequencyAnalysis("abcadacabd"));
