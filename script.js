/* --- EXECUTION HQ | SOVEREIGN INTERNAL LOGIC --- */

function getDateString(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d - offset).toISOString().split("T")[0];
} //REMOVE THIS WHEN YOU NEED TO USE THE APP WITH REAL DATA - THIS IS JUST FOR DEMO AND TESTING

const defaultHabits = [
  // TODAY
  {
    id: 1,
    name: "Deep Work",
    date: getDateString(0),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 2,
  },
  {
    id: 2,
    name: "Physical Training",
    date: getDateString(0),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 3,
    name: "Read",
    date: getDateString(0),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 12,
  },

  // YESTERDAY
  {
    id: 4,
    name: "Deep Work",
    date: getDateString(1),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 5,
    name: "Physical Training",
    date: getDateString(1),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 6,
    name: "Read",
    date: getDateString(1),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },

  // 2 DAYS AGO
  {
    id: 7,
    name: "Deep Work",
    date: getDateString(2),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 3,
  },
  {
    id: 8,
    name: "Physical Training",
    date: getDateString(2),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 0,
  },
  {
    id: 9,
    name: "Read",
    date: getDateString(2),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },

  // 3 DAYS AGO
  {
    id: 10,
    name: "Deep Work",
    date: getDateString(3),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 11,
    name: "Physical Training",
    date: getDateString(3),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 12,
    name: "Read",
    date: getDateString(3),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 20,
  },

  // 4 DAYS AGO
  {
    id: 13,
    name: "Deep Work",
    date: getDateString(4),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 2,
  },
  {
    id: 14,
    name: "Physical Training",
    date: getDateString(4),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 15,
    name: "Read",
    date: getDateString(4),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },

  // 5 DAYS AGO
  {
    id: 16,
    name: "Deep Work",
    date: getDateString(5),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 17,
    name: "Physical Training",
    date: getDateString(5),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 0,
  },
  {
    id: 18,
    name: "Read",
    date: getDateString(5),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },

  // 6 DAYS AGO
  {
    id: 19,
    name: "Deep Work",
    date: getDateString(6),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 3,
  },
  {
    id: 20,
    name: "Physical Training",
    date: getDateString(6),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 21,
    name: "Read",
    date: getDateString(6),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 15,
  },

  // OLDER — for heatmap colour variety
  {
    id: 22,
    name: "Deep Work",
    date: getDateString(9),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 23,
    name: "Read",
    date: getDateString(9),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },
  {
    id: 24,
    name: "Deep Work",
    date: getDateString(12),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 2,
  },
  {
    id: 25,
    name: "Physical Training",
    date: getDateString(12),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 26,
    name: "Deep Work",
    date: getDateString(15),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 27,
    name: "Read",
    date: getDateString(15),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 30,
  },
  {
    id: 28,
    name: "Physical Training",
    date: getDateString(18),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 1,
  },
  {
    id: 29,
    name: "Deep Work",
    date: getDateString(18),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 3,
  },
  {
    id: 30,
    name: "Deep Work",
    date: getDateString(22),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 4,
  },
  {
    id: 31,
    name: "Read",
    date: getDateString(22),
    target: 30,
    notes: "30 pages minimum.",
    repeat: true,
    current: 20,
  },
  {
    id: 32,
    name: "Physical Training",
    date: getDateString(25),
    target: 1,
    notes: "Move the body. No excuses.",
    repeat: true,
    current: 0,
  },
  {
    id: 33,
    name: "Deep Work",
    date: getDateString(25),
    target: 4,
    notes: "No phone. No noise. Just work.",
    repeat: true,
    current: 2,
  },
]; // REMOVE THIS WHEN YOU NEED TO USE THE APP WITH REAL DATA - THIS IS JUST FOR DEMO AND TESTING

let habits = JSON.parse(localStorage.getItem("exec_hq_data")) || defaultHabits; //REMOVE dafaultHabits; AND SET TO [] , THIS IS JUST FOR TESTING.
let timerInterval = null;
let timeLeft = 25 * 60;
let audioCtx = null;
let dragSrcId = null;
let currentDropTarget = null;
let activeFilter = "all";

const quotes = [
  '"Waste no more time arguing what a good man should be. Be one." \u2014 Marcus Aurelius',
  '"You have power over your mind \u2014 not outside events." \u2014 Marcus Aurelius',
  '"If it is not right, do not do it; if it is not true, do not say it." \u2014 Marcus Aurelius',
  '"He who fears death will never do anything worth of a man who is alive." \u2014 Seneca',
  '"Life is long if you know how to use it." \u2014 Seneca',
  '"It is not that I am brave, it is just that I am busy." \u2014 Marcus Aurelius',
  '"Confine yourself to the present." \u2014 Marcus Aurelius',
  '"The impediment to action advances action. What stands in the way becomes the way." \u2014 Marcus Aurelius',
  '"Dwell on the beauty of life. Watch the stars, and see yourself running with them." \u2014 Marcus Aurelius',
  '"The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are." \u2014 Marcus Aurelius',
  '"Begin at once to live, and count each separate day as a separate life." \u2014 Seneca',
  '"We suffer more often in imagination than in reality." \u2014 Seneca',
  '"Luck is what happens when preparation meets opportunity." \u2014 Seneca',
  '"No man was ever wise by chance." \u2014 Seneca',
  '"Retire into yourself as much as possible." \u2014 Seneca',
  '"He suffers more than necessary, who suffers before it is necessary." \u2014 Seneca',
  '"Man is affected not by events but by the view he takes of them." \u2014 Epictetus',
  '"Make the best use of what is in your power, and take the rest as it happens." \u2014 Epictetus',
  '"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has." \u2014 Epictetus',
  '"First say to yourself what you would be; and then do what you have to do." \u2014 Epictetus',
  '"Seek not the good in external things; seek it in yourself." \u2014 Epictetus',
  '"Do not explain your philosophy. Embody it." \u2014 Epictetus',
  '"The two most powerful warriors are patience and time." \u2014 Tolstoy',
  '"Do not wait; the time will never be just right." \u2014 Napoleon Hill',
  '"Discipline is the bridge between goals and accomplishment." \u2014 Jim Rohn',
  '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." \u2014 Aristotle',
  '"You have power over your mind, not outside events. Realize this, and you will find strength." \u2014 Marcus Aurelius',
  '"The quality of your life is determined by the quality of your thoughts." \u2014 Marcus Aurelius',
  '"Waste no time arguing about what a good person should be. Be one." \u2014 Marcus Aurelius',
  '"If it is not right, do not do it. If it is not true, do not say it." \u2014 Marcus Aurelius',
];

// ── AUDIO SYSTEM ─────────────────────────────────────────────
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.AudioContext)();
  return audioCtx;
}

function playHabitCompleteSound() {
  try {
    const ctx = getAudioCtx();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(90, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.3);
    gain1.gain.setValueAtTime(0.18, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(600, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
    gain2.gain.setValueAtTime(0.06, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.4);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

function playDayCompleteSound() {
  try {
    const ctx = getAudioCtx();
    const notes = [110, 138, 165];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.18);
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.18);
      gain.gain.linearRampToValueAtTime(
        0.15,
        ctx.currentTime + i * 0.18 + 0.05,
      );
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + i * 0.18 + 0.6,
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.18);
      osc.stop(ctx.currentTime + i * 0.18 + 0.7);
    });
  } catch (e) {}
}

// ── VISUAL FX ────────────────────────────────────────────────
function launchParticles() {
  const canvas = document.createElement("canvas");
  canvas.id = "particleCanvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    vx: (Math.random() - 0.5) * 1.5,
    vy: -(Math.random() * 3 + 2),
    size: Math.random() * 2 + 0.5,
    color: ["#c5a059", "#ffffff", "#aaaaaa", "#e8d5a3", "#888888"][
      Math.floor(Math.random() * 5)
    ],
    life: 1,
    decay: Math.random() * 0.008 + 0.004,
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach((p) => {
      if (p.life <= 0) return;
      alive = true;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.life -= p.decay;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    if (alive) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}

// ── DATA SYNC & STORAGE ──────────────────────────────────────
function getLocalDateString() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now - offset).toISOString().split("T")[0];
}

function syncRepeatingHabits() {
  const today = getLocalDateString();
  const templates = habits.filter((h) => h.repeat === true);
  const names = [...new Set(templates.map((h) => h.name))];
  names.forEach((n) => {
    if (!habits.find((h) => h.name === n && h.date === today)) {
      const t = [...templates].reverse().find((h) => h.name === n);
      habits.push({
        id: Date.now() + Math.random(),
        name: t.name,
        date: today,
        target: t.target,
        notes: t.notes,
        repeat: true,
        current: 0,
      });
    }
  });
  localStorage.setItem("exec_hq_data", JSON.stringify(habits));
}

function save() {
  localStorage.setItem("exec_hq_data", JSON.stringify(habits));
  render();
  generateHeatmap();
  generateWeekScorecard();
}

function toggleRepeat(id) {
  const h = habits.find((x) => x.id === id);
  if (!h) return;
  h.repeat = !h.repeat;
  save();
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
    case "all":
      return true;
    case "routines":
      return h.repeat === true;
    case "today":
      return h.date === today;
    case "incomplete":
      return h.current < h.target;
    default:
      return true;
  }
}

function applyFilter() {
  const hBody = document.getElementById("habitBody");
  if (!hBody) return;

  const today = getLocalDateString();
  const rows = hBody.querySelectorAll("tr[data-id]");
  const headers = hBody.querySelectorAll("tr:not([data-id])");

  // Hide/show data rows
  let visibleCount = 0;
  rows.forEach((row) => {
    const id = parseFloat(row.dataset.id);
    const h = habits.find((x) => x.id === id);
    if (!h) return;
    const matches = rowMatchesFilter(h, activeFilter);
    row.classList.toggle("filter-hidden", !matches);
    if (matches) visibleCount++;
  });

  // Hide date group headers that have no visible rows beneath them
  headers.forEach((header) => {
    if (!header.querySelector(".date-group-header")) return;
    // Collect all sibling rows until next header
    let sibling = header.nextElementSibling;
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
      emptyRow = document.createElement("tr");
      emptyRow.className = "empty-filter-state";
      const emptyMessages = {
        all: "No missions logged. Begin.",
        routines: "No routines established yet.",
        today: "No missions for today. Deploy.",
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
      all: "all entries",
      routines: "routines",
      today: "today's missions",
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

  let dailyTPoints = 0,
    dailyDPoints = 0,
    dailyTotalTasks = 0,
    dailyCompletedTasks = 0;

  const sorted = habits.sort((a, b) => {
    if (a.date !== b.date) return new Date(b.date) - new Date(a.date);
    return (a.order || 0) - (b.order || 0);
  });

  let lastDate = null;
  let todayHabitsCount = 0;

  sorted.forEach((h) => {
    const p = Math.round((h.current / h.target) * 100);
    const bar =
      "█".repeat(Math.floor(p / 10)) + "░".repeat(10 - Math.floor(p / 10));
    const isNew = Date.now() - h.id < 1000;
    const animClass = isNew ? "new-task-row" : "";

    const row = document.createElement("tr");
    row.className = animClass;
    row.setAttribute("data-id", h.id);
    row.setAttribute("draggable", "false");

    // Logic to handle Routine Tag rendering and toggle
    // We check for 'repeat' property existence. If it was created as a routine, we show the tag.
    const routineStatus = h.repeat ? "" : "disabled";
    const routineTag =
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
        const header = document.createElement("tr");
        const displayDate =
          h.date === today ? "TODAY'S MISSIONS" : h.date.toUpperCase();
        header.innerHTML = `<td colspan="3" class="date-group-header">${displayDate}</td>`;
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
        const header = document.createElement("tr");
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
      rank.innerText = "UNRANKED [0/0]";
      rank.style.color = "var(--dim)";
    } else {
      const score = (dailyDPoints / dailyTPoints) * 100;
      let title = "INITIATE";
      if (score === 100) {
        title = "SOVEREIGN";
        rank.style.color = "var(--gold)";
      } else if (score >= 80) {
        title = "ELITE";
        rank.style.color = "white";
      } else if (score >= 50) {
        title = "OPERATIVE";
        rank.style.color = "white";
      } else {
        rank.style.color = "white";
      }
      rank.innerText = `${title} [${dailyCompletedTasks}/${dailyTotalTasks}]`;
    }
  }

  initDragAndDrop();

  // Re-apply the active filter after render
  applyFilter();
}

// ── DRAG & DROP — MOUSE-BASED (works on file:// with no server) ──
let dragGhost = null;
let dragSourceRow = null;

function activateDrag(e, id) {
  /* no-op — mouse system handles it */
}
function deactivateDrag(e, id) {
  /* no-op */
}

function initDragAndDrop() {
  const handles = document.querySelectorAll("#habitBody .drag-handle");
  handles.forEach((handle) => {
    handle.addEventListener("mousedown", onDragHandleMouseDown);
  });
}

function onDragHandleMouseDown(e) {
  if (e.button !== 0) return;
  e.preventDefault();

  const row = e.currentTarget.closest("tr[data-id]");
  if (!row) return;

  dragSrcId = parseFloat(row.dataset.id);
  dragSourceRow = row;

  // Build floating ghost label
  dragGhost = document.createElement("div");
  dragGhost.id = "drag-ghost";
  dragGhost.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 99999;
            opacity: 0.9;
            background: #0e0e0e;
            border: 1px solid #c5a059;
            box-shadow: 0 0 20px rgba(197,160,89,0.3), 0 4px 30px rgba(0,0,0,0.6);
            padding: 10px 18px;
            font-family: 'Playfair Display', serif;
            font-size: 0.95rem;
            color: #fff;
            letter-spacing: 0.05rem;
            white-space: nowrap;
            transform: rotate(-0.6deg);
        `;
  const h = habits.find((x) => x.id === dragSrcId);
  dragGhost.textContent = h ? h.name : "—";
  document.body.appendChild(dragGhost);

  positionGhost(e);
  row.classList.add("dragging");
  document.body.style.userSelect = "none";
  document.body.style.cursor = "grabbing";

  document.addEventListener("mousemove", onDragMouseMove);
  document.addEventListener("mouseup", onDragMouseUp);
}

function positionGhost(e) {
  if (!dragGhost) return;
  dragGhost.style.left = e.clientX + 16 + "px";
  dragGhost.style.top = e.clientY - 18 + "px";
}

function onDragMouseMove(e) {
  positionGhost(e);

  // Temporarily hide ghost so elementFromPoint works through it
  if (dragGhost) dragGhost.style.display = "none";
  const elBelow = document.elementFromPoint(e.clientX, e.clientY);
  if (dragGhost) dragGhost.style.display = "";

  const targetRow = elBelow ? elBelow.closest("#habitBody tr[data-id]") : null;

  if (!targetRow || parseFloat(targetRow.dataset.id) === dragSrcId) {
    removeDropIndicator();
    return;
  }

  const rect = targetRow.getBoundingClientRect();
  const isUpperHalf = e.clientY < rect.top + rect.height / 2;
  insertDropIndicator(targetRow, isUpperHalf ? "before" : "after");
}

function onDragMouseUp(e) {
  document.removeEventListener("mousemove", onDragMouseMove);
  document.removeEventListener("mouseup", onDragMouseUp);

  document.body.style.userSelect = "";
  document.body.style.cursor = "";

  if (dragGhost) {
    dragGhost.remove();
    dragGhost = null;
  }
  if (dragSourceRow) {
    dragSourceRow.classList.remove("dragging");
    dragSourceRow = null;
  }

  // Read drop position from the indicator row
  const indicator = document.querySelector("tr.drop-indicator-row");
  if (!indicator || dragSrcId === null) {
    removeDropIndicator();
    dragSrcId = null;
    return;
  }

  let targetRow = null;
  let position = "before";
  const next = indicator.nextElementSibling;
  const prev = indicator.previousElementSibling;

  if (next && next.dataset && next.dataset.id) {
    targetRow = next;
    position = "before";
  } else if (prev && prev.dataset && prev.dataset.id) {
    targetRow = prev;
    position = "after";
  }

  removeDropIndicator();

  if (!targetRow) {
    dragSrcId = null;
    return;
  }

  const targetId = parseFloat(targetRow.dataset.id);
  if (targetId === dragSrcId) {
    dragSrcId = null;
    return;
  }

  const srcIdx = habits.findIndex((h) => h.id === dragSrcId);
  const tgtIdx = habits.findIndex((h) => h.id === targetId);
  if (srcIdx === -1 || tgtIdx === -1) {
    dragSrcId = null;
    return;
  }
  if (habits[srcIdx].date !== habits[tgtIdx].date) {
    dragSrcId = null;
    return;
  }

  const droppedId = dragSrcId;
  const [moved] = habits.splice(srcIdx, 1);
  let insertAt = habits.findIndex((h) => h.id === targetId);
  if (position === "after") insertAt += 1;
  habits.splice(insertAt, 0, moved);

  dragSrcId = null;
  localStorage.setItem("exec_hq_data", JSON.stringify(habits));
  render();
  generateHeatmap();
  generateWeekScorecard();

  requestAnimationFrame(() => {
    const landed = document.querySelector(`tr[data-id="${droppedId}"]`);
    if (landed) landed.classList.add("drop-land");
  });
}

function removeDropIndicator() {
  document.querySelectorAll("tr.drop-indicator-row").forEach((r) => r.remove());
}

function clearAllDragState() {
  document.querySelectorAll("tr[data-id]").forEach((r) => {
    r.classList.remove("shift-up", "shift-down", "dragging");
  });
  removeDropIndicator();
  if (dragGhost) {
    dragGhost.remove();
    dragGhost = null;
  }
  document.body.style.userSelect = "";
  document.body.style.cursor = "";
}

function insertDropIndicator(targetRow, position) {
  removeDropIndicator();
  const indicator = document.createElement("tr");
  indicator.className = "drop-indicator-row";
  indicator.innerHTML = '<td colspan="3"></td>';
  if (position === "before") {
    targetRow.parentNode.insertBefore(indicator, targetRow);
  } else {
    targetRow.parentNode.insertBefore(indicator, targetRow.nextSibling);
  }
}

// ── ANALYTICS ───────────────────────────────────────────────
function generateWeekScorecard() {
  const el = document.getElementById("weekScorecard");
  if (!el) return;
  el.innerHTML = "";
  const today = getLocalDateString();
  const todayDate = new Date();
  const dayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(todayDate.getDate() - i);
    const offset = d.getTimezoneOffset() * 60000;
    const ds = new Date(d - offset).toISOString().split("T")[0];
    const label = dayLabels[d.getDay()];
    const isToday = ds === today;

    const dayH = habits.filter((h) => h.date === ds);
    let pct = 0;
    if (dayH.length > 0) {
      pct = Math.round(
        (dayH.reduce((s, h) => s + h.current, 0) /
          dayH.reduce((s, h) => s + h.target, 0)) *
          100,
      );
    }

    let barBg =
      dayH.length === 0
        ? "#111"
        : pct === 100
          ? "#c5a059"
          : pct >= 70
            ? "#555"
            : pct >= 30
              ? "#333"
              : "#1e1e1e";
    const barHeight =
      dayH.length === 0 ? 4 : Math.max(4, Math.round((pct / 100) * 40));

    const col = document.createElement("div");
    col.className = "week-day";
    col.innerHTML = `
                <div class="week-day-pct ${pct === 100 ? "complete" : ""}">${dayH.length > 0 ? pct + "%" : ""}</div>
                <div class="week-day-bar-wrap">
                    <div class="week-day-bar" style="height:${barHeight}px;background:${barBg};${isToday && dayH.length === 0 ? "border:1px solid #2a2a2a;" : ""}"></div>
                </div>
                <div class="week-day-label ${isToday ? "today" : ""}">${label}</div>
            `;
    el.appendChild(col);
  }
}

function generateHeatmap() {
  const el = document.getElementById("heatmap");
  if (!el) return;
  el.innerHTML = "";
  const today = getLocalDateString();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  el.style.gridTemplateColumns = `repeat(${daysInMonth}, 16px)`;

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    const offset = d.getTimezoneOffset() * 60000;
    const ds = new Date(d - offset).toISOString().split("T")[0];
    const isFuture = ds > today;
    const isToday = ds === today;

    const dayH = habits.filter((h) => h.date === ds);
    let p = 0;
    if (dayH.length > 0) {
      p =
        (dayH.reduce((s, h) => s + h.current, 0) /
          dayH.reduce((s, h) => s + h.target, 0)) *
        100;
    }

    const sq = document.createElement("div");
    if (isFuture) {
      sq.className = "heat-square heat-future";
    } else {
      sq.className =
        "heat-square " +
        (p === 0
          ? "heat-0"
          : p < 40
            ? "heat-low"
            : p < 70
              ? "heat-med"
              : p < 100
                ? "heat-high"
                : "heat-100");
      if (isToday) {
        sq.style.outline = "1px solid #666";
        sq.style.outlineOffset = "2px";
      }
    }
    el.appendChild(sq);
  }
}

// ── UTILS & HANDLERS ────────────────────────────────────────
function updateCount(id, amt) {
  const h = habits.find((x) => x.id === id);
  if (!h) return;
  const today = getLocalDateString();
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

    const todayHabits = habits.filter((x) => x.date === today);
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

function toggleTimer() {
  const btn = document.getElementById("timerBtn");
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    btn.innerText = "Resume Session";
  } else {
    btn.innerText = "Pause Session";
    timerInterval = setInterval(() => {
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
  timeLeft = 25 * 60;
  updateTimerDisplay();
  document.getElementById("timerBtn").innerText = "Start Session";
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60),
    s = timeLeft % 60;
  const display = document.getElementById("timerDisplay");
  if (display)
    display.innerText = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function initScrollReveal() {
  const obs = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

function setupEventListeners() {
  const mainGoal = document.getElementById("mainGoal");
  if (mainGoal)
    mainGoal.addEventListener("input", (e) =>
      localStorage.setItem("exec_hq_goal", e.target.value),
    );

  document.getElementById("timerBtn").addEventListener("click", toggleTimer);
  document.getElementById("resetBtn").addEventListener("click", resetTimer);
  document.getElementById("addBtn").addEventListener("click", addHabit);

  ["hName", "hDate", "hTarget", "hNotes"].forEach((id) => {
    const el = document.getElementById(id);
    if (el)
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") addHabit();
      });
  });

  const archiveBtn = document.getElementById("toggleArchive");
  if (archiveBtn)
    archiveBtn.addEventListener("click", () =>
      document.getElementById("archiveSection").classList.toggle("hidden"),
    );

  const aarBtn = document.getElementById("submitAar");
  if (aarBtn)
    aarBtn.addEventListener("click", () => {
      const aarText = document.getElementById("aarText");
      if (!aarText || !aarText.value) return;
      const input = document.getElementById("aarInputContainer");
      const feedback = document.getElementById("aarFeedback");
      const quoteEl = document.getElementById("stoicQuote");
      if (quoteEl)
        quoteEl.innerText = quotes[Math.floor(Math.random() * quotes.length)];

      input.classList.add("fading-out");
      setTimeout(() => {
        input.classList.add("hidden");
        feedback.classList.remove("hidden");
        setTimeout(() => {
          feedback.classList.add("visible");
        }, 50);
      }, 500);
    });

  // Filter pill event listeners
  document.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      setFilter(pill.dataset.filter);
    });
  });
}

function addHabit() {
  const nameEl = document.getElementById("hName");
  const name = nameEl.value.trim();
  const date = document.getElementById("hDate").value;
  const target = parseInt(document.getElementById("hTarget").value) || 1;
  const notes = document.getElementById("hNotes").value;
  const repeat = document.getElementById("hRepeat").checked;

  if (!name || !date) return;

  habits.push({
    id: Date.now(),
    name,
    date,
    target,
    notes: notes || "Analyzing performance...",
    repeat,
    current: 0,
  });
  save();

  nameEl.value = "";
  document.getElementById("hDate").value = getLocalDateString();
  document.getElementById("hNotes").value = "";
  document.getElementById("hRepeat").checked = false;
  nameEl.focus();
}

function injectDragStyles() {
  if (document.getElementById("drag-juice-styles")) return;
  const style = document.createElement("style");
  style.id = "drag-juice-styles";
  style.textContent = `
            #heatmap { overflow: visible !important; padding: 4px 2px 2px 2px; }
            tr[data-id] { transition: transform 150ms cubic-bezier(0.22, 1, 0.36, 1), opacity 150ms ease, background 200ms ease; will-change: transform, opacity; }
            .drag-handle { cursor: grab !important; }
            .drag-handle:active { cursor: grabbing !important; }
            tr.dragging { opacity: 0.2 !important; transform: scale(0.98); background: #111 !important; }
            tr.drop-indicator-row td { padding: 0 !important; height: 0 !important; border: none !important; position: relative; overflow: visible; }
            tr.drop-indicator-row td::after {
                content: ''; display: block; position: absolute; left: 8px; right: 8px; height: 2px;
                background: linear-gradient(90deg, transparent, #c5a059 20%, #e8d5a3 50%, #c5a059 80%, transparent);
                box-shadow: 0 0 6px 1px rgba(197,160,89,0.5), 0 0 14px 3px rgba(197,160,89,0.25);
                border-radius: 2px; animation: dropSlotPulse 750ms ease-in-out infinite alternate;
            }
            @keyframes dropSlotPulse { from { opacity: 0.65; } to { opacity: 1; } }
            tr.shift-down { transform: translateY(8px); }
            tr.shift-up { transform: translateY(-8px); }
            
            /* UPDATED DROP GLOW DURATION */
            tr.drop-land { animation: dropLand 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
            @keyframes dropLand {
                0%   { background: rgba(197, 160, 89, 0.35); transform: scale(1.02); }
                20%  { background: rgba(197, 160, 89, 0.2); transform: scale(1.005); }
                100% { background: transparent; transform: scale(1); }
            }
        `;
  document.head.appendChild(style);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.onload = () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
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
