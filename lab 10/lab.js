/* 
lab.js- This simple JavaScript/jQuery script appends new elements to an output div
requirements:jQuery must be loaded for this script to work.

Author: Daisy 
Date:2024
*/

function generateRandomText() {
    const text = "Lorem pop"
    const min= 3;
    const max=100;
    const randlen= Math.floor(math.random()* (max-min+1))+ min;
    //Get a random starting index to slice the Lorem Ispsum text
    const randStart= Math.floor(Math.random()* (text.length-ranelen+1));
    //Generate the random Lorem Ispsum-like text
    return text.slice(randstart,randStart+ randlen);
}