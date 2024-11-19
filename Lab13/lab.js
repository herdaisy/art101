/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified verison.

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera

// Function to perform fizzbuzz-like operations with numbers 1-200.
function fizzBuzzBoom() {
  // Initialize an empty string to store results.
  let oneLongString = "";

  // Loop through numbers from 1 to 200.
  for (let num = 1; num <= 200; num++) {
    // Initialize an empty string for current number's result.
    let str = "";

    // Check if the number is divisible by various values:
    if (num % 3 === 0) str += "Fizz";
    if (num %5 ===0) str+="Buzz";
  
        if(num%7===0)str+="Boom";



      else{
        $("#output").append("<p>"+num+"</p>");
          continue;
      }
    
     $("#output").append("<p>"+str+"!</p>");
  

      }
}

// Call the fizzBuzzBoom function after defining it. You can move this line elsewhere in your code as long as it follows where you define the function 
fizzBuzzBoom();