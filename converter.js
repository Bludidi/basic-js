
const base_url_1 = "https://restcountries.com/v3.1/name/";
const base_url_2 = "https://v6.exchangerate-api.com/v6/"
const api_key = "45cb484fe555a71408c5de53"


function convertCurrency(country1, country2, amount) {
  const baseCountry = document.getElementById("base-country").value.split(" ").join("%20");
  const targetCountry = document.getElementById("target-country").value.split(" ").join("%20");
   amount = document.getElementById("amount").value;

  const baseCountryUrl = base_url_1 + baseCountry;
  const targetCountryUrl = base_url_1 + targetCountry;
  const currUrl = base_url_2 + api_key + "/pair/";
const getData = async () => {
  try {
    country1 = await axios.get(baseCountryUrl);
    country2 = await axios.get(targetCountryUrl);
    const base = country1.data[0];
    const target = country2.data[0];
    const baseCurrencyName = Object.keys(base.currencies)[0];
    const targetCurrencyName = Object.keys(target.currencies)[0];
    const baseCurrencyData = base.currencies[baseCurrencyName];
    const targetCurrencyData = target.currencies[targetCurrencyName];
    const convertWithAmount = await axios.get(currUrl + baseCurrencyName + "/" + targetCurrencyName + "/" + amount);

    console.log(baseCurrencyData)
    if (amount === "") {
     alert ("One or more field is empty");
      baseCountry = "";
      targetCountry == "";
    } if (baseCountry === targetCountry) {
      alert("Please enter a different target country");
    } else {
      const baseAmount = baseCurrencyData.symbol + amount;
      const newAmount = targetCurrencyData.symbol + convertWithAmount.data.conversion_result;
    document.getElementById("new-amount").innerHTML = baseAmount + " = " + newAmount;
    document.getElementById("base-flag-text").innerHTML = baseCurrencyData.name;
    document.getElementById("target-flag-text").innerHTML = targetCurrencyData.name;
    const baseImg = document.getElementById("base-flag");
    const targetImg = document.getElementById("target-flag");
    baseImg.setAttribute("src", base.flags.png);
    targetImg.setAttribute("src", target.flags.png);

    }

    
  } catch (error) {
    return error.message;
  }
}
getData();
}