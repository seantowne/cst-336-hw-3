
var weatherApiKey = "ff4f1b59e21d4048c11ff586ffe76523";
var locationApiKey = "yshNbMqn0rYVh5lIV0154ZoxUfq5hUNQgy6BKpwb5snh2AzyMEXCOICfbHjLg4e5";

var locationApiUrlBase = "https://www.zipcodeapi.com/rest/"+locationApiKey+"/info.json/<zip_code>/degrees"

var weatherUrlBase = "api.openweathermap.org/data/2.5/weather"
// https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22

var locationGet = locationApiUrlBase.replace("<zip_code>", '93933');
console.log(locationGet);
$.ajax({
    method: "GET",
    url: locationGet,
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

/*

$.ajax({
        method: "GET",
        url: url,
        dataType: "json",
        success: function(result, status){
            //alert("success");
            console.log(result);
            console.log(result.message[0]);
            for ( var i in result.message ){
                console.log(result.message[i]);
                var img = "<img class='img-thumbnail' src='"+result.message[i]+"'>";
                var div = "<div class='flex-item'>"+img+"</div>";
                $("#doggos").append(div);
            }
        },
        error: function(status, error){
            alert("failure");
        }
    });

*/