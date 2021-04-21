/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  function* colorGenerator() {
    var letters = '0123456789ABCDEF';
    while (true) {
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      yield color;
    }
  }

  const generator = colorGenerator();
  const run = document.getElementById('run');

  run.addEventListener('click', () => {
    document.body.style.backgroundColor = generator.next().value;
  });
})();
