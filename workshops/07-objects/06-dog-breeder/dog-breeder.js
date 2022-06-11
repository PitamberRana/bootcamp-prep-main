// YOUR CODE BELOW
// function dogBreeder(name = "steve", age = 0) {
//   let result = {};
//   if (typeof name === "string") {
//     result.name = name;
//     result.age = age;
//   } else {
//     result.name = "steve";
//     result.age = name;
//   }
//   return result;
// }

function dogBreeder(name = "Steve", age = 0) {
  if (typeof name === "number") {
    age = name;
    name = "Steve";
  }

  let newDog = {
    name: name,
    age: age,
  };

  return newDog;
}
console.log(dogBreeder());
console.log(dogBreeder(15));
console.log(dogBreeder("Sam", 12));
