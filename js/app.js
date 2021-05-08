const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-links li');

  burger.addEventListener("click", () => {
    nav.classList.toggle('nav-active');
  });

  navLinks.forEach((link, index) => {
    link.style.animation = `fade ${index/7}s`;
    console.log(index / 5);
  });
}

navSlider();
