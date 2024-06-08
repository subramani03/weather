
const apikey="c6da37bf6e2d28663ffbb2332c27b366"

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityName=document.querySelector(".search input");
let btn=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");
let weathers=document.querySelector(".weather");


btn.addEventListener('click',()=>{

   
    checkWeather();
})


async function checkWeather()
{
    const response= await fetch(apiUrl+`&q=${cityName.value}&appid=${apikey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block"
        weathers.style.display="none";   
    
    }

    
    else
    {
    var data= await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML=data.main.humidity+ "%"
    document.querySelector(".wind").innerHTML=data.wind.speed+ " km/h"

    if(data.weather[0].main=="Clouds")
        {
            weatherIcon.src="images/clouds.png"

        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"

        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"

        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"

        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"

        }

        weathers.style.display="block"
        document.querySelector(".error").style.display="none"

    }


}

