var timer = document.getElementById("timer-span");
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var resetButton = document.getElementById("reset-button");
var timerInputHours = document.getElementById("timer-input-hours");
var timerInputMinutes = document.getElementById("timer-input-minutes");
var timerInputSeconds = document.getElementById("timer-input-seconds");
var timerInterval;
var timerHours = timerInputHours.value; // current remaining hours
var timerMinutes = timerInputMinutes.value; // current remaining minutes
var timerSeconds = timerInputSeconds.value; // current remaining seconds
UpdateTimerDisplay();

// add a listener to timer input fields that updates the timer-span element as HH:MM:SS on change
timerInputHours.addEventListener("change", function () {
  timerHours = timerInputHours.value;
  // if the hours input is empty, set the hours to 0
  if (timerHours == "") {
    timerHours = 0;
  }
  UpdateTimerDisplay();
});
timerInputMinutes.addEventListener("change", function () {
  timerMinutes = timerInputMinutes.value;
  // if the minutes input is empty, set the minutes to 0
  if (timerMinutes == "") {
    timerMinutes = 0;
  }
  UpdateTimerDisplay();
});
timerInputSeconds.addEventListener("change", function () {
  timerSeconds = timerInputSeconds.value;
  // if the seconds input is empty, set the seconds to 0
  if (timerSeconds == "") {
    timerSeconds = 0;
  }
  UpdateTimerDisplay();
});

function UpdateTimerDisplay() {
  timer.innerHTML = timerHours + ":" + timerMinutes + ":" + timerSeconds;
}

// add a listener to the start button that starts the timer
startButton.addEventListener("click", function () {
  timerInterval = setInterval(function () {
    timerSeconds--;
    if (timerSeconds < 0) {
      timerSeconds = 59;
      timerMinutes--;
      if (timerMinutes < 0) {
        timerMinutes = 59;
        timerHours--;
        if (timerHours < 0) {
          timerHours = 0;
          timerMinutes = 0;
          timerSeconds = 0;
          clearInterval(timerInterval);
          var alarmSound = document.getElementById("alarm-sound");
          alarmSound.play();
          alert("YOUR TIME IS UP!");
        }
      }
    }
    UpdateTimerDisplay();
  }, 1000);
});

// add a listener to the stop button that stops the timer
stopButton.addEventListener("click", function () {
  clearInterval(timerInterval);
});

// add a listener to the reset button that resets the timer to the input values
resetButton.addEventListener("click", function () {
  // clear the timer interval
  clearInterval(timerInterval);

  //Reset the timer to the input values
  timerHours = timerInputHours.value;
  timerMinutes = timerInputMinutes.value;
  timerSeconds = timerInputSeconds.value;
  UpdateTimerDisplay();

  // Restart the timer
  startButton.click();
});
