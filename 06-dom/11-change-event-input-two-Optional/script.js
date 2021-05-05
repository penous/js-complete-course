/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const pas = document.getElementById('pass-one');
  const val = document.getElementById('validity');

  const check = /^(?=.*?\d.*\d)(?=.*?[A-Za-z])[a-zA-Z0-9]{8}$/g;

  pas.addEventListener('keyup', () => {
    if (pas.value.match(check) != null) {
      val.innerHTML = 'Ok';
    }
  });
})();
