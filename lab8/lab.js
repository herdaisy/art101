/*
* Author: Daisy 
* created Octor 31
* License:Public Domain
*/

function isEven(x){ 
    return (x % 2== 0); 
}  
 //test function
 console.log("Is 1 even? ", isEven(1));
 console.log("Is 2 even? ", isEven(2));

 arry=[100,81,4,16,42,144,10000]
 console.log("My array", array);
 
 var results=array.map(isEven);
//should return[true,false,true,true,true,true,true]
console.log("Test of evenness of array:", results);

var result=array.map(function(x){
    return x ** 0.5;
        })
     //should return [10,9,2,4,6.40, 6.48074069840786,12,100]
   console.log("Squareroot of array:",result);