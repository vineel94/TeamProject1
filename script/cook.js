$(document).ready(function () {
    var recipes = [];

    $("#search-recipe-btn").on("click", function (event) {
        event.preventDefault();
        var recipeSearchInput = $("#dish-input").val();

        if ($("#ingredient-input").val())
            recipeSearchInput += "%20" + $("#ingredient-input").val();

        if ($("#cuisine-input").val())
            recipeSearchInput += "%20" + $("#cuisine-input").val();

        console.log(recipeSearchInput);

        //var queryURL = "http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=7cd47955dffd41deaec51a869580847a&q=" + recipeSearchInput;

        var queryURL = "https://food2fork.com/api/search?key=7cd47955dffd41deaec51a869580847a&q=" + recipeSearchInput;

        ///////////////////////////////////////////////////////
        // heroku workaround for Cors
        // Note: queryURL will be defined by the student.
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var targetUrl = queryURL;

        $.get(proxyUrl + targetUrl, function (response) {
            console.log(response);
        });

        ////////////////////////////////////////////////////////

    
        // var searchResult = JSON.stringify(response);
        // console.log(searchResult);

        // });

    });
});