
const base_url_1 = "https://restcountries.com/v3.1/name/";
const base_url_2 = "GET https://v6.exchangerate-api.com/v6/"
const api_key = "45cb484fe555a71408c5de53"


function convertCurrency(country1, country2, amount) {
  const baseCountry = document.getElementById("base-country").value.split(" ").join("%20");
  const targetCountry = document.getElementById("target-country").value.split(" ").join("%20");
   amount = document.getElementById("amount").value;

  const baseCountryUrl = base_url_1 + baseCountry;
  const targetCountryUrl = base_url_1 + targetCountry;
  const currUrl = base_url_2 + api_key + "/pair/";
  //console.log(targetCountryUrl);
const getData = async () => {
  
  try {
    country1 = await axios.get(baseCountryUrl);
    country2 = await axios.get(targetCountryUrl);
   // const convertWithAmount = await axios.get(currUrl + base.currencies + "/" + target.currencies + "/" + amount); 
    const base = country1.data[0];
    const target = country2.data[0];
    const baseCurrencyName = Object.keys(base.currencies)[0];
    const targetCurrencyName = Object.keys(target.currencies)[0];
    const baseCurrencyData = base.currencies[baseCurrencyName];
    const targetCurrencyData = target.currencies[targetCurrencyName];

    console.log(baseCurrencyData.symbol, targetCurrencyData.symbol);
  } catch (error) {
    return error.message;
  }
}
getData();
}