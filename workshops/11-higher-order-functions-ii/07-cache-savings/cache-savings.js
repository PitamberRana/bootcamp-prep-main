// YOUR CODE BELOW
function cacheSavings(callback) {
  let cache = {};
  function newFunction(arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      let result = callback(arg);
      cache[arg] = result;
      return result;
    }
  }
  return newFunction;
}
