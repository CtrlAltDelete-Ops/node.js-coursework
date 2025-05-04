console.log("client side javascript file is loaded");

const WeatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message = document.querySelector("#message");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");


WeatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  //loading.textContent = 'Loading...'

  message.textContent = 'Loading...';
  message1.textContent = '';
  message2.textContent = '';
  

  fetch(
    "https://api.weatherstack.com/current?access_key=484ed8ef1ce939d68cc104e7d26da522&query=" +
      encodeURIComponent(location)
  ).then((response) => {
    response.json().then((data) => {
      try {
        if (data.error) {
          return message.textContent = data.error.info;
        }
        message.textContent = 'It is ' + data.current.temperature + '°C in ' + data.location.name;
        message1.textContent = 'It feels like ' + data.current.feelslike + '°C';
        message2.textContent = 'The humidity is ' + data.current.humidity + '%';
      } catch (error) {
        message.textContent = error
      }
    });
  });
});


