//API key 5000a8ee699454c703b4d1ae743b12c4
var lat = document.getElementById("lat").value;
var lon = document.getElementById("lon").value;

$.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=41.4993&lon=-81.6944&units=imperial&exclude=minutely,hourly&appid=5000a8ee699454c703b4d1ae743b12c4",
    function(data){
        console.log(data);
        //Day1
        var weather1 = data.daily[0].weather[0].main;
        var temp1Max = data.daily[0].temp.max;
        var temp1Min = data.daily[0].temp.min;
        var icon1 = "./icons/" + data.daily[0].weather[0].icon + ".png";
        $("#day1").append(getDay(1000*data.daily[0].dt));
        $("#icon1").attr("src", icon1);
        $("#weather1").append(weather1);
        $("#temp1Max").append("High: ", temp1Max,"°F");
        $("#temp1Min").append("Low: ", temp1Min,"°F");

        //Day2
        var weather2 = data.daily[1].weather[0].main;
        var temp2Max = data.daily[1].temp.max;
        var temp2Min = data.daily[1].temp.min;
        var icon2 = "./icons/" + data.daily[1].weather[0].icon + ".png";
        $("#day2").append(getDay(1000*data.daily[1].dt));
        $("#icon2").attr("src", icon2);
        $("#weather2").append(weather2);
        $("#temp2Max").append("High: ", temp2Max,"°F");
        $("#temp2Min").append("Low: ", temp2Min,"°F");

        //Day3
        var weather3 = data.daily[2].weather[0].main;
        var temp3Max = data.daily[2].temp.max;
        var temp3Min = data.daily[2].temp.min;
        var icon3 = "./icons/" + data.daily[2].weather[0].icon + ".png";
        $("#day3").append(getDay(1000*data.daily[2].dt));
        $("#icon3").attr("src", icon3);
        $("#weather3").append(weather3);
        $("#temp3Max").append("High: ", temp3Max,"°F");
        $("#temp3Min").append("Low: ", temp3Min,"°F");

        //Day4
        var weather4 = data.daily[3].weather[0].main;
        var temp4Max = data.daily[3].temp.max;
        var temp4Min = data.daily[3].temp.min;
        var icon4 = "./icons/" + data.daily[3].weather[0].icon + ".png";
        $("#day4").append(getDay(1000*data.daily[3].dt));
        $("#icon4").attr("src", icon4);
        $("#weather4").append(weather4);
        $("#temp4Max").append("High: ", temp3Max,"°F");
        $("#temp4Min").append("Low: ", temp3Min,"°F");

        //Day5
        var weather5 = data.daily[4].weather[0].main;
        var temp5Max = data.daily[4].temp.max;
        var temp5Min = data.daily[4].temp.min;
        var icon5 = "./icons/" + data.daily[4].weather[0].icon + ".png";
        $("#day5").append(getDay(1000*data.daily[4].dt));
        $("#weather5").append(weather5);
        $("#icon5").attr("src", icon5);
        $("#temp5Max").append("High: ", temp5Max,"°F");
        $("#temp5Min").append("Low: ", temp5Min,"°F");

        //Day6
        var weather6 = data.daily[5].weather[0].main;
        var temp6Max = data.daily[5].temp.max;
        var temp6Min = data.daily[5].temp.min;
        var icon6 = "./icons/" + data.daily[5].weather[0].icon + ".png";
        $("#day6").append(getDay(1000*data.daily[5].dt));
        $("#weather6").append(weather6);
        $("#icon6").attr("src", icon6);
        $("#temp6Max").append("High: ", temp5Max,"°F");
        $("#temp6Min").append("Low: ", temp5Min,"°F");

        //Day7
        var weather7 = data.daily[6].weather[0].main;
        var temp7Max = data.daily[6].temp.max;
        var temp7Min = data.daily[6].temp.min;
        var icon7 = "./icons/" + data.daily[6].weather[0].icon + ".png";
        $("#day7").append(getDay(1000*data.daily[6].dt));
        $("#weather7").append(weather7);
        $("#icon7").attr("src", icon7);
        $("#temp7Max").append("High: ", temp7Max,"°F");
        $("#temp7Min").append("Low: ", temp7Min,"°F");
    }
);

function getDay(time){
    var c_time = new Date(time);
    return c_time.toString().slice(0,4);
}
