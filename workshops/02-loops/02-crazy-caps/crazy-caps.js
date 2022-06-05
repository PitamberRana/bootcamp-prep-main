// YOUR CODE BELOW
function crazyCaps(word) {
  let str = "";
  for (let i = 0; i <= word.length - 1; i++) {
    if (i % 2 === 0) {
      str += word[i].toLowerCase();
    } else {
      str += word[i].toUpperCase();
    }
  }
  return str;
}
