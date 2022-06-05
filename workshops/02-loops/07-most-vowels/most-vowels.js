// YOUR CODE BELOW
function mostVowels(word) {
  let vowels = "aeiou";
  let wordWithHighVowels = "";
  let highCount = 0;
  let currentWord = "";
  let currentCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " " || i === word.length - 1) {
      if (currentCount > highCount) {
        wordWithHighVowels = currentWord;
        highCount = currentCount;
      }
      currentCount = 0;
      currentWord = "";
    } else {
      currentWord += word[i];
      for (let j = 0; j < vowels.length; j++) {
        if (word[i] === vowels[j]) {
          currentCount++;
          break;
        }
      }
    }
  }
  if (wordWithHighVowels[wordWithHighVowels.length - 1] === ".") {
    wordWithHighVowels = wordWithHighVowels.slice(
      0,
      wordWithHighVowels.length - 1
    );
  }
  return wordWithHighVowels;
}
