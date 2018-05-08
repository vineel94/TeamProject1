// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="utf-8">
//   <title>Favorite Movies</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
// </head>

// <body>
//   <div class="container">
//     <h1>Bar Search</h1>

//     <!-- We'll be dumping our JSON contents in here -->
//     <div id="city-view"></div>

//     <!-- This form will be where users input data about the movies -->
//     <form id="movie-form">      
//       <label for="city-input">Search by City</label>
//       <input type="text" id="city-input"><br>
//       <label for="state-input">and state (both are required)</label>
//       <input type="text" id="state-input">

//       <!-- This button will trigger our AJAX call -->
//       <input id="find-city" type="submit" value="City Search">
//     </form>

//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <script type="text/javascript">


      // This .on("click") function will trigger the AJAX Call

      $("#find-city").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var city = $("#city-input").val();
        var state = $("#state-input").val();

        // Here we construct our URL
        var queryURL = "http://beermapping.com/webservice/loccity/90f60855e83a1b7cb73c68d834b5e5cc/" + city + "," + state + "&s=json";
        
        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response.name);

          // var counter = 0;

          for (var i = 0; i < 5; i++) {
            // counter += 5;


            // set a counter variable at 0, i = counter
            
            
           

          // var newDiv = $("<div>");
          // newDiv

          // $("#city-view").text(JSON.stringify(response));
          // $("#city-view").text("<div>" + resArr[0].Name + "</div>");
        // });


          // $("#city-view").html(JSON.stringify(response[i].name));
          // $("#city-view").html(JSON.stringify(response.status));
          $("#city-view").append(response[i].name);
          $("#city-view").append(response[i].status);


          console.log(response[i].name);
          };

      });
          

        // -----------------------------------------------------------------------

      });
//     </script>
//   </div>
// </body>

// </html>