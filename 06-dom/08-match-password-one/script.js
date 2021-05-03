/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const run = document.getElementById('run');

  const compare = (a, b) => {
    return a === b ? !!1 : !1;
  };

  run.addEventListener('click', () => {
    const pas1 = document.getElementById('pass-one');
    const pas2 = document.getElementById('pass-two');
    const value1 = pas1.value;
    const value2 = pas2.value;

    if (!compare(value1, value2)) {
      pas1.style.borderColor = 'red';
      pas2.style.borderColor = 'red';
    }
  });
})();
