# EXECUTE HQ
### *Discipline • Focus • Precision*

> A dark luxury productivity OS for people who execute. No fluff. No color. Just discipline.

**[→ Live Demo](https://kishik-k.github.io/EXECUTE-HQ/)**

---

## Screenshots

| Dashboard & 30-Day Momentum | Today's Missions |
|---|---|
| <img width="400" alt="Dashboard" src="https://github.com/user-attachments/assets/ffcc83ea-3750-4bd9-a092-618f0a17d714" /> | <img width="400" alt="Missions" src="https://github.com/user-attachments/assets/47686577-c6ab-49ad-b87f-69f677b9f63b" /> |

| Post-Mission Analysis | Historical Records |
|---|---|
| <img width="400" alt="Analysis" src="https://github.com/user-attachments/assets/f7aab50c-f2e7-4d04-b72f-7d6576651148" /> | <img width="400" alt="Archive" src="https://github.com/user-attachments/assets/f34d9156-0dff-474a-aad2-9f436166b58a" /> |

---

## What It Is

EXECUTE HQ is a personal productivity system built around stoic philosophy and military-grade discipline. It tracks habits, measures daily output, and forces reflection — all wrapped in a dark luxury aesthetic that feels more like a war room than a to-do list.

No accounts. No subscriptions. No cloud. Just you, your missions, and localStorage.

---

## Features

**Habit & Task Engine**
- Add daily or repeating missions with targets, notes, and dates
- Track progress with visual bar indicators and percentage completion
- Drag and drop reordering with a glowing gold drop indicator
- Filter by All, Routines, or Incomplete
- Delete with confirmation — *Terminate mission?*

**Rank System**
- Daily standing updates in real time based on completion
- Ranks: `UNRANKED` → `INITIATE` → `OPERATIVE` → `ELITE` → `SOVEREIGN`
- Hit 100% and trigger particle burst + chord sound + sovereign pulse animation

**30-Day Momentum**
- Weekly bar chart showing daily completion percentages for the last 7 days
- Monthly heatmap showing intensity across every day of the current month
- Color coded from dark to full white at 100%

**Deep Work Timer**
- Built-in 25-minute Pomodoro session timer
- Start, pause, resume, reset controls
- Custom Web Audio API tones on habit completion and full-day completion

**Primary Objective**
- Single bold input for the day's main command
- Persists across sessions via localStorage

**Post-Mission Analysis**
- Daily reflection prompt — *Where did discipline fail today?*
- On submission: fades out and reveals a random stoic quote
- Quote bank from Marcus Aurelius, Seneca, Epictetus, Aristotle

**Historical Records**
- Full archive of all past missions grouped by date
- Collapsible section — stays out of the way until needed

---

## Tech Stack

- **HTML5** — semantic, single-page structure
- **CSS3** — custom properties, keyframe animations, scroll reveal, grain texture
- **Vanilla JavaScript (ES6+)** — zero dependencies, zero frameworks
- **Web Audio API** — procedurally generated completion sounds
- **Canvas API** — particle burst on sovereign completion
- **localStorage** — full persistence, works offline, no backend needed
- **IntersectionObserver** — scroll-triggered reveal animations

---

## Design Philosophy

Everything in EXECUTE HQ is intentional:

- **Playfair Display** for headings — serif weight commands authority
- **Inter** for data — clean, readable, no emotion
- **Gold `#c5a059`** used sparingly — only for what matters
- **No color** elsewhere — discipline has no room for decoration
- Animations that reward, not distract — particles only fire when you've earned it

---

## Getting Started

No installs. No build step. Clone and open.

```bash
git clone https://github.com/Kishik-K/EXECUTE-HQ.git
cd EXECUTE-HQ
```

Open `index.html` in your browser — or use the **[live demo](https://kishik-k.github.io/EXECUTE-HQ/)**.

Data is stored in your browser's localStorage. Private, persistent, yours.

---

## FILE STRUCTURE
EXECUTE-HQ/
├── index.html
├── style.css
└── js/
    ├── data.js      — habits, defaultHabits, quotes, storage
    ├── audio.js     — audio functions
    ├── render.js    — render engine, filter system
    ├── analytics.js — heatmap, week scorecard
    ├── dragdrop.js  — all drag and drop logic
    ├── timer.js     — timer functions
    └── main.js      — window.onload, setupEventListeners, addHabit

---

## Roadmap

- [ ] Backend sync — cross-device data
- [ ] Weekly and monthly summary reports
- [ ] Custom rank titles
- [ ] Mobile PWA support

---

## Author

**Kishik** — [@Kishik-K](https://github.com/Kishik-K)

Built as a personal tool. Deployed because it deserved to be seen.

---

*"Discipline is the bridge between goals and accomplishment." — Jim Rohn*
