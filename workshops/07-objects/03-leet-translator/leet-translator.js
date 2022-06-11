let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
function leetTranslator(str) {
  let leetwords = {};
  for (let i = 0; i < letters.length; i++) {
    currrentLetter = letters[i];
    currentChar = leetChars[i];
    leetwords[currrentLetter] = currentChar;
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    currValue = str[i].toLowerCase();

    result += leetwords[currValue];
  }
  return result;
}
console.log(leetTranslator("Fullstack"));
