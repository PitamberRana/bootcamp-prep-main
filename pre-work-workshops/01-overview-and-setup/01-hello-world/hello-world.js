console.log("hello world!");

// this is a comment!

/*
  this is also a comment!
  it spans multiple lines!
*/
function sortDescending(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(sortDescending(1234456));
