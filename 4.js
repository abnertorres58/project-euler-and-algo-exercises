//Project Euler #4
function testIfPalidrome(num) {
  var number = num.toString();
  var halfLength = Math.floor(number.length/2);
  var isPalindrome = false;
  var indEnd = 1;

  for (var j=0; j < halfLength; j++){
    if(number[j] === number[number.length - indEnd]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
    indEnd ++;
  }
  return isPalindrome;
}

var numberA = 100;
var numberB = 999;
var biggestPalindromeProduct = 0;

for (var i = numberA; i <= numberB; i++){
  for (var j = numberA; j <= numberB; j++) {
    if(testIfPalidrome(i*j) === true){
      if(i*j > biggestPalindromeProduct){
        biggestPalindromeProduct = i*j;
      }
    }

  }
}

console.log(biggestPalindromeProduct);
