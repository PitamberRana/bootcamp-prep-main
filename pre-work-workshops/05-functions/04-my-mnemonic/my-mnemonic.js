// YOUR CODE BELOW
function myMnemonic(firstWord, secondWord, thirdWord, forthWord) {
  let newString = "";
  if (firstWord !== undefined) {
    newString += firstWord[0];
  }
  if (secondWord !== undefined) {
    newString += secondWord[0];
  }
  if (thirdWord !== undefined) {
    newString += thirdWord[0];
  }
  if (forthWord !== undefined) {
    newString += forthWord[0];
  }
  return newString;
}
