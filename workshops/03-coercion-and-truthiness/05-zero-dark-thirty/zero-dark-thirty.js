// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }
  let newStr = "";
  let str1 = String(num);
  for (i = 0; i < str1.length; i++) {
    if (str1[i] !== "0") {
      newStr += str1[i];
    }
    return Number(newStr);
  }
}
