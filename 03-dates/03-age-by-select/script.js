/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const run = document.getElementById('run');

  run.addEventListener('click', () => {
    const day = document.getElementById('dob-day').value;
    const month = document.getElementById('dob-month').value;
    const year = document.getElementById('dob-year').value;
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    let age = currentYear - year;

    if (currentMonth < month) {
      age -= 1;
    } else if (currentMonth == month) {
      if (currentDay < day) {
        console.log('world');
        age -= 1;
      }
    }

    alert(`You are ${age} years of age`);
  });
})();
