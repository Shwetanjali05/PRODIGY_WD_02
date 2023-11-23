let timer; // To hold the interval
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

function displayTime() {
  document.getElementById('display').innerHTML = 
    (hours < 10 ? '0' + hours : hours) + ':' + 
    (minutes < 10 ? '0' + minutes : minutes) + ':' + 
    (seconds < 10 ? '0' + seconds : seconds);
}

function startStopwatch() {
  clearInterval(timer); // Clear any existing timer
  timer = setInterval(updateStopwatch, 1000);
  document.getElementById('startButton').disabled = true;
  document.getElementById('pauseButton').disabled = false;
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function pauseStopwatch() {
  clearInterval(timer);
  document.getElementById('startButton').disabled = false;
  document.getElementById('pauseButton').disabled = true;
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
  document.getElementById('startButton').disabled = false;
  document.getElementById('pauseButton').disabled = true;
  clearLaps();
  lapCount = 1;
}

function recordLap() {
  const lapTime = (hours < 10 ? '0' + hours : hours) + ':' +
                  (minutes < 10 ? '0' + minutes : minutes) + ':' +
                  (seconds < 10 ? '0' + seconds : seconds);

  const lapItem = document.createElement('li');
  lapItem.innerHTML = `Lap ${lapCount}: <span>${lapTime}</span>`;
  document.getElementById('lapsList').appendChild(lapItem);
  lapCount++;
}

function clearLaps() {
  const lapsList = document.getElementById('lapsList');
  while (lapsList.firstChild) {
    lapsList.removeChild(lapsList.firstChild);
  }
}

displayTime(); // Initial display when the page loads
