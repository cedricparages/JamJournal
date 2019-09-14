// * Document ready function
$(document).ready(function(){
    // * Config for the search button
    var $searchBtn = $("#searchButton");
    // * Config for the search bar
    var $searchBar = $("#searchBar");

    $searchBtn.on("click", function(){
        console.log("Search button clicked");
        console.log($searchBar.val());
    });
});