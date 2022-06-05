// YOUR CODE BELOW
function taxCalculator(price, state) {
  if (state === "NY") {
    return price * 1.04;
  }
  if (state === "NJ") {
    return price * 1.06625;
  }
}
