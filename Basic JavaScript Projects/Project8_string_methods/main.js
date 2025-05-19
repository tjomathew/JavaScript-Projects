// Function to demonstrate the concat() method
function useConcat() {
    // Two strings to concatenate
    const str1 = "Hello, ";
    const str2 = "World!";
    
    // Using the concat() method to join them
    const result = str1.concat(str2);
    
    // Display the result in the HTML
    document.getElementById("concatResult").innerText = result;
}

// Function to demonstrate the slice() method
function useSlice() {
    // A string to slice
    const str = "JavaScript is fun!";
    
    // Slice the string from index 0 to 10
    const result = str.slice(0, 10);
    
    // Display the result in the HTML
    document.getElementById("sliceResult").innerText = result;
}

// Function to demonstrate the toString() method
function useToString() {
    // A number to convert to string
    const num = 12345;
    
    // Convert the number to string using toString() method
    const result = num.toString();
    
    // Display the result in the HTML
    document.getElementById("toStringResult").innerText = result;
}

// Function to demonstrate the toPrecision() method
function useToPrecision() {
    // A number to format to a specific precision
    const num = 123.456789;
    
    // Using the toPrecision() method to get the number with 4 significant digits
    const result = num.toPrecision(4);
    
    // Display the result in the HTML
    document.getElementById("toPrecisionResult").innerText = result;
}
