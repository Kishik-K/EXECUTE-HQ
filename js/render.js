
/* --- EXECUTION HQ | RENDER ENGINE & FILTER SYSTEM --- */

let activeFilter = "all";

// ── VISUAL FX ────────────────────────────────────────────────

function launchParticles() {
  const canvas    = document.createElement("canvas");
  canvas.id       = "particleCanvas";
  canvas.width    = window.innerWidth;
  canvas.height   = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx       = canvas.getContext("2d");
  const particles = Array.from({ length: 60 }, () => ({
    x:     Math.random() * canvas.width,
    y:     canvas.height + 10,
    vx:    (Math.random() - 0.5) * 1.5,
    vy:    -(Math.random() * 3 + 2),
    size:  Math.random() * 2 + 0.5,
    color: ["#c5a059", "#ffffff", "#aaaaaa", "#e8d5a3", "#888888"][Math.floor(Math.random() * 5)],
    life:  1,
    decay: Math.random() * 0.008 + 0.004,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      if (p.life <= 0) return;
      alive    = true;
      p.x     += p.vx;
      p.y     += p.vy;
      p.vy    += 0.04;
      p.life  -= p.decay;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle   = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    if (alive) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}

// ── FILTER SYSTEM ────────────────────────────────────────────

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.filter === filter);
  });
  applyFilter();
}

function rowMatchesFilter(h, filter) {
  const today = getLocalDateString();
  switch (filter) {
    case "all":        return true;
    case "routines":   return h.repeat === true;
    case "today":      return h.date === today;
    case "incomplete": return h.current < h.target;
    default:           return true;
  }
}

function applyFilter() {
  const hBody = document.getElementById("habitBody");
  if (!hBody) return;

  const today   = getLocalDateString();
  const rows    = hBody.querySelectorAll("tr[data-id]");
  const headers = hBody.querySelectorAll("tr:not([data-id])");

  let visibleCount = 0;
  rows.forEach((row) => {
    const id      = parseFloat(row.dataset.id);
    const h       = habits.find((x) => x.id === id);
    if (!h) return;
    const matches = rowMatchesFilter(h, activeFilter);
    row.classList.toggle("filter-hidden", !matches);
    if (matches) visibleCount++;
  });

  // Hide date group headers that have no visible rows beneath them
  headers.forEach((header) => {
    if (!header.querySelector(".date-group-header")) return;
    let sibling   = header.nextElementSibling;
    let hasVisible = false;
    while (sibling && !sibling.querySelector(".date-group-header")) {
      if (sibling.dataset.id && !sibling.classList.contains("filter-hidden")) {
        hasVisible = true;
        break;
      }
      sibling = sibling.nextElementSibling;
    }
    header.classList.toggle("filter-hidden", !hasVisible);
  });

  // Show empty state if nothing visible
  let emptyRow = hBody.querySelector(".empty-filter-state");
  if (visibleCount === 0) {
    if (!emptyRow) {
      emptyRow           = document.createElement("tr");
      emptyRow.className = "empty-filter-state";
      const emptyMessages = {
        all:        "No missions logged. Begin.",
        routines:   "No routines established yet.",
        today:      "No missions for today. Deploy.",
        incomplete: "All missions complete. Sovereign.",
      };
      emptyRow.innerHTML = `<td colspan="3" class="empty-state">${emptyMessages[activeFilter] || "Nothing here."}</td>`;
      hBody.appendChild(emptyRow);
    }
  } else {
    if (emptyRow) emptyRow.remove();
  }

  // Update count display
  const countEl = document.getElementById("filterCount");
  if (countEl) {
    const filterLabels = {
      all:        "all entries",
      routines:   "routines",
      today:      "today's missions",
      incomplete: "incomplete",
    };
    countEl.textContent = `${visibleCount} ${filterLabels[activeFilter] || "entries"}`;
  }
}

// ── RENDER ENGINE ───────────────────────────────────────────

function render() {
  const hBody = document.getElementById("habitBody");
  const aBody = document.getElementById("archiveBody");
  const today = getLocalDateString();

  if (hBody) hBody.innerHTML = "";
  if (aBody) aBody.innerHTML = "";

  let dailyTPoints      = 0,
      dailyDPoints      = 0,
      dailyTotalTasks   = 0,
      dailyCompletedTasks = 0;

  const sorted = habits.sort((a, b) => {
    if (a.date !== b.date) return new Date(b.date) - new Date(a.date);
    return (a.order || 0) - (b.order || 0);
  });

  let lastDate        = null;
  let todayHabitsCount = 0;

  sorted.forEach((h) => {
    const p   = Math.round((h.current / h.target) * 100);
    const bar = "█".repeat(Math.floor(p / 10)) + "░".repeat(10 - Math.floor(p / 10));
    const isNew     = Date.now() - h.id < 1000;
    const animClass = isNew ? "new-task-row" : "";

    const row = document.createElement("tr");
    row.className = animClass;
    row.setAttribute("data-id", h.id);
    row.setAttribute("draggable", "false");

    const routineStatus = h.repeat ? "" : "disabled";
    const routineTag    =
      h.repeat === true || h.repeat === false
        ? `<span class="routine-tag ${routineStatus}" onclick="toggleRepeat(${h.id})">ROUTINE</span>`
        : "";

    row.innerHTML = `
      <td><div style="display:flex;align-items:center;gap:12px;">
          <div class="drag-handle" onmousedown="activateDrag(event, ${h.id})" onmouseleave="deactivateDrag(event, ${h.id})">
              <span></span><span></span><span></span>
          </div>
          <div>
              <span class="habit-name">${h.name}</span>${routineTag}
              <span class="habit-notes">${h.notes}</span>
          </div>
      </div></td>
      <td>
          <div class="counter-controls">
              <button class="counter-btn minus" onclick="updateCount(${h.id}, -1)">−</button>
              <span class="counter-val">${h.current}/${h.target}</span>
              <button class="counter-btn plus" onclick="updateCount(${h.id}, 1)">+</button>
          </div>
      </td>
      <td class="progress-bar ${p === 100 ? "complete" : ""}">${bar} ${p}%<button class="delete-btn" onclick="deleteHabit(${h.id})">✕</button></td>
    `;

    if (h.date >= today) {
      if (h.date !== lastDate) {
        const header      = document.createElement("tr");
        const displayDate = h.date === today ? "TODAY'S MISSIONS" : h.date.toUpperCase();
        header.innerHTML  = `<td colspan="3" class="date-group-header">${displayDate}</td>`;
        hBody.appendChild(header);
        lastDate = h.date;
      }
      hBody.appendChild(row);
      if (h.date === today) {
        todayHabitsCount++;
        dailyTPoints += h.target;
        dailyDPoints += h.current;
        dailyTotalTasks++;
        if (h.current >= h.target) dailyCompletedTasks++;
      }
    } else if (aBody) {
      if (h.date !== lastDate) {
        const header     = document.createElement("tr");
        header.innerHTML = `<td colspan="3" class="date-group-header">${h.date.toUpperCase()}</td>`;
        aBody.appendChild(header);
        lastDate = h.date;
      }
      aBody.appendChild(row);
    }
  });

  if (todayHabitsCount === 0 && hBody) {
    hBody.innerHTML += `<tr><td colspan="3" class="empty-state">No missions logged. Begin.</td></tr>`;
  }

  const rank = document.getElementById("disciplineRank");
  if (rank) {
    if (dailyTotalTasks === 0) {
      rank.innerText    = "UNRANKED [0/0]";
      rank.style.color  = "var(--dim)";
    } else {
      const score = (dailyDPoints / dailyTPoints) * 100;
      let title   = "INITIATE";
      if (score === 100) {
        title            = "SOVEREIGN";
        rank.style.color = "var(--gold)";
      } else if (score >= 80) {
        title            = "ELITE";
        rank.style.color = "white";
      } else if (score >= 50) {
        title            = "OPERATIVE";
        rank.style.color = "white";
      } else {
        rank.style.color = "white";
      }
      rank.innerText = `${title} [${dailyCompletedTasks}/${dailyTotalTasks}]`;
    }
  }

  initDragAndDrop();
  applyFilter();
}

// ── COUNT UPDATE & DELETE ────────────────────────────────────

function updateCount(id, amt) {
  const h     = habits.find((x) => x.id === id);
  if (!h) return;
  const today      = getLocalDateString();
  const wasComplete = h.current >= h.target;

  h.current = Math.max(0, Math.min(h.target, h.current + amt));
  localStorage.setItem("exec_hq_data", JSON.stringify(habits));
  render();
  generateHeatmap();
  generateWeekScorecard();

  if (!wasComplete && h.current >= h.target) {
    playHabitCompleteSound();
    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) row.classList.add("completion-flash");

    const todayHabits    = habits.filter((x) => x.date === today);
    const allNowComplete =
      todayHabits.length > 0 && todayHabits.every((x) => x.current >= x.target);
    if (allNowComplete) {
      playDayCompleteSound();
      launchParticles();
      const rank = document.getElementById("disciplineRank");
      if (rank) rank.classList.add("sovereign-burst");
    }
  }
}

function deleteHabit(id) {
  if (confirm("Terminate mission?")) {
    habits = habits.filter((x) => x.id !== id);
    save();
  }
}
