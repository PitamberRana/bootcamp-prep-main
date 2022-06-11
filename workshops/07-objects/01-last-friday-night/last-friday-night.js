// YOUR CODE BELOW
function lastFridayNight(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    currValue = array[i];
    total += currValue.amount;
  }
  return total;
}

let array = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

console.log(lastFridayNight(array));
