# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug caused by loose typing and implicit type coercion. The function `myFunction` is intended to add two numbers, but due to the use of a string argument, it performs string concatenation instead of numeric addition.

The solution showcases how to use strict comparison (`===`) to explicitly check for the expected data type before performing addition to prevent unintended string concatenation.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (like Node.js or a browser's console).
3. Observe the incorrect output due to type coercion.
4. Open `bugSolution.js` to see the corrected code.

## Learning Points
* Implicit type coercion in JavaScript can lead to unexpected behavior.
* Use strict equality (`===`) to avoid implicit type coercion and ensure that your code behaves as expected. 
* Type checking can improve code robustness and prevent errors caused by unexpected data types.