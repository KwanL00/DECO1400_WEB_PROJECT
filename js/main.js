let startIndex = 0;
let num1;
let num2;
let testSubmitted = false;


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

// // Change the element color to gold
// // Use for automatic changing the nav bar color
// function navLightUp(_this) {
//   _this.style.color = "#fdcc01";
// }


// generate a random integer up to max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// Hide Button and display quiz
// randomize number generation
// if run out of time check submit current progress and check if the answer is correct
function getDemoQuiz() {
  testSubmitted = false;
  document.getElementById("demoButton").style.display= "none";
  document.getElementById("iqTestContainer").style.display= "flex";
  num1 = getRandomInt(100);
  num2 = getRandomInt(10);
  document.getElementById("q1q").innerHTML = num1 + ' * ' + num2;
  setTimeout(() => checkAnswer(), 7 * 1000);
  setTimeout(() => iqResult(0), 7 * 1000);
}

// Display Error Message
function errMsg(msg) {
  document.getElementById("q1a").style.backgroundColor= "red";
  document.getElementById("error").innerHTML = msg + ", Try Again!";
  document.getElementById("error").style.display = "block";
  document.getElementById("error").style.color = "red";
  document.getElementById("submitButton").innerHTML = "Check Again"
}

// Display IQ result
function iqResult(score) {
  if (testSubmitted) {
    return;
  }
  document.getElementById("submitButton").style.display = "none";
  document.getElementById("scoreRequirement").style.display = "block";
  document.getElementById("userScore").style.display = "block";
  document.getElementById("resultComment").style.display = "block";

  if (score >= 88) {
    document.getElementById("resultComment").innerHTML = "Well Done";
    document.getElementById("userScore").innerHTML += score;
    document.getElementById("userScore").style.color = "green";
  } else {
    document.getElementById("resultComment").innerHTML = "Practice More";
    document.getElementById("userScore").innerHTML += score;
    document.getElementById("userScore").style.color = "red";
  }
  testSubmitted = true;


}

// check whether the given answer is correct
// if the no answer is giving display error message "empty input"
// if answer is incorrect display error message "incorrect input"
// if correct check iq result.
function checkAnswer() {
  // check if the test is already submitted
  if (testSubmitted) {
    return;
  }
  let userAnswer = document.getElementById("q1a").value;
  let correctAnswer = num1 * num2;
  if (userAnswer.length === 0) {
    errMsg("Empty Answer");
  } else if (userAnswer !== correctAnswer.toString(10)) {
    errMsg("Incorrect Answer")
  } else if (userAnswer === correctAnswer.toString(10)) {
    document.getElementById("q1a").style.backgroundColor= "#A4E8A4FF";
    document.getElementById("error").innerHTML = "Correct!";
    document.getElementById("error").style.color = "green";
    iqResult(100);
  }
}

