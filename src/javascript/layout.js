import { apiKey } from './apiKey';

const searchBox = () => {
  const searchBoxElement = document.createElement('input');
  searchBoxElement.type = 'text';
  searchBoxElement.placeholder = 'Enter location';
  return searchBoxElement;
};

const submitButton = () => {
  const buttonElement = document.createElement('button');
  buttonElement.type = 'submit';
  buttonElement.textContent = 'Submit';
  return buttonElement;
};

const printData = (weatherDataJson) => {
  const body = document.querySelector('body');
  const dataTable = document.createElement('div');
  body.appendChild(dataTable);

  for (const key in weatherDataJson.location) {
    const value = weatherDataJson.location[key];
    const div = document.createElement('div');
    div.textContent = `${key}: ${value}`;
    dataTable.appendChild(div);
  }

  for (const key in weatherDataJson.current) {
    const value = weatherDataJson.current[key];
    const div = document.createElement('div');
    div.textContent = `${key}: ${value}`;
    dataTable.appendChild(div);
  }
};

const getCurrentWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const weatherData = await fetch(url, { mode: 'cors' });

    if (!weatherData.ok) {
      throw new Error(weatherData.message);
    }
    const weatherDataJson = await weatherData.json();
    printData(weatherDataJson);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const inputElement = e.target.querySelector('input[type="text"]');
  const inputtedCity = inputElement.value;
  inputElement.value = '';

  getCurrentWeather(inputtedCity);
};

const form = () => {
  const formElement = document.createElement('form');
  formElement.appendChild(searchBox());
  formElement.appendChild(submitButton());
  formElement.addEventListener('submit', handleFormSubmit);
  return formElement;
};

export const setupPageElements = () => {
  const bodyElement = document.querySelector('body');

  bodyElement.appendChild(form());
};
