


const apiKey = "1ffe9024f0cc7d2883d12b6f96b0672c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchImg = document.querySelector(".search img");
const weatherTxt = document.querySelector(".weather-txt");
const cloudIcon = document.querySelector(".cloud-icon");

async function checkWeather(city) {
         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       var data = await response.json();

        console.log(data);

         document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.windSpeed').innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".latitude").innerHTML = data.coord.lat
        document.querySelector(".longitude").innerHTML = data.coord.lon
        weatherTxt.innerHTML= data.weather[0].main;


        function imageSwitch() {
          switch (data.weather[0].main) {
              case "Clouds":
                  cloudIcon.src = "images/clouds.png";
                  break;
        
              case "Rain":
                  cloudIcon.src = "images/rain.png";
                  break;
        
              case "Clear":
                  cloudIcon.src = "images/clear.png";
                  break;

              case "Drizzle":
                    cloudIcon.src = "images/drizzle.png";
                    break;

              case "Snow":
                      cloudIcon.src = "images/snow.png";
                      break;

              case "Mist":
                        cloudIcon.src = "images/mist.png";
                        break;
        
              default:
                  cloudIcon.src = " ";
          }
        }
        imageSwitch()
    
    }
        


searchImg.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("lagos");


function dateTime(){
    const date = document.getElementById("date");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const time = document.getElementById("time");
   
    const today = new Date();
    
    const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday",];
    const allMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
 
   date.innerHTML = (today.getDate()<10? "0":" ")+ today.getDate();
   day.innerHTML = weekDays[today.getDay()];
   month.innerHTML = allMonths[today.getMonth()];
   year.innerHTML = today.getFullYear();


    let hours =    today.getHours();
    let minutes = (today.getMinutes()<10? "0":" ") + today.getMinutes();
    let seconds = (today.getSeconds()<10? "0":" ") + today.getSeconds();

     let ampm = hours >= 12 ? 'PM' : 'AM';
    let twelveHourFormatHours = hours % 12 || 12;
    let currentTime = `${twelveHourFormatHours}:${minutes}:${seconds}:${ampm}`;
    time.innerText = currentTime;
 
    setInterval(dateTime, 1000)     


  document.querySelector(".container").style.display = "flex";
};

dateTime();



