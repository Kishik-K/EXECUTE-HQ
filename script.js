// ----- STATE -----
let habits = JSON.parse(localStorage.getItem("habits")) || [];
let timerInterval = null;
let timeLeft = 25 * 60;


// ----- ON LOAD -----
window.onload = function () {
    render();
    updateTimerDisplay();

    document.getElementById("mainGoal").value =
        localStorage.getItem("mainGoal") || "";

    document.getElementById("mainGoal")
        .addEventListener("input", function (e) {
            localStorage.setItem("mainGoal", e.target.value);
        });
}

// ----- ADD HABIT -----
function addHabit() {
    const name = document.getElementById("hName").value;
    const date = document.getElementById("hDate").value;
    const target = parseInt(document.getElementById("hTarget").value) || 1;

    if (!name || !date) return;

    habits.push({
        id: Date.now(),
        name: name,
        date: date,
        target: target,
        current: 0
    });

    save();
    document.getElementById("hName").value = "";
}


// ----- DELETE HABIT -----
function deleteHabit(id) {
    habits = habits.filter(h => h.id !== id);
    save();
}
