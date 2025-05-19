// Ternary Operator Function: Check if user is old enough to drive
function checkAge() {
    // Get the age from input field
    const age = document.getElementById('age').value;

    // Ternary operator to check if age is 18 or above
    const result = (age >= 18) ? "You are old enough to drive!" : "You are too young to drive.";

    // Display the result in the paragraph
    document.getElementById('age-result').innerHTML = result;
}

// Constructor Function: Create a Person object with a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Nested function within the constructor function
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
}

// Function to create a Person instance and display the result
function createPerson() {
    // Example name and age
    const person = new Person("John", 25);

    // Display the result of the nested greet function
    document.getElementById('person-result').innerHTML = person.greet();
}


