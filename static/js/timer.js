var countDownDate = new Date("Juni 18, 2022 12:00:00").getTime();

function renderTimer() {
  var now = new Date().getTime();
  var days, hours, minutes, seconds;

  var daysTimer = document.getElementById("dayTimer");
  var hourTimer = document.getElementById("hourTimer");
  var minuteTimer = document.getElementById("minuteTimer");
  var secondTimer = document.getElementById("secondTimer");

  var distance = countDownDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayTimer.innerHTML = days;
  hourTimer.innerHTML = hours;
  minuteTimer.innerHTML = minutes;
  //secondTimer.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}

var x = setTimeout(function () {
  renderTimer();
  setInterval(renderTimer, 1000)
}, 1);

 