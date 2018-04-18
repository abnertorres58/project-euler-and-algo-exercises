// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  var strArr = str.split('');
  var halfIndex = Math.floor(strArr.length / 2) - 1;
  var completIndex = strArr.length - 1;
  var temp;

  for (var i = 0; i <= halfIndex; i++) {
    temp = strArr[i];
    strArr[i] = strArr[completIndex];
    strArr[completIndex] = temp;
    completIndex--;
  }

  str = strArr.join('');

  return str;
}

console.log(reverse('Greetings!'))