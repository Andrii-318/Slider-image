const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
  sliderImage.src = images[currentIndex];
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

updateImage();
