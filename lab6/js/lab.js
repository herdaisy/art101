// index.js - Arrays and objects
// Author: Daisy 
// Date: October 22

// define Variables
myTransport=["mini cooper"];

//create an object for my main ride 
myMainRide= {
  make:"BMW",
  model: "Mini Cooper",
  color: "beige", 
  year:2013,
  //we can define a function within our object (called a method)
  // that uses the value of year above (using this.year)
 
  age:function () { 
        return 2013- this.year; 


      }
  }

// output 
document.writeln("kind of transportion I use:", myTransport,"<br>");
  //
document.writttenln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null,'\t'), "</pre>");
