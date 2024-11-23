const apiUrl = 'https://api.api-ninjas.com/v1/';
const apiKey = 'O6cCUithwsgOIfcYuEV0Vw==3YIjiRhzwxmoi13s';

const endPoints = {
  riddles: 'riddles',
  jokes: 'jokes',
  quotes: 'quotes',
  facts: 'facts',
};

const displayDiv = document.getElementById('fun-output');

//Function to get riddles
function getRiddle() {
  const getData = async () => {
    try {
      const response = await axios.get(apiUrl + `${endPoints.riddles}`, {
        headers: {
          'X-Api-Key': `${apiKey}`,
        },
      });

      displayDiv.innerHTML = `
      <p>Question: <br> ${response.data[0].question}</p>
      <p>Answer: <br> ${response.data[0].answer}</p>`
      
  
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  getData();
}

//Function to get facts
function getFacts() {
  const getData = async () => {
    try {
      const response = await axios.get(apiUrl + `${endPoints.facts}`, {
        headers: {
          'X-Api-Key': `${apiKey}`,
        },
      });
      console.log(response.data);
      displayDiv.innerHTML = `
      <p>#Fact: <br> ${response.data[0].fact}</p>
      `
      
  
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  getData();
}

// Function to get jokes
function getJokes() {
  const getData = async () => {
    try {
      const response = await axios.get(apiUrl + `${endPoints.jokes}`, {
        headers: {
          'X-Api-Key': `${apiKey}`,
        },
      });
      console.log(response.data);
      displayDiv.innerHTML = `
      <p>${response.data[0].joke} <br>&#128514; &#128514; &#128514;</p>
      `
      
  
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  getData();
}

// Function to get quotes 
function getQuotes() {
  const getData = async () => {
    try {
      const response = await axios.get(apiUrl + `${endPoints.quotes}`, {
        headers: {
          'X-Api-Key': `${apiKey}`,
        },
      });
      console.log(response.data);
      displayDiv.innerHTML = `
      <p>${response.data[0].quote} <br><br>Author: ${response.data[0].author}</p>
      `
      
  
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  getData();
}