const apiKey = '0ae8754cf27ac1aafcd7cc26d212bbd1'; // Your provided API key
const weatherForm = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city-input');
const weatherDisplay = document.querySelector('#weather-display');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        alert('City not found. Please try again.');
        return;
      }

      // Display weather data
      weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Unable to fetch weather data. Please try again later.');
    });
});
