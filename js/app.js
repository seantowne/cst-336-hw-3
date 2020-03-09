
var accessKey = "Q8PqdylVXR-3P-qyQZJaAupVTPp1iZ8rKsbtyvymtWo";
var secretKey = "eXXSn6wxlkLIkAy-cctk0SLLAWleQqC9wwa9DL5tKeo";

// https://api.unsplash.com/search/collections?page=1&query=office&client_id=Q8PqdylVXR-3P-qyQZJaAupVTPp1iZ8rKsbtyvymtWo
var urlBase = "https://api.unsplash.com/search/collections?page=1&query=";
var searchTerm = "dogs";
urlBase += searchTerm + "&client_id=" + accessKey;

/*
$.ajax({
    method: "GET",
    url: urlBase,
    dataType: "json",
    success: function(result, status){
        alert("success");
        console.log(result);
        
    },
    error: function(status, error){
        alert("failure");
        console.log(status);
    }
});



for ( var i in result.message ){
                console.log(result.message[i]);
                var img = "<img class='img-thumbnail' src='"+result.message[i]+"'>";
                var div = "<div class='flex-item'>"+img+"</div>";
                $("#doggos").append(div);
            }
*/

$("#lookupSearchTerm").on('click', function() {
    var searchTerm = $("#searchTermInput").val();
    
    var accessKey = "Q8PqdylVXR-3P-qyQZJaAupVTPp1iZ8rKsbtyvymtWo";
    var secretKey = "eXXSn6wxlkLIkAy-cctk0SLLAWleQqC9wwa9DL5tKeo";
    var urlBase = "https://api.unsplash.com/search/collections?page=1&query=";
    //var searchTerm = "dogs";
    urlBase += searchTerm + "&client_id=" + accessKey;
    
    $.ajax({
        method: "GET",
        url: urlBase,
        dataType: "json",
        success: function(result, status){
            alert("success");
            console.log(result);
            console.log(searchTerm);
            var img = result.results[0].preview_photos[0].urls.raw;
            console.log(img);
            $("#searchResults").html("<img src='"+img+"'>");
            
        },
        error: function(status, error){
            alert("failure");
            console.log(status);
        }
    });
});