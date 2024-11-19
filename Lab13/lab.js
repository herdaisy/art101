/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified verison.

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera
Data: 11/18/2024

*/

function fizzBuzzBoom() {
    //makes a loop
    for (let i = 1; i <= 200; i++) {
        let output= ' ';
    //if the number is a mulitiple of 3 outputs fizz
    if (i % 3 === 0) output += "Fizz!";
    //if the number is a muliple of 5 output buzz
    if (i % 5 === 0) ouput += "Buzz!";
    //if number is a multiple of 7 output boom
     if(i % 7 === 0) output += "Boom!";
    
     $("#output").append( '<p>' + (output || i) +' </p>');
     
      }
}

fizzBuzzBoom();