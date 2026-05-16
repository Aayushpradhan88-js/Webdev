const API_KEY = "63d73aadd11a42d2b37105316261605";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const weatherData = document.getElementById("weatherData");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const cityName = document.getElementById("cityName");
const dateTime = document.getElementById("dateTime");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const cloud = document.getElementById("cloud");

const weatherIcon = document.getElementById("weatherIcon");

const locationBtn = document.getElementById("locationBtn");


// Fetch weather using city name
const fetchWeatherByCity = async (city) => {

    try {
        showLoading();
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }

};


// Fetch weather using latitude and longitude
const fetchWeatherByCoords = async (latitude, longitude) => {

    try {
        showLoading();
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch location weather");
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
};

//display garaanueee weather ko data
const displayWeather = (data) => {
    const { current, location } = data;
    temperature.textContent = `${current.temp_c}°C`;
    condition.textContent = current.condition.text;

    //city ko naam pani show garnu paro
    cityName.textContent = `${location.name}, ${location.country}`;

    //time
    dateTime.textContent = location.localtime;

    humidity.textContent = `${current.humidity}%`;

    wind.textContent = `${current.wind_kph} km/h`;

    feelsLike.textContent = `${current.feelslike_c}°C`;

    cloud.textContent = `${current.cloud}%`;
    weatherIcon.src = current.condition.icon;
    weatherData.style.display = "block";

    errorMessage.textContent = "";
};


// Show loading text
const showLoading = () => {
    loading.style.display = "block";
    weatherData.style.display = "none";
    errorMessage.textContent = "";
};

//loading
// Hide loading text
const hideLoading = () => {
    loading.style.display = "none";
};


// Show error message
const showError = (message) => {
    errorMessage.textContent = message;
    weatherData.style.display = "none";
};

//error ko function banauune -- your task

//events listeners
//search button (handle form submit)

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    //validation rahnu paro -- your task

    fetchWeatherByCity(city);
    cityInput.value = "";
});


//use my location
locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        //error function laai call garnee ani argument maa -- geolocation is not supported
        return;

    }

    //yo navigation chai browser bhitra hunxaa haai........
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // hamro current location dinxa yeslee navigation lee

        fetchWeatherByCoords(latitude, longitude);

    },
        () => {
            //show error function laai call garnee ani -- unable to access your location guyes.....
        }
    );
});


//Default location dekahuneee
fetchWeatherByCity("Itahari, Nepal");