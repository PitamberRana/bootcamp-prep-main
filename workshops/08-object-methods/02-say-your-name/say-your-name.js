// YOUR CODE BELOW

// let me2 = {
//   name: "",
//   getGreeting: function () {
//     let you = {
//       name: "",
//     };
//     return "Hi " + you.name + ", my name is " + this.name + ".";
//   },
// };

let me2 = {
  name: "",
  getGreeting: function (freindName) {
    return `Hi ${freindName.name}, my name is ${this.name}.`;
  },
};

console.log(me2.getGreeting());
