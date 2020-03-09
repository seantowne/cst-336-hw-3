
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
            show_preview_photos(result);
        },
        error: function(status, error){
            alert("failure");
            console.log(status);
        }
    });
});

function show_preview_photos(result){
    var preview_photos = result.results[0].preview_photos;
    for ( var i in preview_photos ){
        var src = preview_photos[i].urls.raw;
        var img = "<img src='"+src+"' class='img-thumbnail'";
        var div = "<div class='flex-item'>"+img+"</div>";
        $("#searchResults").append(div);
    }
}