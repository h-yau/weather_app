export const dataCell = (weatherDataJsonInnerLayer, key) => {
  const value = weatherDataJsonInnerLayer[key];
  const div = document.createElement('div');
  div.textContent = `${key}: ${value}`;
  return div;
};
