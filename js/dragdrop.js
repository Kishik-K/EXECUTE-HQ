/* --- EXECUTION HQ | DRAG & DROP (mouse-based, works on file://) --- */

let dragSrcId        = null;
let dragGhost        = null;
let dragSourceRow    = null;
let currentDropTarget = null;

// ── PUBLIC STUBS (called from inline HTML) ───────────────────

function activateDrag(e, id)   { /* no-op — mouse system handles it */ }
function deactivateDrag(e, id) { /* no-op */ }

// ── INIT ─────────────────────────────────────────────────────

function initDragAndDrop() {
  const handles = document.querySelectorAll("#habitBody .drag-handle");
  handles.forEach((handle) => {
    handle.addEventListener("mousedown", onDragHandleMouseDown);
  });
}

// ── DRAG START ───────────────────────────────────────────────

function onDragHandleMouseDown(e) {
  if (e.button !== 0) return;
  e.preventDefault();

  const row = e.currentTarget.closest("tr[data-id]");
  if (!row) return;

  dragSrcId      = parseFloat(row.dataset.id);
  dragSourceRow  = row;

  // Build floating ghost label
  dragGhost            = document.createElement("div");
  dragGhost.id         = "drag-ghost";
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
  const h            = habits.find((x) => x.id === dragSrcId);
  dragGhost.textContent = h ? h.name : "—";
  document.body.appendChild(dragGhost);

  positionGhost(e);
  row.classList.add("dragging");
  document.body.style.userSelect = "none";
  document.body.style.cursor     = "grabbing";

  document.addEventListener("mousemove", onDragMouseMove);
  document.addEventListener("mouseup",   onDragMouseUp);
}

// ── DRAG MOVE ────────────────────────────────────────────────

function positionGhost(e) {
  if (!dragGhost) return;
  dragGhost.style.left = e.clientX + 16 + "px";
  dragGhost.style.top  = e.clientY - 18 + "px";
}

function onDragMouseMove(e) {
  positionGhost(e);

  // Temporarily hide ghost so elementFromPoint sees through it
  if (dragGhost) dragGhost.style.display = "none";
  const elBelow = document.elementFromPoint(e.clientX, e.clientY);
  if (dragGhost) dragGhost.style.display = "";

  const targetRow = elBelow ? elBelow.closest("#habitBody tr[data-id]") : null;

  if (!targetRow || parseFloat(targetRow.dataset.id) === dragSrcId) {
    removeDropIndicator();
    return;
  }

  const rect        = targetRow.getBoundingClientRect();
  const isUpperHalf = e.clientY < rect.top + rect.height / 2;
  insertDropIndicator(targetRow, isUpperHalf ? "before" : "after");
}

// ── DRAG END ─────────────────────────────────────────────────

function onDragMouseUp(e) {
  document.removeEventListener("mousemove", onDragMouseMove);
  document.removeEventListener("mouseup",   onDragMouseUp);

  document.body.style.userSelect = "";
  document.body.style.cursor     = "";

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
  let position  = "before";
  const next    = indicator.nextElementSibling;
  const prev    = indicator.previousElementSibling;

  if (next && next.dataset && next.dataset.id) {
    targetRow = next;
    position  = "before";
  } else if (prev && prev.dataset && prev.dataset.id) {
    targetRow = prev;
    position  = "after";
  }

  removeDropIndicator();

  if (!targetRow) { dragSrcId = null; return; }

  const targetId = parseFloat(targetRow.dataset.id);
  if (targetId === dragSrcId) { dragSrcId = null; return; }

  const srcIdx = habits.findIndex((h) => h.id === dragSrcId);
  const tgtIdx = habits.findIndex((h) => h.id === targetId);
  if (srcIdx === -1 || tgtIdx === -1) { dragSrcId = null; return; }
  if (habits[srcIdx].date !== habits[tgtIdx].date) { dragSrcId = null; return; }

  const droppedId = dragSrcId;
  const [moved]   = habits.splice(srcIdx, 1);
  let insertAt    = habits.findIndex((h) => h.id === targetId);
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

// ── DROP INDICATOR ───────────────────────────────────────────

function removeDropIndicator() {
  document.querySelectorAll("tr.drop-indicator-row").forEach((r) => r.remove());
}

function insertDropIndicator(targetRow, position) {
  removeDropIndicator();
  const indicator       = document.createElement("tr");
  indicator.className   = "drop-indicator-row";
  indicator.innerHTML   = '<td colspan="3"></td>';
  if (position === "before") {
    targetRow.parentNode.insertBefore(indicator, targetRow);
  } else {
    targetRow.parentNode.insertBefore(indicator, targetRow.nextSibling);
  }
}

// ── CLEANUP ──────────────────────────────────────────────────

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
  document.body.style.cursor     = "";
}

// ── STYLES ───────────────────────────────────────────────────

function injectDragStyles() {
  if (document.getElementById("drag-juice-styles")) return;
  const style     = document.createElement("style");
  style.id        = "drag-juice-styles";
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
    tr.shift-up   { transform: translateY(-8px); }
    tr.drop-land  { animation: dropLand 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
    @keyframes dropLand {
        0%   { background: rgba(197, 160, 89, 0.35); transform: scale(1.02); }
        20%  { background: rgba(197, 160, 89, 0.2);  transform: scale(1.005); }
        100% { background: transparent; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}
