console.log("client side javascript file is loaded");

const WeatherForm = document.querySelector("form");
const search = document.querySelector("input");
const errorMessage = document.querySelector("#error");
const weatherData = document.querySelector("#data");
const loading = document.querySelector("#loading");

WeatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  //loading.textContent = 'Loading...'

  fetch(
    "https://api.weatherstack.com/current?access_key=484ed8ef1ce939d68cc104e7d26da522&query=" +
      encodeURIComponent(location)
  ).then((response) => {
    response.json().then((data) => {
      try {
        if (data.error) {
          errorMessage.textContent = 'Loading..'
          return errorMessage.textContent = data.error.info;
        }
        weatherData.textContent = 'Loading...'
        weatherData.textContent = 'It is ' + data.current.temperature + '°C in ' + data.location.name;
        errorMessage.textContent = "";
      } catch (error) {
        errorMessage.textContent = 'Loading..'
        errorMessage.textContent = error
      }
    });
  });
});


