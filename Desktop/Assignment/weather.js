async function getWeather() {
  const apiKey = "9529515648396b1d647a6d4a58fad8d3";
  const city = "Kathmandu";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(`Weather in ${city}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Condition: ${data.weather[0].main}`);
    console.log(`Humidity: ${data.main.humidity}%`);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

getWeather();
