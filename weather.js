//const { default: axios } = require("axios");

const images = {
  cloudy: './weather_images/cloudy.png',
  humidity: './weather_images/humidity.png',
  raining: './weather_images/raining.png',
  sunny: './weather_images/sun.png',
  temperature: './weather_images/temperature.png',
  wind: './weather_images/wind-turbine.png',
  windSpeed: './weather_images/speedometer.png',
};

//Getting current ewather data from Weatherbit API
function getCurrentWeather(city) {
  city = document.getElementById('city-name').value.split(' ').join('+');
  if (city === '') {
    alert('Kindly enter city name');
  }
  const params = {
    city: city,
    key: '74172378ce76466a9c5c615d6d73db6d',
  };
  document.getElementById('city-name').value = '';

  const url = `https://api.weatherbit.io/v2.0/current?&city=${params.city}&key=${params.key}`;
  //console.log(url);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data.data[0];
      const temperature = Math.round(data.temp);
      const description = data.weather.description;
      const cityName = data.city_name.toUpperCase();
      const countryCode = data.country_code;
      const region = new Intl.DisplayNames(['en'], { type: 'region' });
      const country = region.of(countryCode);
      console.log(response);

      const weatherDiv = document.getElementById('weather-div');
      weatherDiv.innerHTML = `
      <h3 class="city-name">${cityName.toUpperCase()}, ${country.toUpperCase()}</h3>
      <h4 class="temperature">CURRENTLY FEELS LIKE <br> <span>${temperature}°C</span></h4>
      <p class="description">${description}</p>
      <p class="features"><img class="small-img" src="${
        images.humidity
      }" >Humidity: ${data.rh}% &nbsp &nbsp &nbsp &nbsp<img class="small-img" src="${
        images.wind
      }" >Direction: ${data.wind_cdir_full} &nbsp &nbsp &nbsp &nbsp<img class="small-img" src="${images.windSpeed}">Speed: ${Math.round(
        (data.wind_spd / 100) * 3600
      )} KM/h</p>
      `;
      weatherDiv.style.color = '#ffffff';
    } catch (error) {
      return error.message;
      //console.log(error.message)
    }
  };
  getData();
}
