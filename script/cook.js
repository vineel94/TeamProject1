$(document).ready(function(){
    var recipes = [];

$("#search-recipe-btn").on("click", function (event){
    event.preventDefault();
    var recipeSearchInput = $(this).text();
    console.log(recipeSearchInput);

    var queryURL = "https://food2fork.com/api/search?q=" + recipeSearchInput + "&key=7cd47955dffd41deaec51a869580847a";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var searchResult = JSON.parse(response);
        console.log(searchResult);
    
        for(i=0; i<searchResult.recipes.lenght; i++){
            $("#results-list").append(
            '<div class="recipe-container"><a href=${searchResult.recipes[i].source_url}>${searchResult.recipes[i].title}</a><br/><img src=${searchResult.recipes[i].image_url}/>');
        }

});



});
});