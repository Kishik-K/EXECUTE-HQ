/* --- EXECUTION HQ | MAIN ENTRY POINT --- */

// ── ADD HABIT ────────────────────────────────────────────────

function addHabit() {
  const nameEl = document.getElementById("hName");
  const name   = nameEl.value.trim();
  const date   = document.getElementById("hDate").value;
  const target = parseInt(document.getElementById("hTarget").value) || 1;
  const notes  = document.getElementById("hNotes").value;
  const repeat = document.getElementById("hRepeat").checked;

  if (!name || !date) return;

  habits.push({
    id:      Date.now(),
    name,
    date,
    target,
    notes:   notes || "Analyzing performance...",
    repeat,
    current: 0,
  });
  save();

  nameEl.value                                  = "";
  document.getElementById("hDate").value        = getLocalDateString();
  document.getElementById("hNotes").value       = "";
  document.getElementById("hRepeat").checked    = false;
  nameEl.focus();
}

// ── SCROLL REVEAL ────────────────────────────────────────────

function initScrollReveal() {
  const obs = new IntersectionObserver(
    (es) => { es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

// ── EVENT LISTENERS ──────────────────────────────────────────

function setupEventListeners() {
  // Goal input persistence
  const mainGoal = document.getElementById("mainGoal");
  if (mainGoal)
    mainGoal.addEventListener("input", (e) =>
      localStorage.setItem("exec_hq_goal", e.target.value),
    );

  // Timer controls
  document.getElementById("timerBtn").addEventListener("click", toggleTimer);
  document.getElementById("resetBtn").addEventListener("click", resetTimer);

  // Add habit
  document.getElementById("addBtn").addEventListener("click", addHabit);

  // Enter key on any input field triggers addHabit
  ["hName", "hDate", "hTarget", "hNotes"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("keydown", (e) => { if (e.key === "Enter") addHabit(); });
  });

  // Archive toggle
  const archiveBtn = document.getElementById("toggleArchive");
  if (archiveBtn)
    archiveBtn.addEventListener("click", () =>
      document.getElementById("archiveSection").classList.toggle("hidden"),
    );

  // After-action review submit
  const aarBtn = document.getElementById("submitAar");
  if (aarBtn)
    aarBtn.addEventListener("click", () => {
      const aarText = document.getElementById("aarText");
      if (!aarText || !aarText.value) return;

      const input    = document.getElementById("aarInputContainer");
      const feedback = document.getElementById("aarFeedback");
      const quoteEl  = document.getElementById("stoicQuote");

      if (quoteEl)
        quoteEl.innerText = quotes[Math.floor(Math.random() * quotes.length)];

      input.classList.add("fading-out");
      setTimeout(() => {
        input.classList.add("hidden");
        feedback.classList.remove("hidden");
        setTimeout(() => { feedback.classList.add("visible"); }, 50);
      }, 500);
    });

  // Filter pills
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => { setFilter(pill.dataset.filter); });
  });
}

// ── INIT ─────────────────────────────────────────────────────

window.onbeforeunload = function () { window.scrollTo(0, 0); };

window.onload = () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  const goalInput = document.getElementById("mainGoal");
  if (goalInput) goalInput.value = localStorage.getItem("exec_hq_goal") || "";

  const dateInput = document.getElementById("hDate");
  if (dateInput) dateInput.value = getLocalDateString();

  syncRepeatingHabits();
  render();
  generateHeatmap();
  generateWeekScorecard();
  initScrollReveal();
  setupEventListeners();
  injectDragStyles();
};
