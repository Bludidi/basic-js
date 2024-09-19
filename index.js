// JavaScript

  let total = 0;
  document.getElementById('count-text').textContent = total;

  function add() {
    total += 1;
    document.getElementById('count-text').textContent = total;
  }


  function minus() {
    total -= 1;
    document.getElementById('count-text').textContent = total;
  }

function resetCounter() {
  total = 0;
  document.getElementById('count-text').textContent = total;
}

