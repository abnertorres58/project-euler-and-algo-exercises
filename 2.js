//Project Euler #2

var prev2 = 0
var prev1 = 1;
var current = prev1 + prev2;;
var even = current % 2 == 0;
var sum = 0;

while ( prev2+prev1 < 4000000) {

  current = prev1 + prev2;
  console.log(current);

  even = current % 2 == 0;

  if (even) {
    sum = sum + current;
  }

  prev2 = prev1;
  prev1 = current;

};


console.log("sum = " + sum);
