const apiKey = 'YOUR_API_KEY'; // Sign up at OpenWeatherMap to get an API key
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('city-name').textContent = `Weather in ${data.name}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${data.wind.speed} km/h`;
    document.getElementById('weather-icon').src = 
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    }
});

// Default city weather on load
getWeather('London');