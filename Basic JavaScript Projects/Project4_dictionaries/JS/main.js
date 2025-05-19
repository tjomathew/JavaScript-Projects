// Create a dictionary (JavaScript object) with key-value pairs
let dictionary = {
    "Apple": "A sweet fruit that comes in red, green, and yellow colors.",
    "JavaScript": "A programming language used for creating interactive web pages.",
    "Ocean": "A large body of salt water covering most of the Earth's surface.",
    "Sun": "A star at the center of the Solar System that provides heat and light.",
    "Mountain": "A large natural elevation of the Earth's surface."
};

// Function to display a value from the dictionary
function showDefinition() {
    let word = "JavaScript";  // Key to display

    delete dictionary[word]; // Delete the key before displaying

    // Try to display the deleted key (will return undefined)
    document.getElementById("Dictionary").innerHTML = word + ": " + dictionary[word];
}
