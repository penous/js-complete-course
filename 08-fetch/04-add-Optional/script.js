/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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

  function* idGen() {
    i = 5;
    while (true) yield ++i;
  }

  const gen = idGen();

  document.getElementById('run').onclick = () => {
    getData((data) => {
      const hero = {
        id: 0,
        name: '',
        alterEgo: '',
        abilities: [],
      };

      const name = document.getElementById('hero-name').value;
      const alterEgo = document.getElementById('hero-alter-ego').value;
      const powers = document.getElementById('hero-powers').value.split(',');

      hero.id = gen.next().value;
      hero.name = name;
      hero.alterEgo = alterEgo;
      hero.abilities.push(...powers);

      data.push(hero);
      console.log(data);
    });
  };
})();
