/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here
  const target = document.getElementById('target');
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();

  if (hours < 17 && min < 30) {
    return (target.innerHTML = 'Hello');
  }
  target.innerHTML = 'Good evening';
})();
