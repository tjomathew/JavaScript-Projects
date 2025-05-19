// Global variable (accessible throughout the script)
let globalVar = 10;

// Local variable inside a function (only accessible within this function)
function checkNumber() {
    let localVar = 5;

    // Using if statement to compare localVar and globalVar
    if (localVar < globalVar) {
        document.getElementById('output').innerHTML = "localVar is less than globalVar";
    } else {
        document.getElementById('output').innerHTML = "localVar is not less than globalVar";
    }
}

// Function that intentionally throws an error for debugging
function errorFunction() {
    // Intentional error: calling an undefined function
    undefinedFunction();

    // This line will not execute because of the error above
    document.getElementById('output').innerHTML = "If you see this, no error occurred.";
}

// Time function to display current time
function timeFunction() {
    const currentDate = new Date();
    const time = currentDate.toLocaleTimeString();
    document.getElementById('output').innerHTML = "Current time is: " + time;
}

// Debugging with console.log()
// This can be used in the browser's Dev Tools to identify errors.
console.log("Global variable value: " + globalVar);
console.log("Function checkNumber is ready to use.");

