let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW
function petSounds(animalName, countryName) {
  debugger;
  for (let i = 0; i < animalNoises.length; i++) {
    currValue = animalNoises[i];

    if (animalName in currValue) {
      let country = currValue[animalName];
      let sound = country[countryName];
      animalName = animalName[0].toUpperCase() + animalName.slice(1);
      return `${animalName}s in ${countryName} say ${sound}`;
    }
  }
}
console.log(petSounds("cat", "Korea")); // => Cats in Korea say Nyaong!;
console.log(petSounds("dog", "Iceland")); // => Dogs in Iceland say Voff voff!;
