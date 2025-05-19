// Function that utilizes a while loop
function countToTen() {
  let i = 1;
  while (i <= 10) {
    console.log(i); // Log the current number
    i++; // Increment by 1
  }
}

// Function that utilizes a for loop
function countDownFromTen() {
  for (let i = 10; i >= 1; i--) {
    console.log(i); // Log the current number
  }
}

// Function that utilizes an array
function displayArray() {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Log each fruit in the array
  }
}

// Create an object using the let keyword
let person = {
  name: "John Doe",
  age: 30,
  profession: "Web Developer"
};

console.log(person); // Display the person object

// Call the functions when the button is clicked
function startLoop() {
  countToTen(); // Start counting to 10
  countDownFromTen(); // Start counting down from 10
  displayArray(); // Display fruits from the array
}
