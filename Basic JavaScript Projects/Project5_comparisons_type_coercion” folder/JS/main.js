// Using document.write() and typeof to display the data type of a variable
let myVariable = 42; // A number variable
document.write("The data type of myVariable is: " + typeof myVariable + "<br>");

// Writing an expression combining a string and a number
let combinedExpression = "The answer is: " + 10;
document.getElementById("stringNumber").innerHTML = combinedExpression;

// Using comparison operators and displaying the results
let a = 10;
let b = "10";
let c = 20;

// Equality and strict equality comparisons
document.getElementById("comparison").innerHTML = 
    (a == b) + " (== comparison) <br>" +  // True, because == does type coercion
    (a === b) + " (=== comparison) <br>" + // False, because === checks both value and type
    (a > c) + " (> comparison) <br>" + // False, 10 is not greater than 20
    (a < c) + " (< comparison) <br>" + // True, 10 is less than 20
    ((a > 5 && c < 30)) + " (&& operator) <br>" + // True, both conditions are met
    ((a < 5 || c > 25)) + " (|| operator) <br>" + // False, neither condition is met
    (!false) + " (! operator - negation)"; // True, negating false gives true
