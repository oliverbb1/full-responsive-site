const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    console.log("oliver");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
    // burger.classList.toggle("toggle");
  });
};

// fetch data from json

fetch("./data.json")
  .then((response) => response.json())
  .then(function (data) {
    for (var i = 0; i < data.length; i++);
    for (j = 0; j < 4; j++) {
      document.getElementById("data").innerHTML += `<div class="data">
          <img class="slider-img" src="${data.image}" alt="">
          <div class="date-and-btn">
          <button class="slider-btn">${data.button}</button>
          <button class="slider-date">${data.date}</button>
          </div>
        <p class="slider-description">${data.description}</p>
      </div>
    `;
    }
  });
navSlide();
