const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(l => l.classList.remove("active")); // Remove active class from all links
    this.classList.add("active"); // Add active class to the clicked link
  });
});