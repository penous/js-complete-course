/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
  const column = document.createElement('tr');
  table.appendChild(column);
  target.appendChild(table);
  [...Array(10)].forEach((_) => {
    const row = document.createElement('td');
    column.appendChild(row);
  });
})();
