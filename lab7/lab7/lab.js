 // index.js - purpose and description here
// Author: Daisy Herrera
// Date: 10/26/24

function sortUserName() {
    var userName = window.prompt("Hi, please type in your full name so I can fix it.");
    console.log("userName =", userName);
    
    // Turn string into array
    var nameArray = userName.split(' ');
    console.log("nameArray =", nameArray);
    
    // Sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    
    // Array back to string
    var nameSorted = nameArraySort.join(' ');
    console.log("nameSorted =", nameSorted);
    
    return "Your sorted names are: " + nameSorted;
  }
  
  function displaySortedName() {
    let result = sortUserName();
    document.getElementById("output").innerHTML = `<p>I fixed your name: <strong>${result}</strong></p>`;
  }
  
  window.onload = displaySortedName;