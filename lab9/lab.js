
/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera
Date: 2024
*/


    // Add button to challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Add button to problems section
    $("#problems").append("<button id='button-problems'>Make Special</button>");

    // Add button to results section
    $("#results").append("<button id='button-results'>Make Special</button>");

    // Add a click listener to the challenge button
    $("#button-challenge").click(function() {
        // Toggle the "special" class to the challenge section
        $("#challenge").toggleClass("special");
    });

    // Add a click listener to the problems button
    $("#button-problems").click(function() {
        // Toggle the "special" class to the problems section
        $("#problems").toggleClass("special");
    });

    // Add a click listener to the results button
    $("#button-results").click(function() {
        // Toggle the "special" class to the results section
        $("#results").toggleClass("special");
    });

