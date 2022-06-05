// YOUR CODE BELOW
function onlyOne(one, two, three) {
  if (one && !two && !three) {
    return true;
  }
  if (!one && two && !three) {
    return true;
  }
  if (!one && !two && three) {
    return true;
  }
  return false;
}
