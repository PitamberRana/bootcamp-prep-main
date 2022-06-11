// YOUR CODE BELOW

function zooInventory(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let animal = array[i];
    let name = animal[0];
    let type = animal[1][0];
    let age = animal[1][1];
    result.push(name + " the " + type + " is " + age + ".");
  }
  return result;
}

console.log(
  zooInventory([
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]],
  ])
);

//  function zoo(az) {
//   let a = [];
//   for (let i = 0; i < az.length; i++) {
//     [animalname, [animaltype, animalage]] = az[i];
//     a.push(`${animalname} the ${animaltype} is ${animalage}.`);
//   }
//   return a;
// }
