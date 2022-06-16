// YOUR CODE BELOW
function whosASpecial(array) {
  let result = [];
  array.forEach(pet);
  function pet(object) {
    let str = `${object.name} the ${object.species} is very special!`;
    result.push(str);
  }
  return result.join(" ");
}

// let result = "";
// for (let i = 0; i < array.length; i++) {
//     currValue = array[i];
//     result += `${currValue.name} the ${currValue.species} is very special! `
// }
// return result.trim()

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
