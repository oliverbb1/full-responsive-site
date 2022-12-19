const hamburgerAnimation = document.querySelectorAll('.hamburger');
hamburgerAnimation.forEach((bar) => {
  // console.log('oliver')
  bar.addEventListener('click', (event) => {
    bar.classList.toggle('change');
  });
});

const hamburgerMenuDrop = document.querySelector('.hamburger');
const navList = document.getElementsByTagName('li');

const loop = hamburgerMenuDrop.addEventListener('click', () => {
  for (let i = 0; i < navList.length; i++) {
    navList[i].classList.toggle('li');
  }
});



// fetch data from json
fetch("./data.json")
  .then((response) => response.json())
  .then(function (data) {
    for (var i = 0; i < data.length; i++);
    for (j = 0; j < 4; j++) {
      document.getElementById("data").innerHTML += `
      <div class="data-card">
        <div class="data">
          <div class="shadow"></div>
          <img class="slider-img" src="${data.image}" alt="">
          <div class="date-and-btn">
            <button class="slider-btn f-w-900">${data.button}</button>
            <button class="slider-date f-w-900">${data.date}</button>
          </div>
          <p class="slider-description">${data.description}</p>
        </div>
      </div>
    `;
    }
  });


  const newsBackBtn = document.getElementById('prev-btn');
const newsForwardBtn = document.getElementById('next-btn');
const newsArticleWrapper = document.getElementById('data');

let newsInitial = 0;
let newsAmount = 450;
let frameWidth = window.innerWidth; // returns number that represents window viewport width in pixels
//console.log(frameWidth);

if (frameWidth <= 520) {
  newsForwardBtn.addEventListener('click', () => {
    newsAmount = 288;
    newsInitial -= newsAmount;
    if (newsInitial <= -865) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
    newsArticleWrapper.style.transition = '1.5s';
  });
  newsBackBtn.addEventListener('click', () => {
    newsInitial += 288;
    if (newsInitial > 1) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
  });
} else {
  newsForwardBtn.addEventListener('click', () => {
    newsInitial -= newsAmount;

    if (newsInitial <= -1351) {
      newsInitial = 0;
    }

    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
    newsArticleWrapper.style.transition = '1.5s';
  });

  newsBackBtn.addEventListener('click', () => {
    newsInitial += 450;
    if (newsInitial > 1) {
      newsInitial = 0;
    }
    newsArticleWrapper.style.transform = 'translateX(' + newsInitial + 'px)';
  });
}


const sectionBackBtn = document.getElementById('sustain-col-btn-back');
const sectionForwardBtn = document.getElementById('sustain-col-btn-forward');
const sectionSlideBlock = document.getElementById('sustain-col');

let sustainAmount = 208;
let sustainInitial = 0;

sectionForwardBtn.addEventListener('click', () => {
  sustainInitial -= sustainAmount;
  if (sustainInitial < -900) {
    sustainInitial = 0;
  }
  sectionSlideBlock.style.transform = 'translateX(' + sustainInitial + 'px)';
  sectionSlideBlock.style.transition = '1.5s';
});

sectionBackBtn.addEventListener('click', () => {
  sustainInitial += 208;
  if (sustainInitial > 1) {
    sustainInitial = 0;
  }
  sectionSlideBlock.style.transform = 'translateX(' + sustainInitial + 'px)';
  sectionSlideBlock.style.transition = '1.5s';
});