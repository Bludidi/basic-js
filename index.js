// JavaScript

//   let total = 0;
//   document.getElementById('count-text').textContent = total;

//   function add() {
//     total += 1;
//     document.getElementById('count-text').textContent = total;
//   }


//   function minus() {
//     total -= 1;
//     document.getElementById('count-text').textContent = total;
//   }

// function resetCounter() {
//   total = 0;
//   document.getElementById('count-text').textContent = total;
// }

/*Nav and Modal */

const openMenu = document.querySelector(".open-modal");
const closeMenu = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

function openModal() {
    modal.style.display = "block";
    openMenu.style.display = "none";
  }

  function closeModal() {
    modal.style.display = "none";
    openMenu.style.display = "block";
  }

