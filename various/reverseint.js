// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//
// function reverseInt(n) {}
//
// module.exports = reverseInt;

// function reverseInt(myNumber) {
//   var numberSign = Math.sign(myNumber);
//   var numberToArray = myNumber.toString().split('');
//   var subArr = [];
//
//   if (numberSign === -1) {
//     for (var i = 1; i <= (numberToArray.length - 1); i++) {
//       subArr.push(numberToArray[i])
//     }
//   } else {
//     for (var i = 0; i <= (numberToArray.length - 1); i++) {
//       subArr.push(numberToArray[i])
//     }
//   }
//
//   subArr = subArr.reverse().join('');
//
//
//   if (numberSign === 1) {
//     return subArr / 1;
//   } else {
//     return subArr / -1;
//   }
// }
//
// console.log(reverseInt(-90));

function reverseInt(n) {
  var reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-500))



