/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const text = document.getElementById('target');
  const content = text.textContent;
  text.innerHTML = '';
  let counter = 0;

  for (let i of content) {
    text.innerHTML += `<span  class="fade" style="animation-delay: ${
      counter * 10
    }ms" >${i}</span>`;
    counter++;
  }
})();
