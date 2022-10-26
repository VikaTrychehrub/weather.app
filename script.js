function searchCityFormValue(event) {
  event.preventDefault();
  let titleCityInput = document.querySelector("#titlecity");
  console.log(titleCityInput.value);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let city = document.querySelector("h3");
  city.innerHTML = response.data.name;
  let h5 = document.querySelector("h5");
  h5.innerHTML = `${temperature}°C`;
}
let apiKey = "15089f600ebb0d6ec425f28dc3877d91";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);
