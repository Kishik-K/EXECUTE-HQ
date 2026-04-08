/* --- EXECUTION HQ | TIMER --- */

let timerInterval = null;
let timeLeft      = 25 * 60;

function toggleTimer() {
  const btn = document.getElementById("timerBtn");
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval  = null;
    btn.innerText  = "Resume Session";
  } else {
    btn.innerText  = "Pause Session";
    timerInterval  = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Session End.");
        resetTimer();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft      = 25 * 60;
  updateTimerDisplay();
  document.getElementById("timerBtn").innerText = "Start Session";
}

function updateTimerDisplay() {
  const m       = Math.floor(timeLeft / 60);
  const s       = timeLeft % 60;
  const display = document.getElementById("timerDisplay");
  if (display)
    display.innerText = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
