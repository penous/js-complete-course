/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById('run').addEventListener('click', function () {
    // your code here
    const result = [];
    [...Array(21)].map((_, i) => {
      if (Math.sqrt(i) % 1 === 0) result.push(i);
    });

    alert(result.filter((num) => num != 0));
  });
})();
