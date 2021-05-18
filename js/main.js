let startIndex = 0;
showSlides(startIndex);


// This function will display the slide number that are given
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
}

// Function will change the given ID class to commitentDes
// To archived the result of showing up
function showUp(id) {
  document.getElementById(id).className = "commitmentDes";
  document.getElementById(id).className += " fade";
}

// Change the element color to gold
// Use for automatic changing the nav bar color
function navLightUp(_this) {
  _this.style.color = "#fdcc01";
}


