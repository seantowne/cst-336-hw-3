
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
            
            $("#searchResults").empty();
            if ( result.length == 0 ){
                nothing_found();
            }
            
            for ( var i in result.results ){
                show_preview_photos(result, i);
            }
        },
        error: function(status, error){
            alert("failure");
            console.log(status);
        }
    });
});

function nothing_found(){
    $("#searchResults").append("no images found :/");
}

function show_preview_photos(result, i){
    var preview_photos = result.results[i].preview_photos;
    for ( var i in preview_photos ){
        var src = preview_photos[i].urls.regular;
        
        var img = "<img src='"+src+"' class='img-thumbnail'";
        var div = "<div class='flex-item'>"+img+"</div>";
        
        $("#searchResults").append(div);
    }
}