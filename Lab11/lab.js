/*
lab.js- This simple JavaSciprt/jQuery script gets a value form an input field and outputs a modified version.

Requirements: jQuery must be loaded for this script to work.

Author:Daisy Herrera
Date:2024
*/

//Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    //We have to convert our string to an array and back again to sort it 
    return inputString.split('').sort ().join('');
}

//click listener for button
$("#submit").click(function(){
});

//get value of input field
const userName=$("#user-name").val();

//now let's sort it 
userNameSorted = sortString(userName);

//append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div');