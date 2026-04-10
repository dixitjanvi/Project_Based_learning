document.getElementById("get-weather-button").addEventListener("click", function () {
  const city = document.getElementById("city").value.trim();
  const weatherDiv = document.getElementById("weather");

  if (city === "") {
    weatherDiv.innerHTML = "<p>Enter city name.</p>";
    return;
  }

  const apiKey = "b546c3a12f65dc432a23fdc0ae51aae9";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(function (data) {
      const cityName = data.name;
      const temperature = data.main.temp;
      const weather = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherDiv.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${weather}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
    })
    .catch(function (error) {
      weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
