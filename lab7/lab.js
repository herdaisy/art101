 // index.js - purpose and description here
// Author: Daisy Herrera
// Date: 10/26/24

function sortUsername() {
  var userName = window.prompt("Hi, please type in your full name so I can fix it.");
  console.log("userName =", userName);

  // Turn string to array
  var nameArray = userName.split('');
  console.log("nameArray=", nameArray);

  // Sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArrySort=", nameArraySort);

   // Array back to a string
   var namesorted=nameArraySort.join('');
   console.log("namesorted=", namesorted);
 
   return "Your sorted names is: " + namesorted;
 }
 function displaysortedName () {
   let result= sortUsername ();
   document.getElementById("output").innerHTML="<p>I fixed your name: <strong>${result}</strong></p>";
}
window.onload=displaySortedName;