/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const target = document.getElementById('target');
  const table = document.createElement('table');

  [...Array(10)].forEach((_, i) => {
    const tr = document.createElement('tr');
    [...Array(10)].forEach((_, j) => {
      const td = document.createElement('td');
      td.innerHTML = (i + 1) * (j + 1);
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  target.appendChild(table);
})();
