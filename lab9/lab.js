
/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page by adding classes.

Requirements: jQuery must be loaded for this script to work.

Author: Daisy Herrera
Date: 2024
*/

    //Add button to challenge section 

    //Add a click listener to the challenge section to add a special class
$(document).ready(function() {
    $('#button-challenge').click(function() {
        //Apply the 'special' class when the button is clicked 
        $('#button-challenge').addClass('special');
    });
});
