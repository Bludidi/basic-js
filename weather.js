//const { default: axios } = require("axios");

//Getting current ewather data from Weatherbit API
function getCurrentWeather(city) {
  city = document.getElementById('city-name').value.split(' ').join('+');
  if (city === "") {
    alert ("Kindly enter city name");
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
      const cityName = data.city_name;
      const countryCode = data.country_code;
      const region = new Intl.DisplayNames(['en'], { type: 'region' })
      const country = region.of(countryCode);

      document.getElementById('weather-div').innerHTML = `
      <h3>${cityName}, ${country}</h3>
      <h4>${temperature}°C</h4>
      <p>${description}</p>`
    }
    catch (error) {
      return error.message;
      //console.log(error.message)
    }
  };
  getData();
  
}
