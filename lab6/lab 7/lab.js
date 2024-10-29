// index.js - purpose and description here
// Author: Daisy Herrera
// Date: 10/26/24


function SortUsername() {
  var userName = window.prompt("Hi, please type in your full name so I can fix it.");
  console.log ("userName =", userName);

  //turn string to arry
  var nameArry=userName.split('');
  console.log("nameArray=", nameArray);

  //Sort array
  var nameArraySort= nameArray.sort();
  console.log("nameArrySort=", nameArraySort);

  //array back to a string
  var namesorted=nameArraysort.join('');
  console.log("namesorted=", nameSorted);

  return "Your sorted names is: " + namesorted;
}
function displaysortedName () {
  let result= sortusename ();
  document.getElementById("output").innerHTML='<p>I fixed your name: <strong>${result}</strong<>/p>;
  }
  window.onload=displaysortedName;