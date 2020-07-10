let imageBG = document.querySelector(".img-container");
let nextButton = document.querySelector(".btn-right");
let prevButton = document.querySelector(".btn-left");

let currentImage = 0;

let nextImage = () => {
  currentImage++;
  if (currentImage > 4) {
    currentImage = 4;
  }
  if (currentImage <= 4) {
    imageBG.style.backgroundImage = `url('../img/contBcg-${currentImage}.jpeg')`;
  };
};

let previousImage = () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = 0;
  }
  if (currentImage >= 0) {
    imageBG.style.backgroundImage = `url('../img/contBcg-${currentImage}.jpeg')`;
  };
};


nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", previousImage);
