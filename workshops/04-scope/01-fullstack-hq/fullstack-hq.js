// Edit the code below
let planet = "Planet Earth";

function fullstackHQ(country) {
  country = "United States";
  return middleFunction();

  function middleFunction(state) {
    state = "New York State";
    return innerFunction();

    function innerFunction(city) {
      city = "New York City";
      return innermostFunction();

      function innermostFunction() {
        return (
          "Fullstack HQ is at " +
          planet +
          ", " +
          country +
          ", " +
          state +
          ", " +
          city
        );
      }
    }
  }
}
