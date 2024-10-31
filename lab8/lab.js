// index.js- Experiment with anon functions and callbacks 
/*
* Author: Daisy 
* created October 31
* License: Public Domain
*/

// Function to check if a number is even
function isEven(x){ 
    return (x % 2 == 0); 
}  

// Test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

// Declare and initialize the array
var array = [100,81,4,16,42,144,10000];
console.log("My array", array);

// Map over the array to get evenness results
var results = arry.map(isEven);
// Should return [true,false,true,true,true,true,true]
console.log("Test of evenness of arry:", results);

// Map over the arry to calculate square root for each element using an anonymous function
var result = arry.map(function(x){
    return x ** 0.5;
 });
// Should return [10,9,2,4,,6.,12,.]
 console.log("Squareroot of arr:",result);