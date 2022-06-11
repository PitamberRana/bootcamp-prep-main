let addsNums = {
  addTen: function (num) {
    return num + 50;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};

// YOUR CODE BELOW
function callThemAll(object, value) {
  let result = [];
  for (let key in object) {
    let currValue = object[key];
    if (typeof currValue === "function") {
      let result2 = currValue(value);
      result.push(result2);
    }
  }
  return result;
}

console.log(callThemAll(addsNums, 150));
