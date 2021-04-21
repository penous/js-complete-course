/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  let state = true;

  while (state) {
    const age = prompt('How old are you?');
    const gender = prompt('What is your gender?');
    const town = prompt('Where are you from?');

    const result = confirm(
      `You are a ${gender} from ${town} and you are ${age} years of age?`
    );

    if (result) state = false;
  }
})();
