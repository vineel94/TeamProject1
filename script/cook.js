$(document).ready(function () {
    var recipes = [];

    $("#search-recipe-btn").on("click", function (event) {
        event.preventDefault();
        var recipeSearchInput = $("#dish-input").val();

        if($("#ingredient-input").val())
            recipeSearchInput += "," + $("#ingredient-input").val();

        if($("#cuisine-input").val())
            recipeSearchInput += "," + $("#cuisine-input").val();
            
        console.log(recipeSearchInput);

        var queryURL = "http://cors-proxy.htmldriven.com/?url=http://food2fork.com/api/search?key=7cd47955dffd41deaec51a869580847a&q=" + recipeSearchInput;

        


        $.ajax({
            url: queryURL,
            method: "GET",
            
        }).then(function (response) {
            
            console.log(queryURL);
            console.log(response);

            // var searchResult = JSON.stringify(response);
            // console.log(searchResult);

        });

    });
});