// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let str = "";
  for (i = startIdx; i < endIdx; i++) {
    str += originalString[i];
  }
  return str;
}
