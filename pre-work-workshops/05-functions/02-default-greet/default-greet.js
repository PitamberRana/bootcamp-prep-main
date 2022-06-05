// YOUR CODE BELOW
function defaultGreet(fname, lname) {
  if (lname === undefined) {
    lname = "Doe";
  }
  let msg = "Hi " + fname + " " + lname + "!";
  return msg;
}

// function defaultGreet(fname,lname = "Doe"){
//     return "Hi " + fname + " " + lname + "!";
// }
