import "./styles.css"

const locationForm = document.getElementById("location-form");
const submitedLocation = document.getElementById("location"); 
const tempCelsius = document.getElementById("temp-c");
const tempFa = document.getElementById("temp-f");

locationForm.addEventListener("submit", (event) => { event.preventDefault(), 
    getWeather(submitedLocation.value)});


async function getWeather(location){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${location}`)
        const data = await response.json();
        tempCelsius.innerHTML = `${data.current.temp_c}ºC`;
        tempFa.innerHTML = `${data.current.temp_f}ºF`;
    } catch (error) {
        console.log(error)
    }
}
