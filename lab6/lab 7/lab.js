// index.js - purpose and description here
// Author: Daisy Herrera
// Date: 10/26/24


// sortUserName-a function that takes user input and sorts the letters
//of their name 
function SortUsername() {
  var userName = window.prompt("Hi, please type in your full name so I can fix it.");
  console.log ("userName =", userName);
  //split string to arry
  var nameArry=userName.split('');
  console.log("nameArray=", nameArray);
  //Sort array
  var nameArraySort= nameArray.sort();
  //join array back to a string
  var namesorted=nameArraysort.join('')
  console.log("namesorted=", namesorted);
  return namesorted;
}
  //output 
  document.writeln("oh hey, I've fixed your name:", sortUserName(),"</br>");
