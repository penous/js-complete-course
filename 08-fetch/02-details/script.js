/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const list = document.getElementById('target');

  const getData = async (id, callback) => {
    const data = await fetch(`http://localhost:3000/heroes?id=${id}`);
    const result = await data.json();
    callback(result);
  };

  document.getElementById('run').addEventListener('click', () => {
    const hero = document.getElementById('hero-id').value;

    getData(hero, (data) => {
      data = data[0];
      const template = document.getElementById('tpl-hero');
      const clone = template.content.cloneNode(true);
      clone.querySelector('.name').innerHTML = data.name;
      clone.querySelector('.alter-ego').innerHTML = data.alterEgo;
      clone.querySelector('.powers').innerHTML = data.abilities;
      list.appendChild(clone);
    });
  });
})();
