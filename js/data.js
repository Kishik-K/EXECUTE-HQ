/* --- EXECUTION HQ | DATA & STORAGE --- */

function getDateString(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const offset = d.getTimezoneOffset() * 60000;
  return new Date(d - offset).toISOString().split("T")[0];
} //REMOVE THIS WHEN YOU NEED TO USE THE APP WITH REAL DATA - THIS IS JUST FOR DEMO AND TESTING

const defaultHabits = [
  // TODAY
  { id: 1,  name: "Deep Work",         date: getDateString(0),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 2  },
  { id: 2,  name: "Physical Training", date: getDateString(0),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 3,  name: "Read",              date: getDateString(0),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 12 },

  // YESTERDAY
  { id: 4,  name: "Deep Work",         date: getDateString(1),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 5,  name: "Physical Training", date: getDateString(1),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 6,  name: "Read",              date: getDateString(1),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },

  // 2 DAYS AGO
  { id: 7,  name: "Deep Work",         date: getDateString(2),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 3  },
  { id: 8,  name: "Physical Training", date: getDateString(2),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 0  },
  { id: 9,  name: "Read",              date: getDateString(2),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },

  // 3 DAYS AGO
  { id: 10, name: "Deep Work",         date: getDateString(3),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 11, name: "Physical Training", date: getDateString(3),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 12, name: "Read",              date: getDateString(3),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 20 },

  // 4 DAYS AGO
  { id: 13, name: "Deep Work",         date: getDateString(4),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 2  },
  { id: 14, name: "Physical Training", date: getDateString(4),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 15, name: "Read",              date: getDateString(4),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },

  // 5 DAYS AGO
  { id: 16, name: "Deep Work",         date: getDateString(5),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 17, name: "Physical Training", date: getDateString(5),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 0  },
  { id: 18, name: "Read",              date: getDateString(5),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },

  // 6 DAYS AGO
  { id: 19, name: "Deep Work",         date: getDateString(6),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 3  },
  { id: 20, name: "Physical Training", date: getDateString(6),  target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 21, name: "Read",              date: getDateString(6),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 15 },

  // OLDER — for heatmap colour variety
  { id: 22, name: "Deep Work",         date: getDateString(9),  target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 23, name: "Read",              date: getDateString(9),  target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },
  { id: 24, name: "Deep Work",         date: getDateString(12), target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 2  },
  { id: 25, name: "Physical Training", date: getDateString(12), target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 26, name: "Deep Work",         date: getDateString(15), target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 27, name: "Read",              date: getDateString(15), target: 30, notes: "30 pages minimum.",              repeat: true, current: 30 },
  { id: 28, name: "Physical Training", date: getDateString(18), target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 1  },
  { id: 29, name: "Deep Work",         date: getDateString(18), target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 3  },
  { id: 30, name: "Deep Work",         date: getDateString(22), target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 4  },
  { id: 31, name: "Read",              date: getDateString(22), target: 30, notes: "30 pages minimum.",              repeat: true, current: 20 },
  { id: 32, name: "Physical Training", date: getDateString(25), target: 1,  notes: "Move the body. No excuses.",     repeat: true, current: 0  },
  { id: 33, name: "Deep Work",         date: getDateString(25), target: 4,  notes: "No phone. No noise. Just work.", repeat: true, current: 2  },
]; // REMOVE THIS WHEN YOU NEED TO USE THE APP WITH REAL DATA - THIS IS JUST FOR DEMO AND TESTING

// REMOVE defaultHabits AND SET TO [] WHEN USING REAL DATA
let habits = JSON.parse(localStorage.getItem("exec_hq_data")) || defaultHabits;

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

// ── STORAGE UTILS ─────────────────────────────────────────────

function getLocalDateString() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now - offset).toISOString().split("T")[0];
}

function save() {
  localStorage.setItem("exec_hq_data", JSON.stringify(habits));
  render();
  generateHeatmap();
  generateWeekScorecard();
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

function toggleRepeat(id) {
  const h = habits.find((x) => x.id === id);
  if (!h) return;
  h.repeat = !h.repeat;
  save();
}
