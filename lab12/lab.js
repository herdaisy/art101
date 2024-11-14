/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera
Date: 11/14/2024
*/

//return Gryffindor,Ravenclaw,Slytherin, and Huflepuff
//depending on legth mod 4

function sortingHat(str) {
len = str.length;
mod = len % 4;
if (mod == 0) {
        return "Gryffindor"
}
else if (mod == 1) {
    return "Ravenclaw"
}
else if(mod == 2) {
    return "slytherin"
}

else if(mod == 3) {
    return"Hufflepuff"
}

}

var myButton = document.getElementById("submit");
myButton.addEventListener("click", function() {
    var name = document.getElementById("imput").value;
    var house = sortingHat(name);
    nawText = "<p>The Sorting Hat has Sorted you into" + house + "</p>";
    document.getElementById("output").innerHTML = newtext;
})