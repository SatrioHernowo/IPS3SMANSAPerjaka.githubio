//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//navbarimg
document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/ips3.png", "img/lg.S (2).png", "img/lg.S.png"]; // Ganti dengan gambar sesuai
  let index = 0;
  const imgElement = document.getElementById("rotating-image");

  setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  }, 3000); // Ganti gambar setiap 3 detik
});

//klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//slideshow
let slideIndex = {
  x: 1,
  xi: 1,
  xii: 1,
  graduate: 1,
  yb: 1,
};

function showSlides(n, section) {
  let slides = document.querySelectorAll(`#${section} .slide-img`);
  if (n > slides.length) {
    slideIndex[section] = 1;
  }
  if (n < 1) {
    slideIndex[section] = slides.length;
  }
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex[section] - 1].style.display = "block";
}

function plusSlides(n, section) {
  showSlides((slideIndex[section] += n), section);
}

// Menampilkan slide pertama di setiap section saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  showSlides(1, "x");
  showSlides(1, "xi");
  showSlides(1, "xii");
  showSlides(1, "graduate");
  showSlides(1, "yb");
});

document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
