const temperatureField = document.querySelector(".temp"); 
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span")
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition"); 
const searchField = document.querySelector(".searchField");
const form = document.querySelector ("form");
              
let dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
               
let target = 'Pune';

form.addEventListener("submit", function(e) {
    e.preventDefault();
    target = searchField.value; 
    console.log(target);
    fetchData (target);
});

//async makes it asynchronous fn. by default a fn is not async
async function fetchData(){
    //handle the error using try catch
    try{
        let url = `https://api.weatherapi.com/v1/current.json?key=7b58ea8e16164a7dac7160112232705&q=${target}&aqi=no`;
        //await tells the compiler to wait for the data to complete download
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);

        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text;
        let locationName = data.location.name;
        let localTime = data.location.localtime;
        let conditionEmoji = data.current.condition.text;
        console.log(
            locationName,
            currentTemp,
            currentCondition,
            localTime,
            conditionEmoji
        );

        updateDom(currentTemp,locationName,localTime, conditionEmoji, currentCondition);
    }
    catch(error){
        console.log(error);
    }
}

function updateDom(temp, locationName, time, emoji, condition){
    dateField.innerText = time;
    temperatureField.innerText = temp;
    cityField.innerText = locationName;
    emojiField.src = emoji;
    weatherField.innerText = condition;

    let exactTime = time.split(' ')[1];
    let exactDate = time.split(' ')[0];
    let daycount = new Date(exactDate).getDay();//this returns nth day of week. 0-Sunday to 6-Saturday
    
    dateField.innerText = `${exactDate} ${dayArray[daycount]} ${exactTime}`;

}

fetchData();