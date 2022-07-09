window.addEventListener("load", (event) => {
  var hours = 0;
  var mins = 0;
  var sec = 0;
  var tens = 0;
  var hoursHolder = document.getElementById("hours");
  var minHolder = document.getElementById("min");
  var secHolder = document.getElementById("sec");
  var tensHolder = document.getElementById("tens");
  var startBtn = document.getElementById("start-button");
  var stopBtn = document.getElementById("stop-button");
  var resetBtn = document.getElementById("reset-button");
  var Interval;

  // Start Timer
  startBtn.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 100);
  };
  // Reset Timer
  resetBtn.onclick = function () {
    resetTimer();
  };

  stopBtn.onclick = function () {
    clearInterval(Interval);

  }

  const resetTimer = () => {
    clearInterval(Interval);
    
    hours = "00";
    mins = "00";
    sec = "00";
    tens = "00";
    hoursHolder.innerText = hours;
    secHolder.innerText = sec;
    tensHolder.innerText = tens;
    minHolder.innerText = mins;
  };

  const startTimer = () => {
  tens++;

  if(tens <= 9) {
    tensHolder.innerHTML = "0" + tens;
  }

  if(tens > 9) {
    sec++;
    tens = "0"
    tensHolder.innerHTML = tens;
    secHolder.innerHTML =  sec;
  }
  if(sec >= 60) {
    mins++;
    sec = 0;
    secHolder.innerHTML = sec;
    minHolder.innerHTML = mins;
  }

  if(mins >= 60) {
    hours++;
    mins = 0;
    minHolder.innerHTML =  mins;
    hoursHolder.innerHTML =   hours;
  }

  if(sec <= 9) {
    secHolder.innerHTML =  "0" + sec;
  }
  if(mins <= 9) {
    minHolder.innerHTML =  "0" + mins;
  }
  if(hours <= 9) {
    hoursHolder.innerHTML =  "0" + hours;
  }


};

});


