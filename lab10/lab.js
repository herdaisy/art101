/* 
lab.js- This simple JavaScript/jQuery script appends new elements to an output div
requirements:jQuery must be loaded for this script to work.

Author: Daisy 
Date:2024
*/

function generateRandomText() {
    const text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
     const newText= ""
    const min = 3;
      const max = 100;
      const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
     //Get a random starting index to slice the Lorem Ispsum text
     const randStart= Math.floor(Math.random()* (text.length-randLen + 1));
      //Generate the random Lorem Ispsum-like text
      return text.slice(randStart,randStart + randLen);
  }
  //click listner for button
  //click listner for button make-convo,appends random length & starting Lorem Ipsum-like text to output div as a message,
  $("#make-convo").click(function() {
  const newText= generateRandomText();
   $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    });
    //append a new div to our output div
    //append a new div to our output div
    $("#send-user-input").click(function () {
      //Get user's input
      const userInput=$("user-input").val();
      //Apppend the user's text as a right-aligned message bubble
      $("#output").append('<div class="text right"><p>'+ userInput + "</p></div>");
      //Clear the input field after sending 
      $("#user-input").val("");
    });

 
 