/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  document.getElementById('run').addEventListener('click', () => {
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const sum = document.getElementById('sum');
    const avg = document.getElementById('average');

    const arr = [...Array(10)].map(() => Math.floor(Math.random() * 100));
    const actualSum = arr.reduce((a, b) => a + b, 0);

    arr.forEach((num, key) => {
      document.getElementById(`n-${key + 1}`).innerHTML = num;
    });

    min.innerHTML = Math.min(...arr);
    max.innerHTML = Math.max(...arr);
    sum.innerHTML = actualSum;
    avg.innerHTML = actualSum / arr.length;
  });
})();
