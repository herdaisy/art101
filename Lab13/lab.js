
// Lab 13FizzBuzz with Loop of Number 1-200

function fizzBuzz() {

    // Initialize an empty string to store the result
    var resultString = "";
    
    for (var num = 1; num <= 200; num++) {
            var str = "";
        if (num %3 ===0) {
            str += "Fizz";
        }
    if (num %5 ===0) {
        str += "Buzz"
    }
    if (num %7 ===0) {
    str +="Boom"
    }
    
    
    if(str===""){
    str=num;
    }
    resultString += "<p>" + str + "</p>\n";
    }
    
    $("#output").html(oneLongString);
    
    }