/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified verison.

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera
Data: 11/18/2024
 //This program loops through numbers 1 to 200 and prints "Frizz!", "Buzz!", and/or "Boom!"
 //based on divisibility by 3, 5, or 7. It outputs the results to the #output div.
*/


$(document).ready(function() {
    function fizzBuzz() {
        var oneLongString = ""; // Initialize an empty string to store the results
        
        for (var num = 1; num <= 200; num++) {
            var output = "";

            // Check divisibility and append corresponding strings to output
            if (num % 3 === 0) output += "Fizz";
            if (num % 5 === 0) output += "Buzz";
            if (num % 7 === 0) output += "Boom";

            // If there was any output (i.e., the number was divisible by 3, 5, or 7), 
            // append it to the result string.
            if (output) {
                oneLongString += output + "!<br>";
            } else {
                oneLongString += num + "<br>"; // If not divisible by 3, 5, or 7, just display the number
            }
        }

        // Output the long string of results to the #output div
        $("#output").html(oneLongString);
    }

    // Call the fizzBuzz function
    fizzBuzz();
});