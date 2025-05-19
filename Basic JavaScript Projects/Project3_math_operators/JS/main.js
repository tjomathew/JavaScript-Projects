// Addition function
function addition() {
    let sum = 5 + 3;
    document.getElementById("addition").innerHTML = "5 + 3 = " + sum;
}

// Subtraction function
function subtraction() {
    let difference = 10 - 4;
    document.getElementById("subtraction").innerHTML = "10 - 4 = " + difference;
}

// Multiplication function
function multiplication() {
    let product = 6 * 7;
    document.getElementById("multiplication").innerHTML = "6 * 7 = " + product;
}

// Modulus function (remainder after division)
function modulus() {
    let remainder = 10 % 3;
    document.getElementById("modulus").innerHTML = "10 % 3 = " + remainder;
}

// Increment function
function increment() {
    let num = 10;
    num++; // Increments the value by 1
    document.getElementById("increment").innerHTML = "Incremented value: " + num;
}

// Decrement function
function decrement() {
    let num = 10;
    num--; // Decrements the value by 1
    document.getElementById("decrement").innerHTML = "Decremented value: " + num;
}

// Random number function
function randomNumber() {
    let randomNum = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("random").innerHTML = "Random Number: " + randomNum;
}
