//const { default: axios } = require("axios");

 const images = {
  cloudy: './weather_images/cloudy.png',
  humidity: './weather_images/humidity1.png',
  raining: './weather_images/raining.png',
  sunny: './weather_images/sun.png',
  temperature: './weather_images/temperature.png',
  wind: './weather_images/wind-turbine.png',
  windSpeed: './weather_images/speedometer.png',
  defaultImage: './weather_images/weather.png',
};

function displayImage(status){
  let statusImage = images.defaultImage;

  if(status.includes('Clear')){
    statusImage = images.sunny;
  } if(status.includes('clouds') || status.includes('Clouds')){
    statusImage = images.cloudy;
  } if(status.includes('Rain') || status.includes('rain') || status.includes('Drizzle') || status.includes('drizzle')){
    statusImage = images.raining;
  }
 return statusImage;
}

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

      const statusImage = displayImage(description);


      const weatherDiv = document.getElementById('weather-div');
      weatherDiv.innerHTML = `
      <h3 class="city-name">${cityName.toUpperCase()}, ${country.toUpperCase()}</h3>
      <h4 class="temperature">CURRENTLY FEELS LIKE <br> <span>${temperature}°C</span></h4>
      <div><img src="${statusImage}" class="mid-img" /></div>
      <p class="description">${description}</p>
      <div class="grid-wrapper features">
      <div class="grid-item item1"><img class="small-img" src="${
        images.humidity
      }" ></div>
      <div class="grid-item item2">HUMIDITY:</div>
      <div class="grid-item item3">${data.rh}%</div>
      <div class="grid-item item4"><img class="small-img" src="${
        images.wind
      }" ></div>
      <div class="grid-item item5">WIND:</div>
      <div class="grid-item item6">Direction: ${data.wind_cdir}</div>
      <div class="grid-item item10">Speed: ${Math.round(
        (data.wind_spd / 1000) * 3600
      )} KM/h</div>
      <div class="grid-item item7"><img class="small-img" src="${
        images.raining
      }"></div>
      <div class="grid-item item8">RAIN/PRECIP:</div>
      <div class="grid-item item9">${data.precip}%</div>
      <div class="grid-item item11"></div>
      <div class="grid-item item12"></div>
      </div>
      `;
      weatherDiv.style.color = '#ffffff';
    } catch (error) {
      return error.message;
      //console.log(error.message)
    }
  };
  getData();
}
