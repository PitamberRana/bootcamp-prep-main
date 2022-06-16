// YOUR CODE BELOW

function billerBuilder(state) {
  if (state === "NY") {
    return finalPriceOfNY;
  }
  return finalPriceOfNJ;

  function finalPriceOfNY(price) {
    return price * 1.03 * 1.04;
  }
  function finalPriceOfNJ(price) {
    return price * 1.05 * 1.06625;
  }
}
// function billerBuilder(state) {
//   return function (price) {
//     if (state === "NY") {
//       return price * 1.03 * 1.04;
//     }
//     return price * 1.05 * 1.06625;
//   };
// }
let newYorkBiller = billerBuilder("NY");
console.log(newYorkBiller(100)); // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder("NJ");
console.log(newJersBiller(100)); // => 111.95625 (100 * 1.05 * 1.06625)
