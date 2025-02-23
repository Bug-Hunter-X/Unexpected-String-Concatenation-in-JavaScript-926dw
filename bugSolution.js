function myFunction(a, b) {
  // Type checking before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Error: Inputs must be numbers'; // Or handle the error in a more appropriate way
  }
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, "5")); // Output: Error: Inputs must be numbers