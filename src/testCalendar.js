function printCalendar(numDays, startDay) {
  /**
   * Prints a formatted calendar
   *
   * @params {number} numDays = Number of days in the month (1-31)
   * @params {number} startDay = Day of week the month starts on (0=Sun, 1=Mon)
   */

  // Days of the week header
  const daysHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Print header
  console.log(daysHeader.map((day) => day.padStart(3)).join(" ")); // to right align numbers and day names
  console.log("-".repeat(28));

  // Build calendar as an array of strongs
  let output = [];
  let currentPosition = 0;

  //Add empty spaces for days before the month starts
  for (let i = 0; i < startDay; i++) {
    output.push("   "); // 3 spaces
    currentPosition++;
  }

  // Add the days of the month
  for (let day = 1; day <= numDays; day++) {
    output.push(day.toString().padStart(3));
    currentPosition++;

    // Start new line after Saturday (position 6)
    if (currentPosition % 7 === 0) {
      console.log(output.join(" "));
      output = [];
    }
  }

  // Print remaining days if the month doesn't end of Saturday
  if (output.length > 0) {
    console.log(output.join(" "));
  }
}

printCalendar(31, 5); // 5 = Friday
