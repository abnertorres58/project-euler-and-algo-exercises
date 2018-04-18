// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {

  var strArr = str.split('')
  var halfPalInd = Math.floor(strArr.length / 2) - 1;
  var lastIndex = strArr.length - 1;
  var flag = false;

  for (var i = 0; i <= halfPalInd; i++) {
    if (strArr[i] === strArr[lastIndex]) {
      flag = true;
      lastIndex--;
    }
    else {
      flag = false;
      break
    }
  }
  return (flag ? true : false)
}

console.log(palindrome('asdf2sa'))



//console.log(palindrome('anhna'))