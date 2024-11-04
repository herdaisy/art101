
/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loaded for this script to work.

Author: Wes Modes
Date: 2024
*/

//add button to challenge section 
S("#challenge").append("<button id=button-challenge'>Make Special</button>");

//add a click listener to the challenge button 
S("button-challenge").click(function(){
    //now ad (or subtract) "the special" class to the section
    $("#challenge").toggleClass("special");
});
