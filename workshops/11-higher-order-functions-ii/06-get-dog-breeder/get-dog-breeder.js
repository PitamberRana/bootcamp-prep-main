// YOUR CODE BELOW
function getDogBreeder(defaultname, defaultage) {
  return dogBreeder;
  function dogBreeder(name = defaultname, age = defaultage) {
    if (typeof name === "number") {
      return { name: defaultname, age: name };
    }
    let newDog = { name: name, age: age };
    return newDog;
  }
}

// function getDogBreeder(name, age) {
//     function dogBreeder(name1 = name, age1 = age) {
//       if (typeof name1 === "number") {
//         return { name: name, age: name1 };
//       }
//       return { name: name1, age: age1 };
//     }

//     return dogBreeder;
//   }
