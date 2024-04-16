import { dataCell } from './dataCell';

const locationInfo = (weatherDataJson) => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.appendChild(dataCell(weatherDataJson.location, 'name'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.location, 'region'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.location, 'country'));
  return wrapperDiv;
};

const weatherInfo = (weatherDataJson) => {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'temp_c'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'temp_f'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'wind_mph'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'wind_kph'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'wind_degree'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'wind_dir'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'humidity'));
  wrapperDiv.appendChild(dataCell(weatherDataJson.current, 'cloud'));
  return wrapperDiv;
};

export { locationInfo, weatherInfo };
