// YOUR CODE BELOW
let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};
function cloneMachine(parent) {
  let clone = {
    name: parent.name + "Clone",
    species: parent.species,
    offspring: [],
  };
  parent.offspring.push(clone.name);
  return clone;
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone); // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly); // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
