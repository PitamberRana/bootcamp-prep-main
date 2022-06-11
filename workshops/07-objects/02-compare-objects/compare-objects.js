// YOUR CODE BELOW
// function compareObjects(obj1, obj2) {
//   debugger;
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   for (let key in obj2) {
//     if (obj2[key] !== obj1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

function compareObjects(objOne, objTwo) {
  let oneKey = Object.keys(objOne);
  let twoKey = Object.keys(objTwo);
  if (oneKey.length !== twoKey.length) return false;
  for (let i = 0; i < oneKey.length; i++) {
    let currValue = oneKey[i];
    if (objOne[currValue] !== objTwo[currValue]) return false;
  }
  return true;
}

console.log(compareObjects({ name: "nick" }, { name: "nick" })); // -> true

console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 })); // -> false;
