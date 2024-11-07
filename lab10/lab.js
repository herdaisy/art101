/* 
lab.js- This simple JavaScript/jQuery script appends new elements to an output div
requirements:jQuery must be loaded for this script to work.

Author: Daisy 
Date:2024
*/

function generateRandomText() {
    const text = "Lorem pop.";
    const min= 3;
    const max=100;
    const randlen= Math.floor(Math.random()* (max-min+1))+ min;
    //Get a random starting index to slice the Lorem Ispsum text
    const randStart= Math.floor(Math.random()* (text.length-randlen+1));
    //Generate the random Lorem Ispsum-like text
    return text.slice(randStart,randStart+ randlen);
}

//click listner for button
$("#make-convo").click(function(){

});

//get new fake dialogue
const newTest = generateRandomText();
//append a new to our output div
$("#output").append('<div class="text"><p>' + newTest + '</p></div>');