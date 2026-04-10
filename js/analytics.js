/* --- EXECUTION HQ | ANALYTICS --- */

function generateWeekScorecard() {
  const el = document.getElementById("weekScorecard");
  if (!el) return;
  el.innerHTML = "";

  const today     = getLocalDateString();
  const todayDate = new Date();
  const dayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 6; i >= 0; i--) {
    const d      = new Date();
    d.setDate(todayDate.getDate() - i);
    const offset = d.getTimezoneOffset() * 60000;
    const ds     = new Date(d - offset).toISOString().split("T")[0];
    const label  = dayLabels[d.getDay()];
    const isToday = ds === today;

    const dayH = habits.filter((h) => h.date === ds);
    let pct    = 0;
    if (dayH.length > 0) {
      pct = Math.round(
        (dayH.reduce((s, h) => s + h.current, 0) /
          dayH.reduce((s, h) => s + h.target,  0)) * 100,
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

    const barHeight = dayH.length === 0 ? 4 : Math.max(4, Math.round((pct / 100) * 40));

    const col       = document.createElement("div");
    col.className   = "week-day";
    col.innerHTML   = `
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

  const today        = getLocalDateString();
  const now          = new Date();
  const year         = now.getFullYear();
  const month        = now.getMonth();
  const daysInMonth  = new Date(year, month + 1, 0).getDate();

  el.style.gridTemplateColumns = `repeat(${daysInMonth}, 16px)`;

  for (let day = 1; day <= daysInMonth; day++) {
    const d      = new Date(year, month, day);
    const offset = d.getTimezoneOffset() * 60000;
    const ds     = new Date(d - offset).toISOString().split("T")[0];
    const isFuture = ds > today;
    const isToday  = ds === today;

    const dayH = habits.filter((h) => h.date === ds);
    let p      = 0;
    if (dayH.length > 0) {
      p = (dayH.reduce((s, h) => s + h.current, 0) /
           dayH.reduce((s, h) => s + h.target,  0)) * 100;
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
        sq.style.outline       = "1px solid #666";
        sq.style.outlineOffset = "2px";
      }
    }
    el.appendChild(sq);
  }
}
