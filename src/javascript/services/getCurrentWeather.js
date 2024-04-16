import { printData } from '../utils/printData';
import { apiKey } from '../utils/apiKey';

export const getCurrentWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  const weatherData = await fetch(url, { mode: 'cors' });

  if (!weatherData.ok) {
    throw new Error(
      `Failed to fetch weather data. Status Code: ${weatherData.status}`
    );
  }
  const weatherDataJson = await weatherData.json();
  printData(weatherDataJson);
};
