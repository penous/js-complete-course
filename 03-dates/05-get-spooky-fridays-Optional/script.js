/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
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
    const months = [];
    const year = document.getElementById('year').value;

    [...Array(12)].map((_, i) => {
      const date = new Date(year, i, 13);
      if (date.getDay() == 5)
        months.push(date.toLocaleString('en-GB', { month: 'long' }));
    });

    alert(months);
  });
})();
