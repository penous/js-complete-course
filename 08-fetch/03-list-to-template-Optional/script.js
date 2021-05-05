/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const list = document.getElementById('target');

  const getData = async (callback) => {
    const data = await fetch('http://localhost:3000/heroes');
    const result = await data.json();
    callback(result);
  };

  document.getElementById('run').onclick = () => {
    getData((data) => {
      const template = document.getElementById('tpl-hero');
      data.forEach((hero) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.name').innerHTML = hero.name;
        clone.querySelector('.alter-ego').innerHTML = hero.alterEgo;
        clone.querySelector('.powers').innerHTML = hero.abilities;
        list.appendChild(clone);
      });
    });
  };
})();
