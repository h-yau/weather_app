import { clearElement } from './clearElement';
import { dataTableDiv } from '../components/dataTable';
import { locationInfo, weatherInfo } from './processWeatherDataJson';

export const printData = (weatherDataJson) => {
  const body = document.querySelector('body');

  let dataTable = document.querySelector('div[data-data-id="dataTable"]');

  if (dataTable == null || dataTable == undefined) {
    dataTable = dataTableDiv();
    body.appendChild(dataTable);
  } else {
    clearElement(dataTable);
  }

  dataTable.appendChild(locationInfo(weatherDataJson));
  dataTable.appendChild(weatherInfo(weatherDataJson));
};
