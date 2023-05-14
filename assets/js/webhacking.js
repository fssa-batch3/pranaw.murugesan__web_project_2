let popupStatus = true;

// NAVIGATION TO OPEN NEW WINDOW
document.querySelector("#fakeVideo").addEventListener("click", function (e) {
  window.open("./clickJackWorked.html");
});

// TIMER TO RUN
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent =
      minutes + " Minutes and " + seconds + " seconds only remaining";
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// DISPLAY TIME
function timer() {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#timeRunning");
  startTimer(fiveMinutes, display);
}

// BACKGROUND BLINK EFFECT 
var myDiv = document.querySelector(".popUp");
var intervalId = setInterval(function () {
  myDiv.style.backgroundColor =
    myDiv.style.backgroundColor === "red" ? "whitesmoke" : "red";
}, 500);

// CLEARING TIME OUT
setTimeout(function () {
  clearInterval(intervalId);
}, 600000);

// VIRUS ALERT SHOWING
function alertBox() {
  myDiv.classList.add("view");
  document.querySelector(".mainDiv").style.filter = "blur(8px)";
  document.querySelector("header").style.filter = "blur(8px)";
}

// CLEARING TIMEOUT AND ALERT
setTimeout(alertBox, 5000);
setTimeout(timer, 5000);

// CODE FOR VIRUS BUTTON CLICK
document.getElementById("virusClickBtn").addEventListener("click", function () {
  window.open("./clickJackWorked.html");
  clearInterval(timer);
  myDiv.classList.remove("view");
  document.querySelector(".mainDiv").style.filter = null;
  document.querySelector("header").style.filter = null;
  clearInterval(intervalId);
  popupStatus = false;
  console.log(popupStatus);
});

// REMOVING LOADER
setTimeout(function () {
  let loader = document.getElementById("loader");
  loader.style.display = "none";
}, 5000);
