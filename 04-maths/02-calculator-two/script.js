/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  var performOperation = function (operation) {
    // perform the operation
    const one = parseInt(document.getElementById('op-one').value);
    const two = parseInt(document.getElementById('op-two').value);

    switch (operation) {
      case 'addition':
        alert(one + two);
        break;
      case 'substraction':
        alert(one - two);
        break;
      case 'multiplication':
        alert(one * two);
        break;
      case 'division':
        alert(one / two);
        break;

      default:
        break;
    }
  };

  Array.from(document.querySelectorAll('button.operator')).forEach(function (
    $btn
  ) {
    $btn.addEventListener('click', function () {
      performOperation($btn.id);
    });
  });
})();
