/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const getData = async (callback) => {
    const data = await fetch('http://localhost:3000/heroes');
    const result = await data.json();
    callback(result);
  };

  document.getElementById('run').onclick = () => {
    const heroId = parseInt(document.getElementById('hero-id').value);
    getData((data) => {
      for (let [i, hero] of data.entries()) {
        if (hero.id === heroId) {
          data.splice(i, 1);
        }
      }
      console.log(data);
    });
  };
})();
