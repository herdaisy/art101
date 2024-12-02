//lab16.js
/*
Lab 16: Fectching and displaying comic data from XKCD API
*/

//Use JQuery's AJAX method to fetch the comic data 
$.ajax( {
    url:"https://xkcd.com/info.0.json", //API endpoint for the latest comic
    type: "GET", //The Type of request
    dataType:"json",//Expect data type form the API 
    Success:function(comicObj) {
        //process the data display it on the page
        console.log(comicObj); //Log the comic object to the console

        //create the HTML elements to display the comic 
        var comicTitle = comicObj.title;
        var comicImage = comicObj.img;
        var comicAlt = comicObj.alt;

        //Generate HTML content for the results section 
        var htmlContent = 
             "<h3>${comicTitle}</h3>
             '<img src="${comicImage}" alt="${comicAlt}" title="${comicAlt}">
     ;
     //Append the content to the output div             
    $("#output").html(htmlContent);
    },
    error:function(jqXHR,textStatus,errorThrown) {
        console.log("Error:",textStatus, errorThrown);
    },
});