// ----- STATE -----
let habits = JSON.parse(localStorage.getItem("habits")) || [];
let timerInterval = null;
let timeLeft = 25 * 60;
