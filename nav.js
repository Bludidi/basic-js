const openMenu = document.querySelector(".open-modal");
// const closeMenu = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

function openModal() {
    modal.style.display = "block";
    openMenu.style.display = "none";
  }

  function closeModal() {
    modal.style.display = "none";
    openMenu.style.display = "block";
  }
 