export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const daysHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// generate calendar grid
export const generateCalendar = (numDays, startDay) => {
  const weeks = [];
  let currentWeek = [];
  let currentPosition = 0;

  // add empty spaces for days before the month starts
  for (let i = 0; i < startDay; i++) {
    currentWeek.push(null);
    currentPosition++;
  }

  for (let day = 1; day <= numDays; day++) {
    currentWeek.push(day);
    currentPosition++;

    // end week after Saturday
    if (currentPosition % 7 === 0) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  }

  // add the last week of the month
  // do we need this?
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return weeks;
};
