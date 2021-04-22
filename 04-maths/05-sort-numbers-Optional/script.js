/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById('run').addEventListener('click', function () {
    // your code here
    const numbers = document.getElementById('numbers').value;
    const nums = [];
    for (let a of numbers.split(',')) {
      nums.push(parseInt(a));
    }

    alert(nums.sort((a, b) => a - b));
  });
})();
