//using core $.ajax() method 
$ajax({
    //The URL for the request (from the api docs)
    url:"https://yourapiendpoint.com/",
    //The data to send (will be converted to a query string)
    data:{
            //here is where any data required by the api
            // goes(check the api docs)
            id:123,
            api_key: "ballalaa",
    },
    //wheater this a POST or GET request
    type:"GET",
    //The type of data we expect back dataType: "GET",
    //The type of data we expect back dataType: "json",
    //what do we do when the api call is successful 
    // all the action goes in here 
    sucess:function(data){
        //do stuff
        console.log(data);
    },
    //what we do if the api call fails
    error: function (jqXHR,textStatus) {
        //do stuff
        console.log("Error:",textStatus,errorThrown);
    }
})